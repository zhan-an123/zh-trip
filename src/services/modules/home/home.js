import httpRequest from "../../request";
//获取热门建议
export const getHotSuggests = () => {
  return httpRequest.get({ url: "/home/hotSuggests" });
};

//获取分类
export const getCategories = () => {
  return httpRequest.get({ url: "/home/categories" });
};

//获取房屋列表
export const getHouseList = (page = 1) => {
  return httpRequest.get({
    url: "/home/houselist",
    params: { page },
  });
};
