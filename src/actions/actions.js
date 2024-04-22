"use server"
import { BASE_URL } from "@/db/config/constant";
import { cookies } from "next/headers";

export async function profile(){
    // console.log(cookies());
    let res = await fetch(`${BASE_URL}/api/profile`, {
      cache: 'no-store',
      headers: {
        Cookie: cookies().toString()
    }
    })
    // console.log(res);
    let result = await res.json()
    // console.log(result);
    return result.data
  }

  // get random story
  export async function getStory(params){
    let res = await fetch(`${BASE_URL}/api/journey?journey=${params}`, {
      cache: 'no-store',
      headers: {
        Cookie: cookies().toString()
      }
    })
     
    let result = await res.json()

    return result.story[0]
  }