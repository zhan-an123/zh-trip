import request from "../../request";

export const getCities = () => {
  return request.get({ url: "/city/all" });
};
