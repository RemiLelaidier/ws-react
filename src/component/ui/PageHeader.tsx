import * as React from 'react'

const styles: React.CSSProperties = {
  container: {
    backgroundColor: '#433939',
    width: '100%',
    height: '240px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#FFFFFF'
  },
  firstLetter: {
    color: '#FB8C00'
  },
  subHeader: {
    color: '#785128'
  }
}

class PageHeader extends React.Component {
  constructor (props: any) {
    super(props)
  }

  render () {
    return (
        <div style={styles.container}>
            <h1><span style={styles.firstLetter}>R</span>émi <span style={styles.firstLetter}>L</span>elaidier</h1>
            <span style={styles.subHeader}>Développeur Web</span>
        </div>
    )
  }
}

export default PageHeader
