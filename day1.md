# day1

## javascript类型缺失

![image-20230309024143814](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230309024143814.png)

## 类型思维的缺失

![image-20230309031104449](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230309031104449.png)

## javascripit添加类型约束

![image-20230309031211339](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230309031211339.png)

## ts类型校验体验

1.ts文件以ts结尾

2.ts文件默认是一个模块 必须使用export 关键字 否则报错

~~~~tsx
// ts进行类型校验 在参数后加:类型 必须是小写的
// 当我们进行类型的校验之后,传入不是我们校验的类型时,编辑器就会提示我们
// 下面这样校验的意思是 只能传入string类型或可以放任意类型的数组 其他都会报错
function getLength(arg: string | any[]) {
  return arg.length
}

console.log(getLength('abc'))

console.log(getLength([1, 2, 3]))

const info = {
  length: 100,
}
getLength(1) // 报错
getLength(info) // 报错

export {}

// 这样校验,是我们的对象必须有一个length属性  上面'abc' 数组[1,2,3] info对象都符合  
function getLength(arg:{length:number}) {
  return arg.length
}
~~~~

## 认识TypeScript

TypeScript 可以通过 tsc/babel来编译

![image-20230309031650828](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230309031650828.png)

### TypeScript的特点(重点)

1.typescript是基于javascript的, 支持js所有的语法等 

2.typescript构建大型项目更佳友好,维护

3.typescript支持最新的ECMAscripit语法,并且自身有一些新特性

![image-20230309031922861](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230309031922861.png)

### 使用typescript的第三方库

![image-20230309032056999](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230309032056999.png)

### 大前端的发展(了解)

![image-20230309032332983](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230309032332983.png)

## typeScripit编译环境

1.全局安装typescript即可

**npm i typescript -g**

2.**tsc --version**可以查看typescript版本

3.编写ts代码后使用tsc xxx 可以将对应ts的编译为js代码

~~~~Js
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

~~~~

编译后代码

~~~~Js
'use strict'
exports.__esModule = true;

var message = 'hello world'
console.log(message)

~~~~

# typescript基本语法

## 变量声明

![image-20230310020150379](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230310020150379.png)

![image-20230310020309021](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230310020309021.png)

~~~~ts
const num :number = 1
const str :string ='1'
const obj :object ={}
~~~~

## ts类型推导(推断)

~~~~ts
// ts中类型推导 就是说我们第一次声明一个值后
// 在这里ts内部会帮我们自动进行类型推导为字符串
// 所以大部分情况不需要我们手动指定类型

// let声明的变量会自动推导为数据类型
// const声明的变量会自动推导为字面量类型(后面做介绍)
let name = '123'

let age = 18

// 字面量类型
let message: 'hello' = 'hello'

export {}

~~~~

## ts与js数据类型



#### number

![image-20230310021617929](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230310021617929.png)

#### boolean![image-20230310021703236](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230310021703236.png)

#### string

![image-20230310021747221](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230310021747221.png)

#### array

![image-20230310025727719](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230310025727719.png)

~~~~ts
// 数组明确指定类型注解的方式
// 1.方式一 let 变量 类型[] = 值

// 数组中一般不要放两种类型 因为一般要对数组进行统一处理
let arr: number[] = [1, 2, 3]
arr.push(4)
// 如果我们指定了类型 调用相对应函数 就会提示错误
// arr.push('4')
// 2.方式二 泛型写法(后面再说) 一般采用第一种写法即可
let arr2: Array<string> = ['a', 'b', 'c']
arr2.push('1')

export {}

~~~~

#### object



![image-20230310030307799](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230310030307799.png)

正确做法

~~~~ts
// 这种写法是错误的 开发一般不会这么写
let obj: object = { name: '张三', age: 18 }

// 正确写法 但是这种写法还有缺陷,
// 就是你定义值的类型必须有否则会报错 例如定义了一个height是number类型 但是我们对象中没有height的这个属性就会报错
let obj2: {
  name: string
  age: number
} = {
  name: '张三',
  age: 18,
}

console.log(obj2.age)
console.log(obj2.name)

~~~~

#### symbol

![image-20230310030437467](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230310030437467.png)

#### null和undefined

