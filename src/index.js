require('webpack-serve-overlay')

const ctx = require.context('.', true, /\.examples\.js$/)

const data = ctx.keys().map(key => ctx(key))

const root = document.body.appendChild(
  document.createElement('div')
)

const render = (data) => {
  console.log('render', data)
  root.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`
}

render(data)

if (module.hot && module.hot.accept) {
  module.hot.accept()
}

export default () => {
  render(data)
}
