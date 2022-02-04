import { createHttpClient } from '~/services/http';
import { VueInstance } from '@vueuse/core';

export default (app: VueInstance, inject: Function) => {
  inject('http', createHttpClient());
}
