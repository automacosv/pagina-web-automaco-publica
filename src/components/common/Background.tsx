import React from 'react';

interface BackgroundProps {
    children?: React.ReactNode;
    imageUrl?: string;
    className?: string;
    fullScreen?: boolean;
    overlay?: boolean;
    gradientVariant?: 'green' | 'white';
}

export const Background: React.FC<BackgroundProps> = ({
    children,
    imageUrl,
    className = '',
    fullScreen = true,
    overlay = false,
    gradientVariant = 'green'
}) => {
    // 1. Quitamos 'bg-white' de las clases base para que no interfiera
    const baseClasses = "relative bg-cover bg-center bg-no-repeat overflow-hidden";
    const sizeClasses = fullScreen ? "w-full min-h-screen" : "w-full h-full";
    
    // 2. Mantenemos solo los gradientes aquí (sin colores base ni clases de Tailwind)
    const greenGradient = `
        radial-gradient(circle at top right, rgba(58, 216, 147, 0.5) 5%, transparent 30%),
        radial-gradient(circle at bottom left, rgba(58, 216, 147, 0.5) 5%, transparent 30%)
    `;
    const whiteGradient = `
        radial-gradient(circle at top right, rgba(255,255,255, 0.5) 0%, transparent 20%),
        radial-gradient(circle at bottom left, rgba(255, 255, 255, 0.5) 0%, transparent 20%)
    `;

    const getBackgroundImage = () => {
        if (imageUrl) return `url(${imageUrl})`;
        if (gradientVariant === 'white') return whiteGradient;
        return greenGradient;
    };

    // 3. Creamos una función para determinar la clase de Tailwind del color de fondo
    const getBackgroundColorClass = () => {
        if (imageUrl) return 'bg-gray-900'; // Un fondo oscuro por defecto mientras carga la imagen
        if (gradientVariant === 'white') return 'bg-brand'; // <--- Aquí aplicamos tu color bg-brand
        return 'bg-white'; // Fondo blanco necesario para que el gradiente verde resalte
    };

    return (
        <section 
            // 4. Inyectamos la clase del color de fondo dinámicamente
            className={`${baseClasses} ${sizeClasses} ${getBackgroundColorClass()} ${className}`}
            style={{ backgroundImage: getBackgroundImage() }}
        >
            {overlay && imageUrl && (
                <div className="absolute inset-0 bg-black/30 w-full h-full mix-blend-multiply z-0 pointer-events-none"></div>
            )}
            
            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
                {children}
            </div>
        </section>
    );
};