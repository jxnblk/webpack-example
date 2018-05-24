const ctx = require.context('.', true, /\.examples\.js$/)

const data = ctx.keys().map(key => ctx(key))

const render = (data) => {
  console.log('render', data)
  root.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`
}

render(data)

if (module.hot && module.hot.accept) {
  module.hot.accept(ctx.id, () => {
    const next = require.context('.', true, /\.examples\.js$/)
    const nextData = next.keys().map(key => next(key))
    render(nextData)
  })
}
