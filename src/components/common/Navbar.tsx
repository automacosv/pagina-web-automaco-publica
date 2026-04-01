import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, User, LogOut, ChevronDown } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleAuthChange = () => setIsAuthenticated(!!localStorage.getItem('token'));
        window.addEventListener('auth-change', handleAuthChange);
        return () => window.removeEventListener('auth-change', handleAuthChange);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleScrollLink = (hash: string) => {
        if (location.pathname === '/nosotros') {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
        setIsOpen(false);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.dispatchEvent(new Event('auth-change'));
        setIsProfileOpen(false);
        navigate('/login');
    };

    // Función auxiliar para saber si un enlace está activo
    const isActive = (path: string, hash: string = '') => {
        if (hash) {
            return location.pathname === path && location.hash === hash;
        }
        // Para la ruta principal, ignoramos el hash
        return location.pathname === path && !location.hash;
    };

    return (
        <nav className="relative flex items-center justify-between px-6 md:px-12 py-6 z-50">
            {/* Logo Header */}
            <Link to="/" className="flex items-center">
                <img
                    src="/Logo_header.svg"
                    alt="AutomaCo"
                    className="h-8 md:h-10 lg:h-12 w-auto object-contain" 
                />
            </Link>

            {/* ENLACES ESCRITORIO */}
            <div className="hidden md:flex items-center gap-8 font-medium">
                {/* Producto */}
                <Link 
                    to="/" 
                    className={`transition-colors cursor-pointer ${
                        isActive('/') ? 'text-brand font-bold' : 'text-gray-700 hover:text-brand'
                    }`}
                >
                    Producto
                </Link>

                {/* Acerca de */}
                <Link 
                    to="/nosotros#AcercaDe" 
                    onClick={() => handleScrollLink('#nosotros')} 
                    className={`transition-colors cursor-pointer ${
                        isActive('/nosotros', '#AcercaDe') || (location.pathname === '/nosotros' && !location.hash) ? 'text-brand font-bold' : 'text-gray-700 hover:text-brand'
                    }`}
                >
                    Acerca de
                </Link>

                {/* RENDERIZADO CONDICIONAL DE AUTH */}
                {!isAuthenticated ? (
                    <Link to="/login" className="bg-brand text-white px-6 py-2 rounded-xl hover:bg-brand-dark transition-all ml-2">
                        Iniciar sesión
                    </Link>
                ) : (
                    <div className="relative ml-2">
                        <button
                            onClick={() => setIsProfileOpen(!isProfileOpen)}
                            className="flex items-center gap-2 text-dark hover:text-brand transition-colors focus:outline-none cursor-pointer"
                        >
                            <div className="bg-brand/10 p-2 rounded-full">
                                <User size={20} className="text-brand" />
                            </div>
                            Mi Cuenta <ChevronDown size={16} />
                        </button>

                        {/* Dropdown del perfil */}
                        {isProfileOpen && (
                            <div className="absolute right-0 mt-3 w-48 bg-white border border-gray-100 rounded-xl shadow-lg py-2 flex flex-col z-50 animate-fade-in-up">
                                <Link
                                    to="/perfil"
                                    onClick={() => setIsProfileOpen(false)}
                                    className="px-4 py-2 hover:bg-gray-50 flex items-center gap-2 text-sm text-gray-700 transition-colors"
                                >
                                    <User size={16} /> Actualizar Datos
                                </Link>
                                <hr className="my-1 border-gray-100" />
                                <button
                                    onClick={handleLogout}
                                    className="px-4 py-2 hover:bg-red-50 flex items-center gap-2 text-sm text-red-600 transition-colors text-left w-full cursor-pointer"
                                >
                                    <LogOut size={16} /> Cerrar Sesión
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* BOTÓN HAMBURGUESA MÓVIL */}
            <div className="md:hidden flex items-center">
                <button onClick={toggleMenu} className="text-gray-700 hover:text-brand transition-colors focus:outline-none cursor-pointer">
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* MENÚ MÓVIL */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center py-8 gap-6 md:hidden border-t border-gray-100 z-50">
                    <Link 
                        to="/" 
                        onClick={toggleMenu} 
                        className={`text-lg font-medium transition-colors ${isActive('/') ? 'text-brand font-bold' : 'text-gray-700 hover:text-brand'}`}
                    >
                        Producto
                    </Link>
                    <Link 
                        to="/nosotros#AcercaDe" 
                        onClick={() => handleScrollLink('#AcercaDe')} 
                        className={`text-lg font-medium transition-colors ${isActive('/nosotros', '#AcercaDe') || (location.pathname === '/nosotros' && !location.hash) ? 'text-brand font-bold' : 'text-gray-700 hover:text-brand'}`}
                    >
                        Acerca de
                    </Link>
                  

                    {!isAuthenticated ? (
                        <Link to="/login" onClick={toggleMenu} className="bg-brand text-white px-8 py-3 rounded-xl font-medium hover:bg-brand-dark transition-all w-10/12 text-center mt-2">
                            Iniciar sesión
                        </Link>
                    ) : (
                        <div className="w-full flex flex-col items-center gap-4 mt-2 border-t border-gray-100 pt-6">
                            <Link to="/perfil" onClick={toggleMenu} className="text-gray-700 hover:text-brand text-lg font-medium flex items-center gap-2">
                                <User size={20} /> Actualizar Datos
                            </Link>
                            <button onClick={() => { handleLogout(); toggleMenu(); }} className="text-red-600 font-medium flex items-center gap-2 text-lg cursor-pointer">
                                <LogOut size={20} /> Cerrar Sesión
                            </button>
                        </div>
                    )}
                </div>
            )}
        </nav>
    );
};

export default Navbar;