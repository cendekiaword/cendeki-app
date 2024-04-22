import { getCollection } from "../config/mongodb";
import { z } from "zod";

export class CategoryModel {
    static collection() {
        return getCollection("category")
    }
    // static Collection() {
    //     return getCollection("story")
    // }
    // Get 
    static async getCategoryById(_id) {
        const result = await this.collection().find({id : _id})
        return result
    }
    
    static async addCategory(text) {
        // console.log(text);
        return await this.collection().insertOne({
            Story:text})
    }

    static async getCategoryById(_id){
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
