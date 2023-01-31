// import logo from './logo.svg';
// import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textplace from './components/Textplace';
import Darkmode from './components/Darkmode';
import {
  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";



function App() {
  
// const [mode,setmode]= useState()
const rmvbgcls=()=>{
  document.body.classList.remove('bg-primary')
  document.body.classList.remove('bg-success')


}

const toggleMode=(cls)=>{
  rmvbgcls();
  document.body.classList.add('bg-'+ cls)
  //  if(mode==='light'){
  //      setmode('dark')
  //      document.body.style.backgroundColor='#032840'  
  //      document.title="Dark mode"
       

  //  }
  //  else{
  //      setmode('light')
  //      document.body.style.backgroundColor='white'
  //      document.title="Light mode"
  //      setInterval(() => {
  //       document.title="Buy Now"

  //      }, 2000);
  //  }


}

  return (
    <>
    <Router>
      <Navbar title="TextUtils" toggleMode={toggleMode} />
      
     
     <div className='container my-5'>
      <Switch>

          <Route path="/Darkmode">
          <Darkmode />
          </Route>
          <Route path="/Textplace">
          <Textplace />
          </Route>
          
        </Switch>
        </div>
        </Router>

      
      
    </>
  );
}



export default App;
