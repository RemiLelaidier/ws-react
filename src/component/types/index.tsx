export interface AppState {
  dialogs: Dialogs
  page: number
  lang: Lang
}

export interface Dialogs {
  menu: boolean
}

export enum Lang {
  fr = 'fr-FR',
  en = 'en-EN'
}
