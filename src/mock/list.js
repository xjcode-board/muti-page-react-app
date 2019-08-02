import Mock from "mockjs";
const Random = Mock.Random;
/**
 * {
 * error_code:0,
 * data:{
 * },
 * error_msg:xxx
 * }
 */

const getList = function() {
    let arr = [];
    for (let i = 0; i < 50; i++) {
        let item = {
            id: Random.id(),
            name: Random.cword(6, 10),
            price: Random.integer(100, 300),
            type: Random.cword(4),
            collection_status: Random.integer(0, 1),
            province: Random.province(),
            city: Random.city(),
            level: Random.integer(0, 1),
        };
        arr.push(item);
    }
    let obj = {
        code: 0,
        msg: "success",
        data: arr,
    };
    return obj;
};

export default {
    getList: () => getList(),
};
