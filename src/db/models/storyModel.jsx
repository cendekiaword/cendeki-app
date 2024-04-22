import { getCollection } from "../config/mongodb";

import { z } from "zod";

export class StoryModel {
    static collection() {
        return getCollection("story baru")
    }

    static async getStoryByUser(_id) {
        return await this.collection.find({userId : _id})
    }
    
    static async addStory(category,email,text) {
        const result = await this.collection().insertOne(text)
        return result
    }


// Define a function to fetch stories
static async addStoryByCatmail(category, email,text) {
    try {
        console.log(text,">>>>>>>>>>>>>>>>>>>>>>>>>")
      const stories = await this.collection().findOneAndUpdate(
        { category: category, 'story.email': email },
        { $push: { 'story.$.stories': text.result } },
        { new: true }
      );

      return stories;
    } catch (error) {
      console.error('Error fetching stories:', error);
      return [];
    }
  }

    static async getStoryById(_id){
        const res = await this.collection().findOne({_id})
        return res
    }
}
