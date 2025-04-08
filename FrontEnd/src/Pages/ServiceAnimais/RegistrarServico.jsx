import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./registrar.module.css";
import Titulo from "../../Components/Titulo/Titulo.jsx";

function RegistrarServico() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [servico, setServico] = useState(null);
    const [loading, setLoading] = useState(true);
    const [erro, setErro] = useState(false);

    const [formData, setFormData] = useState({
        nomePet: "",
        tipoPet: "",
        rua: "",
        bairro: "",
        cidade: "",
        estado: "",
        cep: ""
    });

    useEffect(() => {
        axios.get(`/api/servicos/${id}`)
            .then(res => {
                setServico(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Erro ao buscar serviço:", err);
                setErro(true);
                setLoading(false);
            });
    }, [id]);

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const dadosEnvio = {
            nomePet: formData.nomePet,
            tipoPet: formData.tipoPet,
            endereco: {
                rua: formData.rua,
                bairro: formData.bairro,
                cidade: formData.cidade,
                estado: formData.estado,
                cep: formData.cep
            },
            servicoId: id
        };

        axios.post("http://localhost:8080/api/agendamentos", dadosEnvio)
            .then(res => {
                alert("Pet registrado com sucesso!");
                console.log(res.data);
            })
            .catch(err => {
                alert("Erro ao registrar o pet.");
                console.error(err);
            });
    };

    if (loading) return <p>Carregando informações do serviço...</p>;
    if (erro || !servico) return <p className={styles.erro}>Erro ao carregar o serviço ou serviço não encontrado.</p>;

    return (
        <>
            <Titulo />
            {/* Botão fixo no canto superior esquerdo */}
            <button type="button" className={styles.botaoVoltarFixo} onClick={() => navigate("/")}>
                🏠 Voltar
            </button>

            <div className={styles.container}>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <h2 className={styles.titulo}>Registrar Pet 💖</h2>
                    <p className={styles.subtitulo}>Serviço selecionado: {servico.servico}</p>

                    <div className={styles.inputGroup}>
                        <input type="text" name="nomePet" placeholder="Nome do Pet" onChange={handleChange} required />
                    </div>
                    <div className={styles.inputGroup}>
                        <input type="text" name="tipoPet" placeholder="Tipo do Pet (ex: cachorro, gato...)" onChange={handleChange} required />
                    </div>

                    <p className={styles.subtitulo}>Endereço para Entrega/Retirada</p>

                    <div className={styles.inputGroup}>
                        <input type="text" name="rua" placeholder="Rua" onChange={handleChange} required />
                    </div>
                    <div className={styles.inputGroup}>
                        <input type="text" name="bairro" placeholder="Bairro" onChange={handleChange} required />
                    </div>
                    <div className={styles.inputGroup}>
                        <input type="text" name="cidade" placeholder="Cidade" onChange={handleChange} required />
                    </div>
                    <div className={styles.inputGroup}>
                        <input type="text" name="estado" placeholder="Estado" onChange={handleChange} required />
                    </div>
                    <div className={styles.inputGroup}>
                        <input type="text" name="cep" placeholder="CEP" onChange={handleChange} required />
                    </div>

                    <button type="submit" className={styles.botao}>Registrar Pet</button>
                </form>
            </div>
        </>
    );
}

export default RegistrarServico;
