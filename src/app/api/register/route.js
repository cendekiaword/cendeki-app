import { UserModel } from "@/db/models/userModel";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

export async function POST(request) {
  try {
    let body = await request.json();
    const age = Number(body.age)
    const checkUserEmail = await UserModel.checkUserEmail(body.email);
    console.log(body, "USER SCHEMA");
    if (checkUserEmail) {
      return NextResponse.json(
        {
          message: "Email already used",
        },
        {
          status: 404,
        }
      );
    }
    
    body.age = age
    
    const result = await UserModel.addUser(body);

    return NextResponse.json({ data: result }, { status: 201 });
  } catch (error) {
    if (error instanceof ZodError) {
      const errPath = error.issues[0].path[0];
      const errMessage = error.issues[0].message;
    } else {
      return NextResponse.json(
        {
          message: "Internal server error",
        },
        {
          status: 500,
        }
      );
    }
  }
}
