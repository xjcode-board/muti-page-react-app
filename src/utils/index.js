const utils = {
    queryParams(data, isPrefix = false) {
        let prefix = isPrefix ? "?" : "";
        let result = [];
        for (let key in data) {
            let value = data[key];
            // 去掉为空的参数
            if (["", undefined, null].includes(value)) {
                continue;
            }
            if (value.constructor === Array) {
                value.forEach(_value => {
                    result.push(
                        encodeURIComponent(key) +
                            "[]=" +
                            encodeURIComponent(_value)
                    );
                });
            } else {
                result.push(
                    encodeURIComponent(key) + "=" + encodeURIComponent(value)
                );
            }
        }

        return result.length ? prefix + result.join("&") : "";
    },
    getObjParams() {
        let qs =
                window.location.search.length > 0 ?
                    window.location.search.substring(1) :
                    "",
            args = {},
            items = qs.length ? qs.split("&") : [],
            item = null,
            name = null,
            value = null,
            i = 0,
            len = items.length;
        for (i = 0; i < len; i++) {
            item = items[i].split("=");
            name = decodeURIComponent(item[0]);
            value = decodeURIComponent(item[1]);
            if (name.length) {
                args[name] = value;
            }
        }
        return args;
    },
};
export default utils;
