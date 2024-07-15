import { getStoryblokApi } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";

export default async function Home({ params }: any) {
  const { data } = await fetchData(params);
  return (
    <div className="text-neutral-300 antialiased selection:bg-white selection:text-black">
      <StoryblokStory story={data.story} />
    </div>
  );
}

async function fetchData(params: any) {
  const storyblokApi = getStoryblokApi();
  let slug = params?.slug?.length ? params?.slug?.join("/") : "home";

  return storyblokApi.get(`cdn/stories/${slug}`, {
    version: "draft",
    cv: new Date().getTime(),
  });
}