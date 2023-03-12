// 这种写法是错误的 开发一般不会这么写
let obj: object = { name: '张三', age: 18 }

// 正确写法 但是这种写法还有缺陷,
// 就是你定义值的类型必须有否则会报错
let obj2: {
  name: string
  age: number
} = {
  name: '张三',
  age: 18,
}

console.log(obj2.age)
console.log(obj2.name)
