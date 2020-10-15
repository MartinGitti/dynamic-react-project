import React from 'react'; // Import React library.
import './App.css'; // Import Css style sheet.
import 'bootstrap/dist/css/bootstrap.min.css'; // Import React-bootstrap components.
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Import React-router-dom components for routing.

// Import All Components:
import Header from './Components/Header';
import NavMenu from './Components/Navbar';
import About from './Components/About';
import Services from './Components/Services';

const loggedIn = true; // Depending on whether user loggedIn is set to true or false, will determine to welcome user or to offer user to sign In.

function App() {
  const components = [  // Create Array as per task instructions that contains all components to be displayed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
    <Router>
      <div className="App">
        <NavMenu />
        <Header name="Martin Reed" loggedIn={loggedIn} />
        <Switch>
          <Route path="/about" exact component={About} />
          <Route path="/services" exact component={Services} />
        </Switch>
      </div>
    </Router>
  ];
  return (
    // Return lists each component in the array with the use of the map() function.
    <ul> 
      {components.map(component => (
        <li key={component}>{component}</li>
      ))}
    </ul>
  );
}

export default App;

/////////////////////////////////////////////////////////////////////////THE END///////////////////////////////////////////////////////////////////////////////