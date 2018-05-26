import path from 'path'
import React from 'react'
import { render } from 'react-dom'

const req = require.context('.', true, /\.js$/)

const components = req.keys()
  .map(key => {
    const name = path.basename(key, path.extname(key))
    const module = req(key)
    const Component = module.default || module
    return {
      key,
      name,
      module,
      Component
    }
  })
  .filter(c => typeof c.Component === 'function')

class App extends React.Component {
  render () {
    return (
      <div>
        <h1>Hello</h1>
        <pre>{components.length} components</pre>
        {components.map(({ key, Component }) => (
          <Component key={key} />
        ))}
      </div>
    )
  }
}

render(<App components={components} />, root)

if (module.hot && module.hot.accept) {
  module.hot.accept()
}
