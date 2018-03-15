import * as React from 'react'

class MenuButton extends React.Component {
  render (): any {
    const cls1 = {
      fill: 'none'
    }
    const cls2 = {
      clipPath: 'url(#clip-path)'
    }
    const cls3 = {
      fill: '#fb8c00',
      stroke: '#707070'
    }
    const cls4 = {
      fill: '#040404',
      opacity: 0.54
    }
    const cls5 = {
      filter: 'url(#path)'
    }
    const cls6 = {
      filter: 'url(#Tracé_20)'
    }
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="2552.667 555.2 86.951 88.604"
            >
            <defs>
                <clipPath id="clip-path">
                <rect style={cls1} width="86.951" height="88.604"/>
                </clipPath>
                <filter id="Tracé_20" x="2543.167" y="548.7" width="106.643" height="108.327" filterUnits="userSpaceOnUse">
                <feOffset dy="3"/>
                <feGaussianBlur stdDeviation="3" result="blur"/>
                <feFlood flood-opacity="0.161"/>
                <feComposite operator="in" in2="blur"/>
                <feComposite in="SourceGraphic"/>
                </filter>
                <filter id="path" x="2557" y="561" width="36" height="33.999" filterUnits="userSpaceOnUse">
                <feOffset dy="3"/>
                <feGaussianBlur stdDeviation="3" result="blur-2"/>
                <feFlood flood-opacity="0.161"/>
                <feComposite operator="in" in2="blur-2"/>
                <feComposite in="SourceGraphic"/>
                </filter>
            </defs>
        <g id="Grille_de_répétition_2" data-name="Grille de répétition 2" style={cls2} transform="translate(2552.667 555.2)">
            <g transform="translate(-27.667 -23.2)">
            <g style={cls6} transform="matrix(1, 0, 0, 1, -2525, -532)">
            <path id="Tracé_20-2" data-name="Tracé 20" style={cls3} d="M-54.833-11.3H32.118L-54.833,77.3V-11.3" transform="translate(2607.5 566.5)"/>
        </g>
        <g id="ic_menu" transform="translate(-707 -37)">
            <rect id="rectangle" style={cls1} width="24" height="20.651" transform="translate(745 78)"/>
            <g style={cls5} transform="matrix(1, 0, 0, 1, -1818, -495)">
            <path id="path-2" data-name="path" style={cls4} d="M3,22H21V19.332H3V22Zm0-6.666H21V12.666H3v2.666ZM3,6V8.666H21V6Z" transform="translate(2563 561)"/>
        </g>
        </g>
        </g>
        </g>
        </svg>
    )
  }
}

export default MenuButton
