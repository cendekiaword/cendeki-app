import { getCollection } from "../config/mongodb";

import { z } from "zod";
import { hashPassword, verifyPassword } from "../helpers/bcrypt";
import { ObjectId } from "mongodb";

// type NewUserInput = Omit<UserType, "_id">

// type InputLogin = {
//   email: string
//   password: string
// }

const AddUserSchema = z.object({
  fullname: z.string(),
  email: z.string().email(),
  password: z.string().min(5),
  age: z.number(),
});


const LoginUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(5),
});

export class UserModel {
  static collection() {
    return getCollection("users");
  }

  static async getAllUser() {
    return this.collection().find().toArray();
  }

  static async getUser(_id) {
    const user = await this.collection().findOne({ _id });
    return user;
  }

  static async checkUserEmail(email) {
    const checkEmail = await this.collection().findOne({ email });
    return checkEmail;
  }

  static async addUser(user) {
    const validation = AddUserSchema.safeParse(user);
    if (!validation.success) {
      console.log(validation);
      throw validation.error;
    }
    
    const result = await this.collection().insertOne({
      ...user,
      password: hashPassword(user.password),
    });
    return {
      _id: result.insertedId,
      ...user,
    };
  }

  static async login(user) {
    const validation = LoginUserSchema.safeParse(user);
    if (!validation.success) {
      throw validation.error;
    }

    const emailFound = await this.checkUserEmail(user.email);

    if (!emailFound) {
      return {
        errorMsg: "Email / password is wrong",
      };
    }

    const userFound = verifyPassword(user.password, emailFound.password);

    if (!userFound) {
      return {
        errorMsg: "Email / password is wrong",
      };
    }

    return emailFound;
  }

  static async findProfile(idUser) {
    let id = new ObjectId(String(idUser));
    const agg = [
      {
        $match: {
          _id: id,
        },
      },
      {
        $lookup: {
          from: "Scores",
          localField: "_id",
          foreignField: "userId",
          as: "historyId",
        },
      },
      {
        $lookup: {
          from: "story",
          localField: "historyId.storyId",
          foreignField: "_id",
          as: "history",
        },
      },
      {
        $addFields: {
          history: {
            $map: {
              input: "$history",
              as: "h",
              in: {
                $mergeObjects: [
                  "$$h",
                  {
                    $arrayElemAt: [
                      {
                        $filter: {
                          input: "$historyId",
                          cond: {
                            $eq: ["$$this.storyId", "$$h._id"],
                          },
                        },
                      },
                      0,
                    ],
                  },
                ],
              },
            },
          },
        },
      },
      {
        $addFields: {
          highestScore: {
            $max: "$historyId.score" // Calculate the maximum score from historyId array
          }
        }
      },
      {
        $addFields: {
          totalScore: { $sum: "$history.score" } // Calculate the total score
        }
      }

    ];
    const cursor = this.collection().aggregate(agg);
    const result = await cursor.toArray();
    // console.log(result);
    return result[0];
  }

  static async updateProfile({ idUser, fullname, bio }) {
    const id = new ObjectId(String(idUser));
    if(!fullname){
      const res = await this.collection().updateOne(
        { _id: id },
        { $set: { bio: bio } },
      );
      return res;
    }

    if(!bio){
      const res = await this.collection().updateOne(
        { _id: id },
        { $set: { fullname } },
      );
      return res;
    }

    if(bio && fullname){
      const res = await this.collection().updateOne(
        { _id: id },
        { $set: { fullname: fullname, bio: bio } },
      );
      return res;
    }
  }

  static async googleLogin(data) {
    const user = await this.collection().findOne({ email: data.email })
    if (!user) {
      console.log(data);
      return await this.addUser(data)
    }
    return user
  }
}
