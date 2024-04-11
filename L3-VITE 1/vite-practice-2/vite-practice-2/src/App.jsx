import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [namesList, setNamesList] = useState([]);

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleAddName() {
    if (inputValue) {
      setNamesList([...namesList, inputValue]);
      setInputValue('');
    }
  }

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a name"
      />

      <h1>{inputValue}</h1>

      <button onClick={handleAddName}>Add Name</button>
      
      <ol>
        {namesList.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;
