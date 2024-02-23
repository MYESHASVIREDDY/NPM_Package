import React from "react";

const googleUrl = "https://www.google.com";

export const Learnmore = () => {
  window.open(googleUrl, "_blank"); // Open Google URL in a new tab
}

export const Moreinfo = () => {
  const onClick = () => {
    Learnmore(); // Call the UserProfile function
  };


  return (
    <button
      onClick={onClick}
      className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-4" 
    >
      More Details
    </button>
  );
};
