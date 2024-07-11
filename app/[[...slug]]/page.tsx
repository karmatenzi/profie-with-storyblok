import { getStoryblokApi } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";

export default async function Home({ params }: any) {
  const { data } = await fetchData(params);
  return (
    <div>
      {/* <Navigation /> */}
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