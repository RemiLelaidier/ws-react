import * as React from 'react'

const styles: React.CSSProperties = {
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#433939',
    width: '100%',
    height: '240px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
}

class PageHeader extends React.Component {
  constructor (props: any) {
    super(props)
  }

  render () {
    return (
        <div style={styles.container}>
            <span>Rémi Lelaidier</span>
            <span>Dév Web</span>
        </div>
    )
  }
}

export default PageHeader
