/* eslint-disable @typescript-eslint/no-explicit-any */
import { animateScroll } from "./animate-scroll";

const logError = () =>
  console.error(`Invalid element, are you sure you've provided element id or react ref?`);

const getElementPosition = (element: any) => element.offsetTop;

export const scrollTo = ({ id, ref = null, duration = 3000, container = undefined }: any) => {
  if (typeof window !== "undefined") {
    // eslint-disable-next-line no-undef
    const initialPosition = window.scrollY;
    let element;
    // eslint-disable-next-line no-undef
    if (document) element = ref ? ref.current : id ? window.document.getElementById(id) : null;

    if (!element) {
      logError();
      return;
    }

    animateScroll({
      targetPosition: getElementPosition(element),
      initialPosition,
      duration,
      container
    });
  }
};
