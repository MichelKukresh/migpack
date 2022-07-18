import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faAlignRight } from "@fortawesome/free-solid-svg-icons";

import logo from "../../images/migpack5.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { SearchForm } from "../SearchForm/SearchForm";

function Header() {

  return (

    <div className={styles.wrapper}>
      <div className={styles.top_menu}>
        <div>
          <Link to="">Информация о доставке</Link>
          <Link to="">О нас</Link>
          <Link to="">Политика безопасности</Link>
        </div>
        <div>
          <FontAwesomeIcon icon={faHeart} />
          <Link to="">Избранное</Link>
          <FontAwesomeIcon icon={faAlignRight} />
          <Link to="">Сравнение</Link>
          <FontAwesomeIcon icon={faUser} />
          <Link to="">Личный кабинет</Link>
        </div>
      </div>

      <div className={styles.container}>
        <img src={logo} alt="логотип"></img>

        <SearchForm></SearchForm>

        <div>
          <span className={styles.mumber_phone}>+7 (495) 744-60-84</span>
          <FontAwesomeIcon className={styles.icon_media} icon={faChevronDown} />
          <div className={styles.phone_envelope}>
            <FontAwesomeIcon className={styles.icon} icon={faPhone} />
            <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />
          </div>
        </div>

        <FontAwesomeIcon className={styles.shopping_bag} icon={faShoppingBag} />
      </div>
      <div className={styles.menu_lavel}>Меню линк</div>
    </div>
  );
}

export { Header };
