"use client";
import { profile } from "@/actions/actions";
import { useAppContext } from "@/context";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Cookies from "universal-cookie";
import { BiCategory } from "react-icons/bi";
import { IoIosBookmarks } from "react-icons/io";
import { MdOutlineBarChart } from "react-icons/md";
import { RxGear } from "react-icons/rx";

export default function Sidebar() {
  // const [dataProfile, setDataProfile] = useState({});
  const router = useRouter();
  const cookies = new Cookies();
  async function logout() {
    let token = cookies.get("Authorization");
    if (!token) {
      return Swal.fire({
        title: "You are not login yet",
        showConfirmButton: false,
        timer: 1500,
        icon: "warning",
      });
    }
    cookies.remove("Authorization");
    return router.push("/");
  }

  const dataProfile = useAppContext();
  // console.log(dataProfile.getProfile);

  return (
    <div>
      <div className="sticky left-0 top-0 flex max-h-dvh min-h-dvh max-w-[20dvw] flex-col justify-between shadow-lg shadow-blue-600 md:min-w-[20dvw]">
        <div>
          <Link href="/" className="my-8 mb-8 flex items-center justify-center">
            <img src="/logo.png" alt="" />
            <h2 className="text-primary text-2xl font-extrabold">Cendekia</h2>
          </Link>
          <p className="mb-4 px-4 text-gray-500">Menu</p>
          <div className="mx-auto mb-8 flex max-w-[90%] flex-col gap-4">
            {menus.map((el, idx) => {
              return (
                <Link
                  href={el.href}
                  key={idx}
                  className="flex items-center gap-2 rounded-md px-3 hover:bg-sky-200"
                >
                  {el.icon}
                  <p className="text-lg font-semibold">{el.name}</p>
                </Link>
              );
            })}
          </div>
          <div className="flex items-center gap-2 px-4">
            <RxGear />
            <p className="text-lg font-semibold">Settings</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 px-4">
          <p>Profile</p>
          <Link href="/profile/details" className="flex items-center gap-2">
            <img
              src="https://images.pexels.com/photos/279360/pexels-photo-279360.jpeg"
              className="size-8 rounded-full object-cover"
              alt=""
            />
            <div>
              <p className="font-bold">{dataProfile?.state?.fullname}</p>
              <p className="text-gray-500">{dataProfile?.state?.email}</p>
            </div>
          </Link>
          <button
            onClick={logout}
            className="my-4 rounded-md bg-sky-200 py-1 text-center font-bold"
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  );
}

const menus = [
  {
    name: "Category",
    icon: <BiCategory />,
    href: "/lobby",
  },
  {
    name: "Leaderboard",
    icon: <MdOutlineBarChart />,
    href: "/leaderboard",
  },
  {
    name: "Previous Journey",
    icon: <IoIosBookmarks />,
    href: "/profile/history",
  },
];
