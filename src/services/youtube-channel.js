import service from "./service";
import appconfig from "../config/appconfig";

const serviceEndpoint = appconfig.serviceEndpoint;

class YoutubeChannelService {
  async getRandomChannel() {
    return service.get(`${serviceEndpoint}/channel/youtube/random`, {
      params: { noTags: true },
    });
  }
  async getChannelById(id) {
    return service.get(`${serviceEndpoint}/channel/youtube?id=${id}`);
  }
  async updateChannel(channelObj) {
    return service.put(`${serviceEndpoint}/channel/youtube`, channelObj);
  }
}

const youtubeChannelService = new YoutubeChannelService();
export default youtubeChannelService;
