import { Button } from '../common/Button';

interface PricingProps {
    title: string;
    price: number;
    features: string[];
    isPopular?: boolean;
}

export const PricingCard = ({ title, price, features, isPopular = false }: PricingProps) => {
    return (
        <div className={`p-8 rounded-2xl flex flex-col bg-white transition-all duration-300 ${isPopular
            ? 'border-2 border-brand shadow-xl scale-105 z-10 relative' // Destacado
            : 'border border-gray-light hover:border-brand/50' // Normal
            }`}>

            <h3 className="text-xl font-bold mb-2 text-dark">{title}</h3>

            <div className="flex items-baseline mb-8">
                <span className="text-4xl font-extrabold text-dark">${price}</span>
                <span className="text-gray-500 ml-1 font-medium">/mes</span>
            </div>

            <div className="mb-8">
                <Button
                    variant={isPopular ? 'primary' : 'outline'}
                    className="w-full"
                >
                    Empieza ahora
                </Button>
            </div>

            <ul className="space-y-4 grow">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start text-sm text-gray-600">
                        <svg className="w-5 h-5 text-brand mr-3 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                    </li>
                ))}
            </ul>
        </div>
    );
};