import { repositoryVideos } from "../repositories/videos-repository";

export const serviceListVideos = async () => {
  const data = await repositoryVideos();

  return data;
};
