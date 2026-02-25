import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; 

const Navbar = () => {
    // Estado para controlar si el menú móvil está abierto o cerrado
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        // Se agregó 'relative' y 'z-50' para que el menú desplegable quede por encima de todo
        <nav className="relative flex items-center justify-between px-6 md:px-12 py-6 bg-white shadow-sm z-50">
            
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold text-dark">AutomaCo</Link>

            {/* ENLACES DE ESCRITORIO (Se ocultan en móvil con 'hidden md:flex') */}
            <div className="hidden md:flex items-center gap-8">
                <Link to="/nosotros" className="text-gray-700 hover:text-brand transition-colors">Acerca de</Link>
                <Link to="/contacto" className="text-gray-700 hover:text-brand transition-colors">Contáctanos</Link>
                <Link
                    to="/checkout"
                    className="bg-brand text-white px-6 py-2 rounded-xl font-medium hover:bg-brand-dark transition-all"
                >
                    Compra ya
                </Link>
            </div>

            {/* BOTÓN HAMBURGUESA MÓVIL (Se oculta en escritorio con 'md:hidden') */}
            <div className="md:hidden flex items-center">
                <button 
                    onClick={toggleMenu} 
                    className="text-gray-700 hover:text-brand transition-colors focus:outline-none cursor-pointer"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* MENÚ DESPLEGABLE MÓVIL */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center py-8 gap-6 md:hidden border-t border-gray-100">
                    <Link 
                        to="/nosotros" 
                        onClick={toggleMenu} 
                        className="text-gray-700 hover:text-brand transition-colors text-lg font-medium"
                    >
                        Acerca de
                    </Link>
                    <Link 
                        to="/contacto" 
                        onClick={toggleMenu} 
                        className="text-gray-700 hover:text-brand transition-colors text-lg font-medium"
                    >
                        Contáctanos
                    </Link>
                    <Link
                        to="/checkout"
                        onClick={toggleMenu}
                        className="bg-brand text-white px-8 py-3 rounded-xl font-medium hover:bg-brand-dark transition-all text-lg w-10/12 text-center"
                    >
                        Compra ya
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;