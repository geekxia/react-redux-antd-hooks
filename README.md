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

# 权限管理

ToB，不同身份的企业员工看到的界面和功能是完全不一样的。
系统背后的不同岗位的员工越多，就需要越多角色，角色越多系统越复杂。

管理系统开发 = 20%功能开发（辅助开发） + 80%业务开发（具体行业）

用户管理模块  admin  添加用户  删除用户  冻结用户   修改用户

    添加用户：ceo  密码 123456　stutus=0  isEdit=true  角色（权限） 手机号  默认选择头像  @abc.com

角色：role =

    1  CEO  总经理  财务模块、订单模块、客户模块、数据统计模块、人力管理模块、企业文化模块
    2  市场主管   客服模块、班级模块、企业文化模块
    3  前端讲师   考试模块、考勤模块、日报模块、企业文化模块
    4  保安

    添加角色： 角色中文名称  选择权限菜单（粗粒度权限）


三个模块：菜单管理、角色管理、用户管理
