import { repositoryVideos } from "../repositories/videos-repository";

export const serviceFilterVideos = async (channelName: string) => {
  const data = await repositoryVideos(channelName);

  return data;
};
