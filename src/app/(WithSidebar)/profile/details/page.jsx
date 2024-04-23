"use client";
import { editProfile, profile } from "@/actions/actions";
import ProfileNav from "@/components/ProfileNav";
import { BentoGridSecondDemo } from "@/components/page/MyProfile";
import MyProfile from "@/components/page/MyProgress";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
// import ProfileTable from "@/components/ProfileTable";
// import { BASE_URL } from "@/db/config/constant";
// import Cookies from "universal-cookie";

const Page = () => {
  const [data, setData] = useState({
    fullname: "",
    email: "",
    age: 0,
  });
  const params = useParams();
  const { pageProfile } = params;

  async function getProfile() {
    let prof = await profile();
    setData(prof);
  }

  useEffect(() => {
    getProfile();
  }, [editProfile]);
  return (
    <>
      <main className="flex h-[54rem] flex-col items-center bg-white">
        <ProfileNav profile={data}/>
        <div className="grid h-full w-[70%] grid-cols-3 px-5 py-2">
          <div className=" flex flex-col p-6 px-10 py-8">
            <div className="text-sm font-semibold text-gray-300">
              My stuff
              <div className="mt-3 text-gray-600">Courses</div>
            </div>
            <div className="mt-10 text-sm font-semibold text-gray-300">
              My Account
              <div className="mt-3 flex flex-col gap-4 text-gray-600">
                <Link href="/profile/progress">Progress</Link>
                <Link href="/profile/me">Profile</Link>
                <div>Teachers</div>
              </div>
            </div>
          </div>
          <div className="col-span-2 -mx-10 flex flex-col gap-3 border-l p-6 py-4">
            {pageProfile === "me" ? <BentoGridSecondDemo /> : <MyProfile />}
          </div>
        </div>
      </main>
    </>
  );
};

export default Page;
