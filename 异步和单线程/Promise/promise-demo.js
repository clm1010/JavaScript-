function loadImg(src) {
  const p = new Promise((resolve, reject) => {
    const img = document.createElement('img')
    img.onload = () => {
      resolve(img)
    }
    img.onerror = () => {
      const err = new Error(`图片加载失败！${src}`)
      reject(err)
    }
    img.src = src
  })
  return p
}
// const url = 'https://img2.sycdn.imooc.com/5a9fc8070001a82402060220-160-160.jpg'

// loadImg(url)
//   .then((img) => {
//     console.log(img.width)
//     return img
//   })
//   .then((img) => {
//     console.log(img.height)
//   })
//   .catch((ex) => {
//     console.error(ex)
//   })
const url1 = 'https://img2.sycdn.imooc.com/5a9fc8070001a82402060220-160-160.jpg'
const url2 = 'https://img1.sycdn.imooc.com/climg/5fbb741b09da7b9540020800.jpg'

loadImg(url1)
  .then((img1) => {
    console.log(img1.width)
    return img1 // 普通对象
  })
  .then((img1) => {
    console.log(img1.height)
    return loadImg(url2) // promise实例
  })
  .then((img2) => {
    console.log(img2.width)
    return img2
  })
  .then((img2) => {
    console.log(img2.height)
    return img2
  })
  .catch((ex) => {
    console.error(ex)
  })
