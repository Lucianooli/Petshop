import { FaPaw, FaPlus, FaShoppingBasket, FaTags, FaList, FaDog, FaCat, FaClinicMedical } from 'react-icons/fa';
import FormsProduto from "../../Components/FormsProduto/FormsProduto.jsx";
import FormsCategoria from "../../Components/FormsCategoria/FormsCategoria.jsx";
import FormsSubCategoria from "../../Components/FormsSubCategoria/FormsSubCategoria.jsx";
import FormCategoriaAnimal from "../../Components/FomrsCategoriaAnimal/FormCategoriaAnimal.jsx";
import FormsAnimais from "../../Components/FormsAnimais/FormsAnimais.jsx";
import FormsService from "../../Components/FormsService/FormsService.jsx";

import styles from "./NovosProdutos.module.css";
import Titulo from "../../Components/Titulo/Titulo.jsx";

function NovosProdutos() {
    return (
        <div className={styles.container}>
            <Titulo/>
            <header className={styles.header}>
                <h1 className={styles.titulo}>
                    <FaPaw className={styles.pawIcon} /> Gerenciamento PetShop
                </h1>
                <p className={styles.subtitulo}>Cadastre novos produtos, serviços e categorias</p>
            </header>

            <div className={styles.grid}>
                {/* Produtos Section */}
                <section className={`${styles.secao} ${styles.produtoCard}`}>
                    <div className={styles.secaoHeader}>
                        <FaShoppingBasket className={styles.icon} />
                        <h2 className={styles.secaoTitulo}>Novo Produto</h2>
                    </div>
                    <FormsProduto />
                </section>

                {/* Categorias Section */}
                <section className={`${styles.secao} ${styles.categoriaCard}`}>
                    <div className={styles.secaoHeader}>
                        <FaTags className={styles.icon} />
                        <h2 className={styles.secaoTitulo}>Nova Categoria</h2>
                    </div>
                    <FormsCategoria />
                </section>

                {/* Subcategorias Section */}
                <section className={`${styles.secao} ${styles.subcategoriaCard}`}>
                    <div className={styles.secaoHeader}>
                        <FaList className={styles.icon} />
                        <h2 className={styles.secaoTitulo}>Nova Subcategoria</h2>
                    </div>
                    <FormsSubCategoria />
                </section>

                {/* Categoria Animal Section */}
                <section className={`${styles.secao} ${styles.animalCategoryCard}`}>
                    <div className={styles.secaoHeader}>
                        <FaDog className={styles.icon} />
                        <FaCat className={styles.icon} />
                        <h2 className={styles.secaoTitulo}>Categoria Animal</h2>
                    </div>
                    <FormCategoriaAnimal />
                </section>

                {/* Animais Section */}
                <section className={`${styles.secao} ${styles.animalCard}`}>
                    <div className={styles.secaoHeader}>
                        <FaPaw className={styles.icon} />
                        <h2 className={styles.secaoTitulo}>Cadastrar Animal</h2>
                    </div>
                    <FormsAnimais />
                </section>

                {/* Serviços Section */}
                <section className={`${styles.secao} ${styles.servicoCard}`}>
                    <div className={styles.secaoHeader}>
                        <FaClinicMedical className={styles.icon} />
                        <h2 className={styles.secaoTitulo}>Novo Serviço</h2>
                    </div>
                    <FormsService />
                </section>
            </div>

            <footer className={styles.footer}>
                <p>✨ PetShop Admin Dashboard ✨</p>
            </footer>
        </div>
    );
}

export default NovosProdutos;