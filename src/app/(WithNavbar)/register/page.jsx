"use client";
import { BASE_URL } from "@/db/config/constant";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaApple } from "react-icons/fa";

const Page = () => {
  const router = useRouter();
  async function submitAction(formData) {
    const email = formData.get("email");
    const password = formData.get("password");
    const firstname = formData.get("firstname");
    const lastname = formData.get("lastname");
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
      body: JSON.stringify({ email, password, firstname, lastname, age }),
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
    // cookies.set("Authorization", `Bearer ${result.data.token}`)
    return router.push("/login");
  }
  return (
    <>
      <form
        action={submitAction}
        className="mx-auto flex max-w-[30dvw] flex-col justify-center gap-3"
      >
        <h2 className="text-center text-2xl font-bold">Registration</h2>
        <div className="flex gap-6">
          <div>
            <label>First name</label>
            <input
              type="text"
              placeholder="First name"
              name="firstname"
              className="bg-accent h-12 w-full rounded px-4 placeholder:text-sky-600"
            />
          </div>
          <div>
            <label>Last name</label>
            <input
              type="text"
              placeholder="Last name"
              name="lastname"
              className="bg-accent h-12 w-full rounded px-4 placeholder:text-sky-600"
            />
          </div>
        </div>
        <label>Email</label>
        <input
          type="text"
          placeholder="Enter email"
          name="email"
          className="bg-accent h-12 w-full rounded px-4 placeholder:text-sky-600"
        />
        <label>Age</label>
        <input
          type="text"
          placeholder="Enter Age"
          name="age"
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
        </div>
        <button className="bg-primary h-12 w-full rounded px-4 font-semibold text-white hover:shadow-lg hover:shadow-blue-300">
          Register
        </button>
      </form>
    </>
  );
};

export default Page;
