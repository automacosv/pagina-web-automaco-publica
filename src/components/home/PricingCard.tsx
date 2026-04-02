

interface PricingProps {
    title: string;
    description?: string;
    price: string | number;
    priceInterval?: string;
    features: string[];
    isPopular?: boolean;
    badge?: string;
    buttonText?: string;
    buttonTheme?: 'brand' | 'dark';
}

export const PricingCard = ({ 
    title, 
    description, 
    price, 
    priceInterval, 
    features, 
    isPopular = false,
    badge,
    buttonText = 'Escoger plan',
    buttonTheme = 'dark'
}: PricingProps) => {
    return (
        <div className={`p-6 md:p-8 rounded-[1.5rem] flex flex-col bg-white text-left transition-all duration-300 w-full ${
            isPopular
                ? 'border-0 shadow-[0_8px_30px_rgb(0,0,0,0.12)] scale-110 z-10 relative'
                : 'border-0 shadow-[0_4px_20px_rgb(0,0,0,0.06)]'
            }`}>
            
            <div className="flex justify-between items-start mb-2">
                 <h3 className="text-2xl md:text-[1.75rem] font-bold italic text-dark tracking-tight leading-none">{title}</h3>
                 {badge && (
                     <span className="bg-blue-dark text-white text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-full">
                         {badge}
                     </span>
                 )}
            </div>

            {description && (
                <p className="text-gray-400 text-xs md:text-[13px] mb-4 md:mb-5 leading-relaxed pr-2 min-h-[40px]">
                    {description}
                </p>
            )}

            <div className="flex items-baseline mb-5">
                {price === 'Contactar con ventas' ? (
                     <span className="text-2xl md:text-[1.7rem] font-bold italic leading-tight text-dark pr-4">{price}</span>
                ) : (
                    <>
                        <span className="text-4xl md:text-5xl font-black italic text-dark tracking-tighter">${price}</span>
                        {priceInterval && <span className="text-gray-400 ml-1.5 font-medium text-[13px]">{priceInterval}</span>}
                    </>
                )}
            </div>

            <hr className="border-t-[1.5px] border-brand/30 mb-6" />

            <ul className="space-y-3 mb-8 grow">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start text-xs md:text-[13px] font-medium text-dark leading-snug">
                        <svg className="w-[15px] h-[15px] mr-2 shrink-0 text-dark mt-[1px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <rect x="3" y="3" width="18" height="18" rx="4" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                        </svg>
                        <span className="mt-[-1px]">{feature}</span>
                    </li>
                ))}
            </ul>

            <div className="mt-auto">
                <button
                    className={`w-full py-2.5 md:py-3 px-5 rounded-full font-bold text-[13px] md:text-sm transition-all duration-200 shadow-sm hover:shadow-md ${
                        buttonTheme === 'brand' 
                            ? 'bg-brand hover:brightness-110 text-white' 
                            : 'bg-blue-dark hover:bg-[#2d3748] text-white'
                    }`}
                >
                    {buttonText}
                </button>
            </div>
        </div>
    );
};