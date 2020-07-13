var token = [];
const start = char => {
  if(char === '1'
    || char === '2'
    || char === '3'
    || char === '4'
    || char === '5'
    || char === '6'
    || char === '7'
    || char === '8'
    || char === '9'
    || char === '0'
  ) {
    token.push(char);
    return inNumber;
  }
  if(char === '+'
    || char === '-'
    || char === '*'
    || char === '/'
  ) {
    emmitToken(char, char);
    return start
  }
  if(char === ' ') {
    return start;
  }
  if(char === '\r'
    || char === '\n'
  ) {
    return start;
  }
}
const inNumber = char => {
  if(char === '1'
    || char === '2'
    || char === '3'
    || char === '4'
    || char === '5'
    || char === '6'
    || char === '7'
    || char === '8'
    || char === '9'
    || char === '0'
  ) {
    token.push(char);
    return inNumber;
  } else {
    emmitToken("Number", token.join(""));
    token = [];
    return start(char); // put back char
  }
}



function emmitToken(type, value) {
  console.log(value);
}

var input = "1024 + 2 * 256"

var state = start;

for(var c of input.split(''))
  state = state(c);

state(Symbol('EOF'))

function writeUTF (str) {
  const result = [];
  let byteSize = 0;
  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i);
    if (0x00 <= code && code <= 0x7f) {
      byteSize += 1;
      result.push(code);
    } else if (0x80 <= code && code <= 0x7ff) {
      byteSize += 2;
      result.push((192 | (31 & (code >> 6))));
      result.push((128 | (63 & code)))
    } else if ((0x800 <= code && code <= 0xd7ff)
      || (0xe000 <= code && code <= 0xffff)) {
      byteSize += 3;
      result.push((224 | (15 & (code >> 12))));
      result.push((128 | (63 & (code >> 6))));
      result.push((128 | (63 & code)))
    }
  }
  return result
  // return result.map(a => `0x${a.toString(16)}`)
}

writeUTF('中');
