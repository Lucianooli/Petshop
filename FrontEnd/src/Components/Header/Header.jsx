import styles from "./header.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Header() {
    const [busca, setBusca] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();

        if (busca.trim() === "") return;

        // Redireciona para a rota de busca com o termo
        navigate(`/buscar?nome=${encodeURIComponent(busca)}`);
    };

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div>
                    <img src="/logo.png" alt="Logo Petshop" className={styles.logo} />
                </div>

                <form className={styles.searchContainer} onSubmit={handleSearch}>
                    <input
                        type="search"
                        placeholder="O que seu pet precisa?"
                        className={styles.searchInput}
                        value={busca}
                        onChange={(e) => setBusca(e.target.value)}
                    />
                    <button type="submit" className={styles.searchButton}>
                        Pesquisar
                    </button>
                </form>

                <div className={styles.authButtons}>
                    <Link to="/login" className={styles.loginButton}>Entrar</Link>
                    <Link to="/registrar" className={styles.registerButton}>Registrar</Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
