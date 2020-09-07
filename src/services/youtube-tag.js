import service from "./service";
import appconfig from "../config/appconfig";

const serviceEndpoint = appconfig.serviceEndpoint;

class YoutubeTagService {
  async getAllTags() {
    return service.get(`${serviceEndpoint}/tag/youtube`);
  }
  async getTag(tagString) {
    return service.get(`${serviceEndpoint}/tag/youtube`, {
      params: { tagString: tagString },
    });
  }
  async createTag(tagString) {
    return service.post(`${serviceEndpoint}/tag/youtube`, {
      tagString: tagString,
    });
  }
}

const youtubeTagService = new YoutubeTagService();
export default youtubeTagService;
