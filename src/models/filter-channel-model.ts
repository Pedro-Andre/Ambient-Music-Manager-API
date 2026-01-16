import { Video } from "./videos-model";

export interface FilterChannelModel {
  statusCode: number;
  body: Video[];
}
