import './App.css';
import { useState } from 'react';
import "./components/componentsStyle.css";
import GenerationNav from './components/GenerationNav';
import Pattern from './components/Pattern';
import Inequality from './components/Inequality';
import Equation from './components/Equation';


function App() {
  const [body, setBody] = useState("");

  const switchBody = (body) => {
    setBody(() => {return body;})
  };


  const defineBody = () => {
    switch(body){
      case "Pattern":{
        return (<Pattern></Pattern>);
      }
      case "Equation":{
        return (<Equation></Equation>);
      } 
      case "Inequality":{
        return (<Inequality></Inequality>);
      }
      default:{
        return (<div></div>);
      }
    }
  }

  return (
    <div>
      <GenerationNav switchBody={switchBody}/>
      {defineBody()}
    </div>
  );
}

export default App;
