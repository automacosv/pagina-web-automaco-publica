/* eslint-disable prefer-const */
import React, { useState } from 'react';
import { CreditCard, User, Calendar, Lock } from 'lucide-react';
import toast from 'react-hot-toast';
import { Input } from '../common/Input';
import { Button } from '../common/Button';
import { useNavigate } from 'react-router-dom';

export const PaymentForm = () => {
    const navigate = useNavigate();
    
    const [isLoading, setIsLoading] = useState(false);
    const [cardData, setCardData] = useState({
        cardName: '',
        cardNumber: '',
        expiry: '',
        cvc: ''
    });

    // --- Funciones de Formateo ---

    // Formatea el número de tarjeta con espacios cada 4 dígitos
    const formatCardNumber = (value: string) => {
        const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
        const matches = v.match(/\d{4,16}/g);
        const match = (matches && matches[0]) || '';
        const parts = [];
        for (let i = 0, len = match.length; i < len; i += 4) {
            parts.push(match.substring(i, i + 4));
        }
        if (parts.length) {
            return parts.join(' ');
        } else {
            return value;
        }
    };

    // Formatea la fecha de expiración (MM/YY)
    const formatExpiry = (value: string) => {
        const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
        if (v.length >= 2) {
            return v.substring(0, 2) + '/' + v.substring(2, 4);
        }
        return v;
    };

    // Manejador de cambios en los inputs
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let { name, value } = e.target;

        // Aplicar formateo según el campo
        if (name === 'cardNumber') {
            value = formatCardNumber(value);
        } else if (name === 'expiry') {
            value = formatExpiry(value);
        } else if (name === 'cvc') {
            // Limitar CVC a dígitos numéricos (máx 4)
            value = value.replace(/[^0-9]/g, '').substring(0, 4);
        } else if (name === 'cardName') {
            // Permitir solo letras y espacios para el nombre
            value = value.replace(/[^a-zA-Z\s]/g, '');
        }

        setCardData({ ...cardData, [name]: value });
    };

    // Manejador del envío del formulario
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validación visual simple
        if (!cardData.cardNumber || !cardData.expiry || !cardData.cvc || !cardData.cardName) {
            toast.error("Por favor, completa todos los campos de la tarjeta.");
            return;
        }

        setIsLoading(true);
        const toastId = toast.loading("Procesando pago seguro...");

        try {
            // await apiRequest('/payment', { method: 'POST', body: cardData });

            // Simulación de espera de red
            await new Promise(resolve => setTimeout(resolve, 2000));

            toast.success("¡Pago realizado con éxito! Bienvenido a Pro.", { id: toastId });
            navigate('/checkout/success');

        } catch (error) {
            toast.error("Error al procesar el pago. Intenta nuevamente.", { id: toastId });
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 max-w-lg w-full mx-auto">
            <div className="mb-6">
                <h3 className="text-2xl font-bold text-dark">Método de Pago</h3>
                <p className="text-gray-500 text-sm mt-1">Ingresa los detalles de tu tarjeta de crédito o débito.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
                {/* Nombre en la Tarjeta */}
                <div>
                    <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">Nombre en la tarjeta</label>
                    <Input
                        icon={User}
                        type="text"
                        name="cardName"
                        id="cardName"
                        placeholder="Como aparece en la tarjeta"
                        value={cardData.cardName}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Número de Tarjeta */}
                <div>
                    <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">Número de tarjeta</label>
                    <div className="relative">
                        <Input
                            icon={CreditCard}
                            type="text"
                            name="cardNumber"
                            id="cardNumber"
                            placeholder="0000 0000 0000 0000"
                            value={cardData.cardNumber}
                            onChange={handleChange}
                            maxLength={19} // 16 dígitos + 3 espacios
                            required
                        />
                        {/* Iconos de marcas de tarjeta (opcional, decorativo) */}
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-2 opacity-50 pointer-events-none">
                            {/* Puedes buscar SVGs de Visa/Mastercard y ponerlos aquí */}
                            <CreditCard size={20} className="text-gray-400" />
                        </div>
                    </div>
                </div>

                {/* Fila de Expiración y CVC */}
                <div className="flex gap-4">
                    <div className="w-1/2">
                        <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">Expiración (MM/AA)</label>
                        <Input
                            icon={Calendar}
                            type="text"
                            name="expiry"
                            id="expiry"
                            placeholder="MM/AA"
                            value={cardData.expiry}
                            onChange={handleChange}
                            maxLength={5} // MM/AA
                            required
                        />
                    </div>
                    <div className="w-1/2">
                        <label htmlFor="cvc" className="block text-sm font-medium text-gray-700 mb-1.5 ml-1 flex items-center justify-between">
                            CVC / CVV
                            {/* Tooltip de ayuda (opcional) */}
                            <span className="text-xs text-gray-400 cursor-help" title="Los 3 o 4 dígitos de seguridad al reverso de tu tarjeta.">
                                ¿Qué es esto?
                            </span>
                        </label>
                        <Input
                            icon={Lock}
                            type="text" // Usamos text para evitar flechas de input number
                            name="cvc"
                            id="cvc"
                            placeholder="123"
                            value={cardData.cvc}
                            onChange={handleChange}
                            maxLength={4}
                            required
                        />
                    </div>
                </div>

                {/* Resumen y Botón de Pago */}
                <div className="pt-4 space-y-4">
                    <div className="flex justify-between items-center py-3 border-y border-gray-100 text-sm">
                        <span className="text-gray-600 font-medium">Total a pagar:</span>
                        <span className="text-2xl font-extrabold text-dark">$15.00</span>
                    </div>

                    <Button
                        type="submit"
                        className="w-full text-lg py-4 flex items-center justify-center gap-2"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Procesando...' : (
                            <>
                                <Lock size={18} /> Pagar $15.00 Ahora
                            </>
                        )}
                    </Button>

                    <p className="text-center text-xs text-gray-400 flex items-center justify-center gap-1">
                        <Lock size={12} /> Pagos 100% seguros y encriptados.
                    </p>
                </div>
            </form>
        </div>
    );
};