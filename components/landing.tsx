import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import { RichTextComponent } from "../utils/richtext";

const Landing = ({ blok }: any) => (
  <div className="flex items-center my-28" {...storyblokEditable(blok)}>
    <div className="space-y-4 w-1/2">
      <p className="text-[54px]">{blok.name}</p>
      <p className="text-[28px] bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent">{blok.role}</p>
      <RichTextComponent document={blok.description} />
    </div>
    <div className="flex justify-center w-1/2">
      <div className="relative size-[300px]">
        <Image
          src={blok.profile_image.filename}
          alt="logo"
          fill
          className="object-cover rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-image tracking-tight bg-transparent"

        />
      </div>
    </div>
  </div>
);

export default Landing;