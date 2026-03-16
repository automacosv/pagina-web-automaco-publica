import { Routes, Route } from 'react-router-dom';

// Importación de Páginas
import {
    Home, About, PaymentPage, Success, Legal, NotFound, Login,
    Register, ForgotPassword, ResetPassword, Profile
} from '../pages';

export const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<About />} />
            <Route path="/checkout" element={<PaymentPage />} />
            <Route path="/checkout/success" element={<Success />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/perfil" element={<Profile />} />

            {/* Ruta 404 opcional */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};