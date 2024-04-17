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
    // console.log(email, password);
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

    await res.json();

    if (!res.ok) {
      return Swal.fire({
        title: "Email/Password Login",
        showConfirmButton: false,
        timer: 1500,
        icon: "warning",
      });
    }

     Swal.fire({
        title: "berhasil login",
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
      <div className="h-screen flex">
        <div
          className="hidden lg:flex w-full lg:w-1/2 login_img_section
    justify-around items-center"></div>

        <div className="flex w-full lg:w-1/2 justify-center items-center bg-white border-l space-y-8">
          <div className="w-full px-8 md:px-32 lg:px-24">
            <form action={submitAction}>
              <h1 className="text-gray-800 font-bold text-2xl mb-1">
                Welcome Back!
              </h1>
              <div className="text-sm font-normal text-gray-600 mb-8">
                Don't have an account? <Link href='/register' className="underline">Sign Up</Link>
              </div>
              <div>Email</div>
              <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
                <input
                  id="email"
                  className=" pl-2 w-full outline-none border-none"
                  type="email"
                  name="email"
                  placeholder="Email Address"
                />
              </div>
              <div>Password</div>
              <div className="flex items-center border-2 mb-12 py-2 px-3 rounded-2xl mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  className="pl-2 w-full outline-none border-none"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                />
              </div>
              <div className="flex flex-row justify-between px-2">
                <div className="flex items-center">
                  <input type="radio" className="h-5 w-5" />{" "}
                  <a className="text-sm ml-1">Remember Me</a>
                </div>
                <div className="text-sm text-purple-400">Forget Password?</div>
              </div>
              <button
                type="submit"
                className="block w-full bg-indigo-600 mt-7 py-2 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2">
                Sign in
              </button>
            </form>
            <div className="flex justify-center items-center mt-10">
              <span className="w-[30%] border "></span>
              <span className="px-4 text-sm text-slate-500">
                or continue with
              </span>
              <span className="w-[30%] border "></span>
            </div>
            <div className="flex flex-row justify-around mt-10">
              <div className="border w-20 rounded-lg flex justify-center items-center h-14">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
                  className="w-10 h-10"
                />
              </div>
              <div className="border w-20 rounded-lg flex justify-center items-center h-14">
                <img
                  src="https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-Blue-Logo.wine.svg"
                  className="w-14 h-14"
                />
              </div>
              <div className="border w-20 rounded-lg flex justify-center items-center h-14">
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
