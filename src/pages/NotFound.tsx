import { Link } from 'react-router-dom';
import { FileQuestion, ArrowLeft } from 'lucide-react';

// Importamos tu botón reutilizable
import { Button } from '../components/common/Button';

export const NotFound = () => {
    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 py-20 text-center bg-white">

            {/* Ícono animado sutilmente */}
            <div className="bg-brand/10 p-6 rounded-full mb-8 animate-pulse">
                <FileQuestion size={72} className="text-brand" strokeWidth={1.5} />
            </div>

            {/* Título gigante 404 */}
            <h1 className="text-7xl md:text-9xl font-extrabold text-dark mb-4 tracking-tighter">
                404
            </h1>

            <h2 className="text-2xl md:text-3xl font-bold text-dark mb-4">
                Página no encontrada
            </h2>

            <p className="text-gray-500 mb-10 max-w-md mx-auto leading-relaxed text-lg">
                Lo sentimos, parece que la página que buscas no existe, ha sido movida o cambió de nombre.
            </p>

            {/* Botón de acción para regresar */}
            <Link to="/">
                <Button className="flex items-center justify-center gap-2 px-8 py-4 text-lg">
                    <ArrowLeft size={20} /> Volver al inicio
                </Button>
            </Link>

        </div>
    );
};