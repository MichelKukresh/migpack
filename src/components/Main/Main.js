import { ProductCard } from "../ProductCard/ProductCard";
import { TabPackages } from "../TabPackages/TabPackages";
import styles from "./Main.module.scss";

function Main() {
  return (
    <div className={styles.wrapper}>
      <div>Хлебные крошки</div>
      <div className={styles.card__container}>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </div>

      <div className={styles.heading}>
        <div className={styles.hedingTitleAfter}>
          <span className={styles.hedingTitle}>Услуги типографии</span>
        </div>
        <span className={styles.hedingSubTitle}>
          Наша типография занимается производством и продажей полиграфической
          продукции. Бумажные пакеты, полиэтиленовые пакеты, коробки, папки -
          основное направление деятельности.Типография располагает собственной
          производственной базой по изготовлению продукции под ключ.
        </span>
      </div>
      <div className={styles.heading}>
        <div className={styles.hedingTitleAfter}>
          <span className={styles.hedingTitle}>Вы недавно смотрели</span>
        </div>        
      </div>
      <div className={styles.card__container}>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>        
      </div>
    </div>
  );
}

export { Main };
