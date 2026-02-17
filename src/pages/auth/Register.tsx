import { User, Mail, Lock } from 'lucide-react';

export const Register = () => {
    return (
        <div className="flex min-h-[calc(100vh-80px)] bg-white">
            {/* Lado Izquierdo: Formulario */}
            <div className="w-full md:w-1/2 flex flex-col justify-center px-12 lg:px-24">
                <div className="max-w-md w-full">
                    <h2 className="text-3xl font-bold mb-2">Crea tu cuenta en AutomaCo</h2>
                    <p className="text-gray-500 mb-8 text-sm">Prueba nuestra herramienta y resuelve tus problemas de gestión de facturas.</p>

                    <form className="space-y-4">
                        <div className="relative">
                            <User className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                            <input type="text" placeholder="Nombre completo" className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-brand" />
                        </div>
                        <div className="relative">
                            <Mail className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                            <input type="email" placeholder="Correo electrónico" className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-brand" />
                        </div>
                        <div className="relative">
                            <Lock className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                            <input type="password" placeholder="Contraseña" className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-brand" />
                        </div>

                        <button className="w-full bg-brand text-white py-3 rounded-lg font-bold hover:bg-brand-dark transition-all mt-6">
                            Crear cuenta
                        </button>
                    </form>
                </div>
            </div>

            {/* Lado Derecho: Ilustración (Visible solo en desktop) */}
            <div className="hidden md:flex md:w-1/2 bg-gray-50 items-center justify-center p-12">
                <div className="relative bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                    <img src="/assets/register-illustratio.jpg" alt="Trabajando en equipo" className="max-w-sm" />
                    <div className="mt-6 text-center">
                        <p className="font-semibold text-gray-700 font-sans">Organiza tus facturas en un solo lugar</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
