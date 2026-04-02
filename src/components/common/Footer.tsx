import { Link } from 'react-router-dom';
import logoFooder from '../../../public/Logo_footer.svg';

const Footer = () => {
    return (
        // Se cambió a px-6 para móviles y md:px-12 para escritorio
        <footer className="bg-blue-dark px-6 md:px-12 py-12 md:py-16 mt-10 md:mt-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-12 text-white">

                {/* Columna 1: Logo y pequeña descripción */}
                <div className="md:col-span-2 flex flex-col gap-4 items-start">
                    <img
                        src={logoFooder}
                        alt="AutomaCo"
                        className="h-6 md:h-8 lg:h-12 w-auto object-left"
                    />
                    <p className="text-sm opacity-90 max-w-sm leading-relaxed">
                        Tu herramienta integral para la organización y descarga inteligente de Documentos Tributarios Electrónicos.
                    </p>
                </div>

                {/* Columna 2: Navegación Principal */}
                <div className="flex flex-col gap-3 opacity-90">
                    <p className="font-semibold text-lg mb-1">Empresa</p>
                    <Link to="/nosotros#nosotros" className="text-sm hover:underline hover:opacity-100 transition-all w-fit">
                        Acerca de
                    </Link>
                    <Link to="/nosotros#contacto" className="text-sm hover:underline hover:opacity-100 transition-all w-fit">
                        Contáctanos
                    </Link>
                </div>

                {/* Columna 3: Enlaces Legales (¡Nuevos!) */}
                <div className="flex flex-col gap-3 opacity-90">
                    <p className="font-semibold text-lg mb-1">Legal</p>
                    <Link to="/legal" className="text-sm hover:underline hover:opacity-100 transition-all w-fit">
                        Términos de Servicio
                    </Link>
                    <Link to="/legal" className="text-sm hover:underline hover:opacity-100 transition-all w-fit">
                        Política de Privacidad
                    </Link>
                </div>

                {/* Columna 4: Contacto */}
                <div className="flex flex-col gap-3">
                    <p className="font-semibold text-lg mb-1">Contacto</p>
                    <p className="text-sm opacity-90">+(503) 7000-9000</p>
                    <a href="mailto:automacofecetech@gmail.com" className="text-sm opacity-90 hover:underline hover:opacity-100 transition-all w-fit">
                        automacofecetech@gmail.com
                    </a>
                </div>
            </div>

            {/* Copyright dinámico al final */}
            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/20 text-center text-sm text-white">
                &copy; {new Date().getFullYear()} AutomaCo. Todos los derechos reservados.
            </div>
        </footer>
    );
};

export default Footer;  