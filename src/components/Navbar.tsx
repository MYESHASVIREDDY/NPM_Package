import React, { useCallback } from "react";
import "../index.css";
import { FaBell } from "react-icons/fa";

type NavbarProps = {};

export const Navbar: React.FC<NavbarProps> = () => {
  const onClick = useCallback(() => {}, []);

  return (
    <>
      <div className="bg-black w-full p-4">
        <div className="max-w-full ">
          <div className="flex justify-between items-center">
            <div className="flex items-center rounded-full">
              <a
                href="#"
                className="text-white text-lg font-semibold "
              >
                Logo
              </a>
            </div>

            <div className="hidden md:flex items-center px-4 py-2">
              <a
                href="#"
                className="text-white hover:bg-gray-700 px-3 py-2 rounded-md"
              >
                Home
              </a>
              <a
                href="#"
                className="text-white hover:bg-gray-700 px-3 py-2 rounded-md"
              >
                About us
              </a>
              <a
                href="#"
                className="text-white hover:bg-gray-700 px-3 py-2 rounded-md"
              >
                MemberShip
              </a>
              <a
                href="#"
                className="text-white hover:bg-gray-700 px-3 py-2 rounded-md"
              >
                Subscribtion
              </a>
              <a
                href="#"
                className="text-white hover:bg-gray-700 px-3 py-2 rounded-md"
              >
                <FaBell />
              </a>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
};
