import React, { useState, useEffect } from 'react';
import { User, Mail, Lock, ShieldCheck, Save, Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';
import { Input } from '../../components/common/Input';
import { Button } from '../../components/common/Button';
import { apiRequest } from '../../services/apiService';

export const Profile = () => {
    // --- ESTADOS ---
    const [isLoadingData, setIsLoadingData] = useState(true);
    const [isSavingProfile, setIsSavingProfile] = useState(false);
    const [isSavingPassword, setIsSavingPassword] = useState(false);

    // Estado del formulario de Perfil
    const [profileData, setProfileData] = useState({
        name: '',
        email: ''
    });

    // Estado del formulario de Contraseña
    const [passwordData, setPasswordData] = useState({
        current_password: '',
        password: '',
        password_confirmation: '' 
    });

    // --- CARGAR DATOS DEL USUARIO ---
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                // Llama a tu ruta GET /public/settings
                const data = await apiRequest<any>('/public/settings', { method: 'GET' });
                setProfileData({
                    name: data.name || '',
                    email: data.email || ''
                });
            } catch (error) {
                toast.error('Error al cargar la información del perfil.');
            } finally {
                setIsLoadingData(false);
            }
        };

        fetchUserData();
    }, []);

    // --- MANEJADORES DE CAMBIOS ---
    const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProfileData({ ...profileData, [e.target.name]: e.target.value });
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordData({ ...passwordData, [e.target.name]: e.target.value });
    };

    // --- ENVÍO: ACTUALIZAR PERFIL ---
    const handleProfileSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSavingProfile(true);

        try {
            await apiRequest('/settings/profile', {
                method: 'PUT',
                body: profileData
            });
            toast.success('Perfil actualizado correctamente.');
            // Actualizamos el evento global por si el Navbar necesita refrescar el nombre
            window.dispatchEvent(new Event('auth-change'));
        } catch (error: any) {
            toast.error(error.message || 'Error al actualizar el perfil.');
        } finally {
            setIsSavingProfile(false);
        }
    };

    // --- ENVÍO: ACTUALIZAR CONTRASEÑA ---
    const handlePasswordSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (passwordData.password !== passwordData.password_confirmation) {
            toast.error('Las contraseñas nuevas no coinciden.');
            return;
        }

        setIsSavingPassword(true);

        try {
            await apiRequest('/settings/password', {
                method: 'PUT',
                body: passwordData
            });
            toast.success('Contraseña actualizada de forma segura.');
            // Limpiamos los campos por seguridad
            setPasswordData({ current_password: '', password: '', password_confirmation: '' });
        } catch (error: any) {
            toast.error(error.message || 'Error al cambiar la contraseña.');
        } finally {
            setIsSavingPassword(false);
        }
    };

    // --- PANTALLA DE CARGA INICIAL ---
    if (isLoadingData) {
        return (
            <div className="min-h-[calc(100vh-80px)] bg-bg-alt flex items-center justify-center">
                <Loader2 size={40} className="text-brand animate-spin" />
            </div>
        );
    }

    return (
        <div className="min-h-[calc(100vh-80px)] bg-bg-alt py-12 px-4 md:px-12">
            <div className="max-w-4xl mx-auto space-y-8">
                
                {/* Encabezado */}
                <div>
                    <h1 className="text-3xl font-bold text-dark">Mi Cuenta</h1>
                    <p className="text-gray-500 mt-1">Administra tu información personal y la seguridad de tu perfil.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    
                    {/* TARJETA 1: DATOS PERSONALES */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
                            <div className="bg-brand/10 p-2 rounded-lg">
                                <User size={24} className="text-brand" />
                            </div>
                            <h2 className="text-xl font-bold text-dark">Información Personal</h2>
                        </div>

                        <form onSubmit={handleProfileSubmit} className="space-y-5">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">Nombre Completo</label>
                                <Input 
                                    icon={User}
                                    type="text"
                                    name="name"
                                    placeholder="Tu nombre"
                                    value={profileData.name}
                                    onChange={handleProfileChange}
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">Correo Electrónico</label>
                                <Input 
                                    icon={Mail}
                                    type="email"
                                    name="email"
                                    placeholder="correo@ejemplo.com"
                                    value={profileData.email}
                                    onChange={handleProfileChange}
                                    required
                                />
                            </div>

                            <div className="pt-4">
                                <Button type="submit" className="w-full flex justify-center items-center gap-2" disabled={isSavingProfile}>
                                    {isSavingProfile ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />}
                                    {isSavingProfile ? 'Guardando...' : 'Guardar Cambios'}
                                </Button>
                            </div>
                        </form>
                    </div>

                    {/* TARJETA 2: SEGURIDAD (CONTRASEÑA) */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
                            <div className="bg-gray-100 p-2 rounded-lg">
                                <ShieldCheck size={24} className="text-gray-600" />
                            </div>
                            <h2 className="text-xl font-bold text-dark">Seguridad</h2>
                        </div>

                        <form onSubmit={handlePasswordSubmit} className="space-y-5">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">Contraseña Actual</label>
                                <Input 
                                    icon={Lock}
                                    type="password"
                                    name="current_password"
                                    placeholder="Ingresa tu contraseña actual"
                                    value={passwordData.current_password}
                                    onChange={handlePasswordChange}
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">Nueva Contraseña</label>
                                <Input 
                                    icon={Lock}
                                    type="password"
                                    name="password"
                                    placeholder="Mínimo 8 caracteres"
                                    value={passwordData.password}
                                    onChange={handlePasswordChange}
                                    minLength={8}
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">Confirmar Nueva Contraseña</label>
                                <Input 
                                    icon={Lock}
                                    type="password"
                                    name="password_confirmation" 
                                    placeholder="Repite la contraseña nueva"
                                    value={passwordData.password_confirmation}
                                    onChange={handlePasswordChange}
                                    minLength={8}
                                    required
                                />
                            </div>

                            <div className="pt-4">
                                <Button type="submit" variant="outline" className="w-full flex justify-center items-center gap-2" disabled={isSavingPassword}>
                                    {isSavingPassword ? <Loader2 size={18} className="animate-spin" /> : <Lock size={18} />}
                                    {isSavingPassword ? 'Actualizando...' : 'Actualizar Contraseña'}
                                </Button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};