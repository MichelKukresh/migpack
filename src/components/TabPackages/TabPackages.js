import styles from "./TabPackages.module.scss";

function TabPackages() {
  return (
    <div className={styles.wrapper}>
      <div >
        <ul className={styles.tab_lists}><span className={styles.tab_tool_bar}>Пакеты</span>
          <li className={styles.tab_list}>  <span>&raquo;</span>  Пакеты полиэтиленовые</li>
          <li className={styles.tab_list}>  <span>&raquo;</span>Пакеты из мелановой бумаги</li>
          <li className={styles.tab_list}>  <span>&raquo;</span>Крафт пакеты</li>
          <li className={styles.tab_list}>  <span>&raquo;</span>Пакеты под бутылку</li>
          <li className={styles.tab_list}>  <span>&raquo;</span>Пакеты из дизайнерской бумаги</li>
          <li className={styles.tab_list}>  <span>&raquo;</span>Пакеты из картона</li>
          <li className={styles.tab_list}>  <span>&raquo;</span>Пакеты из эфалина</li>
          <li className={styles.tab_list}>  <span>&raquo;</span>Пакеты из плайка</li>
          <li className={styles.tab_list}>  <span>&raquo;</span>Следующий таб +</li>  
          <li className={styles.tab_list}>  <span>&raquo;</span>Следующий таб +</li>            
        </ul>



      </div>
      <div>
        <div>Имя тоол бара</div>
        <div>Отображение товара</div>
        <div>Отображение товара</div>
        <div>Карточка товара</div>
        <div>Карточка товара</div>
        <div>Карточка товара</div>
        <div>Карточка товара</div>
        <div>Карточка товара</div>
        <div>Карточка товара</div>
      </div>
    </div>
  );
}

export {TabPackages};
