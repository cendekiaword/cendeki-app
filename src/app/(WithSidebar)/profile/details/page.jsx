"use client";
import { editProfile, profile } from "@/actions/actions";
import ProfileNav from "@/components/ProfileNav";
import { BentoGridSecondDemo } from "@/components/page/MyProfile";
import MyProfile from "@/components/page/MyProgress";
import { useAppContext } from "@/context";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
// import ProfileTable from "@/components/ProfileTable";
// import { BASE_URL } from "@/db/config/constant";
// import Cookies from "universal-cookie";

import ProfileSummary from "@/components/ProfileSummary";
import EditProfile from "@/components/EditProfile";

const Page = () => {
  const [data, setData] = useState({
    fullname: "",
    email: "",
    age: 0,
  });
  const params = useParams();
  const { pageProfile } = params;

  let context = useAppContext();
  let { getProfile, state } = context;

  useEffect(() => {
    getProfile();
  }, [editProfile]);
  // return (
  //   <>
  //     <main className="flex h-[54rem] flex-col items-center bg-white">
  //       <ProfileNav profile={state} getProfile={getProfile} />
  //       <div className="grid h-full w-[70%] grid-cols-3 px-5 py-2">
  //         <div className=" flex flex-col p-6 px-10 py-8">
  //           <div className="text-sm font-semibold text-gray-300">
  //             My stuff
  //             <div className="mt-3 text-gray-600">Courses</div>
  //           </div>
  //           <div className="mt-10 text-sm font-semibold text-gray-300">
  //             My Account
  //             <div className="mt-3 flex flex-col gap-4 text-gray-600">
  //               <Link href="/profile/progress">Progress</Link>
  //               <Link href="/profile/me">Profile</Link>
  //               <div>Teachers</div>
  //             </div>
  //           </div>
  //         </div>
  //         <div className="col-span-2 -mx-10 flex flex-col gap-3 border-l p-6 py-4">
  //           {pageProfile === "me" ? <BentoGridSecondDemo /> : <MyProfile />}
  //         </div>
  //       </div>
  //     </main>
  //   </>
  // );

  return (
    <div className="flex w-full flex-col items-center gap-4 py-16">
      <p className="text-4xl font-bold text-primary">My Profile</p>
      <div
        className="mb-8 flex min-h-[20dvh] w-full max-w-[80%] items-center gap-16 overflow-clip rounded-lg px-8"
        style={{
          backgroundImage: 'url("/autumn.png")',
          maxHeight: "40dvw",
          maxWidth: "80%",
          backgroundSize: "cover",
          position: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <img
          src="https://images.pexels.com/photos/279360/pexels-photo-279360.jpeg"
          className="size-32 rounded-full object-cover"
          alt=""
        />
        <div className="flex max-h-[90%] min-h-[20%] w-[80%] max-w-[80%] rounded-lg bg-white p-6">
          <div className="flex w-[35%] flex-col gap-2">
            <div className="">
              <p className="text-xs font-semibold text-gray-500">Full Name</p>
              <p className="text-lg font-semibold">{state.fullname}</p>
            </div>
            <div className="">
              <p className="text-xs font-semibold text-gray-500">Email</p>
              <p className="text-lg font-semibold">{state.email}</p>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500">Bio</p>
            <p className="text-lg font-semibold">{state.bio}</p>
          </div>
        </div>
      </div>
      <ProfileSummary />
      {/* <button className="bg-primary h-12 w-48 rounded-lg mt-16 text-white text-xl font-bold">Edit Profile</button> */}
      <EditProfile getProfile={getProfile} />
    </div>
  );
};

export default Page;
