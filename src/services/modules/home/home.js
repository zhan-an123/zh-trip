import httpRequest from "../../request";
//获取热门建议
export const getHotSuggests = () => {
  return httpRequest({ url: "/home/hotSuggests", method: "get" });
};

//获取分类
export const getCategories = () => {
  return httpRequest({ url: "/home/categories", method: "get" });
};

//获取房屋列表
export const getHouseList = (page) => {
  return httpRequest({
    url: "/home/houselist",
    method: "get",
    params: { page },
  });
};
