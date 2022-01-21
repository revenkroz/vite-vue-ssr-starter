import { $fetch } from 'ohmyfetch';

export { $http };

const defaultHeaders = {
    Accept: 'application/ld+json',
    'Cache-Control': 'no-cache',
};
export function setAuthToken(token: String) {
    // @ts-ignore
    defaultHeaders.Authorization = 'Bearer ' + token;
}

function $http(uri: string, options: Object = {}) {
    options = {
        ...options,
        baseURL: import.meta.env.VITE_API_BASE_URL,
        headers: defaultHeaders,
    };

    return $fetch(uri, options);
}
