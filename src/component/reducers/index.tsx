import { initialState } from '../types/index'
import * as Actions from '../actions/index'
import * as ActionType from '../actions/action'
import { Lang } from '../types'
import { combineReducers } from 'redux'

function dialogsReducers (state = { menu: false }, action: any) {
  switch (action.type) {
    case ActionType.TOGGLE_MENU:
      return 1
    default:
      return state
  }
}

function pageReducers (state = 'home', action: any) {
  return state
}

function langReducers (state = Lang.fr, action: any) {
  return state
}

const appReducer = combineReducers({
  dialogsReducers,
  pageReducers,
  langReducers
})

export default appReducer
