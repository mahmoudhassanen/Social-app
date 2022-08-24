import { Route , Routes } from 'react-router-dom';
import './App.css';

import Home from './Pages/Home/Home';
import Profile from './Pages/Profile/Profile';

function App() {
  return (
    <div className="App">
      <Routes> 

<Route path='/'  element={ <Home />}/>
<Route path='/Home'  element={ <Home />}/>
<Route path='/profile'  element={ <Profile />}/>


      </Routes>
     
     
    </div>
  );
}

export default App;
