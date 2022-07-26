import styles from "./ProductCard.module.scss";

function ProductCard () {
    return(
        <div className={styles.wrapper}>
            <div className={styles.product__imagesBox}>
                <div className={styles.images_addItem1}></div>
                <div></div>  
                <div></div>  
                <div></div>
                <div></div>                                
            </div>
            <span>Пакет полиэтиленовый ПВД</span>
            <span>Плотность: 50/60/70/80/100 мкр.</span>
        </div>
    )
}

export {ProductCard};
