import { getCollection } from "../config/mongodb";

import { z } from "zod";

export class StoryModel {
    static collection() {
        return getCollection("story")
    }

    static async getStoryByUser() {
        return await this.collection.find({_id})
    }
    
    static async addStory(text) {
        const result = await this.collection().insertOne(text)
        return result
    }
}
