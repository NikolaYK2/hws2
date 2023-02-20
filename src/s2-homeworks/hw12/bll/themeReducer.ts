export type StateInitStateType = {
    themeId: number,
}
const initState: StateInitStateType = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ActionsTypeThemeReducer): StateInitStateType => { // fix any
    switch (action.type) {
        // дописать
        case "SET_THEME_ID": {
            return {...state, themeId: action.id}
        }
        default:
            return state
    }
}

type ActionsTypeThemeReducer = ChangeThemeIdActionType

const SET_THEME_ID = 'SET_THEME_ID'

type ChangeThemeIdActionType = {
    type: typeof SET_THEME_ID,
    id: number,
}
export const changeThemeId = (id: number): ChangeThemeIdActionType => ({type: 'SET_THEME_ID', id})  // fix any
