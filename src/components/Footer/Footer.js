import styles from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    

<div className={styles.wrapper}>
      <ul>
        {" "}
        <FontAwesomeIcon icon={faChevronRight} />
        Информация
        <li className={styles.chevron}>&rsaquo;О нас</li>
        <li className={styles.chevron}>&rsaquo;Информация о доставке</li>
        <li className={styles.chevron}>&rsaquo;Политика безопасности</li>
      </ul>
      <ul>
        {" "}
        <FontAwesomeIcon icon={faChevronRight} />
        Популярное
        <li className={styles.chevron}>&rsaquo;Папки из картона</li>
        <li className={styles.chevron}>&rsaquo;Крафт пакеты</li>
        <li className={styles.chevron}>&rsaquo;Коробки самосборные</li>
      </ul>
      <ul>
        {" "}
        <FontAwesomeIcon icon={faChevronRight} />
        Дополнительно{" "}
      </ul>
      <ul>
        {" "}
        <FontAwesomeIcon icon={faChevronRight} />
        Схема проезда
        <li className={styles.chevron}>
          <FontAwesomeIcon icon={faMapMarker} />
          Москва
        </li >
        <li className={styles.chevron}>
          <FontAwesomeIcon icon={faPhone} />
          телефон
        </li>
        <li className={styles.chevron}>
          <FontAwesomeIcon icon={faEnvelope} />
          почта
        </li>
      </ul>
      <div className={styles.footer__text}>Изготовление полиграфической продукции в Москве</div>
    </div>

    


    
    
  );
}

export { Footer };
