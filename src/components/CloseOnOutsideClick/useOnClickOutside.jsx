import { useEffect } from "react";

export default function useOnClickOutside(ref, handler) {
  useEffect(() => {
    function listener(event) {
      //   console.log(event.target);
      //   console.log(ref.current, ref.current.contains(event.target));

      if (!ref.current || ref.current.contains(event.target)) return;

      handler(event);
    }

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchStart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}
