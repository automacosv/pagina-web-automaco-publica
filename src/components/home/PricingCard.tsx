interface PricingProps {
    title: string;
    price: number;
    features: string[];
    isPopular?: boolean; 
}

export const PricingCard = ({
    title,
    price,
    features,
    isPopular = false
}: PricingProps) => {
    return (
        <div className={`p-8 rounded-2xl border ${isPopular ? 'border-brand shadow-lg scale-105' : 'border-gray-200'} flex flex-col bg-white`}>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <div className="flex items-baseline mb-6">
                <span className="text-4xl font-extrabold">${price}</span>
                <span className="text-gray-500 ml-1">/mes</span>
            </div>

            <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors mb-8 ${isPopular ? 'bg-brand text-white hover:bg-brand-dark' : 'bg-brand-light/20 text-brand-dark hover:bg-brand-light/40'
                }`}>
                Empieza ahora
            </button>

            <ul className="space-y-4 grow">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                        <svg className="w-5 h-5 text-brand mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                    </li>
                ))}
            </ul>
        </div>
    );
};
