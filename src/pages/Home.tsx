import { PricingCard } from '../components/home/PricingCard';
import { CloudDownload, Mic, TrendingUp, Scale } from 'lucide-react';

const features = [
    {
        title: 'Descarga masiva',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        icon: <CloudDownload className="text-brand w-6 h-6" />
    },
    {
        title: 'Herramienta de voz',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        icon: <Mic className="text-brand w-6 h-6" />
    },
    {
        title: 'Inversión a corto plazo',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        icon: <TrendingUp className="text-brand w-6 h-6" />
    },
    {
        title: 'Inversión costo-plazo',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        icon: <Scale className="text-brand w-6 h-6" />
    }
];

const plans = [
    { title: 'Básico', price: 12, features: ['Límite de facturas: 100', 'Soporte por email'] },
    { title: 'Pro', price: 15, features: ['Límite de facturas: 500', 'Soporte 24/7', 'Reportes PDF'], isPopular: true },
    { title: 'Premium', price: 20, features: ['Facturas ilimitadas', 'API Access', 'Múltiples usuarios'] }
];

export const Home = () => {
    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="px-12 py-20 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
                <div className="md:w-1/2">
                    <h1 className="text-5xl font-bold text-brand leading-tight mb-6">
                        Conoce AutomaCo, tu herramienta de organización y descarga de facturas.
                    </h1>
                    <p className="text-gray-500 mb-8 max-w-md">
                        Optimiza tus procesos administrativos con nuestra tecnología de automatización diseñada para empresas modernas.
                    </p>
                    <button className="bg-brand text-white px-8 py-3 rounded-lg font-bold hover:bg-brand-dark shadow-md">
                        Aprende más
                    </button>
                </div>
                <div className="md:w-1/2 flex justify-end">
                    <img src="/assets/hero-envelope.png" alt="Ilustración" className="w-full max-w-md" />
                </div>
            </section>

            {/* Feature Section */}
            <section className="bg-gray-50 py-20 px-12">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold mb-2">
                        Cómo <span className="text-brand">AutomaCo</span> resuelve tus problemas de facturas.
                    </h2>
                    <p className="text-gray-400 mb-12">Permítenos apoyarte con lo que nosotros sabemos hacer por ti.</p>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {['Descarga masiva', 'Herramienta de voz', 'Inversión a corto plazo', 'Inversión costo-plazo'].map((feature, i) => (
                            <div key={i} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <div className="bg-gray-100 w-12 h-12 rounded-full mb-6 flex items-center justify-center">
                                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                        {features.map((f, i) => (
                                            <div key={i} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                                <div className="bg-gray-100 w-12 h-12 rounded-full mb-6 flex items-center justify-center">
                                                    {f.icon}
                                                </div>
                                                <h4 className="font-bold mb-3">{f.title}</h4>
                                                <p className="text-xs text-gray-500 leading-relaxed">{f.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <h4 className="font-bold mb-3">{feature}</h4>
                                <p className="text-xs text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-24 px-12 text-center">
                <h2 className="text-4xl font-bold mb-4">El mejor servicio a un precio aún mejor.</h2>
                <p className="text-gray-500 mb-16">Selecciona el plan que mejor se adapte a tus necesidades.</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 py-20">
                        {plans.map((plan, index) => (
                            <PricingCard key={index} {...plan} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};