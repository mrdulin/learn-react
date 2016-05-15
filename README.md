# learn once, write anywhere

_learn react step by step!_

__说明：__

* 项目依赖`npm`,`node`环境，其他模块都为本地安装，不依赖其他全局`npm package`
* `.babelrc`文件内容很重要，直接关系到`browserify -t [babelify]...`命令的成功与否
* 查看`package.json`的`dependency`和`scripts`获取`react`等版本信息，及其他信息
* `.gitignore`中忽略了`bundle.js`（每个demo都有这个文件，然而这个文件构建后包含`react`等库，导致文件很大，所以忽略提交上传该文件）
* 每个`demo`需要执行`npm run build:demo-x`(x是对应的数字)进行构建输出`bundle.js`
* 构建完成后，运行每个`demo`中的`index.html`

| 名称 | 描述 |
|---|---|
|demo-1|`React.createClass`|
|demo-2|`React.Children`相关方法|
|demo-3|`React.createElement`|
|demo-4|`getDefaultProps`,`getInitialState`|
|demo-5|`mixins`|
|demo-6|组件初始化渲染生命周期内`getDefaultProps`, `getInitialState`, `componentWillMount`, `render`, `componentDidMount`执行顺序|
|demo-7|组件`state`改变生命周期内`shouldComponentUpdate`, `componentWillUpdate`, `render`, `componentDidUpdate`执行顺序|
|demo-8|组件嵌套|
|demo-9|组件命名空间|
|demo-10|组件扩展属性`{...something}`, `for`, `if-else`, 三目运算符等在`JSX`中的使用|