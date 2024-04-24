"use client";
import { BASE_URL } from "@/db/config/constant";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaApple } from "react-icons/fa";
import { GoogleButton } from "@/components/GoogleButton";

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
    return router.push("/login");
  }
  return (
    <>
      <div className="mx-auto flex max-w-[30dvw] flex-col justify-center gap-3">
        <h2 className="text-center text-2xl font-bold">Registration</h2>
        <form action={submitAction} className="flex flex-col gap-3">
          <label>Full name</label>
          <input
            type="text"
            placeholder="First name"
            name="fullname"
            className="bg-accent h-12 w-full rounded px-4 placeholder:text-sky-600"
          />
          <label>Email</label>
          <input
            type="text"
            placeholder="Enter email"
            name="email"
            className="bg-accent h-12 w-full rounded px-4 placeholder:text-sky-600"
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="bg-accent h-12 w-full rounded px-4 placeholder:text-sky-600"
          />
          <div className="my-3 text-sm text-gray-500">
            <input type="checkbox" className="me-2" />
            You agree to our friendly{" "}
            <span className="cursor-pointer underline hover:font-semibold">
              privacy policy
            </span>
            <div>
              Already have an account?{" "}
              <Link href={"/login"} className="text-blue-500 underline hover:font-semibold">Back to Login</Link>
            </div>
          </div>
          <button
            className="bg-primary h-12 w-full rounded px-4 font-semibold text-white hover:shadow-lg hover:shadow-blue-300"
            type="submit"
          >
            Register
          </button>
        </form>
        <div className="flex w-full justify-center">Or Register With</div>
        <GoogleButton />
      </div>
    </>
  );
};

export default Page;
