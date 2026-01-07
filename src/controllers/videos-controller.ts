import { IncomingMessage, ServerResponse } from "http";
import { listVideos } from "../services/list-videos-service";

export const getVideos = async (req: IncomingMessage, res: ServerResponse) => {
  const content = await listVideos();

  res.writeHead(200, { "content-type": "application/json" });
  res.end(JSON.stringify(content));
};
