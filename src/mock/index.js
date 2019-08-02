import Mock from "mockjs";
import List from "./list";
//如果获取？后的请求参数 正则匹配所有
Mock.mock(/\/api\/list.*/, "get", List.getList);
