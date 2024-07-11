import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
 
const Header = ({ blok }:any) => (
  <div className="flex justify-between items-center" {...storyblokEditable(blok)}>
    <div className="relative size-[80px]">
        <Image src={blok.image.filename} alt="logo" fill className="object-contain" />
    </div>
    <div className="flex space-x-4">
        <p>{blok.linkedIn}</p>
        <p>{blok.github}</p>
        <p>{blok.twitter}</p>
        <p>{blok.instagram}</p>
    </div>
  </div>
);
 
export default Header;