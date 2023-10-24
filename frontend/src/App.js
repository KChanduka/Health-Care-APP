
import './App.css';
import DocPoster from './components/DocPoster';
import Navbar1 from './components/Navbar1';
import Appointment from './pages/Appointment';
import Channel from './pages/Channel';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Welcome from './pages/Welcome';
import Appointment from './pages/Appointment';

function App() {
  return (
    <div className="App">
       {/* <Home/> */}
      {/* <Register /> */}
      {/* <Login/> */}
      {/* <Welcome/> */}
      <Channel/>
      <Appointment/>
      
    </div>
  );
}

export default App;
