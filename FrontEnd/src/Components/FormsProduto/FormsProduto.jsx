import { useState, useEffect } from 'react';
import axios from 'axios';
// import styles from './formsProduto.module.css'; // descomente se estiver usando CSS Modules

function FormsProduto() {
    const [categorias, setCategorias] = useState([]);
    const [subcategorias, setSubcategorias] = useState([]);
    const [isAdmin, setIsAdmin] = useState(null);
    const [formData, setFormData] = useState({
        nome: '',
        descricao: '',
        categoriaId: '',
        subCategoriaId: '',
        imagem: '',
        preco: '',
        quantidade: '',
    });

    useEffect(() => {
        const role = localStorage.getItem('role');
        setIsAdmin(role === 'ADMIN');
    }, []);

    useEffect(() => {
        axios.get('/api/categorias')
            .then(res => setCategorias(res.data))
            .catch(err => console.error("Erro ao buscar categorias:", err));

        axios.get('/api/subcategorias')
            .then(res => setSubcategorias(res.data))
            .catch(err => console.error("Erro ao buscar subcategorias:", err));
    }, []);

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await axios.post('/api/produtos', formData);
            alert('Produto cadastrado com sucesso!');
        } catch (err) {
            console.error(err);
            alert('Erro ao cadastrar o produto');
        }
    };

    if (isAdmin === null) {
        return <p>Carregando...</p>; // styles.loading
    }

    if (!isAdmin) {
        return <p>Você não tem permissão para acessar esta página.</p>; // styles.naoAutorizado
    }

    return (
        <div>
            <h2>Cadastrar Novo Produto</h2>
            <form onSubmit={handleSubmit}>
                <input
                    name="nome"
                    placeholder="Nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="descricao"
                    placeholder="Descrição"
                    value={formData.descricao}
                    onChange={handleChange}
                    required
                />

                <select
                    name="categoriaId"
                    value={formData.categoriaId}
                    onChange={handleChange}
                    required
                >
                    <option value="">Selecione a categoria</option>
                    {categorias.map(cat => (
                        <option key={cat.id} value={cat.id}>{cat.tituloCategoria}</option>
                    ))}

                </select>

                <select
                    name="subCategoriaId"
                    value={formData.subCategoriaId}
                    onChange={handleChange}
                    required
                >
                    <option value="">Selecione a subcategoria</option>
                    {subcategorias.map(sub => (
                        <option key={sub.id} value={sub.id}>{sub.nome}</option>
                    ))}
                </select>

                <input
                    name="imagem"
                    placeholder="URL da imagem"
                    value={formData.imagem}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    name="preco"
                    placeholder="Preço"
                    value={formData.preco}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    name="quantidade"
                    placeholder="Quantidade"
                    value={formData.quantidade}
                    onChange={handleChange}
                    required
                />

                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
}

export default FormsProduto;
