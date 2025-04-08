import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './formsAnimais.module.css'; // ✅ Importando o CSS Module

function FormsAnimal({ usuarioId }) {
    const [categorias, setCategorias] = useState([]);
    const [formData, setFormData] = useState({
        nomeAnimal: '',
        descricao: '',
        raca: '',
        imagem: '',
        categoriaId: '',
    });

    useEffect(() => {
        axios.get('/api/categorias-animal')
            .then(res => setCategorias(res.data))
            .catch(err => console.error('Erro ao carregar categorias:', err));
    }, []);

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await axios.post('/api/animais', {
                ...formData,
                animal: { id: formData.categoriaId },
                dono: { id: usuarioId },
            });
            alert('🐾 Animal cadastrado com sucesso!');
        } catch (err) {
            console.error(err);
            alert('❌ Erro ao cadastrar o animal');
        }
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.titulo}>Cadastrar Animal</h2>
            <form onSubmit={handleSubmit} className={styles.formulario}>
                <input
                    name="nomeAnimal"
                    placeholder="Nome do animal"
                    onChange={handleChange}
                    className={styles.input}
                    required
                />
                <input
                    name="raca"
                    placeholder="Raça"
                    onChange={handleChange}
                    className={styles.input}
                    required
                />
                <textarea
                    name="descricao"
                    placeholder="Descrição"
                    onChange={handleChange}
                    className={styles.textarea}
                    required
                />
                <input
                    name="imagem"
                    placeholder="URL da imagem"
                    onChange={handleChange}
                    className={styles.input}
                    required
                />
                <select
                    name="categoriaId"
                    onChange={handleChange}
                    className={styles.select}
                    required
                >
                    <option value="">Selecione a categoria</option>
                    {categorias.map(cat => (
                        <option key={cat.id} value={cat.id}>{cat.nomeCategoriaAnimal}</option>
                    ))}
                </select>

                <button type="submit" className={styles.botao}>Cadastrar</button>
            </form>
        </div>
    );
}

export default FormsAnimal;
