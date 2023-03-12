// 对象简单回顾 :这里是对对象类型进行注解
const obj: {
  name: string
  age: number
} = {
  name: 'obj',
  age: 20,
}

// 对象与函数结合使用下类型注解
type PointType = {
  x: number
  y: number
  z?: number // 后面带问号表示该属性是可选 不是必须
}
function printInfo(point: PointType) {
  console.log('x轴', point.x)
  console.log('y轴', point.y)
}
printInfo({ x: 20, y: 30 })

export {}
