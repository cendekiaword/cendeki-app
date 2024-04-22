import Link from "next/link";
import React from "react";

export default function Sidebar() {
  return (
    <>
      <div className="sticky left-0 top-0 flex min-h-dvh max-h-dvh max-w-[20dvw] flex-col justify-between shadow-lg shadow-blue-600 md:min-w-[20dvw]">
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
                  <img src="/logo.png" className="size-6" alt="" />
                  <p className="text-lg font-semibold">{el.name}</p>
                </Link>
              );
            })}
          </div>
          <div className="flex items-center gap-2 px-4">
            <img src="/logo.png" className="size-6" alt="" />
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
              <p className="font-bold">John Doe</p>
              <p className="text-gray-500">jd@mail.com</p>
            </div>
          </Link>
          <Link href="/" className="my-4 rounded-md bg-sky-200 py-1 text-center font-bold">
            Log out
          </Link>
        </div>
      </div>
    </>
  );
}

const menus = [
  {
    name: "Category",
    icon: "",
    href: "/lobby",
  },
  {
    name: "Leaderboard",
    icon: "",
    href: "/leaderboard",
  },
  {
    name: "History",
    icon: "",
    href: "/profile/history"
  },
];