import { ObjectId } from "mongodb";
import { getCollection } from "../config/mongodb";
import { z } from "zod";

export class StoryModel {
  static collection() {
    return getCollection("story");
  }

  static async getStoryByUser(_id) {
    const result = this.collection().find({ userId: _id });
    return result;
  }

  static async addStory(text) {
    console.log(text, "Storymodel");
    return await this.collection().insertOne({
      title: text.title,
      fullStory: text.fullStory,
      story: text.story,
      answer: text.answer,
      category: text.category,
    });
  }

  static async randomFind(category) {
    const agg = [
      {
        $match: {
          category,
        },
      },
      {
        $sample: {
          size: 1,
        },
      },
    ];
    const cursor = this.collection().aggregate(agg);
    const result = await cursor.toArray();
    return result;
  }

  static async getStoryById(id) {
    const _id = new ObjectId(String(id))
    const result = await this.collection().findOne({ _id });
    return result;
  }

  static async getStoryByCategory(category){
    const agg = [
      {
        "$match": {
          "category": category
        }
      },
      {
        "$lookup": {
          "from": "Scores",
          "localField": "_id",
          "foreignField": "storyId",
          "as": "attempts"
        }
      },
      {
        "$unwind": {
          "path": "$attempts",
          "preserveNullAndEmptyArrays": true
        }
      },
      {
        "$sort": {
          "attempts.score": -1
        }
      },
      {
        "$group": {
          "_id": "$_id",
          "fullStory": { "$first": "$fullStory" },
          "story": { "$first": "$story" },
          "answer": { "$first": "$answer" },
          "category": { "$first": "$category" },
          "title": { "$first": "$title" },
          "highestScore": { "$max": "$attempts.score" },
          "highestScorer": { "$first": "$attempts.userId" },
          "attempts": { "$push": "$attempts" }
        }
      },
      {
        "$lookup": {
          "from": "users",
          "localField": "highestScorer",
          "foreignField": "_id",
          "as": "highestScorerData"
        }
      },
      {
        "$addFields": {
          "highestScorer": { "$first": "$highestScorerData.fullname" }
        }
      },
      {
        "$project": {
          "fullStory": 1,
          "story": 1,
          "answer": 1,
          "category": 1,
          "title": 1,
          "highestScore": 1,
          "highestScorer": 1,
          "attempts": 1
        }
      },
      {
        "$sort": {
          "highestScore": -1
        }
      }
    ]
    
    
    const cursor = this.collection().aggregate(agg);
    const result = await cursor.toArray();
    return result;
  }
}
