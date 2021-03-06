import axios from "axios";

const NAPSTER_API_KEY = "YWEyZTI4YWEtZjc5NS00NDQ3LTgwMmQtNmI1ZGQxNzM2Yjcx";

const API = axios.create({
  baseURL: `https://api.napster.com/v2.2/`,
  headers: { apikey: NAPSTER_API_KEY },
  params: { limit: 9 },
});

export const ImageServer = axios.create({
  baseURL: `https://cors-anywhere-herokuapp.com/https://api.napster.com/imageserver/v2/albums/`,
  headers: {
    apikey: NAPSTER_API_KEY,
    "Access-Control-Allow-Origin": "*",
  },
});

export default API;
