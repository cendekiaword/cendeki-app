import { getCollection } from "../config/mongodb";
import { z } from "zod";

export class StoryModel {
    static collection() {
        return getCollection("story")
    }
    // static Collection() {
    //     return getCollection("story")
    // }

    static async getStoryByUser(_id) {
        const result = await this.collection().find({userId : _id})
        return result
    }
    
    static async addStory(text) {

        // console.log(text, '<<< ini di model');
        return await this.oldCollection().insertOne({
            fullStory: text.fullStory,
            story: text.story,
            answer: text.answer,
            category: text.category})
     
    }

    static async getStoryById(_id){
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
