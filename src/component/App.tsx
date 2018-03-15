import * as React from 'react'
import MenuButton from './ui/MenuButton'

class App extends React.Component {
  render (): any {
    return (
      <div className="navMenu" style={{ width: '10vw', position: 'fixed', top: 0, left: 0 }}>
        <MenuButton />
      </div>
    )
  }
}

export default App
