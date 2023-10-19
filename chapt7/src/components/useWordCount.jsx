import { useEffect, useMemo } from 'react';
import useAnykeyrender from './useAnykeyrender';

const WordCount = ({ children = " " }) => {
    useAnykeyrender();

    // const words = children.split(" ");
    // ↓↓ refactor
    const words = useMemo(() => {
        const words = children.split(" ");
        return words
    },[children])
    // ↑↑

    useEffect(() => {
        console.log("fresh render");
    }, [words]);

    return (
        <>
            <p>{children}</p>
            <p>
                <strong>{words.length} - words</strong>
            </p>
        </>
    );
};

export default WordCount;
