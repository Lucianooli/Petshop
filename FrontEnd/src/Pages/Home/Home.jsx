import Header from "../../Components/Header/Header";
import Titulo from "../../Components/Titulo/Titulo";
import Nav from "../../Components/Nav/Nav.jsx";
import Card from "../../Components/Card/Card.jsx";
import styles from "./home.module.css"; // novo arquivo CSS
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/produtos")
            .then(response => setProdutos(response.data))
            .catch(error => console.error("Erro ao buscar produtos:", error));
    }, []);

    return (
        <>
            <Titulo />
            <Header />
            <Nav />

            <div className={styles.cardContainer}>
                {produtos.map(produto => (
                    <Card key={produto.id} produto={produto} />
                ))}
            </div>
        </>
    );
}

export default Home;
