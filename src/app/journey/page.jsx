import React from "react";

const Page = () => {
  return (
    <>
      <div className="flex min-h-[55.7rem] flex-col items-center justify-center bg-sky-300">
        <p className="mb-8 text-lg font-bold">Choose an option:</p>
        <div className="grid grid-cols-1 gap-8 px-7 md:grid-cols-3">
          <div className="relative rounded-lg bg-slate-200 p-6 shadow-md ">
            <h2 className="mb-4 text-xl font-bold invert-0">New Journey</h2>
            <p className="text-gray-700">Adventure Awaits</p>
            <img
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="h-80"
            />
          </div>
          <div className="relative rounded-lg bg-slate-200 p-6 shadow-md ">
            <h2 className="mb-4 text-xl font-bold invert-0">
              Developer Curated Journey
            </h2>
            <p className="text-gray-700">Customized Learning Paths</p>
            <img
              src="https://t3.ftcdn.net/jpg/06/48/45/94/360_F_648459474_YMdulMPHw3Wfy56XOtZt6a5YbOaWLMBH.jpg"
              className="h-80"
            />
          </div>
          <div className="relative rounded-lg bg-slate-200 p-6 shadow-md ">
            <h2 className="mb-4 text-xl font-bold invert-0">
              Existing Journey
            </h2>
            <p className="text-gray-700">Continue Your Path</p>
            <img
              src="https://images2.alphacoders.com/967/96730.jpg"
              className="h-80"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
