import { FilterChannelModel } from "../models/filter-channel-model";
import { repositoryVideos } from "../repositories/videos-repository";
import { StatusCode } from "../utils/status.code";

export const serviceListVideos = async (): Promise<FilterChannelModel> => {
  let responseFormat: FilterChannelModel = {
    statusCode: 0,
    body: [],
  };

  const data = await repositoryVideos();

  if (data.length !== 0) {
    responseFormat.statusCode = StatusCode.OK;
  } else {
    responseFormat.statusCode = StatusCode.NO_CONTENT;
  }

  responseFormat.body = data;

  return responseFormat;
};
