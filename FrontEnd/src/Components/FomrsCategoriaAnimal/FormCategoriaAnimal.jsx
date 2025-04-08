import { useState } from 'react';
import axios from 'axios';
import styles from './formCategoriaAnimal.module.css'; // ✅ CSS Module importado

function FormCategoriaAnimal() {
    const [nomeCategoriaAnimal, setNomeCategoriaAnimal] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/categoria-animais', { nomeCategoriaAnimal });
            alert('🐶 Categoria adicionada com sucesso!');
            setNomeCategoriaAnimal('');
        } catch (err) {
            console.error(err);
            alert('❌ Erro ao adicionar categoria');
        }
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.titulo}>Adicionar Categoria de Animal</h2>
            <form onSubmit={handleSubmit} className={styles.formulario}>
                <input
                    value={nomeCategoriaAnimal}
                    onChange={(e) => setNomeCategoriaAnimal(e.target.value)}
                    placeholder="Nome da categoria"
                    className={styles.input}
                    required
                />
                <button type="submit" className={styles.botao}>
                    🐾 Adicionar
                </button>
            </form>
        </div>
    );
}

export default FormCategoriaAnimal;
