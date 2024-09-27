import React from "react";

const Profile = () => {
  return (
    <div className="flex w-full h-fit p-2 bg-indigo-400 hover:bg-gray-200">
      <div className="h-12 w-12 bg-orange-700 rounded-full"></div>
      <div className="flex flex-col justify-center items-start pl-3">
        <h3 className="font-semibold text-white">Anurag</h3>
        <p className="text-sm text-gray-500">Hello My Friend</p>
      </div>
    </div>
  );
};

export default Profile;
