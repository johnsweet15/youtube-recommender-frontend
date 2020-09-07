import service from "./service";
import appconfig from "../config/appconfig";

const serviceEndpoint = appconfig.serviceEndpoint;

class YoutubeDataService {
  async getChannel() {
    return service.get(`${serviceEndpoint}/api/get-youtube-channel`);
  }
}

const youtubeDataService = new YoutubeDataService();
export default youtubeDataService;
