import { BrowserRouter as Router } from "react-router-dom";
import RoutesContainer from "./route/Routes";
import './assets/styles/GeneralStyles.css';
import './assets/styles/App.css';


function App() {

  return (
    <>
      <Router>
        <RoutesContainer />
      </Router>
    </>
  );
}

export default App;