![image-20230310030500142](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230310030500142.png)

#### 练习:封装函数时进行类型注解

##### 函数参数注解

~~~~ts
// 函数的推导类型为any类型
// 我们定义类型 都要明确指定参数类型! 更安全
function sum(num1: number, num2: number) {
  return num1 + num2
}

// 如果我们没有对返回值进行注解 会自动推导类型
let res = sum(123, 321)

// sum('1', '2') // 报错

~~~~

##### 返回值类型注解

~~~~ts
//函数括号()后面进行返回值类型的注解
// 函数的返回值类型可以手动注解和自动类型推导
function sum(num1: number, num2: number): number {
  return num1 + num2
}

let res = sum(123, 321)

export {}
~~~~

##### 歌词解析函数封装时类型注解

~~~~ts
// 1.后面再讲 他可以定义一个对象中的key都需要使用哪些类型才行
type lyricType = {
  time: number
  text: string
}

// 2.lyric 必须传入字符串类型        : lyricType[] 是返回值类型 这里是对象中必须有time和text的key
function parseLyric(lyric: string): lyricType[] {
    // 3. lyrics 为数组中传入的类型必须是 lyricType
  const lyrics: lyricType[] = []
  // 4. push进去时 如果传的不是我们注解的类型就会报错 更佳利于维护
  lyrics.push({ time: 1111, text: '天空好像下雨' })
  return lyrics
}

const lyricInfos = parseLyric('fafafadada')

// 循环之后 提示更佳友好 且如果获取的值不存在就会报错提示我们s
for (const item of lyricInfos) {
  console.log(item.time, item.text)
}

~~~~

#### 匿名函数的参数

~~~~ts
const arr = ['1', '2', '3']

// 我们传入的匿名函数大部分情况不要做类型注解 但是我们自己写的函数最好做类型注解
// 因为会根据上下文帮我们推导类型,我们手动加还有可能加错
arr.forEach((item, index, ar) => {
  console.log(item, index, ar)
})
export {}

~~~~

#### 对象和函数结合使用的类型注解

~~~~ts
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


// 这种写法与printInfo写法一样 只不过上面通过type关键字把类型定义在外面
function printInfo2(point: {x:number,y:number,z?:number}){}

export {}

~~~~

#### ts新增类型 any

![image-20230310142742099](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230310142742099.png)

~~~~js
// id有可能是各种类型的情况 没办法确定类型 直接使用any类型
// 使用any类型之后,相当于变成了javascript 
// 但是有是有应用场景的 例我们发请求到服务器返回的一个数组,数组里面包含对象 字符串 数组 等 就可以使用any类型 
// 或把那些数组中比较重要的指定类型
let id: any = 'aa'

id = 123
id = { name: 'www', age: 20 }

~~~~

#### ts新增类型 unknown类型

#### unknown与any的区别(面试题)

~~~~ts
// unknown也能表示不确定的类型

let foo: unknown = '123'

foo = 123

// 与any的区别
// unknown类型在默认情况下不能进行任何操作(不能调方法等)
// unknown是更佳安全的any类型
//  any无论是什么操作 都可以直接进行操作(不安全)

// 而要对unknown进行操作
// 必须进行类型缩小 指对unknown进行判断 为指定类型就可以进行操作
if (typeof foo === 'string') {
  console.log(foo.length) // 不报错
}

// 直接调用 报错 它不知道是什么类型
// console.log(foo.length) 报错

export {}

~~~~

#### ts新增类型 void类型

![image-20230310150855375](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230310150855375.png)

~~~~ts
// ts中函数没有返回值 函数返回值是void类型
// ts中函数默认情况下不返回的情况下,不是返回undefined而是void
// void类型我们也可以返回undefined(了解)
function add(num1, num2): void {
  console.log(num1, num2)
}

add(1, 2)

// void的使用场景 用的最多地方
// 表示给函数定义类型为void 这里不能像其他类型():void的进行注解的写法
// 给函数指定类型 () => void 
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

~~~~

#### ts新增类型 never(很少用)

![image-20230313020400342](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230313020400342.png)

~~~~tsx
// 1.一个函数是死循环
// 2.一个函数没有返回任何东西 就是never类型
function foo(): never {
  throw new Error('111')
}

