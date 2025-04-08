import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./nav.module.css";
import axios from "axios";

// Ícones do react-icons
import { FaDog, FaCat, FaDove, FaFish, FaPaw } from "react-icons/fa";

function Nav() {
    const [categorias, setCategorias] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8080/api/categorias")
            .then(response => setCategorias(response.data))
            .catch(error => console.error("Erro ao buscar categorias:", error));
    }, []);

    const handleCategoriaClick = (categoriaId) => {
        navigate(`/produtos/categoria/${categoriaId}`);
    };

    const getIcon = (titulo) => {
        const nome = titulo.toLowerCase();
        if (nome.includes("cachorro")) return <FaDog className={styles.icon} />;
        if (nome.includes("gato")) return <FaCat className={styles.icon} />;
        if (nome.includes("pássaro") || nome.includes("passaro")) return <FaDove className={styles.icon} />;
        if (nome.includes("peixe")) return <FaFish className={styles.icon} />;
        return <FaPaw className={styles.icon} />;
    };

    return (
        <nav className={styles.nav}>
            <div className={styles.buttonContainer}>
                {categorias.map(categoria => (
                    <button
                        key={categoria.id}
                        onClick={() => handleCategoriaClick(categoria.id)}
                        className={styles.categoriaButton}
                    >
                        {getIcon(categoria.tituloCategoria)}
                        {categoria.tituloCategoria}
                    </button>
                ))}
            </div>
        </nav>
    );
}

export default Nav;
