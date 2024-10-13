import { useEffect, useRef, useState } from "react";

interface IntersectionObserverOptions extends IntersectionObserverInit {
    threshold?: number | number[];
}

const useIntersectionObserver = (callback: () => void, options?: IntersectionObserverOptions) => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const observerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsIntersecting(true);
                callback();
            } else {
                setIsIntersecting(false);
            }
        }, options);

        if (observerRef.current) {
            observer.observe(observerRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, [callback, options]);

    return [observerRef, isIntersecting] as const;
};

export default useIntersectionObserver;
