"use client";
import { BASE_URL } from "@/db/config/constant";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Swal from "sweetalert2";

const Page = () => {
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
        icon: 'success'
    })
    // cookies.set("Authorization", `Bearer ${result.data.token}`)
    return router.push("/");
  }
  return (
    <>
      {/* component */}
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n  .login_img_section {\n  background: linear-gradient(rgba(0,0,0,.0),rgba(0,0,0,.0)),url(https://unblast.com/wp-content/uploads/2020/03/Illustrator-Vector-Illustration-1.jpg) center center;\n}\n",
        }}
      />
      {/* Input Component */}
      <div className="flex min-h-[55.6rem]">
        <div
          className="login_img_section hidden w-full items-center justify-around
    lg:flex lg:w-1/2"
        ></div>

        <div className="flex w-full items-center justify-center space-y-8 border-l bg-white lg:w-1/2">
          <div className="w-full px-8 md:px-32 lg:px-24">
            <form action={submitAction}>
              <h1 className="mb-1 text-2xl font-bold text-gray-800">
                Welcome Back!
              </h1>
              <div className="mb-8 text-sm font-normal text-gray-600">
                Don't have an account?{" "}
                <Link href="/register" className="underline">
                  Sign Up
                </Link>
              </div>
              <div>Email</div>
              <div className="mb-8 mt-2 flex items-center rounded-2xl border-2 px-3 py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
                <input
                  id="email"
                  className=" w-full border-none pl-2 outline-none"
                  type="email"
                  name="email"
                  placeholder="Email Address"
                />
              </div>
              <div>Password</div>
              <div className="mb-12 mt-2 flex items-center rounded-2xl border-2 px-3 py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  className="w-full border-none pl-2 outline-none"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                />
              </div>
              <div className="flex flex-row justify-between px-2">
                <div className="flex items-center">
                  <input type="radio" className="h-5 w-5" />{" "}
                  <a className="ml-1 text-sm">Remember Me</a>
                </div>
                <div className="text-sm text-purple-400">Forget Password?</div>
              </div>
              <button
                type="submit"
                className="mb-2 mt-7 block w-full rounded-2xl bg-indigo-600 py-2 font-semibold text-white transition-all duration-500 hover:-translate-y-1 hover:bg-indigo-700"
              >
                Sign in
              </button>
            </form>
            <div className="mt-10 flex items-center justify-center">
              <span className="w-[30%] border "></span>
              <span className="px-4 text-sm text-slate-500">
                or continue with
              </span>
              <span className="w-[30%] border "></span>
            </div>
            <div className="mt-10 flex flex-row justify-around">
              <div className="flex h-14 w-20 items-center justify-center rounded-lg border">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
                  className="h-10 w-10"
                />
              </div>
              <div className="flex h-14 w-20 items-center justify-center rounded-lg border">
                <img
                  src="https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-Blue-Logo.wine.svg"
                  className="h-14 w-14"
                />
              </div>
              <div className="flex h-14 w-20 items-center justify-center rounded-lg border">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png"
                  className="w-7"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
