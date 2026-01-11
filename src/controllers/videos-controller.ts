import { IncomingMessage, ServerResponse } from "http";
import { serviceListVideos } from "../services/list-videos-service";
import { serviceFilterVideos } from "../services/filter-videos-service";

export const getVideos = async (req: IncomingMessage, res: ServerResponse) => {
  const content = await serviceListVideos();

  res.writeHead(200, { "content-type": "application/json" });
  res.end(JSON.stringify(content));
};

export const getFilterVideo = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const content = await serviceFilterVideos("Blume");

  res.writeHead(200, { "content-type": "application/json" });
  res.end(JSON.stringify(content));
};
