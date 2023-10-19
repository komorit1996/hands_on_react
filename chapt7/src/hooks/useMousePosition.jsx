import { useLayoutEffect, useState } from 'react'

const useMousePosition = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const setPoint = ({ x, y }) => {
        setX(x);
        setY(y);
    }

    useLayoutEffect(() => {
        window.addEventListener("mousemove", setPoint)
        return () => window.removeEventListener("mousemove", setPoint)
    }, [])

    return {x,y};
}

export default useMousePosition