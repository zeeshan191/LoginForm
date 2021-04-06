import React  from 'react';
import './App.css';
import LoginFrom from './LoginFrom';
import {BrowserRouter , Switch , Route,useHistory} from 'react-router-dom'; 
import Dashboard from './Dashboard';


function App() {

const history = useHistory();

  const handleClick= () => {
      history.push("/Dashboard");
  }
 
  return (
    <div className="App">
   
    
    <BrowserRouter>
    <Switch>
         <Route exact path="/" component={ LoginFrom}></Route>
         <Route path='/' component={ Dashboard }></Route>
    </Switch>
   </BrowserRouter>
  
   

    </div>
  );
}

export default App;
