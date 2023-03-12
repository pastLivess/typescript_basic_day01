// 函数的推导类型为any类型
// 我们定义类型 都要明确指定参数类型! 更安全
function sum(num1: number, num2: number) {
  return num1 + num2
}

// 如果我们没有对返回值进行注解 会自动推导类型
let res = sum(123, 321)

// sum('1', '2') // 报错
export {}
