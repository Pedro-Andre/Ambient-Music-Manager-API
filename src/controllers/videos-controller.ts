import { IncomingMessage, ServerResponse } from "http";
import { serviceListVideos } from "../services/list-videos-service";
import { serviceFilterVideos } from "../services/filter-videos-service";
import { StatusCode } from "../utils/status.code";
import { FilterChannelModel } from "../models/filter-channel-model";

export const getVideos = async (req: IncomingMessage, res: ServerResponse) => {
  const content: FilterChannelModel = await serviceListVideos();

  res.writeHead(content.statusCode, { "content-type": "application/json" });
  res.write(JSON.stringify(content.body));

  res.end();
};

export const getFilterVideo = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const content: FilterChannelModel = await serviceFilterVideos(req.url);

  res.writeHead(content.statusCode, { "content-type": "application/json" });
  res.write(JSON.stringify(content.body));

  res.end();
};
