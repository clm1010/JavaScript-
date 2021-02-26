const frag = document.createDocumentFragment()
let a
for (let i = 0; i < 10; i++) {
  a = document.createElement('a')
  a.innerHTML = i + '<br/>'
  a.addEventListener('click', function (e) {
    e.preventDefault()
    alert(i)
  })
  frag.appendChild(a)
}
document.body.appendChild(frag)
