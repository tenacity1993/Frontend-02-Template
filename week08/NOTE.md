学习笔记

DTD：规定了标记语言的规则

在 HTML 4.01 中，<!DOCTYPE> 声明引用 DTD，因为 HTML 4.01 基于 SGML。DTD 规定了标记语言的规则，这样浏览器才能正确地呈现内容。

`quot` 、`amp` 、`lt` 、`gt`



HTML5 

---

标签语义

aside

> **HTML `<aside>` 元素**表示一个和其余页面内容几乎无关的部分，被认为是独立于该内容的一部分并且可以被单独的拆分出来而不会使整体受影响。其通常表现为侧边栏或者标注框（call-out boxes）。

main

article

hgroup 



strong vs em

- em 辅助的语气表示

- strong 强调词

figure  figurecaption

nav

dfn

pre

sapm

code

----

## DOM API

BOM DOM

![image-20200819135507700](/Users/ctd/Library/Application Support/typora-user-images/image-20200819135507700.png)



element 找元素  会忽略文本节点 空白节点



### Range API

连续的区间  精细化操作   高性能

fragment



#### CSSOM

- document.styleSheets

data uri

api:

document.styleSheets[0].cssRules

document.styleSheets[0].insertRule("p {color: pink;}", 0)    参数 是字符串 第二个参数 表示位置

document.styleSheets[0].removeRule(0)



window.getComputedStyle



element.getClientRects()

element.getBoundingClientRect()



#### 其他API

