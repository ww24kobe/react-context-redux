import React from 'react';
import './App.css';
import ComA from "./components/ComA"
import ComB from "./components/ComB"

function App() {
  return (
    <div className="App">
      <h2>App组件</h2>
      <ComA sid="2" cid="3"/>
      <ComB />
    </div>
  );
}

export default App;
