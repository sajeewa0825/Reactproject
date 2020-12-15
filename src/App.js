
import './App.css';
import Login from './Com/Login' ;
import Singup from './Com/Singup';
import Navi from './Com/Navi'
import { BrowserRouter as Route,Switch,Link  } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Navi/>
      <Route>
        <Switch>
          <Route path="/login"> <Login/> </Route>
          <Route path="/Singup"><Singup/></Route>
        </Switch>
      </Route>
      <div className="Mainfont">
        <h1 className="Mainfont">Alone</h1>
      </div>
    
    </div>
  );
}

export default App;
