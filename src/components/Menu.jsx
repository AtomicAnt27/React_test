import style from "./Menu.module.css"

export default function Menu(){
    return(
        <div className={style.wrapMenu}>
            <p className={style.alinks}>
                <a href={'/'}>Cards</a>
            </p>
            <p className={style.alinks}>
                <a href={'/contact'}>Contato</a>
            </p>
        </div>
    )
}