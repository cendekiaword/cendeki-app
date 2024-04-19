import { getCollection } from "../config/mongodb";

import { z } from "zod";

export class StoryModel {
    static collection() {
        return getCollection("story")
    }

    static async getStoryByUser(_id) {
        return await this.collection.find({userId : _id})
    }
    
    static async addStory(text) {
        const result = await this.collection().insertOne(text)
        return result
    }

    static async getStoryById(_id){
        return await this.collection.find({_id})
    }
}
