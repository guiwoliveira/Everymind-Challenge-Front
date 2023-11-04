import {Link} from 'react-router-dom'
import useAuth from "../../hooks/useAuth.js";
import { useNavigate } from "react-router-dom";

import styles from './Navbar.module.css'
import logo from '../../assets/logo.png'

function NavBar() {
    const { logout } = useAuth();
    const navigate = useNavigate();

    return (
        <nav>
            <div class={styles.navbar}>
                <Link to="/"><img src={logo} alt="vagas" /></Link>
                <ul className={styles.list}>
                    <li className={styles.logout}>
                        <a onClick={() => [logout(), navigate("/")]}>Logout</a>
                    </li>
                </ul>
            </div>          
      </nav>
    )
}

export default NavBar