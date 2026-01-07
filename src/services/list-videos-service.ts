import { repositoryVideos } from "../repositories/videos-repository";

export const listVideos = async () => {
  const data = await repositoryVideos();

  return data;
};
