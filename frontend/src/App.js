import './App.css';
import RecordView from './Componets/RecordView';
import {Routes, Route} from "react-router-dom"
import { Signup } from './Componets/Signup';
import { Login } from './Componets/Login';


function App() {
  return (
    <div className="App">
       <Routes>
          <Route path="/signup" element = {<Signup/>}/>
          <Route path="/login" element = {<Login/>}/>
          <Route path="/recordview" element = {<RecordView/>}/>
        </Routes>
    </div>
  );
}

export default App;
