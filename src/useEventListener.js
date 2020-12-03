import { useRef, useEffect } from 'react';


export default function useEventListener(eventName, handler, element = window) {
  const handlerRef = useRef();

  useEffect(() => {
    handlerRef.current = handler;
  }, [handler]);

  useEffect(() => {
    const listener = (e) => handlerRef.current(e);
    element.addEventListener(eventName, listener);

    return () => element.removeEventListener(eventName, listener);
  }, [eventName, element]);
};