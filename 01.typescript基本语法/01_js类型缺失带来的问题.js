function getLength(arg) {
  return arg.length
}

console.log(getLength('123'))

console.log(getLength([1, 2, 3]))

// 我们这个函数并不能限定传入的类型,所以当其他人在使用该函数时
// 并不知道该传入什么值,有可能会存在隐患的错误!

console.log(getLength(123))

console.log(getLength())
