/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { useEffect } from "react";

function useClickOutside(ref: any, func: any) {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        func();
      }
    }
    // Bind the event listener

    // eslint-disable-next-line no-undef
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      // eslint-disable-next-line no-undef
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}
export default useClickOutside;
