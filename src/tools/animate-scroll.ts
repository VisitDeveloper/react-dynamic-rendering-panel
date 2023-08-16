/* eslint-disable @typescript-eslint/no-explicit-any */
const pow = Math.pow;

// The easing function that makes the scroll decelerate over time
function easeOutQuart(x: any) {
  return 1 - pow(1 - x, 4);
}

export function animateScroll({
  targetPosition,
  initialPosition,
  duration,
  container = undefined
}: any) {
  let start: any;
  let position;
  let animationFrame: any;

  // eslint-disable-next-line no-undef
  const requestAnimationFrame = window.requestAnimationFrame;
  // eslint-disable-next-line no-undef
  const cancelAnimationFrame = window.cancelAnimationFrame;

  // maximum amount of pixels we can scroll
  const maxAvailableScroll =
    // eslint-disable-next-line no-undef
    document.documentElement.scrollHeight - document.documentElement.clientHeight;

  const amountOfPixelsToScroll = initialPosition - targetPosition;

  function step(timestamp: any) {
    if (start === undefined) {
      start = timestamp;
    }

    const elapsed = timestamp - start;

    // this just gives us a number between 0 (start) and 1 (end)
    const relativeProgress = elapsed / duration;

    // ease out that number
    const easedProgress = easeOutQuart(relativeProgress);

    // calculate new position for every thick of the requesAnimationFrame
    position = initialPosition - amountOfPixelsToScroll * Math.min(easedProgress, 1);

    // set the scrollbar position
    container?.scrollTo(0, position);
    // eslint-disable-next-line no-undef
    window.scrollTo(0, position);

    // Stop when max scroll is reached
    // eslint-disable-next-line no-undef
    if (initialPosition !== maxAvailableScroll && window.scrollY === maxAvailableScroll) {
      cancelAnimationFrame(animationFrame);
      return;
    }

    // repeat until the end is reached
    if (elapsed < duration) {
      animationFrame = requestAnimationFrame(step);
    }
  }

  animationFrame = requestAnimationFrame(step);
}
