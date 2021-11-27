import './index.scss'
import webpackImage from './assets/webpack.png'

function component() {
  const element = document.createElement('div')

  element.innerHTML = 'components'
  element.className = 'container'

  const image = document.createElement('img')

  image.src = webpackImage

  element.appendChild(image)

  return element
}

document.body.appendChild(component())
