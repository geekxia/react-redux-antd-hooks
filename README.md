# 项目创建

cnpm install create-react-app -g
create-react-app react-antd-cms
cd react-antd-cms
npm start

npm run build 打包上线


# 如何才能看到webpack的配置文件呢？

在项目的根目录下执行以下命令：
```
git init
git add --all
git commit -m 'first'
npm run eject
```

# Redux状态管理工具（可预测的状态容器）

* 状态管理工具有什么作用？
  实现组件之间的数据共享
  实现数据缓存

* 基于Flux思想而诞生一个开源库，它是一套具体的数据解决方案

* Redux不是React项目必须的，mobx可以作为替代产品
