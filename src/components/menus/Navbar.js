"use client";
import Link from "next/link";
import { useState } from "react";
import Index from "../index/Reg2";
import Tootltip from "../tooltips/Tooltips";
// import Screenshot from "../utils/Screenshot";
// import New from "../utils/New";
import New_Screenshot_Button from "../utils/NewAndScreenshot";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [isGraph, setIsGraph] = useState(true);

  function toggleMenu() {
    setShowMenu(!showMenu);
    setIsGraph(!isGraph);
  }

  return (
    <nav className="flex items-center justify-between px-4 py-6">
      <Tootltip>
        {" "}
        <New_Screenshot_Button />{" "}
      </Tootltip>
      <Link href={isGraph ? "/table" : "/main"}>
        <div
          className="flex justify-end text-3xl font-mono cursor-pointer transform transition duration-500 hover:rotate-90"
          onClick={toggleMenu}
        >
          <div className="pt-2">
            {isGraph ? <span>[index]</span> : <span>[graph]</span>}
          </div>
          {/* <Link href="/table"> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
          {/* </Link> */}
        </div>
      </Link>

      {/* {showMenu && (
        // <div className="fixed right-0 top-0 h-full w-2/3 bg-gray-900"></div>
        <div><Index />
        
        </div>
      )} */}
    </nav>
  );
}
