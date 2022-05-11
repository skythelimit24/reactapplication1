import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React , { useState } from 'react';
// import About from "./components/About";
import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');//weather dark mode is enabled 
  const [alert, setAlert] = useState(null);
  const showAlert = (message,type)=>{
 setAlert({
   msg: message,
   type: type
 })
 setTimeout(() => {
  setAlert(null);
 },1500);
  }

 const toggleMode = ()=>{
   if (mode ==='light'){
    setMode('dark');
    document.body.style.backgroundColor='grey';
    showAlert("Dark Mode has been enabled","success");
    document.title='TextUtils-DarMode';
   }
   else{
     setMode('light');
     document.body.style.backgroundColor='white';
     showAlert("light mode has been enabled","success");
     document.title='TextUtils-LightMode';
    }
  }
  return (
    <>
   {/* <Router> */}
     <Navbar title="Text-Utils"  mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3 ">
      {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route>
         <Route exact path="/"> */}
         <Textform showAlert={showAlert} heading="Enter the Text to Analyze Below" mode={mode}/>
          {/* </Route>
        </Switch> */}
        </div>
        {/* </Router> */}
         </>
  );
}

export default App;
