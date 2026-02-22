import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Download, FileText } from 'lucide-react';
import { Button } from '../../components/common/Button';

export const Success = () => {
    // Datos simulados de la transacción (estos vendrían de tu estado global o parámetros de URL)
    const transactionDetails = {
        amount: '$15.00',
        plan: 'Plan Pro Mensual',
        transactionId: 'TXN-123456789',
        date: new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })
    };

    return (
        <div className="min-h-screen bg-bg-alt flex items-center justify-center p-4">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100max-w-lg w-full text-center relative overflow-hidden">

                {/* Fondo decorativo superior (opcional, para darle el toque verde sutil) */}
                <div className="absolute top-0 left-0 w-full h-2 bg-brand"></div>

                {/* Icono de Éxito Grande */}
                <div className="mb-8 flex justify-center">
                    <div className="bg-brand/10 p-4 rounded-full">
                        <CheckCircle size={80} className="text-brand animate-bounce-slow" strokeWidth={1.5} />
                    </div>
                </div>

                {/* Títulos Principales */}
                <h1 className="text-3xl md:text-4xl font-bold text-dark mb-4">
                    ¡Pago Realizado con Éxito!
                </h1>
                <p className="text-gray-500 text-lg mb-10 leading-relaxed">
                    Gracias por tu compra. Tu suscripción a <strong className="text-brand font-medium">{transactionDetails.plan}</strong> ya está activa.
                </p>

                {/* Tarjeta de Detalles de la Transacción */}
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 mb-10 text-left">
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                        <FileText size={16} /> Resumen del Pedido
                    </h3>
                    <div className="space-y-3">
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600 font-medium">Monto pagado:</span>
                            <span className="text-xl font-extrabold text-dark">{transactionDetails.amount}</span>
                        </div>
                        <div className="h-px bg-gray-200 my-2"></div>
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-500">ID de Transacción:</span>
                            <span className="font-mono text-gray-700 bg-white px-2 py-1 rounded border border-gray-100">
                                {transactionDetails.transactionId}
                            </span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-500">Fecha:</span>
                            <span className="text-gray-700 font-medium">{transactionDetails.date}</span>
                        </div>
                    </div>
                </div>

                {/* Botones de Acción */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/dashboard" className="w-full sm:w-auto">
                        <Button variant="primary" className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 text-lg shadow-lg shadow-brand/20 hover:shadow-xl">
                            Ir a mi Dashboard <ArrowRight size={20} />
                        </Button>
                    </Link>

                    <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 rounded-lg font-bold text-brand bg-brand/10 hover:bg-brand/20 transition-colors border border-brand/20 cursor-pointer">
                        <Download size={20} /> Descargar Recibo
                    </button>
                </div>

                <p className="text-gray-400 text-sm mt-8">
                    Se ha enviado un correo de confirmación a tu bandeja de entrada.
                </p>
            </div>
        </div>
    );
};