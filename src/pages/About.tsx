import React, { useState } from 'react';
import { User, Mail, Send, MessageSquare } from 'lucide-react';
import toast from 'react-hot-toast';
import { Input } from '../components/common/Input';
import { Button } from '../components/common/Button';
import AboutImg from '../assets/about.svg'; 

export const About = () => {
    // Estado para el formulario de contacto
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            toast.error("Por favor, completa todos los campos.");
            return;
        }

        setIsLoading(true);
        const toastId = toast.loading("Enviando mensaje...");

        try {
            // await apiRequest('/contacto', { method: 'POST', body: formData });

            // Simulamos el envío por 1.5 segundos
            await new Promise(resolve => setTimeout(resolve, 1500));

            toast.success("¡Mensaje enviado! Un agente se pondrá en contacto contigo pronto.", { id: toastId });

            // Limpiamos el formulario
            setFormData({ name: '', email: '', message: '' });

        } catch (error) {
            toast.error("Hubo un error al enviar el mensaje. Intenta más tarde.", { id: toastId });
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="w-full bg-white">

            {/* 1. Sección Hero: Acerca de y Quiénes Somos */}
            <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 flex flex-col md:flex-row items-center gap-16">
                <div className="md:w-1/2">
                    <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">Acerca de AutomaCo</h1>
                    <p className="text-gray-500 mb-10 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                    </p>

                    <h2 className="text-3xl font-bold text-dark mb-4">¿Quiénes somos?</h2>
                    <p className="text-gray-500 leading-relaxed mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <p className="text-gray-500 leading-relaxed">
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>

                {/* Ilustración de la derecha */}
                <div className="md:w-1/2 flex justify-center">
                    <div className="relative w-full max-w-md aspect-square bg-bg-alt rounded-full flex items-center justify-center border-4 border-brand/20 shadow-2xl shadow-brand/10 overflow-hidden">
                        <img src={AboutImg} alt="Sobre AutomaCo" className="object-cover w-full h-full" /> 
                    </div>
                </div>
            </section>

            {/* 2. Sección Frase Destacada (Quote) */}
            <section className="bg-bg-alt py-16 px-6 md:px-12">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="w-16 h-1 bg-brand mx-auto mb-8 rounded-full"></div>
                    <p className="text-2xl md:text-3xl font-medium text-dark italic leading-relaxed">
                        "Bibendum gravida dolor egestas aliquam. Optimizamos el tiempo de las empresas automatizando lo que de verdad importa."
                    </p>
                    <div className="w-16 h-1 bg-brand mx-auto mt-8 rounded-full"></div>
                </div>
            </section>

            {/* 3. Sección Formulario de Contacto */}
            <section className="max-w-3xl mx-auto px-6 md:px-12 py-24">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Contáctanos</h2>
                    <p className="text-gray-500">
                        Usa el siguiente formulario para que uno de nuestros agentes pueda contactarte y resolver tus dudas.
                    </p>
                </div>

                <div className="bg-white p-8 md:p-10 rounded-2xl border border-gray-100 shadow-xl shadow-gray-200/40">
                    <form onSubmit={handleSubmit} className="space-y-6">

                        {/* Input Nombre */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 ml-1">Nombre</label>
                            <Input
                                icon={User}
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Tu nombre completo"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Input Correo */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 ml-1">Correo electrónico</label>
                            <Input
                                icon={Mail}
                                type="email"
                                name="email"
                                id="email"
                                placeholder="ejemplo@correo.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Textarea Mensaje  */}
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 ml-1">Mensaje</label>
                            <div className="relative">
                                <div className="absolute left-3 top-3 text-gray-400 pointer-events-none">
                                    <MessageSquare size={20} />
                                </div>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows={5}
                                    placeholder="¿En qué te podemos ayudar?"
                                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-brand transition-colors text-gray-700 placeholder-gray-400 resize-none"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                        </div>

                        {/* Botón de Enviar */}
                        <div className="pt-4">
                            <Button
                                type="submit"
                                className="w-full flex justify-center items-center gap-2 py-4 text-lg"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Enviando...' : (
                                    <>
                                        Enviar mensaje <Send size={20} />
                                    </>
                                )}
                            </Button>
                        </div>
                    </form>
                </div>
            </section>

        </div>
    );
};