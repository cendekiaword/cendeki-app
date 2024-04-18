import React from "react";
import ProfileTable from "../ProfileTable";

const MyProfile = () => {
  return (
    <>
      <div className="text-2xl">My Progress</div>
      <div className="text-gray-500">Lastest Activity</div>
      <div className="flex flex-row gap-5">
        <select className="select w-full max-w-[21%] border rounded-lg">
          <option disabled selected>
            Normal
          </option>
          <option>Normal Apple</option>
          <option>Normal Orange</option>
          <option>Normal Tomato</option>
        </select>
        <select className="select w-full max-w-[21%] border rounded-lg">
          <option disabled selected>
            Normal
          </option>
          <option>Normal Apple</option>
          <option>Normal Orange</option>
          <option>Normal Tomato</option>
        </select>
        <select className="select w-full max-w-[21%] border rounded-lg">
          <option disabled selected>
            Normal
          </option>
          <option>Normal Apple</option>
          <option>Normal Orange</option>
          <option>Normal Tomato</option>
        </select>
        <div className="flex flex-row gap-1">
          <div className="text-3xl border-r pr-1 border-black">0</div>
          <div className="flex flex-col text-sm">
            <div>Excercise</div>
            <div>min</div>
          </div>
        </div>
        <div className="flex flex-row gap-1">
          <div className="text-3xl border-r pr-1 border-black">5</div>
          <div className="flex flex-col text-sm">
            <div>Total</div>
            <div>Learning</div>
          </div>
        </div>
      </div>
      <ProfileTable />
    </>
  );
};

export default MyProfile;
