import './App.css';
import A from './components/A.jsx'
import B from './components/B.jsx'

import { useState } from 'react'


function App() {
  let [name, setName] = useState("tjdgh");
  return (
    <div className="App">
      <A setName={setName} />
      <B name={name} />
    </div>
  );
}

export default App;
