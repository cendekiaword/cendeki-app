import { signToken } from "@/db/helpers/jwt";
import { UserModel } from "@/db/models/userModel";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

export async function POST(request) {
  try {
    // console.log(request, "BODY");
    const body = await request.json();

    const user = await UserModel.login(body);

    if (user.errorMsg) {
      return NextResponse.json(user);
    }

    const accessToken = signToken({
      _id: user._id,
      email: user.email,
    });

    cookies().set('Authorization', `Bearer ${accessToken}`)

    return NextResponse.json({ accessToken });
  } catch (error) {
    // console.log(error)
    if (error instanceof ZodError) {
      const errPath = error.issues[0].path[0];
      const errMessage = error.issues[0].message;
      return NextResponse.json(
        {
          message: `${errPath} ${errMessage.toLowerCase()}`,
        },
        {
          status: 400,
        }
      );
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
