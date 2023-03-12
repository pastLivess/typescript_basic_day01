// ts进行类型校验 在参数后加:类型 必须是小写的
// 当我们进行类型的校验之后,传入不是我们校验的类型时,编辑器就会提示我们
function getLength(arg: { length: number }) {
  return arg.length
}

console.log(getLength('abc'))

console.log(getLength([1, 2, 3]))

const info = {
  length: 100,
}
// getLength(1)
getLength(info)

export {}
