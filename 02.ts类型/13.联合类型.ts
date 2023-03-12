// 2.举例 返回id(id一般有数字和字符串类型)
function printID(id: number | string) {
  console.log('id', id)
  if (typeof id === 'string') {
    console.log(id.length)
  } else {
    console.log(id)
  }
}
printID('abc')
printID(123)

export {}
