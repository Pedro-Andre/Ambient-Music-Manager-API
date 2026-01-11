import * as http from "http";
import { getFilterVideo, getVideos } from "./controllers/videos-controller";

const server = http.createServer(
  async (req: http.IncomingMessage, res: http.ServerResponse) => {
    if (req.method === "GET" && req.url === "/api/list") {
      await getVideos(req, res);
    }

    if (req.method === "GET" && req.url === "/api/channel") {
      await getFilterVideo(req, res);
    }
  }
);

const port = process.env.PORT;

server.listen(port, () => console.log(`Server iniciado na porta ${port}`));
