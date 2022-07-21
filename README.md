
### Комманды и пояснения:
* npx create-react-app migpack - установить реакт
* npm install --save react-router-dom - установить реакт роутер 
* npm i node-sass - установить SASS

* Деплой проекта: 
* * npm install gh-pages --save-dev
* * package.json добавить: "homepage": (имя которое даст Git) , "predeploy": "npm run build", "deploy": "gh-pages -d build"


* установка иконок : ссылка на видею с ютуба: [https://www.youtube.com/watch?v=RfyauPSPQgs]
* *  установка базовых пакетов || npm i -S @fortawesome/fontawesome-svg-core @fortawesome/react-fontawesome
* * установка нужных иконок || npm i -S @fortawesome/free-solid-svg-icons
* * импортируем компаненту в компаненту || import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
* * импортируем саму иконку || import { faPhone } from "@fortawesome/free-solid-svg-icons";
* * шаблон для вставки иконки || <FontAwesomeIcon icon={faPhone} />
* * ! не забываем добавить стили иконке !

* * SCSS правила :
* * обозначение переменной - $base
* * вычисления, пример with: (100% - #{$base})
* * 


* * Вопросы как можно ставлять блок поиска.
