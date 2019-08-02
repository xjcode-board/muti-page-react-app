//如果接口较多，可以按照模块再进行细分
import http from "@src/http";

// eg:获取列表 --接口地址请以实际项目为准
export const getList = params => {
    return http.get("api/list", { params });
};

