

学习笔记

### 运算符和表达式

##### 语法树相关

语法树与优先级

运算符优先级会影响到语法树的构成，js标准中，用产生式来描述运算符的优先级。



##### 表达式

Member类运算符

- a.b
- a[b]
- foo\`string\`
- super.b
- super['b']
- new.target
- new Foo()  优先级 > new Foo



New类

- new Foo



##### Reference  （运行时设施）

- Object

- Key

  操作：

- delete

- assign



##### call类表达式

- foo()
- super()
- foo()['b']
- foo().b
- foo()\`abc\`

eg

new a()['b']   先跟new结合    member 优先级 高于call

-> new 了a对象，然后访问b属性



##### Left handside  & Right handside

是否能放在等号左边  大部分语言中 left 一定是right



##### update 表达式

- a++
- a--
- ++a
- --a



##### Unary 单目运算符

- delete  a.d （后面必须接引用类型 才能生效）
- void foo()  可以用于改变语法结构
- typeof a
- +a
- -a
- ~a  这几个 都可能存在类型转换
- !a
- await a



##### Exponental 

- ** 乘方 js中唯一的 右结合的运算符



##### Multiplicative

\* \\ %



##### Additive

\+ \-

##### shift

<< 、>> 、>>>

##### Relationship

<  >   <=    >=    instanceof   in

##### Equality

- ==  会存在类型转换  
- !=
- ===
- !==

##### Bitwise

& ^ |

##### Logical

短路原则

- && 

- ||

##### Conditional  

三目运算符  ?:

存在短路逻辑，与C不一致



### 类型转换

![image-20200715134340604](https://tva1.sinaimg.cn/large/007S8ZIlly1ggrlu6onq7j313a0e6tg5.jpg)

？Undefined变量 用在字符串模版的时候 就会被转成string吧，老师说几乎不会被转换。

##### 拆箱转换

转number 一定会先调用valueof

转string   一定会先调用toString

##### 装箱转换

区分对象和值



### 语句相关

##### completion record

语句完成状态的一种记录

type  不同语句种类 normal break...

value  基本类型

target   label

  

声明语句

声明、使用顺序 

预处理 var会先生效 声明到当前的作用域级别

 

### JS执行粒度

##### 任务

 宏任务

微任务（Promise）

函数调用



##### 事件循环

##### 函数调用

执行上下文栈



LexicalEnvironment

- this
- new.target
- super
- 变量



##### 闭包

每一个函数都会生成一个闭包，包含代码部分和环境部分。

每个函数都会带定义是的Env record  -》原型链的基础



##### Realm

可以理解为全局作用域下的对象和对象上的属性与方法？
所有对象：https://www.ecma-international.org/ecma-262/9.0/index.html#sec-well-known-intrinsic-objects

https://segmentfault.com/a/1190000012162360
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects

















