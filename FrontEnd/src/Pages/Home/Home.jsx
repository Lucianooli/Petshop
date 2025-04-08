import Header from "../../Components/Header/Header";
import Titulo from "../../Components/Titulo/Titulo";
import Nav from "../../Components/Nav/Nav.jsx";
import Card from "../../Components/Card/Card.jsx";
import CardServico from "../../Components/Card/CardServico.jsx";
import styles from "./home.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../../Components/Footer/Footer.jsx";
import { FaPaw } from "react-icons/fa";

function Home() {
    const [produtos, setProdutos] = useState([]);
    const [servicos, setServicos] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/produtos")
            .then(response => setProdutos(response.data.slice(0, 5)))
            .catch(error => console.error("Erro ao buscar produtos:", error));

        axios.get("http://localhost:8080/api/servicos")
            .then(response => setServicos(response.data.slice(0, 5)))
            .catch(error => console.error("Erro ao buscar serviços:", error));
    }, []);

    return (
        <>
            <div className={styles.Cursor}>
                <Titulo />
                <Header />
                <Nav />

                {/* Seção Produtos */}
                <h2 className={styles.secaoTitulo}>
                    <FaPaw className={styles.icone} /> Produtos em Destaque
                </h2>
                <div className={styles.cardContainer}>
                    {produtos.map(produto => (
                        <Card key={produto.id} produto={produto} />
                    ))}
                </div>

                {/* Divisor */}
                <div className={styles.divisor}></div>

                {/* Seção Serviços */}
                <h2 className={styles.secaoTitulo}>
                    <FaPaw className={styles.icone} /> Serviços em Destaque
                </h2>
                <div className={styles.servicoContainer}>
                    {servicos.map(servico => (
                        <CardServico key={`servico-${servico.id}`} servico={servico} />
                    ))}
                </div>

                <Footer />
            </div>
        </>
    );
}

export default Home;
