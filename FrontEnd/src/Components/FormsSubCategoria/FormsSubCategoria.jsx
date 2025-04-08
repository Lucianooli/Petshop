import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './formsSubCategoria.module.css'; // 🧁 CSS Module

function FormsSubCategoria() {
    const [nome, setNome] = useState('');
    const [categoriaId, setCategoriaId] = useState('');
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        axios.get('/api/categorias')
            .then(res => setCategorias(res.data))
            .catch(err => console.error("Erro ao buscar categorias:", err));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/subcategorias', {
                tituloSubCategoria: nome,
                categoria: { id: parseInt(categoriaId) }
            });

            alert('✨ Subcategoria cadastrada com sucesso!');
            setNome('');
            setCategoriaId('');
        } catch (err) {
            console.error(err);
            alert('❌ Ocorreu um erro ao cadastrar a subcategoria.');
        }
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.titulo}>🐾 Nova Subcategoria</h2>
            <form onSubmit={handleSubmit} className={styles.formulario}>
                <input
                    name="nome"
                    placeholder="Nome da Subcategoria"
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                    className={styles.input}
                    required
                />
                <select
                    name="categoriaId"
                    value={categoriaId}
                    onChange={e => setCategoriaId(e.target.value)}
                    className={styles.select}
                    required
                >
                    <option value="">Selecione uma Categoria</option>
                    {categorias.map(cat => (
                        <option key={cat.id} value={cat.id}>{cat.tituloCategoria}</option>
                    ))}
                </select>
                <button type="submit" className={styles.botao}>💾 Salvar Subcategoria</button>
            </form>
        </div>
    );
}

export default FormsSubCategoria;
