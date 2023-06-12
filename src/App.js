// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigate from './Navigate';
import ConvertText from './ConvertText';
import { useState } from 'react';

function App() {
  const [mode, setmode] = useState('light');
  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = "#161a1f";
      document.body.style.color = "aliceblue"
    } else {
      setmode('light')
      document.body.style.backgroundColor = "#ffffff";
      document.body.style.color = "#212529"
    }
  }
  return (
    <div className="App">
      <Navigate mode={mode} toggle={togglemode} />
      <ConvertText title="Converter Area" mode={mode} />
    </div>
  );
}

export default App;
