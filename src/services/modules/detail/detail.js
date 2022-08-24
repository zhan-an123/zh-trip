import httpRequest from "../../request";

export const getDetailInfo = () => {
  return httpRequest.get({ url: "/favor/list" });
};
