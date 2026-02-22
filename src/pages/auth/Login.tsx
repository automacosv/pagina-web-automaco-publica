import React, { useState } from 'react';
import { Mail, Lock } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';
import loginImg from '../../assets/login-svg.svg'; 

export const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // Validación básica visual
        if (!formData.email || !formData.password) {
            toast.error('Por favor, completa todos los campos.');
            return;
        }

        setIsLoading(true);

        try {
            // const response = await apiRequest('/login', { method: 'POST', body: formData });
            // localStorage.setItem('token', response.token);
            
            // Simulamos una espera de red por ahora
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Alerta de éxito profesional
            toast.success('¡Bienvenido de vuelta a AutomaCo!');
            
            // Redirigir
            navigate('/');
            
        } catch (error) {
            toast.error('Credenciales incorrectas. Intenta nuevamente.');
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex min-h-[calc(100vh-80px)] bg-white">
            {/* Lado Izquierdo: Ilustración (Visible solo en desktop) */}
            <div className="hidden md:flex md:w-1/2 bg-bg-alt items-center justify-center p-12">
                <div className="relative w-full max-w-lg flex flex-col items-center">
                    {/* Reemplaza con tu imagen o SVG exportado */}
                    <img src={loginImg} alt="Inicia sesión en AutomaCo" className="w-full drop-shadow-xl" />
                </div>
            </div>

            {/* Lado Derecho: Formulario */}
            <div className="w-full md:w-1/2 flex flex-col justify-center px-12 lg:px-24 bg-white">
                <div className="max-w-md w-full mx-auto">
                    <h2 className="text-3xl font-bold mb-2 text-dark">Inicia sesión en AutomaCo</h2>
                    <p className="text-gray-500 mb-8 text-sm">Bienvenido de vuelta, por favor ingresa tus datos.</p>


                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <Input 
                            icon={Mail} 
                            type="email" 
                            name="email"
                            placeholder="Correo electrónico" 
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        
                        <div>
                            <Input 
                                icon={Lock} 
                                type="password" 
                                name="password"
                                placeholder="Contraseña" 
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                            <div className="flex justify-end mt-2">
                                <a href="#" className="text-xs text-brand hover:text-brand-dark font-medium transition-colors">
                                    ¿Olvidaste tu contraseña?
                                </a>
                            </div>
                        </div>

                        <div className="pt-2">
                            <Button type="submit" className="w-full" disabled={isLoading}>
                                {isLoading ? 'Cargando...' : 'Iniciar sesión'}
                            </Button>
                        </div>
                    </form>

                    <p className="text-center text-sm text-gray-500 mt-8">
                        ¿No tienes una cuenta?{' '}
                        <Link to="/registro" className="text-brand font-bold hover:text-brand-dark transition-colors">
                            Regístrate
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};