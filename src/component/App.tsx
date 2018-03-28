import * as React from 'react'
import MenuButton from './ui/MenuButton'
import MenuPanel from './ui/MenuPanel'
import AppState, { initialState } from './types/index'

const style: React.CSSProperties = {
  width: '10vw',
  position: 'fixed',
  top: 0,
  left: 0
}

class App extends React.Component {
  state: AppState

  constructor (props: any) {
    super(props)
    this.state = initialState
  }

  render (): any {
    return (
      <div className="navMenu" style={ style }>
        {
          (this.state.dialogs.menu)
          ? <MenuPanel onMenuButtonClick={this.onMenuButtonClick}/>
          : <MenuButton onMenuButtonClick={this.onMenuButtonClick}/>
        }
      </div>
    )
  }

  onMenuButtonClick = (event: any) => {
    console.log('clicked')
    this.setState((prevState: AppState) => {
      return {
        dialogs: {
          menu: !prevState.dialogs.menu
        }
      }
    })
  }
}

export default App
