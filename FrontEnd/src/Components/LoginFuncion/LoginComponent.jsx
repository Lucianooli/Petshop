import { useState } from 'react';
import styles from './LoginComponent.module.css';

function LoginComponent() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErro('');

        try {
            const response = await fetch('http://localhost:8080/Usuarios/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, senha }),
            });

            if (!response.ok) {
                throw new Error('Email ou senha inválidos 🥺');
            }

            const data = await response.json();

            // Salva tudo como "usuario"
            localStorage.setItem('usuario', JSON.stringify({
                id: data.id,
                nome: data.nome,
                email: data.email,
                role: data.role
            }));

            // Redireciona
            if (data.role === 'ADMIN') {
                window.location.href = '/admin';
            } else {
                window.location.href = '/';
            }

        } catch (err) {
            setErro(err.message);
        }
    };


    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <h2 className={styles.titulo}>🐾 Bem-vindo ao PetShop!</h2>

                {erro && <p className={styles.erro}>{erro}</p>}

                <div className={styles.inputGroup}>
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="exemplo@petshop.com"
                        required
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label>Senha</label>
                    <input
                        type="password"
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
                        placeholder="********"
                        required
                    />
                </div>

                <button type="submit" className={styles.botao}>
                    Entrar 🐶
                </button>

                <p className={styles.registro}>
                    Não tem conta? <a href="/registrar">Crie uma aqui</a>
                </p>
            </form>
        </div>
    );
}

export default LoginComponent;
