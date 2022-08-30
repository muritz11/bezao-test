import { BrowserRouter as Router } from "react-router-dom";
import RoutesContainer from "./route/Routes";
import './assets/styles/GeneralStyles.css';
import './assets/styles/App.css';


function App() {

  return (
    <>
      <Router>
        <header>
            <h1 className='txt-center'>Hello 👋, welcome admin</h1>
            <p className="header-text txt-center">Here are the menus for today</p>
        </header>
        <RoutesContainer />
      </Router>
    </>
  );
}

export default App;
