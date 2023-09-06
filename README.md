# PtToPtools-Dev

## 技术栈

1. Vue 3 + TypeScript + Vite
2. Ant Design Vue

## 功能

1. 全新界面，使用 antdesignvue 重构，优化界面显示
2. 个人主页与控制面板页面自动同步 Cookie 等信息
3. 种子列表页增加全部推送与免费种子推送
4. 种子详情页增加推送到下载器功能

## 不能使用的站点

1. 海胆种子页面无法使用油猴，不能正常显示
2. 朱雀无法使用油猴，页面错乱
3. 部分站点种子筛选规则尚未完善

## 安装油猴插件

> ### <font color="red">请使用红色油猴安装本脚本</font>
>
> ### <font color="red">请使用红色油猴安装本脚本</font>
>
> ### <font color="red">请使用红色油猴安装本脚本</font>
>
> ### <font color="orange">油猴脚本不仅仅支持同步Cookie，也支持添加站点</font>

红色油猴脚本即油猴测试版，Beta版，

![image-20230630100049242](https://img.ptools.fun/blog/image-20230630100049242.png)

![image-20230630100212785](https://img.ptools.fun/blog/image-20230630100212785.png)

油猴测试版下载地址：

[EDGE浏览器](https://microsoftedge.microsoft.com/addons/detail/fcmfnpggmnlmfebfghbfnillijihnkoh)

[CHROME](https://chrome.google.com/webstore/detail/gcalenpjmijncebpfijmoaglllgpjagf)

## 安装油猴脚本

PtToPTools脚本下载地址

[点击访问](https://greasyfork.org/zh-CN/scripts/458791-pttoptools-dev)

## 修改相关配置

1. 在脚本中搜索`192.168.123.5:5173`，将之改为你自己的ptools访问地址，有基础改几处

   ![image-20230629145646264](https://img.ptools.fun/blog/image-20230629145646264.png)

   ![image-20230629145705594](https://img.ptools.fun/blog/image-20230629145705594.png)

   ![image-20230629145735151](https://img.ptools.fun/blog/image-20230629145735151.png)

   ![image-20230906034426891](https://img.ptools.fun/blog/image-20230906034426891.png)

2. 修改TOKEN，使得脚本中的TOKEN与PTools中的TOKEN保持一致。

   ```toml
      [token]
      token="ptools"
   ```
   ![](https://img.ptools.fun/blog/202306291309849.png)

## 同步Cookie

在个人主页与控制面板会自动同步cookie、UID，UserAgent、Passkey、注册时间

![image-20230906035538885](https://img.ptools.fun/blog/image-20230906035538885.png)

![image-20230906035619484](https://img.ptools.fun/blog/image-20230906035619484.png)

> PS：油猴脚本会覆盖自定义站点名称，请自行决定是否使用

## 下载种子

点击下载会弹出下载器选择界面，QB下载器显示分类，TR下载器显示常用文件夹内，点击即可开始下载！

![image-20230906035414077](https://img.ptools.fun/blog/image-20230906035414077.png)

![image-20230906035419401](https://img.ptools.fun/blog/image-20230906035419401.png)

## 错误处理

1. 检查是否为红猴，不是的请换红猴

2. 检查黑猴中是否有PTOOLS的脚本，有的请删除或者关闭

3. 仍不能使用的，按F12打开开发者模式，找到应用程序标签，尝试清除会话存储后重试

   ![image-20230630100951854](https://img.ptools.fun/blog/image-20230630100951854.png)

   ![](https://img.ptools.fun/blog/image-20230630100951854.png)

4. 仍不能用的，看控制台(或Console)报错信息

   ![image-20230630100916831](https://img.ptools.fun/blog/image-20230630100916831.png)
