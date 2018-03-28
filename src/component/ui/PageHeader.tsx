import * as React from 'react'

class PageHeader extends React.Component {
  constructor (props: any) {
    super(props)
  }

  render () {
    return (
        <div>
            <span>Rémi Lelaidier</span>
            <span>Dév Web</span>
        </div>
    )
  }
}

export default PageHeader
