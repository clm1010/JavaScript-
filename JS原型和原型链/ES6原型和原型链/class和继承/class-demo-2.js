// 继承
// 父类
class People {
  constructor(name) {
    this.name = name
  }
  eat() {
    console.log(`${this.name} eat something`)
  }
}

// 子类
class Student extends People {
  constructor(name, number) {
    super(name)
    this.number = number
  }
  sayHi() {
    console.log(`姓名：${this.name} 学号：${this.number}`)
  }
}

// 子类
class Teacher extends People {
  constructor(name, major) {
    super(name)
    this.major = major
  }
  teach() {
    console.log(`${this.name} 教授：${this.major}`)
  }
}

// 实例
const xialuo = new Student('夏洛', 100)
console.log(xialuo.name)
console.log(xialuo.number)
xialuo.sayHi()
xialuo.eat()

// 实例
const zhaolaoshi = new Teacher('赵老师', '数学')
console.log(zhaolaoshi.name)
console.log(zhaolaoshi.major)
zhaolaoshi.teach()
zhaolaoshi.eat()

console.log(typeof Student)
console.log(typeof People)

console.log(xialuo instanceof Student)
console.log(xialuo instanceof People)
console.log(xialuo instanceof Object)

console.log(xialuo.__proto__ === Student.prototype)
