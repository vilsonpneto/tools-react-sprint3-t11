import axios from "axios";

export const apiHP = axios.create({
  baseURL: "https://hp-api-marcosmarp.herokuapp.com/api",
});
