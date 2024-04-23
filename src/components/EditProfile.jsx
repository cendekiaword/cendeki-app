"use client";
import { editProfile } from '@/actions/actions';
import { BASE_URL } from '@/db/config/constant';
import React, { useState } from 'react'

const EditProfile = () => {
    const [modal, setModal] = useState("hidden")
    const toggleModal = () => {
        if(modal === "hidden"){
            setModal("")
        }

        if(modal === ""){
            setModal("hidden")
        }
    }

    async function submitAction(formData){
        const fullname = formData.get("fullname");
        const bio = formData.get("bio")
        // console.log(fullname, bio);
        let res = await editProfile({fullname, bio})
        console.log(res);
        
    }
  return (
    
    <>
  {/* Modal toggle */}
  <button
  onClick={() => {
    toggleModal()
  }}
    data-modal-target="crud-modal"
    data-modal-toggle="crud-modal"
    className="bg-white w-36 h-8 flex items-center justify-center rounded-xl text-blue-300"
    type="button"
    id='crud-modal'
  >
    Edit Profile
  </button>
  {/* Main modal */}
  <div
    id="crud-modal"
    tabIndex={-1}
    aria-hidden="true"
    className={modal + " overflow-y-auto overflow-x-hidden fixed z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"}
  >
    <div className="relative p-4 w-full max-w-md max-h-full">
      {/* Modal content */}
      <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
        {/* Modal header */}
        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Edit Basic Info
          </h3>
          <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-toggle="crud-modal"
            onClick={() => {
                toggleModal()
            }}
          >
            <svg
              className="w-3 h-3"
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
          <div className="grid gap-4 mb-4 grid-cols-2">
            <div className="col-span-2">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Fullname
              </label>
              <input
                type="text"
                name="fullname"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type product name"
                required=""
              />
            </div>
            
            <div className="col-span-2">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Bio
              </label>
              <textarea
                id="description"
                rows={4}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write product description here"
                defaultValue={""}
                name='bio'
              />
            </div>
          </div>
          <button
            type="submit"
            className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Edit Profile
          </button>
        </form>
      </div>
    </div>
  </div>
</>

  )
}

export default EditProfile