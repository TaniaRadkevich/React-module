import styles from '../ScssModuleComponent.module.scss';


const Button = (props) =>{
    return(
        <button className={styles.button}>
            {props.buttonText}
        </button>
    )
}
export default Button
