import React, { useState } from 'react';
import { User, Mail, Lock, Loader2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom'; 
import toast from 'react-hot-toast';
import registroImg from '../../assets/registro.png';

// Importamos componentes y servicio
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';
import { apiRequest } from '../../services/apiService';

// Tipamos la respuesta de tu API
interface RegisterResponse {
    message: string;
    access_token: string;
    token_type: string;
    user: any;
}

export const Register = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: '' 
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validaciones en el frontend para dar respuesta rápida
        if (!formData.name || !formData.email || !formData.password) {
            toast.error('Por favor, completa todos los campos.');
            return;
        }

        if (formData.password.length < 8) {
            toast.error('La contraseña debe tener al menos 8 caracteres.');
            return;
        }

        if (formData.password !== formData.password_confirmation) {
            toast.error('Las contraseñas no coinciden.');
            return;
        }

        setIsLoading(true);

        try {
            const response = await apiRequest<RegisterResponse>('/register', {
                method: 'POST',
                body: formData
            });
            
            // Guardar el token 
            localStorage.setItem('token', response.access_token);
            
            // Avisar al Navbar que iniciamos sesión
            window.dispatchEvent(new Event('auth-change'));
            
            toast.success('¡Cuenta creada exitosamente!');
            
            // Redirigir al usuario al dashboard o inicio
            navigate('/');
            
        } catch (error: any) {
            // Manejamos el error específico de tu backend (409 email_duplicado u otros)
            toast.error(error.message || 'Hubo un error al registrar tu cuenta.');
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex min-h-[calc(100vh-80px)] bg-white">
            {/* Lado Izquierdo: Formulario */}
            <div className="w-full md:w-1/2 flex flex-col justify-center px-12 lg:px-24 py-12">
                <div className="max-w-md w-full mx-auto">
                    <h2 className="text-3xl font-bold mb-2 text-dark">Crea tu cuenta en AutomaCo</h2>
                    <p className="text-gray-500 mb-8 text-sm">Prueba nuestra herramienta y resuelve tus problemas de gestión de facturas.</p>

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <Input 
                            icon={User} 
                            type="text" 
                            name="name"
                            placeholder="Nombre completo" 
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        
                        <Input 
                            icon={Mail} 
                            type="email" 
                            name="email"
                            placeholder="Correo electrónico" 
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        
                        <Input 
                            icon={Lock} 
                            type="password" 
                            name="password"
                            placeholder="Contraseña (Mínimo 8 caracteres)" 
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />

                        <Input 
                            icon={Lock} 
                            type="password" 
                            name="password_confirmation"
                            placeholder="Confirma tu contraseña" 
                            value={formData.password_confirmation}
                            onChange={handleChange}
                            required
                        />

                        <div className="pt-2">
                            <Button type="submit" className="w-full flex justify-center items-center gap-2" disabled={isLoading}>
                                {isLoading && <Loader2 size={18} className="animate-spin" />}
                                {isLoading ? 'Creando cuenta...' : 'Crear cuenta'}
                            </Button>
                        </div>
                    </form>

                    <p className="text-center text-sm text-gray-500 mt-8">
                        ¿Ya tienes una cuenta?{' '}
                        <Link to="/login" className="text-brand font-bold hover:text-brand-dark transition-colors">
                            Inicia sesión aquí
                        </Link>
                    </p>
                </div>
            </div>

            {/* Lado Derecho: Ilustración */}
            <div className="hidden md:flex md:w-1/2 bg-bg-alt items-center justify-center p-12">
                <div className="relative bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                    <img src={registroImg} alt="Trabajando en equipo" className="max-w-sm" />
                    <div className="mt-6 text-center">
                        <p className="font-semibold text-gray-700 font-sans">Organiza tus facturas en un solo lugar</p>
                    </div>
                </div>
            </div>
        </div>
    );
};