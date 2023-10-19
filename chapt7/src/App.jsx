import React, { useCallback, useEffect, useLayoutEffect } from 'react';
import useAnykeyrender from './components/useAnykeyrender.jsx'
import WordCount from './components/useWordCount.jsx'
import useWindowSize from './hooks/useWindowSize.jsx'
import useMousePosition from './hooks/useMousePosition.jsx'

function App() {
  useEffect(() => console.log("use effect"));
  useLayoutEffect(() => console.log("layout effect"))

  const { width, height } = useWindowSize();
  const { x, y } = useMousePosition();

  return (
    <>
      <div>
        <div>Width: {width}px, hight: {height}px</div>
      </div>
      <p>---------------------</p>
      <div>
        <div>Point X: {x}, Point Y: {y}</div>
      </div>
    </>
  )
}

export default App;
