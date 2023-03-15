import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPages/LoginPage';
import "@mui/material"
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<LoginPage />}></Route>
        {/* Otras rutas de la aplicación */}
      </Switch>
    </Router>
  );
}

export default App;
