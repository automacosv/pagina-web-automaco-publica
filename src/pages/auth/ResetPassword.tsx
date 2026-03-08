import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Lock, CheckCircle2, ArrowLeft, ShieldCheck } from 'lucide-react';
import toast from 'react-hot-toast';

// Componentes reutilizables
import { Input } from '../../components/common/Input';
import { Button } from '../../components/common/Button';

export const ResetPassword = () => {
    const navigate = useNavigate();
    
    // Estados del formulario
    const [passwords, setPasswords] = useState({
        password: '',
        confirmPassword: ''
    });
    
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Manejador de cambios
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPasswords({
            ...passwords,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // 1. Validaciones
        if (!passwords.password || !passwords.confirmPassword) {
            toast.error("Por favor completa ambos campos.");
            return;
        }

        if (passwords.password.length < 8) {
            toast.error("La contraseña debe tener al menos 8 caracteres.");
            return;
        }

        if (passwords.password !== passwords.confirmPassword) {
            toast.error("Las contraseñas no coinciden.");
            return;
        }

        setIsLoading(true);

        try {
            // const token = searchParams.get('token');
            // await apiRequest('/reset-password', { method: 'POST', body: { ...passwords, token } });

            // Simulamos espera
            await new Promise(resolve => setTimeout(resolve, 1500));

            setIsSuccess(true);
            toast.success("¡Contraseña actualizada correctamente!");

        } catch {
            toast.error("Error al restablecer. El enlace podría haber expirado.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-[calc(100vh-80px)] bg-bg-alt flex items-center justify-center px-4 py-12">
            
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 max-w-md w-full text-center transition-all duration-500">
                
                {!isSuccess ? (
                    /* --- VISTA: FORMULARIO DE CAMBIO --- */
                    <div className="animate-fade-in">
                        <div className="flex justify-center mb-6">
                            <div className="bg-brand/10 p-4 rounded-full ring-4 ring-brand/5">
                                <ShieldCheck size={32} className="text-brand" />
                            </div>
                        </div>

                        <h1 className="text-2xl font-bold text-dark mb-2">Nueva Contraseña</h1>
                        <p className="text-gray-500 mb-8 text-sm leading-relaxed px-2">
                            Tu nueva contraseña debe ser diferente a las utilizadas anteriormente.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="text-left">
                                <label className="block text-sm font-medium text-gray-700 mb-2 ml-1">
                                    Contraseña nueva
                                </label>
                                <Input 
                                    icon={Lock}
                                    type="password"
                                    name="password"
                                    placeholder="Mínimo 8 caracteres"
                                    value={passwords.password}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="text-left">
                                <label className="block text-sm font-medium text-gray-700 mb-2 ml-1">
                                    Confirmar contraseña
                                </label>
                                <Input 
                                    icon={Lock}
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="Repite la contraseña"
                                    value={passwords.confirmPassword}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="pt-2">
                                <Button 
                                    type="submit" 
                                    className="w-full py-3 shadow-lg shadow-brand/20 hover:shadow-brand/30"
                                    disabled={isLoading}
                                >
                                    {isLoading ? 'Actualizando...' : 'Restablecer contraseña'}
                                </Button>
                            </div>
                        </form>
                    </div>
                ) : (
                    /* --- VISTA: ÉXITO --- */
                    <div className="animate-fade-in-up py-4">
                        <div className="flex justify-center mb-6">
                            <div className="bg-green-100 p-4 rounded-full ring-4 ring-green-50 animate-bounce-slow">
                                <CheckCircle2 size={48} className="text-green-600" />
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-dark mb-2">¡Todo listo!</h2>
                        <p className="text-gray-500 mb-8 text-sm leading-relaxed">
                            Tu contraseña ha sido restablecida exitosamente. <br/>
                            Ya puedes acceder a tu cuenta.
                        </p>

                        <Button 
                            onClick={() => navigate('/login')}
                            className="w-full py-3 flex items-center justify-center gap-2"
                        >
                            Ir a Iniciar Sesión
                        </Button>
                    </div>
                )}

                {/* Footer: Volver */}
                {!isSuccess && (
                    <div className="mt-8 pt-6 border-t border-gray-100">
                        <Link 
                            to="/login" 
                            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-dark font-medium transition-colors group p-2"
                        >
                            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-300" />
                            Cancelar y volver
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};