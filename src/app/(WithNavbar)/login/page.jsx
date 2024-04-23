"use client";
import { BASE_URL } from "@/db/config/constant";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaApple } from "react-icons/fa";
import Cookies from "universal-cookie";
import { GoogleButton } from "@/components/GoogleButton";
const Page = () => {
  const cookies = new Cookies()
  const router = useRouter();
  async function submitAction(formData) {
    const email = formData.get("email");
    const password = formData.get("password");
    if (!email) {
      return Swal.fire({
        title: "email required",
        showConfirmButton: false,
        timer: 1500,
        icon: "warning",
      });
    }
    if (!password) {
      return Swal.fire({
        title: "password required",
        showConfirmButton: false,
        timer: 1500,
        icon: "warning",
      });
    }

    let res = await fetch(`${BASE_URL}/api/login`, {
      cache: "no-store",
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await res.json();

    if (!res.ok) {
      return Swal.fire({
        title: "Email/Password is Wrong",
        showConfirmButton: false,
        timer: 1500,
        icon: "warning",
      });
    }

    Swal.fire({
      title: "Login Success",
      showConfirmButton: false,
      timer: 1500,
      icon: "success",
    });
    // console.log(result);
    cookies.set("Authorization", `Bearer ${result.accessToken}`)
    return router.push("/");
  }
  return (
    <>
      <div className="mx-auto grid max-w-[80dvw] grid-cols-2">
        <div className="col-span-1 flex min-h-[60dvh] flex-col  justify-center gap-2">
          <h1 className="text-5xl font-bold leading-normal">
            Cendekia
            <br />
            Learning Platform
          </h1>
          <p className="leading-relaxed">
            If you don't have an account <br />
            You can{" "}
            <Link
              href="/register"
              className="text-primary hover:text-primary font-semibold hover:font-bold"
            >
              register here
            </Link>
          </p>
        </div>
        <div className="col-span-1 flex flex-col gap-8 px-16">
          <h2 className="text-2xl font-semibold">Sign in</h2>
          <form action={submitAction} className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Enter email"
              name="email"
              className="bg-accent h-12 w-full rounded px-4 placeholder:text-sky-600"
            />
            <input
              type="text"
              placeholder="Password"
              name="password"
              className="bg-accent h-12 w-full rounded px-4 placeholder:text-sky-600"
            />
            <p className="text-end text-sm text-gray-500">Forgot password?</p>
            <button className="bg-primary h-12 w-full rounded px-4 font-semibold text-white hover:shadow-lg hover:shadow-blue-300">
              Login
            </button>
          </form>
          <p className="text-center text-gray-500">or continue with</p>
          <div className="flex justify-center gap-8 ">
            <GoogleButton/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
