import { PricingCard } from '../components/home/PricingCard';
import { Button } from '../components/common/Button';
import { Background } from '../components/common/Background';
import imageFrame from '../assets/Frame_Automaco.svg';

const plans = [
    { title: 'Básico', price: 12, features: ['Límite de facturas: 100', 'Soporte por email'] },
    { title: 'Pro', price: 15, features: ['Límite de facturas: 500', 'Soporte 24/7', 'Reportes PDF'], isPopular: true },
    { title: 'Premium', price: 20, features: ['Facturas ilimitadas', 'API Access', 'Múltiples usuarios'] }
];

export const Home = () => {
    return (
        <div className="w-full overflow-hidden">
            {/* Hero Section */}
            <Background fullScreen={false}>
                <section className="relative w-full min-h-screen flex items-center justify-center px-6 md:px-12 bg-cover bg-center bg-no-repeat">
                    <div className="max-w-7xl mx-auto flex flex-col items-center justify-center w-full py-20 text-center">
                        <div className="flex flex-col items-center justify-center w-full mb-5 md:mb-0">
                            <h3 className="text-3xl font-bold text-brand leading-tight">
                                Multiplica la
                            </h3>
                            <h1 className="text-[4rem] sm:text-[5rem] md:text-[8rem] lg:text-[11rem] italic font-bold-italic text-brand leading-tight mb-4">
                                Productividad
                            </h1>
                            <p className="text-brand mb-8 max-w-lg text-lg text-center">
                                Olvídate del trabajo manual. AutomaCo procesa, organiza y gestiona tus facturas electrónicas
                            </p>
                            <div className="flex justify-center gap-4 w-full">
                                <Button onClick={() => console.log('Click!')}>
                                    Conocer más
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </Background>
            {/* Feature Section */}
            <Background gradientVariant="white">
                <section className="w-full min-h-screen flex items-center justify-center px-6 md:px-16 lg:px-24 py-20">
                   
                    <div className="max-w-screen-2xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        {/* Columna de Texto: Pegada a la izquierda */}
                        <div className="flex flex-col items-start w-full text-left">
                            <h2 className="text-4xl md:text-5xl lg:text-[5rem] font-normal text-white italic leading-none mb-2 drop-shadow-sm">
                                ¿Qué es?
                            </h2>
                            <h1 className="text-6xl md:text-[6rem] lg:text-[7.5rem] font-bold italic text-white leading-none mb-8 lg:mb-12 drop-shadow-lg tracking-tight">
                                AutomaCo
                            </h1>                           
                            <p className="text-white text-lg md:text-xl lg:text-xl italic max-w-xl leading-relaxed font-normal">
                                AutomaCo es el software inteligente que automatiza la recepción, extracción y organización de tus facturas electrónicas. Menos trabajo manual, más control para tu negocio.
                            </p>
                        </div>
                        {/* Columna de Imagen: A la derecha */}
                        <div className="w-full lg:max-w-2xl ml-auto aspect-video lg:aspect-[4/3] relative flex items-center justify-center bg-white/5 backdrop-blur-sm border-2 border-dashed border-white/30 rounded-3xl overflow-hidden group hover:bg-white/10 transition-colors duration-300 shadow-xl">
                            <div className="text-center p-1">
                               <img src={imageFrame} alt="AutomaCo" />
                            </div>
                        </div>
                    </div>
                </section>
            </Background>
            {/* Pricing Section */}
            <section className="w-full min-h-screen flex items-center justify-center bg-white px-6 md:px-12 py-20 text-center">
                <div className="max-w-7xl mx-auto w-full">
                    <h2 className="text-4xl font-bold mb-4 text-dark">El mejor servicio a un precio aún mejor.</h2>
                    <p className="text-gray-500 mb-16">Selecciona el plan que mejor se adapte a tus necesidades.</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                        {plans.map((plan, index) => (
                            <PricingCard key={index} {...plan} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};