/**
 * 深拷贝
 */

const obj1 = {
  name: '张三',
  age: 30,
  address: {
    city: 'beijing'
  },
  arr: ['a', 'b', 'c']
}

// const obj2 = obj1 // 浅拷贝
// obj2.address.city = 'shanghai' // obj1 的 address.city 会改变
// console.log(obj1.address.city) // shanghai

const obj2 = deepClone(obj1) // 深拷贝
obj2.address.city = 'shanghai'
obj2.arr[0] = 'a1'
console.log(obj1.address.city) // beijing
console.log(obj1.arr[0])
console.log(obj2.address.city)
console.log(obj2.arr[0])
/**
 * @description 深拷贝 方法
 * @param {Object} obj 要拷贝的对象
 */
function deepClone(obj = {}) {
  // obj 是 null ，或者不是 object ，直接返回
  if (typeof obj !== 'object' || obj == null) {
    return obj
  }

  // 初始化返回结果
  let result
  if (obj instanceof Array) {
    result = []
  } else {
    result = {}
  }

  for (let key in obj) {
    // 保证 key 不是原型的属性
    if (obj.hasOwnProperty(key)) {
      // 递归调用！！！
      result[key] = deepClone(obj[key])
    }
  }

  // 返回结果
  return result
}
