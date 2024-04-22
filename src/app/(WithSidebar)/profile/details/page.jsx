"use client";
import ProfileNav from "@/components/ProfileNav";
import ProfileTable from "@/components/ProfileTable";
import { BentoGridSecondDemo } from "@/components/page/MyProfile";
import MyProfile from "@/components/page/MyProgress";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

const Page = () => {
  const params = useParams();
  const { pageProfile } = params;
  return (
    <>
      <main className="flex h-[54rem] flex-col items-center bg-white">
        <ProfileNav />
        <div className="h-full grid grid-cols-3 px-5 py-2 w-[70%]">
          <div className=" flex flex-col p-6 px-10 py-8">
            <div className="text-sm text-gray-300 font-semibold">
              My stuff
              <div className="text-gray-600 mt-3">Courses</div>
            </div>
            <div className="mt-10 text-sm text-gray-300 font-semibold">
              My Account
              <div className="mt-3 flex flex-col gap-4 text-gray-600">
                <Link href="/profile/progress">Progress</Link>
                <Link href="/profile/me">Profile</Link>
                <div>Teachers</div>
              </div>
            </div>
          </div>
          <div className="col-span-2 border-l p-6 py-4 flex flex-col gap-3 -mx-10">
            {pageProfile === "me" ? <BentoGridSecondDemo /> : <MyProfile />}
          </div>
        </div>
      </main>
    </>
  );
};

export default Page;
