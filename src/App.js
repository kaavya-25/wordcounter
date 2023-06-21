import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const wordCount = text.trim().split(/\s+/).length;

  return (
    <div className="App">
      <h1>Responsive Paragraph Word Counter</h1>
      <div className="textarea-wrapper">
        <textarea
          className="textarea"
          placeholder="Enter your text here..."
          value={text}
          onChange={handleChange}
        ></textarea>
        <p className="word-count">Word Count: {wordCount}</p>
      </div>
    </div>
  );
}

export default App;
