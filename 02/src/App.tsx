import React, { useState } from 'react';
import './App.css';
import Content from './Content.tsx';

function App() {
  const [isVisible, setVisbility ] = useState<boolean>(false);

  const toggleVisibility = () => {
    setVisbility(!isVisible);
  }
  return (
    <div className="App">
      <h2>This is a heading</h2>
      <p>This is descirption</p>
      <button onClick={toggleVisibility}>Show</button>

      {isVisible && <Content/>}
    </div>
   
  );
}

export default App;
