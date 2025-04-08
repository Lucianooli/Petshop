import styles from "./card.module.css";
import { useNavigate } from "react-router-dom";

function Card({ produto }) {
    const navigate = useNavigate();

    const handleComprar = () => {
        const usuarioLogado = localStorage.getItem("usuario");

        if (usuarioLogado) {
            alert("Compra realizada com sucesso! 🎉");
            // Aqui você pode também chamar uma função de compra ou enviar ao backend
        } else {
            alert("Você precisa estar logado para comprar.");
            navigate("/login");
        }
    };

    return (
        <div className={styles.card}>
            <img
                src={produto.imagem || "/sem-imagem.png"}
                alt={produto.nome}
                className={styles.imagem}
            />

            <div className={styles.info}>
                <h3 className={styles.nome}>{produto.nome}</h3>
                <p className={styles.preco}>R$ {produto.preco.toFixed(2)}</p>
                <button onClick={handleComprar} className={styles.botao}>
                    Comprar
                </button>
            </div>
        </div>
    );
}

export default Card;
