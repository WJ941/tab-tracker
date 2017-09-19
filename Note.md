一、后端
1. `const app = express()`新建一个Express应用；
2. 把所有的路由放在一个module里：eg.`route.js`
    ```
      module.exports = (app) {
        app.post('/a', functionA);
        app.post('/b', functionB);
      }
    ```
    调用：`require('route.js')(app)`,很方便；
    把router的所有回调函数放到一个module里，AuthenticationController.js,
    在AuthenticationControllerPolicy.js中放置输入有效性验证（使用Joi），都可以放在router.js中。
3. 使用`morgan`显示HTTP request日志，`morgan`常见的预设的格式：`combined`, `common`, `dev`, `short`, `tiny`;
4. 处理跨域使用`cors`;
5. 使用`bodyparse`获取post的数据；
6. 使用ORM框架`Sequelize`,把管理数据库的操作和模型放到models中，模型中添加钩子函数，update，create，save时，把密码变成hash值；
7. 使用`jsonwebtoken`生成token；
8. 把所用需要配置的信息放到一个config.js中，方便管理。

二、前端
1. 有个'router/index.js'来统一管理路由；
2. 使用`axios`来make http request based promise ,
3. 把与后端连接的部分封装到services中，Api.js中放请求的参数，这里只有地址：localhost:8081,把请求的行为封装到AuthenticationService.js中，login,register;
4. 使用Vuex来做State Management,目前包括user, token, IsLoggedIn三个状态。

三、需补习的知识点：
1. ES6中的async await Promise；
2. nodejs中的HTTP response request
3. 数据库中基础知识点；