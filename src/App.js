 import './App.css';
 import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Timer from './pages/timer';


 
function App() {
 


 
  return (
    <div className="App">
       
       <Routes>
        <Route path="/" /> {/* 👈 Renders at /app/ */}
      </Routes>

    </div>
  );
}

export default App;
