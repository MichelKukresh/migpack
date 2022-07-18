import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styles from "./SearchForm.module.scss";

function SearchForm () {

    

    
        const [isSearchDropDownUpIconRotate, setSearchDropDownUpIconRotate] =
          useState(true);
      
        function handleSearchDropDownUpIconRotate() {
          if (isSearchDropDownUpIconRotate) {
            setSearchDropDownUpIconRotate(false);
          } else {
            setSearchDropDownUpIconRotate(true);
          }
        }
    


    return(

        <div className={styles.header_search__form}>
        <button
          onClick={() => handleSearchDropDownUpIconRotate()}
          className={styles.search_category_btn}
        >
          Все категории
        </button>
        <div
          onClick={() => handleSearchDropDownUpIconRotate()}
          className={styles.search_dropDownUp}
        >
          <FontAwesomeIcon
            className={`${styles.search_dropDownUp_icon} ${
              isSearchDropDownUpIconRotate &&
              styles.search_dropDownUp_icon_rotate
            } `}
            icon={faChevronDown}
          />
        </div>

        <input
          
          type="text"
          name="search"
          value=""
          placeholder="Поиск"
          aria-label="Search"
          class="header-search__input form-control"
          autocomplete="off"
          className={styles.search_input}
        />
        <button className={styles.search_iline} type="button">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>

    )
}

export {SearchForm} ;