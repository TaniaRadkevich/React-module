import styles from '../ScssModuleComponent.module.scss';

const Card = (props) =>{
    return (
        <div className={styles.main_wrap}>
            <div className={styles.card_wrap}>
                <h3 className={styles.card_title}> – ROBO – </h3>
                <p className={styles.card_price}>{props.price}</p>
                <p className={styles.card_info}>УМК по робототетхнике</p>
                <button className={styles.card_button}>Оставить заявку</button>
            </div>
        </div>
    )
}

export default Card