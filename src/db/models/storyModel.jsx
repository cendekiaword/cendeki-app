import { getCollection } from "../config/mongodb";
import { z } from "zod";

export class StoryModel {
    static collection() {
        return getCollection("story baru")
    }
    static oldCollection() {
        return getCollection("story")
    }

    static async getStoryByUser(_id) {
        const result = await this.collection().find({userId : _id})
        return result
    }
    
    static async addStory(text) {
        // console.log(text);
        return await this.collection().insertOne({
            fullStory: text.result.fullStory,
            story: text.result.story,
            answer: text.result.answer,
            category: text.result.category})
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
      const cursor = this.oldCollection().aggregate(agg);
      const result = await cursor.toArray();
      // console.log(result);
      return result
    }
}
