import {Link} from 'react-router-dom'
import useAuth from "../../hooks/useAuth.js";
import { useNavigate } from "react-router-dom";

import styles from './Navbar.module.css'
import logo from '../../assets/logo_completo.png'

function NavBar() {
    const { logout } = useAuth();
    const navigate = useNavigate();

    return (
        <nav>
            <div class={styles.navbar}>
                <Link to="/home"><img src={logo} alt="vagas" /></Link>
                <button className={styles.btn} onClick={() => [logout(), navigate("/")]}>Logout</button>
            </div>          
      </nav>
    )
}

export default NavBar