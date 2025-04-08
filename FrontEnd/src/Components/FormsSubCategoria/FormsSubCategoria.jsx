import { useState, useEffect } from 'react';
import axios from 'axios';

function FormsSubCategoria() {
    const [nome, setNome] = useState('');
    const [categoriaId, setCategoriaId] = useState('');
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        axios.get('/api/categorias')
            .then(res => setCategorias(res.data))
            .catch(err => console.error("Erro ao buscar categorias:", err));
    }, []);

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await axios.post('/api/subcategorias', {
                tituloSubCategoria: nome,
                categoria: { id: parseInt(categoriaId) }  // 💡 isso resolve!
            });

            alert('Subcategoria cadastrada com sucesso!');
            setNome('');
            setCategoriaId('');
        } catch (err) {
            console.error(err);
            alert('Erro ao cadastrar subcategoria');
        }
    };

    return (
        <div >
            <h2 >Cadastrar Subcategoria</h2>
            <form onSubmit={handleSubmit}>
                <input
                    name="nome"
                    placeholder="Nome da Subcategoria"
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                />
                <select
                    name="categoriaId"
                    value={categoriaId}
                    onChange={e => setCategoriaId(e.target.value)}

                >
                    <option value="">Selecione a Categoria</option>
                    {categorias.map(cat => (
                        <option key={cat.id} value={cat.id}>{cat.tituloCategoria}</option>
                    ))}
                </select>
                <button type="submit">Cadastrar Subcategoria</button>
            </form>
        </div>
    );
}

export default FormsSubCategoria;
