import * as React from 'react'
import { MenuButtonProps } from '../types/props'

class MenuPanel extends React.Component<MenuButtonProps> {
  constructor (props: any) {
    super(props)
  }

  render (): any {
    return (
        <div onClick={this.onMenuButtonClick}>MENU PANEL</div>
    )
  }

  onMenuButtonClick = (event: any) => {
    this.props.onMenuButtonClick(event)
  }
}

export default MenuPanel
