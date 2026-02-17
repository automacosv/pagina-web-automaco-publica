import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-12 py-6 bg-white shadow-sm">
            <div className="text-2xl font-bold text-black">AutomaCo</div>

            <div className="flex items-center gap-8">
                <Link to="/nosotros" className="text-gray-700 hover:text-brand transition-colors">Acerca de</Link>
                <Link to="/contacto" className="text-gray-700 hover:text-brand transition-colors">Contáctanos</Link>
                <Link
                    to="/login"
                    className="bg-brand text-white px-6 py-2 rounded-xl font-medium hover:bg-brand-dark transition-all"
                >
                    Iniciar sesión
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;