// src/Components/Footer/Footer.jsx
import styles from './footer.module.css';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.logo}>🐾 PetLove</div>

                <div className={styles.links}>
                    <a href="#">Sobre</a>
                    <a href="#">Contato</a>
                    <a href="#">Política de Privacidade</a>
                </div>

                <div className={styles.social}>
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><FaFacebook /></a>
                    <a href="#"><FaTwitter /></a>
                </div>
            </div>

            <p className={styles.copy}>
                © 2025 PetLove. Todos os direitos reservados. 🐶🐱
            </p>
        </footer>
    );
}

export default Footer;
