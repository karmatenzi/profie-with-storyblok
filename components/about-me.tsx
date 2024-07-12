import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import { RichTextComponent } from "../utils/richtext";

const About = ({ blok }: any) => (
  <div className="my-44" {...storyblokEditable(blok)}>
    <p className="text-[44px] text-center">{blok.about_me}</p>
    <div className="flex my-14">
      <div className="flex justify-center w-1/2">
        <div className="relative size-[360px] mt-[30px]">
          <Image
            src={blok.about_image.filename}
            alt="logo"
            fill
            className="object-cover rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-image tracking-tight bg-transparent"
          />
        </div>
      </div>
      <div className="w-1/2">
        <RichTextComponent document={blok.description} />
      </div>
    </div>
  </div>
);

export default About;
