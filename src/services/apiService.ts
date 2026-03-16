type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface RequestOptions {
    method: HttpMethod;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    body?: any;
    headers?: Record<string, string>;
}

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

export const apiRequest = async <T>(endpoint: string, options: RequestOptions): Promise<T> => {
    const { method, body, headers } = options;
    
    // Obtenemos el token almacenado
    const token = localStorage.getItem('token');

     // Construcción de la configuración fetch
    const config: RequestInit = {
        method,
        headers: {
            // Solo ponemos Content-Type si hay body y no es FormData
            ...(body && !(body instanceof FormData) ? { "Content-Type": "application/json" } : {}),
            "Accept": "application/json",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
            ...headers,
        },
    };

    if (body) {
        config.body = JSON.stringify(body);
    }

    try {
        const response = await fetch(`${BASE_URL}${endpoint}`, config);

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Error en la petición');
        }

        return await response.json() as T;
    } catch (error) {
        console.error("API Error:", error);
        throw error;
    }
};