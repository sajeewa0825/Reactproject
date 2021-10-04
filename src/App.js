
import './App.css';
import Login from './Components/Login' ;
import Singup from './Components/Singup';
import Home from './Components/Home';
import Navi from './Components/Navi'
import Footer from './Components/Footer';
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
        <Home/>
        <Footer/>

    </div>
  );
}

export default App;
