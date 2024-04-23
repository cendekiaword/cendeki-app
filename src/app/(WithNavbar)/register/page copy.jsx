"use client";
import { BASE_URL } from "@/db/config/constant";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { Vortex } from "../../../components/ui/vortex";

const Page = () => {
  const router = useRouter();
  async function submitAction(formData) {
    const email = formData.get("email");
    const password = formData.get("password");
    const fullname = formData.get("fullname");
    const age = formData.get("age");
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

    let res = await fetch(`${BASE_URL}/api/register`, {
      cache: "no-store",
      method: "POST",
      body: JSON.stringify({ email, password, fullname, age }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // await res.json();

    if (!res.ok) {
      return Swal.fire({
        title: "Email sudah digunakan",
        showConfirmButton: false,
        timer: 1500,
        icon: "warning",
      });
    }

    Swal.fire({
      title: "berhasil register",
      showConfirmButton: false,
      timer: 1500,
      icon: "success",
    });
    // cookies.set("Authorization", `Bearer ${result.data.token}`)
    return router.push("/login");
  }
  return (
    <>
      {/* component */}
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n  .login_img_section {\n  background: linear-gradient(rgba(0,0,0,.0),rgba(0,0,0,.0)),url(https://unblast.com/wp-content/uploads/2022/11/Girl-Working-From-Home-Illustration.jpg) center center;\n}\n",
        }}
      />
      {/* Input Component */}
      <div className="h-[55.6rem] flex ">
        <div
          className="hidden lg:flex w-full lg:w-1/2 login_img_section
    justify-around items-center"></div>

        <div className="flex w-full lg:w-1/2 justify-center items-center bg-white border-l space-y-8">
          <>
            {/* component */}
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <link
              rel="stylesheet"
              href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
              integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
              crossOrigin="anonymous"
            />
            <div className="flex flex-col items-center justify-center w-full">
              <div
                className="
    flex flex-col
    px-8
    sm:px-6
    md:px-8
    lg:px-10
    py-8
    w-full
  ">
                <div className="self-center text-xl sm:text-3xl text-gray-800 font-semibold">
                  Join us Now
                </div>
                <div className="mt-4 self-center text-xl sm:text-sm text-gray-800">
                  Enter your credentials to get access account
                </div>
                <div className="mt-10">
                  <form action={submitAction}>
                    <div className="flex flex-col mb-5">
                      <label
                        htmlFor="email"
                        className="mb-1 text-xs tracking-wide text-gray-600">
                        Fullname:
                      </label>
                      <div className="relative">
                        <div
                          className="
              inline-flex
              items-center
              justify-center
              absolute
              left-0
              top-0
              h-full
              w-10
              text-gray-400
            ">
                          <i className="fas fa-user text-purple-500" />
                        </div>
                        <input
                          id="email"
                          type="text"
                          name="fullname"
                          className="
              text-sm
              placeholder-gray-500
              pl-10
              pr-4
              rounded-2xl
              border border-gray-400
              w-full
              py-2
              focus:outline-none focus:border-blue-400
            "
                          placeholder="Enter your Fullname"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col mb-5">
                      <label
                        htmlFor="email"
                        className="mb-1 text-xs tracking-wide text-gray-600">
                        Age:
                      </label>
                      <div className="relative">
                        <div
                          className="
              inline-flex
              items-center
              justify-center
              absolute
              left-0
              top-0
              h-full
              w-10
              text-gray-400
            ">
                          <i className="fas fa-child text-purple-500" />
                        </div>
                        <input
                          id="email"
                          type="number"
                          name="age"
                          className="
              text-sm
              placeholder-gray-500
              pl-10
              pr-4
              rounded-2xl
              border border-gray-400
              w-full
              py-2
              focus:outline-none focus:border-blue-400
            "
                          placeholder="Enter your age"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col mb-5">
                      <label
                        htmlFor="email"
                        className="mb-1 text-xs tracking-wide text-gray-600">
                        E-Mail Address:
                      </label>
                      <div className="relative">
                        <div
                          className="
              inline-flex
              items-center
              justify-center
              absolute
              left-0
              top-0
              h-full
              w-10
              text-gray-400
            ">
                          <i className="fas fa-at text-purple-500" />
                        </div>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          className="
              text-sm
              placeholder-gray-500
              pl-10
              pr-4
              rounded-2xl
              border border-gray-400
              w-full
              py-2
              focus:outline-none focus:border-blue-400
            "
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col mb-6">
                      <label
                        htmlFor="password"
                        className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">
                        Password:
                      </label>
                      <div className="relative">
                        <div
                          className="
              inline-flex
              items-center
              justify-center
              absolute
              left-0
              top-0
              h-full
              w-10
              text-gray-400
            ">
                          <span>
                            <i className="fas fa-lock text-purple-500" />
                          </span>
                        </div>
                        <input
                          id="password"
                          type="password"
                          name="password"
                          className="
              text-sm
              placeholder-gray-500
              pl-10
              pr-4
              rounded-2xl
              border border-gray-400
              w-full
              py-2
              focus:outline-none focus:border-blue-400
            "
                          placeholder="Enter your password"
                        />
                      </div>
                    </div>
                    <div className="flex w-full">
                      <button
                        type="submit"
                        className="block w-full bg-indigo-600 mt-7 py-2 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2">
                        Sign up
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="flex justify-center items-center mt-6">
                <a
                  href="#"
                  target="_blank"
                  className="
      inline-flex
      items-center
      text-gray-700
      font-medium
      text-xs text-center
    ">
                  <span className="ml-2">You have an account?</span>
                </a>
                <Link
                  href="/login"
                  className="text-xs ml-2 text-purple-500 font-semibold">
                  Login here
                </Link>
              </div>
            </div>
          </>
        </div>
      </div>
    </>
  );
};

export default Page;
