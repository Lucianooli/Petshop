import { useState } from 'react';
import axios from 'axios';
import styles from './formsService.module.css'; // ✅ CSS Module importado

function FormServicos() {
    const [form, setForm] = useState({
        servico: '',
        descricao: '',
        valor: '',
        imagem: '',
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/servicos', {
                ...form,
                valor: parseFloat(form.valor),
            });
            alert('✅ Serviço cadastrado com sucesso!');
            setForm({ servico: '', descricao: '', valor: '', imagem: '' });
        } catch (error) {
            console.error(error);
            alert('❌ Erro ao cadastrar serviço!');
        }
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.titulo}>Cadastrar Serviço</h2>
            <form onSubmit={handleSubmit} className={styles.formulario}>
                <input
                    type="text"
                    name="servico"
                    value={form.servico}
                    onChange={handleChange}
                    placeholder="Nome do Serviço"
                    className={styles.input}
                    required
                />
                <textarea
                    name="descricao"
                    value={form.descricao}
                    onChange={handleChange}
                    placeholder="Descrição"
                    className={styles.textarea}
                    required
                />
                <input
                    type="number"
                    name="valor"
                    value={form.valor}
                    onChange={handleChange}
                    placeholder="Valor"
                    className={styles.input}
                    required
                />
                <input
                    type="text"
                    name="imagem"
                    value={form.imagem}
                    onChange={handleChange}
                    placeholder="URL da imagem"
                    className={styles.input}
                    required
                />
                <button
                    type="submit"
                    className={styles.botao}
                >
                    Cadastrar
                </button>
            </form>
        </div>
    );
}

export default FormServicos;
