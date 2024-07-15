import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

const Technologies = ({ blok }: any) => (
  <div className="my-44" {...storyblokEditable(blok)}>
    <p className="text-[44px] text-center">{blok.technologies}</p>
    <div className="flex space-x-4 justify-center my-20" {...storyblokEditable(blok)}>
      {blok.frameworks.map((nestedBlok:any) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  </div>
);

export default Technologies;
