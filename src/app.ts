import * as http from "http";
import { getFilterVideo, getVideos } from "./controllers/videos-controller";
import { Routes } from "./routes/routs";
import { HttpMethod } from "./utils/http-methods";

export const app = async (
  req: http.IncomingMessage,
  res: http.ServerResponse
) => {
  const [baseUrl, queryString] = req.url?.split("?") ?? ["", ""];

  if (req.method === HttpMethod.GET && baseUrl === Routes.LIST) {
    await getVideos(req, res);
  }

  if (req.method === HttpMethod.GET && baseUrl === Routes.CHANNEL) {
    await getFilterVideo(req, res);
  }
};
