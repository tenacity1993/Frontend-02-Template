学习笔记

练习1

HTML代码中可以书写开始_标签___，结束__标签__ ，和自封闭__标签__ 。

一对起止__标签__ ，表示一个_元素___ 。

DOM树中存储的是__标签__和其它类型的节点（Node）。

CSS选择器选中的是_元素___ 。

CSS选择器选中的_元素___ ，在排版时可能产生多个__盒__ 。

排版和渲染的基本单位是__盒__ 。



### 盒模型





排版：盒+文字

位置 尺寸





IFC BFC



line-top  line-bottom  base-line

text-top  text-bottom



float

会影响生成的行盒的尺寸，高度占据的范围内都会受到影响 有可能会出现float 堆叠的现象

clear

可以理解成找一块干净的空间 进行元素的排版



margin折叠  只会发生在bfc中 只有正常流排版才会存在  flex grid布局中都不存在 只要元素周围空白满足要求就可以 而不是说跟别的元素的margin保持间距



BFC 合并



  