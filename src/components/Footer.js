import React from "react";
import logo from "@/assets/SVGs/log.svg";
import Image from "next/image";
import instagram_icon from "@/assets/SVGs/instagram_icon.svg";
import twitter_icon from "@/assets/SVGs/twitter_icon.svg";
import dribble_icon from "@/assets/SVGs/dribble_icon.svg";
import youtube_icon from "@/assets/SVGs/youtube_icon.svg";
import Link from "next/link";
import { Input } from "./ui/input";

const Footer = () => {
  return (
    <div className="bg-[#263238] flex justify-between py-5 px-[10%]">
      <div className="w-[300px]">
        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <Image src={logo} width={48} height={48} alt="Logo" />
            <h1 className="font-semibold text-[48px]">Nexcent</h1>
          </div>
          <>
            <h1>Copyright 2020 Nexcent ltd.</h1>
            <h1>All rights reserved</h1>
          </>
          <div className="flex gap-3">
            <Image
              alt="youtube_icon"
              src={youtube_icon}
              height={48}
              width={48}
            />
            <Image
              alt="twitter_icon"
              src={twitter_icon}
              height={48}
              width={48}
            />
            <Image
              alt="dribble_icon"
              src={dribble_icon}
              height={48}
              width={48}
            />
            <Image
              alt="instagram_icon"
              src={instagram_icon}
              height={48}
              width={48}
            />
          </div>
        </div>
      </div>
      <div className="flex px-10 gap-10">
        <div>
            <h1>Company</h1>
            <br />
            <ol>
                <li><Link href="">About us</Link></li>
                <li><Link href="">Blog</Link></li>
                <li><Link href="">Contact us</Link></li>
                <li><Link href="">Pricing</Link></li>
                <li><Link href="">Testimonials</Link></li>
            </ol>
        </div>
        <div>
            <h1>Support</h1>
            <br />
            <ol>
                <li><Link href="">Help center</Link></li>
                <li><Link href="">Terms of service</Link></li>
                <li><Link href="">Legal</Link></li>
                <li><Link href="">Privacy Policy</Link></li>
                <li><Link href="">Status</Link></li>
            </ol>
        </div>
        <div>
            <h1>Stay up to date</h1>
            <Input placeholder="Your email address" className="w-[300px] bg-transparent  "/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
