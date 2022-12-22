import s from './Loader.module.css'
import RippleLoading from './RippleLoading.svg'

export const Loader = () => {
    return(
        <div className={s.loader}>
            <img src={RippleLoading} alt=""/>
        </div>
    );
}
// export const Loader = () => <div className={s.loader} />
