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
console.log(obj1.address.city) // beijing

/**
 * @description 深拷贝 方法
 * @param {Object} obj 要拷贝的对象
 */
function deepClone(obj = {}) {
  // console.log(typeof obj)
  if (typeof obj !== 'object' || obj == null) {
    // obj 是 null ，或者不是对象和数组，直接返回
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
