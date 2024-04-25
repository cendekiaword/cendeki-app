"use client";
import { editProfile } from "@/actions/actions";
import { useAppContext } from "@/context";
import React, { useEffect } from "react";

import ProfileSummary from "@/components/ProfileSummary";
import EditProfile from "@/components/EditProfile";

const Page = () => {
  let context = useAppContext();
  let { getProfile, state } = context;

  useEffect(() => {
    getProfile();
  }, [editProfile]);

  return (
    <div className="flex w-full flex-col items-center gap-4 py-16">
      <p className="text-primary text-4xl font-bold">My Profile</p>
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
      <EditProfile getProfile={getProfile} />
    </div>
  );
};

export default Page;
