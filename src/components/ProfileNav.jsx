import React from 'react'
import EditProfile from './EditProfile'

const ProfileNav = ({profile}) => {
  // console.log(profile);
  return (
    <div className="py-5 bg-slate-300 w-full h-40 items-center flex justify-center">
        <div className="flex flex-row items-center justify-center h-full w-[60%]">
          <div className="w-[10%] flex justify-center">
            <img
              src="https://png.pngtree.com/png-clipart/20190120/ourmid/pngtree-cute-ghost-ghostly-cute-ghost-halloween-halloween-ghost-png-image_493761.jpg"
              alt=""
            />
          </div>
          <div className="flex flex-col w-[65%] px-2">
            <div className="text-xl">{profile.fullname}</div>
            <div className="flex flex-row gap-3 text-xs text-gray-400">
              <div>{profile.email}</div>
              <div className="underline ">age: {profile.age}</div>
            </div>
          </div>
          <div className="flex flex-col flex-1 text-end mr-5">
            <div className="flex justify-end">
              {/* <div className="bg-white w-36 h-8 flex items-center justify-center rounded-xl text-blue-300">
                Edit Profile
              </div> */}
              <EditProfile/>
            </div>
            <div className="flex flex-row gap-3 pt-3 w-full justify-end">
              <div className="text-sm">Point</div>
              <div className="w-5 flex flex-row">
                <img
                  src="https://i.pngimg.me/thumb/f/350/freesvgorg171772.jpg"
                  alt=""
                />
              </div>
              <div className="text-xs flex items-center">99</div>
              <div className="w-5 flex flex-row">
                <img
                  src="https://i.pngimg.me/thumb/f/350/freesvgorg171773.jpg"
                  alt=""
                />
              </div>
              <div className="text-xs flex items-center">99</div>
              <div className="w-5 flex flex-row">
                <img
                  src="https://i.pngimg.me/thumb/f/720/freesvgorg171777.jpg"
                  alt=""
                />
              </div>
              <div className="text-xs flex items-center">99</div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ProfileNav