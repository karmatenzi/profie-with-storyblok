/** 1. Tag it as a client component */
"use client";
import About from "@/components/about-me";
import Experience from "@/components/experience";
import Feature from "@/components/feature";
import Grid from "@/components/grid";
import Header from "@/components/header";
import Landing from "@/components/landing";
import Page from "@/components/page";
import Teaser from "@/components/teaser";
import Technologies from "@/components/technologies";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  header: Header,
  landing: Landing,
  about: About,
  technologies: Technologies,
  experience: Experience
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
