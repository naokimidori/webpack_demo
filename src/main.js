import icon from  './icon.png'
import createHeading from './heading.js'
import './main.css'
import settting from './setting.png'

import about from './about.md'

const heading = createHeading()

document.body.append(heading)

const img = new Image(200, 200)
img.src = icon
img.classList.add('img')

document.body.append(img)

const img2 = new Image(20, 20)
img2.src = settting
img2.classList.add('img')

document.body.append(img2)

console.log(about);


// 跨域请求
const ul = document.createElement('ul')
document.body.append(ul)

fetch('/api/users')
  .then(res => res.json())
  .then(data => {
    data.forEach(item => {
      const li = document.createElement('li')
      li.textContent = item.login
      ul.append(li)
    })
  })
