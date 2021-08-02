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
