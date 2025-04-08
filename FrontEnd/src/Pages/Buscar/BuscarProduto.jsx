import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function BuscarProduto() {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const nome = query.get("nome");

    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        if (nome) {
            axios.get(`http://localhost:8080/api/produtos/buscar?nome=${nome}`)
                .then(res => setProdutos([res.data])) // API retorna um único objeto
                .catch(err => console.error("Erro ao buscar:", err));
        }
    }, [nome]);

    return (
        <div>
            <h2>Resultados para: "{nome}"</h2>
            {produtos.length > 0 ? (
                produtos.map(produto => (
                    <div key={produto.id}>
                        <h3>{produto.nome}</h3>
                        <p>{produto.descricao}</p>
                        <strong>R$ {produto.preco}</strong>
                    </div>
                ))
            ) : (
                <p>Nenhum produto encontrado.</p>
            )}
        </div>
    );
}

export default BuscarProduto;
