import { Routes, Route } from 'react-router-dom';

// Importación de Páginas
import { Home } from '../pages/Home';
import { Register } from '../pages/auth/Register';
// import { About } from '../pages/about';
// import { Login } from '../pages/auth/login';
// import { Checkout } from '../pages/checkout/payment';

export const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/registro" element={<Register />} />

            {/* Rutas comentadas para cuando las tengas listas */}
            {/* <Route path="/nosotros" element={<About />} /> */}
            {/* <Route path="/login" element={<Login />} /> */}
            {/* <Route path="/checkout" element={<Checkout />} /> */}

            {/* Ruta 404 opcional */}
            <Route path="*" element={<div className="p-20 text-center">404 - Página no encontrada</div>} />
        </Routes>
    );
};