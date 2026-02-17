import React, { useState } from 'react';
import { User, Mail, Lock } from 'lucide-react';
import registroImg from '../../assets/registro.png';

// Importamos tus componentes reutilizables
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';

export const Register = () => {
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Datos listos para enviar:', formData);
        
    };

    return (
        <div className="flex min-h-[calc(100vh-80px)] bg-white">
            {/* Lado Izquierdo: Formulario */}
            <div className="w-full md:w-1/2 flex flex-col justify-center px-12 lg:px-24">
                <div className="max-w-md w-full">
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
                        />
                        
                        <Input 
                            icon={Mail} 
                            type="email" 
                            name="email"
                            placeholder="Correo electrónico" 
                            value={formData.email}
                            onChange={handleChange}
                        />
                        
                        <Input 
                            icon={Lock} 
                            type="password" 
                            name="password"
                            placeholder="Contraseña" 
                            value={formData.password}
                            onChange={handleChange}
                        />

                        <div className="pt-2">
                            <Button type="submit" className="w-full">
                                Crear cuenta
                            </Button>
                        </div>
                    </form>
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