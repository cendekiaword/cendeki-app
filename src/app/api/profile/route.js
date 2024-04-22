import { UserModel } from "@/db/models/userModel";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(){
    const id = headers().get('x-id-user')
    let profile = await UserModel.findProfile(id)
    // console.log(profile);

    return NextResponse.json({
        status: 200,
        data: profile
    })
}