foo()

// 这里返回的空数组 他也会自动推导为never
// 实际开发中,类型推导自己会推导为never 其他时候很少会使用到never
function bar() {
  return []
}
bar()

// 封装框架/库的时候也可以使用never
// 1.never的应用场景 例如我们在这里允许传入三种数据类型
function handlerMessage(message: string | number | boolean) {
    // 2.使用switch判断 如果是字符串 或者number都进行处理
    // 3. 但是下面我们忘记对布尔类型进行处理了 
    // 而default处的check我们定义了never类型 那他这个布尔值是不能被赋值给check的 所以会报错我们!
  switch (typeof message) {
    case 'string':
      console.log(message.length)
      break
    case 'number':
      console.log(message)
      break
    default:
      const check: never = message
  }
}
handlerMessage(true)
export {}

~~~~

![image-20230313021846421](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230313021846421.png)

~~~~tsx
// 封装框架/库的时候也可以使用never
function handlerMessage(message: string | number | boolean) {
  switch (typeof message) {
    case 'string':
      console.log(message.length)
      break
    case 'number':
      console.log(message)
      break
    case 'boolean': // 处理后的代码不报错了
      console.log(Number(message)) 
      break
    default:
      const check: never = message
  }
}
handlerMessage(true)
export {}
~~~~

#### ts新增类型 tuple(元组)类型

![image-20230313023355339](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230313023355339.png)

~~~~tsx
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


export {}

~~~~

![image-20230313023500054](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230313023500054.png)

![image-20230313023511744](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230313023511744.png)

##### 元组类型应用场景

![image-20230313023908882](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230313023908882.png)

# typescript细节

## 联合类型

![image-20230313025841806](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230313025841806.png)

~~~~tsx
// 2.举例 返回id(id一般有数字和字符串类型)
// 此处要求传入的为string或者number类型
function printID(id: number | string) {
  console.log('id', id)
    // 联合类型在使用时候要用类型缩小(判断是什么类型)
  if (typeof id === 'string') {
    console.log(id.length)
  } else {
    console.log(id)
  }
}
printID('abc')
printID(123)

export {}

~~~~

# 回顾

## 一. 完成课堂所有的代码







## 二. JavaScript有什么缺点？TypeScript弥补了JavaScript的什么缺点？

**js的缺陷 -> 没有确定类型**

**ts弥补了js不能对类型进行判断**



## 三. TypeScript有什么特点？哪些框架或者项目在使用TypeScript？

TypeScript的特点 ->

1.   typescripit是js的超集, 他包括了js的所有语法包括最新的语法

2. typescripit可以对类型进行判断,

3. typescripit类型注解,让代码更佳容易维护,且提高了代码的可读性

   

使用TypeScript的框架

​	1.Vue3源码

​	2.React源码





## 四. TypeScript的运行环境如何搭建？如何运行TypeScript代码？

1.通过webpack搭建的环境,使用ts-loader typescript 编译为js代码

2.安装typescript为我们提供的编译工具 

3.使用tsc xxx来编译ts代码 



## 五. 如何定义TypeScript的变量，定义变量支持哪些JavaScript类型？

const num :number= '123'

const str:string = '123'

const arr: number[] =[1,2,3]  

const obj :{name:string,age:number} ={name:'张三',age:18}

function foo():void{}   -> 指定函数的返回值



## 六. 常见的TypeScript特有类型有哪些？这些类型有什么作用？

any类型

​	any类型相对应js中普通的代码一样,他没有对类型进行任何校验,当我们操作any的值时候需要格外小心

unknown类型

​	unknown有点类似于any类型 ,但是我们对它进行操作的时候,不能像any一样随心所欲,而是要先进行类型缩小(判断是什么类型)

void类型

一般用来指定函数的返回值  当一个函数返回undefined或者没有返回值时候,函数就是void类型

never类型

1. ​	一个函数是死循环 
2.  一个函数没有返回任何东西 就是never类型

tuple元组

1.  元组类型(介于数组和对象之间的数据类型) python等语言中有这个类型
2.  相对数组来说 元组类型中可以存放不同数据类型
3.  取出来的value也是有对应的类型的
