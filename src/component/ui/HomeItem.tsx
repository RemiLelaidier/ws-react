import * as React from 'react'
import { HomeItemProps } from '../types/props'

const styles: React.CSSProperties = {
  container: {
    width: '100%',
    height: '160px',
    borderTop: '3px solid #9F621C',
    backgroundColor: '#433939'
  },
  arrow: {
    width: '100px',
    marginTop: '90px',
    marginLeft: '263px'
  },
  cls1: {
    fill: 'none'
  },
  cls2: {
    clipPath: 'url(#clip-path)'
  },
  cls3: {
    fill: '#fb8c00'
  },
  cls4: {
    fillRule: 'evenodd',
    opacity: 0.54
  }
}

class HomeItem extends React.Component<HomeItemProps> {
  constructor (props: HomeItemProps) {
    super(props)
  }

  render () {
    return (
        <div style={styles.container}>
          <div style={styles.arrow}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="1783 628 89 63">
              <defs>
                <clipPath id="clip-path">
                  <rect style={styles.cls1} width="89" height="63"/>
                </clipPath>
              </defs>
              <g id="Grille_de_répétition_3" data-name="Grille de répétition 3" style={styles.cls2} transform="translate(1783 628)">
                <g transform="translate(-271 -340)">
                  <path id="Tracé_23" data-name="Tracé 23" style={styles.cls3} d="M-54.833-11.3h89l-89,63v-63" transform="translate(305.167 391.7) rotate(180)"/>
                  <g id="ic_arrow_forward" transform="translate(47 294)">
                    <rect id="rectangle" style={styles.cls1} width="24" height="24" transform="translate(277 78)"/>
                    <path id="path" style={styles.cls4} d="M12,4,10.6,5.4,16.2,11H4v2H16.2l-5.6,5.6L12,20l8-8Z" transform="translate(277 78)"/>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
    )
  }

  onHomeItemClick = (event: any) => {
    this.props.onHomeItemClick(event)
  }
}

export default HomeItem
