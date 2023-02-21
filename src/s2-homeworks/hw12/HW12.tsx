import React, {useEffect} from 'react'
import s from './HW12.module.css'
import s2 from '../../s1-main/App.module.css'
import SuperSelect from '../hw07/common/c5-SuperSelect/SuperSelect'
import {useDispatch, useSelector} from 'react-redux'
import {changeThemeId} from './bll/themeReducer'

/*
* 1 - в файле themeReducer.ts написать нужные типы вместо any, дописать редьюсер
* 2 - получить themeId из редакса
* 3 - дописать тип и логику функции change
* 4 - передать пропсы в SuperSelect
* */

const themes = [
    {id: 1, value: 'light'},
    {id: 2, value: 'blue'},
    {id: 3, value: 'dark'},
]

const HW12 = () => {
    // взять ид темы из редакса
    const dispatch = useDispatch();
    // const themeId = useSelector<any, StateInitStateType>(state => state.theme.themeId);
    const themeId = useSelector<any, any>(state => state.theme.themeId);


    const change = (id: number) => { // дописать функцию
        dispatch(changeThemeId(id))
    }

    useEffect(() => {
        document.documentElement.dataset.theme = themeId + ''
    }, [themeId])

    let css = themeId === 3  ? s.select : '';

    return (
        <div id={'hw12'}>
            <div id={'hw12-text'} className={s2.hwTitle}>
                <span className={s2.hwTitleSpan}>Homework #12</span>
            </div>

            <div className={s2.hw}>
                <SuperSelect
                    id={'hw12-select-theme'}
                    className={css}
                    onChangeOption={change}
                    options={themes}
                    // сделать переключение тем

                />
            </div>
        </div>
    )
}

export default HW12
