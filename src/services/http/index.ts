import { $fetch } from 'ohmyfetch';
import { FastifyRequest } from 'fastify';

export { createHttpClient };

const defaultHeaders = {
  Accept: 'application/json',
};

function createHttpClient(req?: FastifyRequest) {
  // $fetch.create does not work
  return async (uri: string, options: Object) => {
    let requestHeaders = {};
    if (typeof window === 'undefined' && typeof req !== 'undefined') {
      requestHeaders = {
        cookie: req.headers['cookie'],
      };
    }

    const headers = {
      ...requestHeaders,
      ...defaultHeaders,
    };

    return await $fetch(uri, {
      // @ts-ignore
      baseURL: import.meta.env.VITE_API_BASE_URL,
      headers,
      ...options,
    })
  }
}
