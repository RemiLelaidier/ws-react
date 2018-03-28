import * as React from 'react'
import { MenuButtonProps } from '../types/props'

const styles: React.CSSProperties = {
  container: {
    width: '20rem',
    top: '-7px',
    position: 'fixed',
    left: '-10px',
    zIndex: 99
  },
  cls1: {
    fill: '#433939',
    stroke: '#fb8c00',
    strokeWidth: '3px'
  },
  cls2: {
    filter: 'url(#Tracé_22)'
  }
}

class MenuPanel extends React.Component<MenuButtonProps> {
  constructor (props: any) {
    super(props)
  }

  render (): any {
    return (
      <div onClick={this.onMenuButtonClick} style={styles.container}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="1501.167 280.7 382.764 523.884"
            >
            <defs>
                <filter id="Tracé_22" x="1501.167" y="280.7" width="382.764" height="523.884" filterUnits="userSpaceOnUse">
                <feOffset dy="3"/>
                <feGaussianBlur stdDeviation="3" result="blur"/>
                <feFlood flood-opacity="0.451"/>
                <feComposite operator="in" in2="blur"/>
                <feComposite in="SourceGraphic"/>
                </filter>
            </defs>
            <g style={styles.cls2} transform="matrix(1, 0, 0, 1, 0, 0)">
                <path id="Tracé_22-2" data-name="Tracé 22" style={styles.cls1} d="M-54.833-11.3H305.5L-54.833,488.438V-11.3" transform="translate(1566.5 299.5)"/>
            </g>
        </svg>

        </div>
    )
  }

  onMenuButtonClick = (event: any) => {
    this.props.onMenuButtonClick(event)
  }
}

export default MenuPanel
