// unknown也能表示不确定的类型

let foo: unknown = '123'

foo = 123

// 与any的区别
// unknown类型在默认情况下不能进行任何操作(不能调方法等)
// unknown是更佳安全的any类型
//  any无论是什么操作 都可以直接进行操作(不安全)

// 而对unknown进行操作
// 必须进行类型缩小 指对unknown进行判断 为指定类型就可以进行操作
if (typeof foo === 'string') {
  console.log(foo.length) // 不报错
}

// console.log(foo.length) 报错

export {}
