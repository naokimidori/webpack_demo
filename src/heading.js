import './heading.css'

export default () => {
  const ele = document.createElement('h2')

  ele.textContent = 'Hello Webpack'
  ele.classList.add('heading')
  ele.addEventListener('click', () => {
    alert('hello world')
  })
  
  console.log('haha')

  return ele
}