import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './FormsProduto.module.css';

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

        const categoriaSelecionada = categorias.find(cat => cat.id === parseInt(formData.categoriaId));
        const subCategoriaSelecionada = subcategorias.find(sub => sub.id === parseInt(formData.subCategoriaId));

        const produto = {
            nome: formData.nome,
            descricao: formData.descricao,
            imagem: formData.imagem,
            preco: parseFloat(formData.preco),
            quantidade: parseInt(formData.quantidade),
            categoria: categoriaSelecionada,
            subCategoria: subCategoriaSelecionada
        };

        try {
            await axios.post('/api/produtos', produto);
            alert('✨ Produto cadastrado com sucesso!');
            setFormData({
                nome: '',
                descricao: '',
                categoriaId: '',
                subCategoriaId: '',
                imagem: '',
                preco: '',
                quantidade: '',
            });
        } catch (err) {
            console.error(err);
            alert('❌ Erro ao cadastrar o produto');
        }
    };

    if (isAdmin === null) return <p>Carregando...</p>;
    if (!isAdmin) return <p className={styles.naoAutorizado}>Você não tem permissão para acessar esta página.</p>;

    return (
        <div className={styles.container}>
            <h2 className={styles.titulo}>✨ Cadastrar Novo Produto</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input
                    name="nome"
                    placeholder="Nome do produto"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="descricao"
                    placeholder="Descrição detalhada"
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
                    <option value="">Escolha uma categoria</option>
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
                    <option value="">Escolha uma subcategoria</option>
                    {subcategorias.map(sub => (
                        <option key={sub.id} value={sub.id}>{sub.tituloSubCategoria}</option>
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
                    placeholder="Preço (R$)"
                    value={formData.preco}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    name="quantidade"
                    placeholder="Quantidade em estoque"
                    value={formData.quantidade}
                    onChange={handleChange}
                    required
                />

                <button type="submit">🎀 Cadastrar Produto</button>
            </form>
        </div>
    );
}

export default FormsProduto;
