import * as React from 'react'
import MenuButton from './ui/MenuButton'
import MenuPanel from './ui/MenuPanel'
import PageHeader from './ui/PageHeader'
import HomeItem from './ui/HomeItem'
import AppState, { initialState } from './types/state'

const styles: React.CSSProperties = {
  home: {
    display: 'flex',
    flexDirection: 'column'
  }
}

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
        <div id="home" style={styles.home}>
          <PageHeader />
          <HomeItem
            name="Projets"
            description="les projets c'est cool"
            link="projects"
            onHomeItemClick={this.onHomeItemProjectsClick} />
          <HomeItem
            name="Personnel"
            description="c'est moi"
            link="personnal"
            onHomeItemClick={this.onHomeItemPersonnalClick} />
          <HomeItem
            name="Contact"
            description="ET téléphone maison"
            link="contact"
            onHomeItemClick={this.onHomeItemContactClick} />
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

  onHomeItemProjectsClick = (event: any) => {
    console.log(event)
  }

  onHomeItemPersonnalClick = (event: any) => {
    console.log(event)
  }

  onHomeItemContactClick = (event: any) => {
    console.log(event)
  }
}

export default App
