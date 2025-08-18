import React from 'react'
import { SiStudyverse } from "react-icons/si";

const Logo = ({className}) => {
  return (
    <div className="w-full">
      <div className={`flex text-blue-800 justify-start items-center p-1 ${className}`}>
        <div >
          <SiStudyverse size={"2.3em"} />
        </div>
        <div className="ml-2 flex flex-col justify-center">
          <h1 className="font-black text-xl">Class Hex</h1>
          <h2 className="text-xs font-bold">Study Smarter . Learn Faster</h2>
        </div>
      </div>
    </div>
  );
}

export default Logo