export default interface AppState {
  dialogs: Dialogs
  page: string
  lang: Lang
}

export interface Dialogs {
  menu: boolean
}

export enum Lang {
  fr = 'fr-FR',
  en = 'en-EN'
}

export const initialState: AppState = {
  dialogs: {
    menu: false
  },
  page: 'home',
  lang: Lang.fr
}
