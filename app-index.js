import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>
      <h1>App Index</h1>
      <select>
        <option value="option1">Valid content</option>
      </select>
    </div>
  );
};

ReactDOM.hydrate(<App />, document.getElementById('root'));
