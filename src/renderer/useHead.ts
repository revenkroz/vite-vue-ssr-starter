import { createHead } from "@vueuse/head";

export { getHead }

const head = createHead()

function getHead() {
  return head;
}
