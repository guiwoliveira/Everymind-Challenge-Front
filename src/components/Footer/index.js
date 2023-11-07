import styles from './Footer.module.css'
import logo from '../../assets/logo.png'

function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.list}>
                <li className={styles.item}>
                <img src={logo} alt="vagas"  />
                </li>
                <li className={styles.item}>
                    <p className={styles.copy_right}>
                        <span>Everymind</span> &copy; 2023
                    </p>
                </li>
            </ul>
        </footer>
    )
}

export default Footer