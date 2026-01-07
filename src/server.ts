import * as http from "http";
import { getVideos } from "./controllers/videos-controller";

const server = http.createServer(
  async (req: http.IncomingMessage, res: http.ServerResponse) => {
    if (req.method === "GET") {
      await getVideos(req, res);
    }
  }
);

const port = process.env.PORT;

server.listen(port, () => console.log(`Server iniciado na porta ${port}`));
