import axios from "axios";

export const API = axios.create({
  baseURL: 'https://api.covid19api.com/',
  timeout:20000,
  responseType: "json",
});

export const API2 = axios.create({
  baseURL: 'https://www.who.int/rss-feeds/',
  timeout:20000,
  responseType: "application/xml"
});