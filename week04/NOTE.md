学习笔记

浏览器基础渲染流程：从url请求 ->生成bitmap



### 有限状态机

- 每一个状态都是一个机器
  - 有限状态机里每个机器互相解耦，在每一个机器里都可以做计算、存储、输出等。编写状态机代码时，可以完全忽略其他状态机的逻辑，只关心本状态。
  - 机器接收的输入是完全一致的
  - 状态机本身不能再有状态了对应于函数的话，是纯函数，无副作用
- 每一个机器知道下一个状态
  - Moore：每一个机器都有确定的下一个状态。不论什么输入，a一定会到b
  - Mealy：根据输入决定下一个状态，更为常用。



#### js中的（Mealy）有限状态机

![image-20200720134726584](https://tva1.sinaimg.cn/large/007S8ZIlly1ggxe1m7m7dj30tc0fu7e9.jpg)



![Z6p5FhKzlHnEsfB](https://i.loli.net/2020/07/21/Z6p5FhKzlHnEsfB.png)



底层 c++库 libnet/libpcap



node：

net 模块用于创建基于流的TCP或IPC的服务器（[`net.createServer()`](http://nodejs.cn/s/e8cikS)）与客户端（[`net.createConnection()`](http://nodejs.cn/s/RTNxdX)）

http 模块  http服务 用户可以流式地传输数据



### HTTP

https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/

client（Request） -> Server（Response）

设计Request类

- 一定要有Content-Type 否则没有办法解析 要有默认值
- 不同的content-type 会影响body的格式 可以参考https://blog.csdn.net/woaixiaoyu520/article/details/76690686

application/x-www-form-urlencoded  body 会被转成 a=xxx&b=xxx



Response



send

- 支持已有的connection或者新建的
- parser
- 根据parser状态 处理resolve





在状态机中，除了状态迁移，还要学会加入业务逻辑







