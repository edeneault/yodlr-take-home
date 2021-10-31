//  API Class and Methods
import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000";

class YodlrAPI {
  static async request(endpoint, data = {}, method = "get") {
    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    const url = `${BASE_URL}/${endpoint}`;
    const headers = {};
    const params = method === "get" ? data : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }
}

export default YodlrAPI;
