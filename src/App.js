import './App.css';
import Login from './Components/Login';
import { Route,Routes , Navigate} from 'react-router-dom';
import SignUp from './Components/SignUp';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path='/' element={<Navigate to="/signup"/>}/>
      </Routes>
    </div>
  );
}

export default App;
