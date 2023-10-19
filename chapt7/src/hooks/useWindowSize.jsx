import { useLayoutEffect, useState } from 'react';

const useWindowSize = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    const resize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };

    useLayoutEffect(() => {
        window.addEventListener('resize', resize);
        return () => {
            window.removeEventListener('resize', resize);
        };
    }, []);

    return { width, height };
};

export default useWindowSize;
