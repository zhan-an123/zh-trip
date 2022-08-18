import httpRequest from "../../request";

export const getCities = () => {
  return httpRequest.get({ url: "/city/all" });
};
