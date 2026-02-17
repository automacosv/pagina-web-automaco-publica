import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline' | 'ghost';
    children: React.ReactNode;
    className?: string;
}

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    children,
    className = '',
    ...props
}) => {
    const baseStyles = "px-8 py-3 rounded-lg font-bold transition-all duration-300 cursor-pointer flex items-center justify-center";

    const variants = {
        primary: "bg-brand text-white hover:bg-brand-dark shadow-md hover:shadow-lg border border-transparent",

        outline: "bg-transparent text-brand border-2 border-brand hover:bg-brand hover:text-white",

        ghost: "bg-transparent text-gray-500 hover:text-brand hover:bg-brand/10"
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};