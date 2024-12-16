import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const options = [
    { value: 'option1', label: 'Valid content' },
    { value: 'option2', label: 'Another valid option' },
    { value: 'option3', label: 'Yet another valid option' }
  ];

  return (
    <div>
      <h1>App Index</h1>
      <select>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

ReactDOM.hydrate(<App />, document.getElementById('root'));
