import * as React from 'react'
import { HomeItemProps } from '../types/props'

const styles: React.CSSProperties = {
  container: {
    width: '100%',
    height: '145px',
    borderTop: '3px solid #9F621C',
    backgroundColor: '#433939'
  },
  icon: {
    width: '63px',
    float: 'left',
    margin: '41px 0px 0px 20px'
  },
  arrow: {
    width: '100px',
    marginTop: '75px',
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
  },
  cls5: {
    fill: '#fff'
  }
}

class HomeItem extends React.Component<HomeItemProps> {
  constructor (props: HomeItemProps) {
    super(props)
  }

  render () {
    return (
        <div style={styles.container}>
          <div style={styles.icon}>
            {(() => {
              switch (this.props.link) {
                case 'projects':
                  return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="1889 1488.5 53 47.5">
                      <path id="application" style={styles.cls5} d="M50.111,4A5.912,5.912,0,0,1,56,9.938V45.563A5.913,5.913,0,0,1,50.111,51.5H8.889A5.912,5.912,0,0,1,3,45.563V9.938A5.913,5.913,0,0,1,8.889,4H50.111m0,41.563V15.875H8.889V45.563Z" transform="translate(1886 1484.5)"/>
                    </svg>
                  )
                case 'personnal':
                  return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="1889 1596.5 53 47.5">
                      <path id="account-outline" style={styles.cls5} d="M30.5,30.719C21.656,30.719,4,34.667,4,42.594V51.5H57V42.594c0-7.927-17.656-11.875-26.5-11.875M30.5,4C23.182,4,17.25,9.317,17.25,15.875S23.182,27.75,30.5,27.75s13.25-5.317,13.25-11.875S37.818,4,30.5,4m0,32.359c9.838,0,20.206,4.334,20.206,6.234v3.266H10.294V42.594c0-1.9,10.269-6.234,20.206-6.234m0-26.719c3.842,0,6.956,2.791,6.956,6.234s-3.114,6.234-6.956,6.234-6.956-2.791-6.956-6.234S26.658,9.641,30.5,9.641Z" transform="translate(1885 1592.5)"/>
                    </svg>
                  )
                case 'contact':
                  return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="1889 1704.5 53 47.5">
                      <path id="comment-text-multiple-outline" style={styles.cls5} d="M27.5,48.5a2.294,2.294,0,0,1-2.409-2.159V39.864H15.455a4.589,4.589,0,0,1-4.818-4.318V13.955a4.589,4.589,0,0,1,4.818-4.318H49.182A4.589,4.589,0,0,1,54,13.955V35.545a4.589,4.589,0,0,1-4.818,4.318H39.3l-8.914,8.01A2.679,2.679,0,0,1,28.7,48.5H27.5m2.409-12.955V42.2l7.42-6.65H49.182V13.955H15.455V35.545H29.909M5.818,31.227H1V5.318A4.589,4.589,0,0,1,5.818,1H44.364V5.318H5.818V31.227M20.273,18.273H44.364v4.318H20.273V18.273m0,8.636H39.545v4.318H20.273Z" transform="translate(1888 1703.5)"/>
                    </svg>
                  )
                default:
                  break
              }
            })()}
          </div>
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
                  <g id="ic_arrow_forward" transform="translate(47 294)" onClick={this.onHomeItemClick}>
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
