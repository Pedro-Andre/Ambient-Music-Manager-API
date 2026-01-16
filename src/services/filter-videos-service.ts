import { FilterChannelModel } from "../models/filter-channel-model";
import { repositoryVideos } from "../repositories/videos-repository";
import { StatusCode } from "../utils/status.code";

export const serviceFilterVideos = async (
  channelName: string | undefined
): Promise<FilterChannelModel> => {
  let responseFormat: FilterChannelModel = {
    statusCode: 0,
    body: [],
  };

  const queryString = channelName?.split("?c=")[1] || "";
  const data = await repositoryVideos(queryString);

  if (data.length !== 0) {
    responseFormat.statusCode = StatusCode.OK;
  } else {
    responseFormat.statusCode = StatusCode.NO_CONTENT;
  }

  responseFormat.body = data;

  return responseFormat;
};
