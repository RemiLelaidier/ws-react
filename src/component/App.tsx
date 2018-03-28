import * as React from 'react'
import MenuButton from './ui/MenuButton'
import MenuPanel from './ui/MenuPanel'
import PageHeader from './ui/PageHeader'
import AppState, { initialState } from './types/index'

class App extends React.Component {
  state: AppState

  constructor (props: any) {
    super(props)
    this.state = initialState
  }

  render (): any {
    return (
      <div>
        <div id="navMenu">
        {
          (this.state.dialogs.menu)
          ? <MenuPanel onMenuButtonClick={this.onMenuButtonClick}/>
          : <MenuButton onMenuButtonClick={this.onMenuButtonClick}/>
        }
        </div>
        <div id="home">
          <PageHeader />
        </div>
      </div>
    )
  }

  onMenuButtonClick = (event: any) => {
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
