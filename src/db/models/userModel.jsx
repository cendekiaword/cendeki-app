import { getCollection } from "../config/mongodb";

import { z } from "zod";
import { hashPassword, verifyPassword } from "../helpers/bcrypt";

// type NewUserInput = Omit<UserType, "_id">

// type InputLogin = {
//   email: string
//   password: string
// }

const AddUserSchema = z.object({
  fullname: z.string(),
  email: z.string().email(),
  password: z.string().min(5).max(10),
  age: z.number(),
});

const LoginUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(5).max(10),
});

export class UserModel {
  static collection() {
    return getCollection("users");
  }

  static async getAllUser() {
    return this.collection().find().toArray();
  }

  static async checkUserEmail(email) {
    const checkEmail = await this.collection().findOne({ email });
    return checkEmail;
  }

  static async addUser(user) {
    const validation = AddUserSchema.safeParse(user);
    if (!validation.success) {
      throw validation.error;
    }

    const result = await this.collection().insertOne({
      ...user,
      password: hashPassword(user.password),
    });
    console.log(result);
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
}
