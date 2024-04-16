import { compareTextWithHash } from "@/db/helpers/bcrypt";
import { createToken } from "@/db/helpers/jwt";
import { NextResponse } from "next/server";
import { ZodError, z } from "zod";
import UserModel from "@/db/models/user";

const UserValidation = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(10),
});

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    const validation = UserValidation.safeParse({ email, password });
    if (!validation.success) {
      throw validation.error;
    }

    const dataLogin = await UserModel.getUserByEmail(email);
    if (!dataLogin) {
      return NextResponse.json(
        {
          message: "User Not Found",
        },
        {
          status: 401,
        }
      );
    }

    const validatePassword = compareTextWithHash(password, dataLogin.password);
    if (!validatePassword) {
      return NextResponse.json(
        {
          message: "Invalid Password",
        },
        {
          status: 401,
        }
      );
    }

    const accessToken = createToken({
      _id: dataLogin._id,
      email: dataLogin.email,
    });
    return NextResponse.json(
      {
        message: "Login Success",
        data: {
          accessToken,
        },
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    if (error instanceof ZodError) {
      const errorPath = error.issues[0].path[0];
      const errorMessage = error.issues[0].message;

      return NextResponse.json({
        message: `${errorPath} ${errorMessage}`,
      });
    }

    return NextResponse.json(
      {
        message: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}
