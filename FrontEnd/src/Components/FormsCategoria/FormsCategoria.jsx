import { useState } from 'react';
import axios from 'axios';
import styles from './formsCategoria.module.css'; // 🎨 CSS personalizado

function FormsCategoria() {
    const [nome, setNome] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/categorias', { tituloCategoria: nome });
            alert('✨ Categoria cadastrada com sucesso!');
            setNome('');
        } catch (err) {
            console.error(err);
            alert('❌ Ocorreu um erro ao cadastrar a categoria.');
        }
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.titulo}>🌸 Nova Categoria</h2>
            <form onSubmit={handleSubmit} className={styles.formulario}>
                <input
                    name="nome"
                    placeholder="Digite o nome da categoria"
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                    className={styles.input}
                    required
                />
                <button type="submit" className={styles.botao}>💾 Salvar Categoria</button>
            </form>
        </div>
    );
}

export default FormsCategoria;
