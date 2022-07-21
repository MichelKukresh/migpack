import styles from "./MenuLavel.module.scss";

function MenuLavel () {
    return (

        
        <ul className={styles.wrapper}>
            <li >Пакеты</li>
            <li >Папки вырубные</li>
            <li >Коробки</li>
            <li >Услуги</li>
            <li >Отзывы</li>
            <li >Контакты</li>        
        </ul>

    )
}

export {MenuLavel} ;