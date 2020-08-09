/**
 * 描述：
 * 编写一个 match 函数。它接受两个参数，第一个参数是一个选择器字符串性质，第二个是一个 HTML 元素。
 * 这个元素你可以认为它一定会在一棵 DOM 树里面。通过选择器和 DOM 元素来判断，当前的元素是否能够匹配到我们的选择器。
 * （不能使用任何内置的浏览器的函数，仅通过 DOM 的 parent 和 children 这些 API，来判断一个元素是否能够跟一个选择器相匹配。）
 * @param selector
 * @param element
 * @returns {boolean}
 */

function matchElement(selector, element) {
  const list = typeof selector === "string" ? [selector] : selector
  const tagName = element.tagName
  const className = element.className
  const id = element.id
  let matched = false
  list.forEach(item => {
    if (item.charAt(0) === '#') {
      item = item.replace('#', '')
      if (item === id) {
        matched = true
      }
    } else if (item.charAt(0) === '.') {
      item = item.replace('.', '')
      if (className.indexOf(item) > -1) matched = true
    } else if (item === tagName.toLocaleLowerCase()) matched = true
  })
  return matched
}

function match(selector, element) {
  let s = selector.split(' ')
  if (s.length === 1) return matchElement(selector, element)
  let list = s.reverse()
  let matched = true
  while (element.parentNode && list.length > 1 && matched) {
    element = element.parentNode
    // console.log(list, matched)
    matched = matchElement(list, element)
    if (matched) list.splice(-1)
  }
  return matched
}

// test 百度首页
match("#s-top-left", document.getElementById("s-top-left"));
match("div #s-top-left", document.getElementById("s-top-left"));
match(".s-isindex-wrap div #s-top-left", document.getElementById("s-top-left"));

