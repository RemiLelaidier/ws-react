import * as React from 'react'
import { HomeItemProps } from '../types/props'

const styles: React.CSSProperties = {
  container: {
    width: '100%',
    height: '160px',
    borderTop: '3px solid #9F621C',
    backgroundColor: '#433939'
  }
}

class HomeItem extends React.Component<HomeItemProps> {
  constructor (props: HomeItemProps) {
    super(props)
  }

  render () {
    return (
        <div style={styles.container}>

        </div>
    )
  }
}

export default HomeItem
