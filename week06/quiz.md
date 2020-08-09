为什么 first-letter 可以设置 float 之类的，而 first-line 不行呢？（提交至 GitHub）

first-letter 不会影响整体布局，可以操作，开销小。
first-line 时机不同，是针对排版之后的line。比如不同屏幕宽度不同，对应的first-line也不同，此时如果需要修改布局，则整个需要重新排版，重新绘制
