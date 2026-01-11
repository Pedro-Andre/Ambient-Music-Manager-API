import fs from "fs";
import path from "path";
import { Video } from "../models/videos-model";

const pathData = path.join(__dirname, "../repositories/videos.json");

export const repositoryVideos = async (
  channelName?: string
): Promise<Video[]> => {
  const data = fs.readFileSync(pathData, "utf-8");
  let jsonFile = JSON.parse(data);

  if (channelName) {
    jsonFile = jsonFile.filter(
      (channel: Video) => channel.channelName === channelName
    );
  }

  return jsonFile;
};
