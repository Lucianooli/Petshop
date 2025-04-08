import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register.jsx";
import NovosProdutos from "../Pages/NovosProdutos/NovosProdutos.jsx";
import Login from "../Pages/Login/Login.jsx";
import BuscarProduto from "../Pages/Buscar/BuscarProduto.jsx";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<NovosProdutos />} />
            <Route path="/Registrar" element={<Register />} />
            <Route path="/buscar" element={<BuscarProduto />} />
        </Routes>
    );
}

export default AppRoutes;