import { useState } from "react";
import axios from "axios";
import styles from "./petform.module.css";

function PetForm({ servico }) {
    const [nomePet, setNomePet] = useState("");
    const [registrado, setRegistrado] = useState(null);
    const [endereco, setEndereco] = useState({
        rua: "",
        bairro: "",
        cidade: "",
        estado: "",
        cep: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const dono = localStorage.getItem("usuario") || "Usuário Anônimo";
            const response = await axios.post("http://localhost:8080/api/registro", {
                nomePet,
                dono,
                nomeServico: servico.servico,
                endereco
            });

            setRegistrado(response.data);
        } catch (error) {
            console.error("Erro ao registrar pet:", error);
        }
    };

    const handleEnderecoChange = (e) => {
        setEndereco({ ...endereco, [e.target.name]: e.target.value });
    };

    return (
        <div className={styles.container}>
            {registrado ? (
                <p>
                    Você registrou seu pet <strong>{registrado.nomePet}</strong> no serviço{" "}
                    <strong>{registrado.nomeServico}</strong>! Ele será entregue no endereço:{" "}
                    <strong>{registrado.endereco?.rua}, {registrado.endereco?.bairro}, {registrado.endereco?.cidade} - {registrado.endereco?.estado}</strong>.
                </p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <h4>Registrar Pet no serviço: {servico.servico}</h4>
                    <input
                        type="text"
                        placeholder="Nome do pet"
                        value={nomePet}
                        onChange={(e) => setNomePet(e.target.value)}
                        required
                    />
                    <input type="text" name="rua" placeholder="Rua" onChange={handleEnderecoChange} required />
                    <input type="text" name="bairro" placeholder="Bairro" onChange={handleEnderecoChange} required />
                    <input type="text" name="cidade" placeholder="Cidade" onChange={handleEnderecoChange} required />
                    <input type="text" name="estado" placeholder="Estado" onChange={handleEnderecoChange} required />
                    <input type="text" name="cep" placeholder="CEP" onChange={handleEnderecoChange} required />
                    <button type="submit">Registrar</button>
                </form>
            )}
        </div>
    );
}

export default PetForm;
