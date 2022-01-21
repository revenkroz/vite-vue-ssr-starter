import {createPinia, getActivePinia, setActivePinia} from "pinia";

export { getStore }

const pinia = createPinia();
function getStore() {
  return pinia;
}
