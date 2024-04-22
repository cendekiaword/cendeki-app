import { signToken } from "@/db/helpers/jwt";
import { UserModel } from "@/db/models/userModel";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

export async function POST(request) {
  try {
    const body = await request.json();

    const user = await UserModel.login(body);

    if (user.errorMsg) {
      return NextResponse.json(user);
    }

    console.log(user);
    const accessToken = signToken({
      _id: user._id,
      email: user.email,
    });

    return NextResponse.json({ accessToken });
  } catch (error) {
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
