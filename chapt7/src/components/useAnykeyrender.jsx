import  { useEffect, useState } from 'react'

const useAnykeyrender = () => {

    const [, forceRender] = useState();

    useEffect(() => {
        window.addEventListener('keydown', forceRender)
        return () => window.removeEventListener('keydown', forceRender)
    }, [])
    
    return (
        <>
            <div>test</div>
        </>
    );

}

export default useAnykeyrender;
