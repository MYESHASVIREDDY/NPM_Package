import React from "react";
import { FaUser } from "react-icons/fa";

const googleUrl = "https://www.google.com";

export const UserProfile = () => {
window.open(googleUrl, "_blank"); // Open Google URL in a new tab
  
}

export const Profile = () => {
  const onClick = () => {
    UserProfile(); // Call the UserProfile function
  };
  

  return (
    <button
      onClick={onClick}
      className="flex-justify-center items-center bg-black hover:bg-gray-700 text-white font-bold py-4 px-6 mt-4 rounded cursor-pointer"
    >
      <FaUser />
    </button>
  );
};





