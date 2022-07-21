import { TabPackages } from "../TabPackages/TabPackages";
import styles from "./Main.module.scss";


function Main () {
    return(
        <div className={styles.wrapper}>
            <div>Хлебные крошки</div>
            <TabPackages></TabPackages>
        </div>
    )
}

export {Main};