// 在一个字符串中，找到字符'a'
function find_a(string) {
  for (let char of string) {
    return char === 'a';
  }
}

function find_ab(string) {
  const charts = [...string];
  return charts.some((item, index) => {
    return item === 'a' && index < charts.length - 1 && charts[index + 1] === 'b'
  })
}

// 可以优化成 find abcde 分开判断
function find_abcdef(string) {
  let foundA = false
  let foundAB = false
  let foundABC = false
  let foundABCD = false
  let foundABCDE = false
  for (let char of string) {
    if (char === 'a') {
      foundA = true
    } else if (foundA && char === 'b') {
      foundAB = true
      foundA = false
    } else if (foundAB && char === 'c') {
      foundABC = true
      foundA = false
      foundAB = false
    } else if (foundABC && char === 'd') {
      foundABCD = true
      foundA = false
      foundAB = false
      foundABC = false
    } else if (foundABCD && char === 'e') {
      foundABCDE = true
      foundA = false
      foundAB = false
      foundABC = false
      foundABCD = false
    } else if (foundABCDE && char === 'f') {
      return true
    } else {
      foundA = false
      foundAB = false
      foundABC = false
      foundABCD = false
      foundABCDE = false
    }
  }
  return false
}

// 状态机版本  abcabx
// function match(string) {
//   let state = start
//   for (let c of string) {
//     state = state(c)
//   }
//   return state === end
// }
//
// function start(c) {
//   if (c === 'a') {
//     return foundA
//   } else
//     return start
// }
//
// function end(c) {
//   // 技巧 到达end 再也不会变化了
//   return end
// }
//
// function foundA(c) {
//   if (c === 'b') {
//     return foundB
//   } else {
//     return start
//   }
// }
//
// function foundB(c) {
//   if (c === 'c') {
//     return foundC
//   }
//   return start
// }
// function foundC(c) {
//   if (c === 'a') {
//     return foundA2
//   }
//   return start(c)
// }
//
// function foundA2(c) {
//   if (c === 'b') {
//     return foundB2
//   }
//   return start(c)
// }
// function foundB2(c) {
//   if (c === 'x') {
//     return end
//   }
//   return foundB(c)
// }
//
// match('abcabx')

// abababx
function match2(string) {
  let start = state
  for(let c of string) {
    state = state(c)
  }
  return state === end
}

function start(c) {
  if (c === 'a') {
    return foundA
  }
  return start
}

function end() {
  return end
}

function foundA(c) {
  if (c === 'b') {
    return foundB
  }
  return start
}

function foundB(c) {
  if (c === 'a') {
    return foundA2
  }
  return start
}

function foundA2(c) {
  if (c === 'b') {
    return foundB2
  }
  return foundA(c)
}

function foundB2(c) {
  if (c === 'a') {
    return foundA3
  }
  return foundB(c)
}
function foundA3(c) {
  if (c === 'b') {
    return foundB3
  }
  return foundA2(c)
}
function foundB3(c) {
  if (c === 'x') {
    return end
  }
  return foundB2(c)
}

