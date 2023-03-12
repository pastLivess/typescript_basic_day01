// 保存个人信息 name age height

// 1.使用数组保存个人信息
// (1) 不合适 js数组最好存放相同数据类型
// (2) 获取值后返回的值是any类型 不能明确知道
const info1: any[] = ['张三', 18, 1.88]

console.log(info1[1])

// 2.使用对象保存个人信息(用的最多) 用对象也没有什么大问题
const info2 = { name: '张三', age: 18, height: 1.88 }

// 3.元组类型(介于数组和对象之间的数据类型) python等语言中有这个类型
// 元组的优势
// 相对数组来说 元组类型中可以存放不同数据类型
// 取出来的value也是有对应的类型的
const info3: [string, number, number] = ['张三', 18, 1.88]

console.log(info3[1])

// 元组类型使用场景
function useState(initialState: number): [number, (newValue: number) => void] {
  let stateValue = initialState
  function setValue(newValue: number) {
    stateValue = newValue
  }
  return [stateValue, setValue]
}

const [count, setCount] = useState(10)
// count() //报错

setCount(2)

export {}
