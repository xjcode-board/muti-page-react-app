This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 使用文档

### 1 clone

```bash
$ git clone https://github.com/xjcode-board/muti-page-react-app.git your-app
```

### 2 目录结构

```bash
|   .gitignore #
|   package.json
|   README.md
|   yarn.lock
|
+---config #webpack 相关配置
|   |   env.js
|   |   paths.js
|   |   webpack.config.js
|   |   webpackDevServer.config.js
|   |
|   \---jest
|           cssTransform.js
|           fileTransform.js
|
+---public # 静态文件
|       favicon.ico
|       index.html #模板
|       manifest.json
|
+---scripts # 脚本
|       build.js
|       start.js
|       test.js
|
\---src # 项目文件
    |   setupProxy.js #本地代理
    |   serviceWorker.js
    |
    +---pages # 页面
    |   |  page1
    |   |  page2
    |
    +---api # 接口
    |    | index.js
    +---assets # 静态文件
    |    | css
    |    | fonts
    |    | images
    +---components # 通用组件
    |    | List ...
    +---http # axios封装
    +---mock # mock数据
    +---store # redux状态管理
    |    | actions
    |    | reducers
    |    | state ...
    +---utils # 工具函数
    |    | localData.js #本地数据
    |    | ...

```

### 3 start

```bash
$ cd your-app
$ yarn 或 npm install
$ yarn start  或 npm run start
```

#### 启动之后查看[page1 页面](http://127.0.0.1:3000/page1.html)

### 4 build

```bash
$ yarn build 或 npm run build
```

### 插件

集成了 eslint prettier, 推荐使用 vscode ，安装 Prettier-code formatter 和 Formatting Toggle
, 可以根据 eslint 规则自动格式化代码

### Tips

本地环境为了便于接口联调和字段统一集成了 mockjs,线上环境请参照实际接口返回修改 http 文件，并且去掉 mockjs.
