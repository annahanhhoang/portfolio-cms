export const useGetStory = async (storyName) => {
  const storyblokApi = useStoryblokApi();
  const { data } = await storyblokApi.get(`cdn/stories/${storyName}`, {
    version: 'draft',
    resolve_links: 'url',
  });
  return data.story.content;
};
