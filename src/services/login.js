import service from "./service";
import appconfig from "../config/appconfig";

class LoginService {
  async login(data) {
    return service.post(appconfig.serviceEndpoint + "/login/login", data);
  }
}

const loginService = new LoginService();
export default loginService;
