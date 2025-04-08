import styles from "./header.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Header() {
    const [busca, setBusca] = useState("");
    const [usuarioLogado, setUsuarioLogado] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const usuarioSalvo = localStorage.getItem("usuario");
        if (usuarioSalvo) {
            setUsuarioLogado(JSON.parse(usuarioSalvo));
        }
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        if (busca.trim() === "") return;
        navigate(`/buscar?nome=${encodeURIComponent(busca)}`);
    };

    const handleLogout = () => {
        localStorage.removeItem("usuario");
        setUsuarioLogado(null);
        navigate("/");
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
                    {!usuarioLogado ? (
                        <>
                            <Link to="/login" className={styles.loginButton}>Entrar</Link>
                            <Link to="/registrar" className={styles.registerButton}>Registrar</Link>
                        </>
                    ) : (
                        <>
                            <span className={styles.usuarioNome}>👤 {usuarioLogado.nome}</span>
                            <button onClick={handleLogout} className={styles.logoutButton}>
                                🔓 Sair
                            </button>                        </>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
