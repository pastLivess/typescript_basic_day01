const arr = ['1', '2', '3']

// 我们传入的匿名函数大部分情况不要做类型注解
// 因为会根据上下文帮我们推导类型,我们手动加还有可能加错
arr.forEach((item, index, ar) => {
  console.log(item, index, ar)
})
export {}
