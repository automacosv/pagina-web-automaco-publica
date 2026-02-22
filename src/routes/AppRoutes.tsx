import { Routes, Route } from 'react-router-dom';

// Importación de Páginas
import { Home } from '../pages/Home';
import { Register } from '../pages/auth/Register';
import { About } from '../pages/About';
import { Login } from '../pages/auth/Login';
import { PaymentPage } from '../pages/checkout/payment';
import { Success } from '../pages/checkout/success';
import { Legal } from '../pages/Legal';

export const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/registro" element={<Register />} />
            <Route path="/nosotros" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/checkout" element={<PaymentPage />} />
            <Route path="/checkout/success" element={<Success />} />
            <Route path="/legal" element={<Legal />} />

            {/* Ruta 404 opcional */}
            <Route path="*" element={<div className="p-20 text-center">404 - Página no encontrada</div>} />
        </Routes>
    );
};