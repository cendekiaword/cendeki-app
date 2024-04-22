import { getCollection } from "../config/mongodb";

import { z } from "zod";

export class StoryModel {
    static collection() {
        return getCollection("story")
    }

    static async getStoryByUser(_id) {
        const result = await this.collection().find({userId : _id})
        return result
    }
    
    static async addStory(text) {
        const result = await this.collection().insertOne(text)
        return result
    }

    static async getStoryById(_id){
        const result = await this.collection().findOne({_id})
        return result
    }
}
