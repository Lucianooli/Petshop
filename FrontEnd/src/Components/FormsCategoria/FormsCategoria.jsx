import { useState } from 'react';
import axios from 'axios';
import styles from './formsCategoria.module.css'; // ✅ Importa o CSS Module

function FormsCategoria() {
    const [nome, setNome] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await axios.post('/api/categorias', { tituloCategoria: nome });
            alert('Categoria cadastrada com sucesso!');
            setNome('');
        } catch (err) {
            console.error(err);
            alert('Erro ao cadastrar categoria');
        }
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.titulo}>Cadastrar Categoria</h2>
            <form onSubmit={handleSubmit} className={styles.formulario}>
                <input
                    name="nome"
                    placeholder="Nome da Categoria"
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                    className={styles.input}
                    required
                />
                <button type="submit" className={styles.botao}>Cadastrar Categoria</button>
            </form>
        </div>
    );
}

export default FormsCategoria;
