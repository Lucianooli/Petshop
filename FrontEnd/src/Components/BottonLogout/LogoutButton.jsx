function LogoutButton() {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    if (!token) return null;

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return <button onClick={handleLogout}>Sair</button>;
}
export default LogoutButton;