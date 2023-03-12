// 1.一个函数是死循环
// 2.一个函数没有返回任何东西 就是never类型
function foo(): never {
  throw new Error('111')
}

foo()

// 这里返回的空数组 他也会自动推导为never
// 实际开发中,类型推导自己会推导为never 其他时候很少会使用到never
function bar() {
  return []
}
bar()

// 封装框架/库的时候也可以使用never
function handlerMessage(message: string | number | boolean) {
  switch (typeof message) {
    case 'string':
      console.log(message.length)
      break
    case 'number':
      console.log(message)
      break
    case 'boolean':
      console.log(Number(message))
      break
    default:
      const check: never = message
  }
}
handlerMessage(true)
export {}
