// Definimos los métodos permitidos
type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface RequestOptions {
    method: HttpMethod;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    body?: any;
    headers?: Record<string, string>;
}

const BASE_URL = 'http://tu-backend-laravel.test/api'; // Cambia esto por tu URL de desarrollo

export const apiRequest = async <T>(endpoint: string, options: RequestOptions): Promise<T> => {
    const { method, body, headers } = options;

    const config: RequestInit = {
        method,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
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