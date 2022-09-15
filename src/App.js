  import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pocetna from './komponente/Pocetna';
import OTurniru from './komponente/OTurniru';
import Prijava from './komponente/Prijava';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Pocetna />} />
          <Route path="/oturniru" element={<OTurniru />} />
          <Route path="/prijava" element={<Prijava />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
