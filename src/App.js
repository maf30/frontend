import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [responseData, setResponseData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://localhost:4000/welcome'); // Replace with your API endpoint
      setResponseData(response.mssg);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={fetchData}>Fetch Data</button>
        {responseData && (
          <div>
            <h2>Response Data:</h2>
            <pre>{JSON.stringify(responseData, null, 2)}</pre>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
