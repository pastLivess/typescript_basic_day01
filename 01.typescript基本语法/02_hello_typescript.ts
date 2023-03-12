// 基本数据类型可以定义类型
// string 才是ts给我们提供的指定标识符的类型
// String 是js中的字符串包装类 不是指定类型
// 写成大写并不规范  不要这样写
let message: string = 'hello world'

// 当我们限定类型 而赋值的不是相对应的值后会报错 容错处理
// message=1
console.log(message)

// export之后 生成的代码会有模块化
// 浏览器不支持 后面有解决方案  现在把里面的代码注释了就好
export {}
