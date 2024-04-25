"use client";
import { BASE_URL } from "@/db/config/constant";
import React from "react";
import Swal from "sweetalert2";
import Cookies from "universal-cookie";

const ButtonTryAgain = ({ id }) => {
  const cookies = new Cookies();
  const handleSubmit = async () => {
    let res = await fetch(`${BASE_URL}/api/journey/retry?storyId=${id}`, {
      method: "GET",
      cache: "no-store",
      headers: {
        Cookie: cookies.toString(),
      },
    });

    if (!res.ok) {
      return Swal.fire({
        title: "Story not Found",
        showConfirmButton: false,
        timer: 1500,
        icon: "warning",
      });
    }

    const result = await res.json()
    console.log(result);
  };
  return (
    <>
      <button className="border-primary h-10 rounded-md border hover:shadow hover:shadow-sky-500"
      onClick={handleSubmit}>
        Try Again
      </button>
    </>
  );
};

export default ButtonTryAgain;
