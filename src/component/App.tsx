import * as React from 'react'
import MenuButton from './ui/MenuButton'
import * as Redux from 'redux'
import AppState, { initialState } from './types/index'
import appReducer from './reducers/index'

const style: React.CSSProperties = {
  width: '10vw',
  position: 'fixed',
  top: 0,
  left: 0
}

class App extends React.Component {
  store: Redux.Store<any>

  constructor (props: any) {
    super(props)
    this.store = Redux.createStore(appReducer, initialState)
  }

  render (): any {
    return (
      <div className="navMenu" style={ style }>
        <MenuButton />
      </div>
    )
  }

  onMenuButtonClick (): void {
    console.log('clicked')
  }
}

export default App
