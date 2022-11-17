import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
                return [...state.sort((a, b) => action.payload === 'up' ?
                    a.name.localeCompare(b.name) :
                    b.name.localeCompare(a.name))].map(age=>age) // need to fix
                // return [...state].sort((a, b) => action.payload === 'up' ?
                //     a.name.localeCompare(b.name) :
                //     b.name.localeCompare(a.name)) // вроде даже так должно быть правильно, мы сначала копируем массив а только потом сортируем
            }
        case 'check': {
            return state.filter(age=>age.age >= action.payload).reverse().map(age=>age);
            // need to fix
        }
        default:
            return state;
    }
};
