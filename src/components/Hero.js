import Image from "next/image";
import React from "react";
import computer_image from "@/assets/SVGs/computer_image.svg";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="px-[10%]  bg-[#F5F7FA] py-[92px]">
      <div className="flex justify-between bg">
        <div className="flex flex-col justify-center">
          <span className="text-[64px] font-semibold text-[#4d4d4d] leading-[76px]">
            Lessons and insights
          </span>
          {/* <br /> */}
          <span className="text-[64px] font-semibold text-green-500 leading-[76px]">
            from 8 years
          </span>
          <p className="py-6">
            Where to grow your business as a photographer: site or social media?
          </p>
          <div>
            <Button>Register</Button>
          </div>
        </div>
        {/* <div className=" w-[40%] h-full"> */}
        <Image
          alt="computer-image"
          height={407}
          width={391}
          src={computer_image}
        />
        {/* </div> */}
      </div>
      <p className="text-[64px] text-center">. . . </p>
    </div>
  );
};

export default Hero;
