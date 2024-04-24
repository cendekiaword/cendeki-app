import { UserModel } from "@/db/models/userModel";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(){
    const id = headers().get('x-id-user')
    let profile = await UserModel.findProfile(id)
    return NextResponse.json({
        status: 200,
        data: profile
    })
}

export async function PATCH(request){
    try {
        const idUser = headers().get('x-id-user')
        let body = await request.json();
        const { fullname, bio} = body
        if(!bio){
            await UserModel.updateProfile({idUser, fullname})
        }
        
        if(!fullname){
            await UserModel.updateProfile({idUser, bio})
        }
        if(fullname && bio){
            await UserModel.updateProfile({idUser, fullname, bio})
        }
        
        const data = await UserModel.findProfile(idUser)
        return NextResponse.json({
            status: 201,
            data
        })
    } catch (error) {
        console.log(error);
    }
    // console.log(profile);
}