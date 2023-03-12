// ts中函数没有返回值 函数返回值是void类型
// ts中函数默认情况下不返回的情况下,不是返回undefined而是void
// void类型我们也可以返回undefined(了解)
function add(num1, num2): void {
  console.log(num1, num2)
}

add(1, 2)

// void的使用场景 用的最多地方
// 给函数指定类型
type fooType = () => void

let foo: fooType = () => {}

// 举例 (涉及函数类型问题,后续讲解)
// 1.定义要求传入函数的类型
type ExecType = (name: string, age: number) => void

// 2.要求传入的函数类型必须为 ExecType
function delayExecFn(fn: ExecType) {
  setTimeout(() => {
    fn('name', 18)
  })
}
// 3.调用函数 传入匿名函数到fn
delayExecFn((name, age) => {
  console.log(name, age)
})
export {}
