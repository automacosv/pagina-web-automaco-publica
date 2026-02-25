import { Routes, Route } from 'react-router-dom';

// Importación de Páginas
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { PaymentPage } from '../pages/checkout/payment';
import { Success } from '../pages/checkout/success';
import { Legal } from '../pages/Legal';
import { NotFound } from '../pages/NotFound';

export const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<About />} />
            <Route path="/checkout" element={<PaymentPage />} />
            <Route path="/checkout/success" element={<Success />} />
            <Route path="/legal" element={<Legal />} />

            {/* Ruta 404 opcional */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};