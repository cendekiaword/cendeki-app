"use client";
import { editProfile, profile } from "@/actions/actions";
import { BASE_URL } from "@/db/config/constant";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const EditProfile = ({ getProfile }) => {
  const [modal, setModal] = useState("hidden");
  const toggleModal = () => {
    if (modal === "hidden") {
      setModal("");
    }

    if (modal === "") {
      setModal("hidden");
    }
  };

  async function submitAction(formData) {
    const fullname = formData.get("fullname");
    const bio = formData.get("bio");
    await editProfile({ fullname, bio });
    return getProfile();
  }

  return (
    <>
      {/* Modal toggle */}
      <button
        onClick={() => {
          toggleModal();
        }}
        data-modal-target="crud-modal"
        data-modal-toggle="crud-modal"
        className="flex h-8 w-36 items-center justify-center rounded-xl bg-white text-blue-300"
        type="button"
        id="crud-modal"
      >
        Edit Profile
      </button>
      {/* Main modal */}
      <div
        id="crud-modal"
        tabIndex={-1}
        aria-hidden="true"
        className={
          modal +
          " fixed z-50 flex h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0"
        }
      >
        <div className="relative max-h-full w-full max-w-md p-4">
          {/* Modal content */}
          <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
            {/* Modal header */}
            <div className="flex items-center justify-between rounded-t border-b p-4 md:p-5 dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Edit Basic Info
              </h3>
              <button
                type="button"
                className="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="crud-modal"
                onClick={() => {
                  toggleModal();
                }}
              >
                <svg
                  className="h-3 w-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* Modal body */}
            <form className="p-4 md:p-5" action={submitAction}>
              <div className="mb-4 grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Fullname
                  </label>
                  <input
                    type="text"
                    name="fullname"
                    id="name"
                    className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                    placeholder="Type product name"
                    required=""
                  />
                </div>

                <div className="col-span-2">
                  <label
                    htmlFor="description"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Bio
                  </label>
                  <textarea
                    id="description"
                    rows={4}
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="Write product description here"
                    defaultValue={""}
                    name="bio"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Edit Profile
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
