import { useNavigate } from "react-router-dom";
import styles from "./card.module.css";

function CardServico({ servico }) {
    const navigate = useNavigate();

    const handleRegistroClick = () => {
        navigate(`/registrar-servico/${servico.id}`);
    };

    return (
        <div className={styles.card}>
            <img
                src={servico.imagem || "/sem-imagem.png"}
                alt={servico.servico}
                className={styles.imagem}
            />
            <div className={styles.info}>
                <h3 className={styles.nome}>{servico.servico}</h3>

                <p className={styles.preco}>
                    {servico.valor !== undefined
                        ? `R$ ${servico.valor.toFixed(2)}`
                        : "Preço sob consulta"}
                </p>

                <p className={styles.descricao}>
                    {servico.descricao || "Sem descrição disponível."}
                </p>

                <button className={styles.botao} onClick={handleRegistroClick}>
                    Registrar meu pet
                </button>
            </div>
        </div>
    );
}

export default CardServico;
