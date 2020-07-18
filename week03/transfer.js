function stringToNumber(raw) {
  let string = raw.toLocaleLowerCase()
  let sign = 1
  if (string.startsWith('-')) {
    sign = -1
    string = string.substr(1)
  }
  const reg16 = /^0[x|X](\w+)$/
  const reg8 = /^0[o|O](\w+)$/
  const reg2 = /^0[b|B](\w+)$/
  const reg10 = /^(\d+)$/

  const obj = getValueAndType(16, reg16, string, 'f')
    || getValueAndType(8, reg8, string, '7')
    || getValueAndType(2, reg2, string, '1')
    || getValueAndType(10, reg10, string, '9')

  if (obj && obj.value) {
    const array = obj.value.split("")
    let number = 0
    array.forEach((item) => {
      const flag = item.charCodeAt(0) > 'a'.charCodeAt(0) ? 87 : 48
      number = number * obj.type + item.charCodeAt(0) - flag
    })
    return sign > 0 ? number : 0 - number
  }
}

function getValueAndType(type, reg, string, base) {
  const temp = reg.exec(string)
  if (temp) {
    const value = temp[1] && temp[1].split('')
    value.some(item => {
      if (item.toLocaleLowerCase().charCodeAt(0) > base.toLocaleLowerCase().charCodeAt(0)) {
        throw new Error('NaN')
      }
    })
    return {
      type,
      value: temp[1]
    }
  }
}

//'0xbb' -> 187  '0xff' -> 255  '0x11' -> 17  '0xgg' -> Error: NaN
//'0o11' -> 9  '0o77' -> 63
//'0b11'  -> 3


function numberToString(number, base) {
  // 先将number转换成指定进制的数值  然后加上进制前缀 再输出
  // 假定 这里输入为10进制  如果非10进制，则还需要再进行一步进制转换
  // 3 -> 11 -> 0b11
  let result = []
  while (number >= 1) {
    const quotient = ~~(number / base)
    const remainder = number % base
    result.push(remainder)
    number = quotient
  }
  result = result.reverse().join("")

  if(base === 16) {
    return `0x${result}`
  }
  if(base === 8) {
    return `0o${result}`
  }
  if(base === 2) {
    return `0b${result}`
  }
  return result
}
