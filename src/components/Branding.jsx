import React from "react";

export default function Branding() {
  return (
    <>
      <div className="flex min-h-dvh w-full flex-col justify-between bg-orange-300">
        <h1 className="mt-5 h-20 text-center font-sans text-4xl">
          Awesome team behind the code
        </h1>
        <div className="flex justify-evenly">
          <div className="flex h-72 w-[20%] flex-col items-center justify-around rounded-xl border">
            <p className="text-md text-center">Raihan Yumna</p>
            <img
              src="https://images.pexels.com/photos/397857/pexels-photo-397857.jpeg"
              className="size-40 rounded-full object-cover"
              alt=""
            />
            <p>Back-end Team</p>
          </div>
          <div className="flex h-72 w-[20%] flex-col items-center justify-around rounded-xl border">
            <p className="text-md text-center">Bayu Prasetya Utomo</p>
            <img
              src="https://images.pexels.com/photos/279360/pexels-photo-279360.jpeg"
              className="size-40 rounded-full object-cover"
              alt=""
            />
            <p>Front-end Team</p>
          </div>
          <div className="flex h-72 w-[20%] flex-col items-center justify-around rounded-xl border">
            <p className="text-md text-center">Derio Anjaya</p>
            <img
              src="https://images.pexels.com/photos/1564839/pexels-photo-1564839.jpeg"
              className="size-40 rounded-full object-cover"
              alt=""
            />
            <p>Back-end Team</p>
          </div>
          <div className="flex h-72 w-[20%] flex-col items-center justify-around rounded-xl border">
            <p className="text-md text-center">Galih Aditya M</p>
            <img
              src="https://images.pexels.com/photos/598966/pexels-photo-598966.jpeg"
              className="size-40 rounded-full object-cover"
              alt=""
            />
            <p>Front-end Team</p>
          </div>
        </div>
        <div className="mb-5 flex min-h-[20dvh] min-w-[90dvw] max-w-[90dvw] self-center rounded-lg border px-5 py-2">
          <h1 className="text-4xl">Tech stack</h1>
        </div>
      </div>
    </>
  );
}
