/** 1. Tag it as a client component */
"use client";
import Feature from "@/components/feature";
import Grid from "@/components/grid";
import Page from "@/components/page";
import Teaser from "@/components/teaser";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page
};
/** 2. Initialize it as usual */
storyblokInit({
  accessToken: process.env.STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  components,
});

export default function StoryblokProvider({
  children
}:any) {
  return children;
}
