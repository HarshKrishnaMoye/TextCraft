import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [alert, setalert] = useState(null)
  const [mode, setmode] = useState('light'); // Whether dark mode is enabled or not




  const showAlert = (message , type)=>{

    setalert({
      msg : message,
      type : type
    })

    setTimeout(() => {
      setalert(null)
    }, 2000);

  }

  const togglemode = () =>{
    if(mode === 'light'|| mode ==='success' || mode ==='transparent'){
      setmode('dark');
      document.body.style.backgroundColor="black";
      document.body.style.color="white";
      showAlert("Dark Mode Has Been Enabled","success");
    }
    else{
      setmode('light');
      document.body.style.backgroundColor="white";
      document.body.style.color="black";
      showAlert("Light Mode Has Been Enabled","success");
    }
  }

  const togglemode2 = () =>{
    if(mode === 'light'|| mode ==='dark' || mode ==='transparent'){
      setmode('success');
      document.body.style.backgroundColor="#292929";
      document.body.style.color="white";
      showAlert("Success Has Been Enabled","success");
    }
    else{
      setmode('light');
      document.body.style.backgroundColor="white";
      document.body.style.color="black";
      showAlert("Light Mode Has Been Enabled","success");
    }
  }

  const togglemode3 = () =>{
    if(mode === 'light' || mode ==='dark' || mode ==='success'){
      setmode('transparent');
      document.body.style.backgroundColor="rgb(53 60 146)";
      document.body.style.color="white";
      showAlert("Transparent Has Been Enabled","success");
    }
    else{
      setmode('light');
      document.body.style.backgroundColor="white";
      document.body.style.color="black";
      showAlert("Light Mode Has Been Enabled","success");
    }
  }

  return (
  <> <Router>
    <Navbar title="TextCraft" home="Home" about="About" mode={mode} togglemode={togglemode} togglemode2={togglemode2} togglemode3={togglemode3}/>
    <Alert alert={alert}/>
    <div className="container my-1">
    <Routes>
          <Route exact path="/about" element={<About mode={mode}/>} />
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading ="Enter The Text That You Want To Analyze"/>} />
    </Routes>
    </div>
    </Router>

    </>
  );
}

export default App;
