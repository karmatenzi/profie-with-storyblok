import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
 
const Feature = ({ blok }:any) => (
  <div className="relative size-[120px] rounded-2xl border-4 border-neutral-600 p-4" {...storyblokEditable(blok)}>
    <Image src={blok?.app_image?.filename} alt="app" fill className="rounded-2xl object-cover" />
  </div>
);
 
export default Feature;