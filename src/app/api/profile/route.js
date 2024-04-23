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

export async function PATCH(request){
    const idUser = headers().get('x-id-user')
    // console.log('masuk');
    let body = await request.json();
    const { fullname, bio} = body
    const profile = await UserModel.updateProfile({idUser, fullname, bio})
    const data = await UserModel.findProfile(idUser)
    return NextResponse.json({
        status: 201,
        data
    })
    // console.log(profile);
}