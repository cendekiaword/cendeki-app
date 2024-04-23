import { ObjectId } from "mongodb";
import { getCollection } from "../config/mongodb";
import { z } from "zod";

export class ScoreModel {
    static collection() {
        return getCollection("Scores")
    }
    // static Collection() {
    //     return getCollection("story")
    // }
    // Get 
    static async getScoreById(_id) {
        const result = await this.collection().find({id : _id})
        return result
    }
    
    static async addScore(text, idUser, storyId) {
        console.log(text,"<<<<<<<<<<<<<<<");
        const userId = new ObjectId(idUser)
        return await this.collection().insertOne({
            // score:text.result.score,
            quizId:storyId,
            playDate:new Date(),
            userId})
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
