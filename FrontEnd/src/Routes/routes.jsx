import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register.jsx";
import NovosProdutos from "../Pages/NovosProdutos/NovosProdutos.jsx";
import Login from "../Pages/Login/Login.jsx";
import BuscarProduto from "../Pages/Buscar/BuscarProduto.jsx";
import RegistrarServico from "../Pages/ServiceAnimais/RegistrarServico.jsx";
import ProdutosPorCategoria from "../Pages/ProdutosPorCategoria/ProdutosPorCategoria.jsx";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<NovosProdutos />} />
            <Route path="/Registrar" element={<Register />} />
            <Route path="/buscar" element={<BuscarProduto />} />
            <Route path="/registrar-servico/:id" element={<RegistrarServico />} />
            <Route path="/produtos/categoria/:categoriaId" element={<ProdutosPorCategoria />} />
        </Routes>
    );
}

export default AppRoutes;