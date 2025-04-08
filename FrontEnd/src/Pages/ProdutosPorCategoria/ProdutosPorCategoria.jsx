import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './ProdutosPorCategoria.module.css';
import Card from '../../Components/Card/Card.jsx';
import Header from '../../Components/Header/Header.jsx';
import Titulo from "../../Components/Titulo/Titulo.jsx";

function ProdutosPorCategoria() {
    const { categoriaId } = useParams();
    const [produtos, setProdutos] = useState([]);
    const [categoriaNome, setCategoriaNome] = useState('🐾');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`/api/produtos/categoria/${categoriaId}`)
            .then(res => setProdutos(res.data))
            .catch(err => console.error("Erro ao carregar produtos:", err));

        axios.get(`/api/categorias/${categoriaId}`)
            .then(res => {
                console.log("Dados da categoria:", res.data);
                const data = res.data;
                const nome = data?.tituloCategoria || data[0]?.tituloCategoria || 'Categoria Misteriosa 🐾';
                setCategoriaNome(nome);
            })
            .catch(() => setCategoriaNome('Categoria Misteriosa 🐾'));
    }, [categoriaId]);

    return (

        <div className={styles.container}>
            <Header />
            <Titulo />
            <div className={styles.headerArea}>
                <h2 className={styles.titulo}>
                    🛍️ Explorando a categoria: <span className={styles.nomeCategoria}>{categoriaNome}</span>
                </h2>
                <p className={styles.subtitulo}>Veja os melhores produtos selecionados com carinho! 💝</p>
            </div>

            {produtos.length === 0 ? (
                <p className={styles.aviso}>😿 Ops! Ainda não temos produtos aqui. Volte mais tarde!</p>
            ) : (
                <div className={styles.grid}>
                    {produtos.map(produto => (
                        <Card key={produto.id} produto={produto} />
                    ))}
                </div>
            )}

            <div className={styles.footerArea}>
                <p className={styles.fraseFofo}>
                    Obrigado por visitar nossa lojinha! Esperamos que encontre algo incrível para o seu pet! 🐶💖🐱
                </p>
                <button onClick={() => navigate('/')} className={styles.botaoVoltar}>
                    ⬅️ Voltar para a Home
                </button>
            </div>

            <footer className={styles.footer}>
                <p>© {new Date().getFullYear()} PetShop Amor & Cuidado 🐾</p>
            </footer>
        </div>
    );
}

export default ProdutosPorCategoria;
