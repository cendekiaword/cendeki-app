import { ObjectId } from "mongodb";
import { getCollection } from "../config/mongodb";
import { z } from "zod";

export class ScoreModel {
  static collection() {
    return getCollection("Scores");
  }
  // static Collection() {
  //     return getCollection("story")
  // }
  // Get
  static async getScoreById(_id) {
    const result = await this.collection().find({ id: _id });
    return result;
  }

  static async addScore({ userId, score, storyId, playDate }) {
    // console.log(text,"<<<<<<<<<<<<<<<");
    // console.log(userId, storyId, playDate);
    const idUser = new ObjectId(String(userId));
    const idStory = new ObjectId(String(storyId));
    return await this.collection().insertOne({
      storyId: idStory,
      userId: idUser,
      score,
      playDate,
    });
  }

  static async getScoreById(_id) {
    const result = await this.collection().findOne({ _id });
    return result;
  }

  static async getAllScore() {
    const agg = [
      {
        $group: {
          _id: "$userId",
          totalScore: {
            $sum: "$score",
          },
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "_id",
          foreignField: "_id",
          as: "user",
        },
      },
      {
        $unwind: {
          path: "$user",
        },
      },
      {
        $project: {
          _id: "$_id",
          totalScore: 1,
          user: {
            name: "$user.fullname",
            email: "$user.email",
          },
        },
      },
    ];

    const cursor = this.collection().aggregate(agg);
    const result = await cursor.toArray();
    return result
  }
}
