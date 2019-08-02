import axios from "axios";
import { Toast } from "antd-mobile";
import "@src/mock/index.js"; //想去掉mock 就注释掉

const http = axios.create({
    baseURL: "/api/",
    timeout: 0,
    headers: {
        "X-Requested-With": "XMLHttpRequest",
        "Content-Type": "application/x-www-form-urlencoded",
    },
});
//请求公共基础参数
const baseParam = {};
http.interceptors.request.use(
    config => {
        Toast.loading("加载中...", 0);
        if (config.method.toLocaleUpperCase() === "POST") {
            config.data = {
                ...baseParam,
                ...config.params,
                _t: Date.parse(new Date()) / 1000,
            };
        } else if (config.method.toLocaleUpperCase() === "GET") {
            config.params = {
                ...baseParam,
                ...config.params,
                _t: Date.parse(new Date()) / 1000,
            };
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

http.interceptors.response.use(
    res => {
        Toast.hide();
        let status = res.status;
        let data = res.data;
        if (status === 200) {
            //这部分处理对后台规范要求较高 最好统一字段
            //todo
            return data;
        }
    },
    error => {
        //此处还可以根据不同的状态码，定制返回不同的错误信息
        Toast.info("网络异常");
        return Promise.reject(error);
    }
);

export default http;
