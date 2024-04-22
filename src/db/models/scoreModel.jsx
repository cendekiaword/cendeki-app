import { getCollection } from "../config/mongodb";
import { z } from "zod";

export class ScoreModel {
    static collection() {
        return getCollection("score")
    }
    // static Collection() {
    //     return getCollection("story")
    // }
    // Get 
    static async getScoreById(_id) {
        const result = await this.collection().find({id : _id})
        return result
    }
    
    static async addScore(text) {
        console.log(text,"<<<<<<<<<<<<<<<");
        return await this.collection().insertOne({
            score:text.result.score,
            quizId:text.result.quizId,
            playDate:new Date(),
            userId:text.result.userId})
    }

    static async getScoreById(_id){
        const result = await this.collection().findOne({_id})
        return result
    }

    static async randomFind(category){
      const agg = [
        {
          '$match': {
            category
          }
        }, {
          '$sample': {
            'size': 1
          }
        }
      ];
      const cursor = this.Collection().aggregate(agg);
      const result = await cursor.toArray();
      // console.log(result);
      return result
    }
}
