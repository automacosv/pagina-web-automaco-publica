import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, KeyRound, ArrowLeft, CheckCircle2 } from 'lucide-react';
import toast from 'react-hot-toast';

import { Input } from '../../components/common/Input';
import { Button } from '../../components/common/Button';
import { apiRequest } from '../../services/apiService';

export const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email) {
            toast.error("Por favor, ingresa tu correo electrónico.");
            return;
        }

        setIsLoading(true);

        try {
            await apiRequest('/public/forgot-password', { 
                method: 'POST', 
                body: { email } 
            });

            setIsSubmitted(true);
            toast.success("Enlace enviado correctamente.");

        } catch (error: any) {
            toast.error("No encontramos ninguna cuenta registrada con este correo electrónico.");
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-[calc(100vh-80px)] bg-bg-alt flex items-center justify-center px-4 py-12">
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 max-w-md w-full text-center transition-all duration-500">
                
                {!isSubmitted ? (
                    <div className="animate-fade-in">
                        <div className="flex justify-center mb-6">
                            <div className="bg-brand/10 p-4 rounded-full ring-4 ring-brand/5">
                                <KeyRound size={32} className="text-brand" />
                            </div>
                        </div>

                        <h1 className="text-2xl font-bold text-dark mb-2">¿Olvidaste tu contraseña?</h1>
                        <p className="text-gray-500 mb-8 text-sm leading-relaxed px-2">
                            No te preocupes, nos pasa a todos. Ingresa tu correo asociado y te enviaremos las instrucciones.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="text-left">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 ml-1">
                                    Correo registrado
                                </label>
                                <Input
                                    icon={Mail}
                                    type="email"
                                    id="email"
                                    placeholder="nombre@ejemplo.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    autoFocus
                                />
                            </div>

                            <Button
                                type="submit"
                                className="w-full py-3 text-base shadow-lg shadow-brand/20 hover:shadow-brand/30 transition-all transform active:scale-[0.98]"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Enviando enlace...' : 'Enviar instrucciones'}
                            </Button>
                        </form>
                    </div>
                ) : (
                    <div className="animate-fade-in-up">
                        <div className="flex justify-center mb-6">
                            <div className="bg-green-50 p-4 rounded-full ring-4 ring-green-50/50">
                                <CheckCircle2 size={48} className="text-brand animate-bounce-slow" />
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-dark mb-2">¡Revisa tu correo!</h2>
                        <p className="text-gray-500 mb-8 text-sm leading-relaxed">
                            Hemos enviado un enlace de recuperación a <br />
                            <span className="font-semibold text-dark bg-gray-50 px-2 py-0.5 rounded border border-gray-100">{email}</span>.
                            <br /><br />
                            Si no lo ves, revisa tu carpeta de spam.
                        </p>

                        <div className="space-y-4">
                            <a
                                href="mailto:"
                                className="flex items-center justify-center gap-2 w-full bg-brand text-white py-3 rounded-lg font-bold hover:bg-brand-dark transition-all shadow-md cursor-pointer"
                            >
                                <Mail size={18} /> Abrir aplicación de correo
                            </a>

                            <button
                                onClick={() => setIsSubmitted(false)}
                                className="text-sm text-gray-400 hover:text-brand transition-colors font-medium w-full py-2"
                            >
                                ¿No recibiste el correo? <span className="underline decoration-brand/50 hover:decoration-brand">Reintentar</span>
                            </button>
                        </div>
                    </div>
                )}

                <div className="mt-8 pt-6 border-t border-gray-100">
                    <Link
                        to="/login"
                        className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-dark font-medium transition-colors group p-2 rounded-lg hover:bg-gray-50"
                    >
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-300" />
                        Volver a Iniciar Sesión
                    </Link>
                </div>
            </div>
        </div>
    );
};