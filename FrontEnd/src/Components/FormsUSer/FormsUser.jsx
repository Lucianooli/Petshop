import { useState } from 'react';
import styles from './FormsUser.module.css';

function FormsUser() {
    const [form, setForm] = useState({
        nome: '',
        email: '',
        senha: '',
        telefone: '',
        role: 'cliente',
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:8080/Usuarios', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form),
        });

        if (response.ok) {
            alert('🐾 Usuário registrado com sucesso!');
            setForm({ nome: '', email: '', senha: '', telefone: '', role: 'cliente' });
        } else {
            alert('😿 Erro ao registrar usuário');
        }
    };

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <h2 className={styles.titulo}>🐾 Crie sua conta no PetShop</h2>

                <input
                    type="text"
                    name="nome"
                    placeholder="Seu nome completo"
                    value={form.nome}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="exemplo@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="senha"
                    placeholder="Digite uma senha"
                    value={form.senha}
                    onChange={handleChange}
                    required
                />
                <input
                    type="tel"
                    name="telefone"
                    placeholder="(00) 00000-0000"
                    value={form.telefone}
                    onChange={handleChange}
                    required
                />

                <button type="submit" className={styles.botao}>
                    Cadastrar 🐶
                </button>

                <p className={styles.login}>
                    Já tem uma conta? <a href="/login">Faça login</a>
                </p>
            </form>
        </div>
    );
}

export default FormsUser;
