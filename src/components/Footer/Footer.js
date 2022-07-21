import styles from "./Footer.module.scss";

function Footer() {
  return (
    <div className={styles.wrapper}>
      <ul>
        информация
        <li>О нас</li>
        <li>Информация о доставке</li>
        <li>Политика безопасности</li>
      </ul>
      <ul>
        Популярное
        <li>Папки из картона</li>
        <li>Крафт пакеты</li>
        <li>Коробки самосборные</li>
      </ul>
      <ul>Дополнительно
        <li>Дополнительно</li>
      </ul>
      <ul>
        Схема проезда
        <li>Москва</li>
        <li>телефон</li>
        <li>почта</li>
      </ul>
    </div>
  );
}

export { Footer };
