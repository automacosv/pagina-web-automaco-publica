import React from 'react';
import { type LucideIcon } from 'lucide-react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: LucideIcon; 
}

export const Input: React.FC<InputProps> = ({ icon: Icon, className = '', ...props }) => {
    return (
        <div className="relative">
            {Icon && (
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                    <Icon size={20} />
                </div>
            )}

            <input
                className={`w-full py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-brand transition-colors text-gray-700 placeholder-gray-400
        ${Icon ? 'pl-10' : 'pl-4'} pr-4 ${className}`}
                {...props} 
            />
        </div>
    );
};