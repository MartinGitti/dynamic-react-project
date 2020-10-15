/* I've used my Header component as my home & landing page for this task. */

import React from 'react'; // Import React Library.
import logo from '../Images/image.png'; // Import Logo from Images folder.
import '../App.css'; // Import Css style sheet.

function SignIn(props) {
  return (
    <a
      className="App-link"
      href="/" // Please note that for the purpose of the task, I've added a sign in button but it links back to the home page and not a sign in page form.
      target="_blank" // Takes user to a new tab when link in clicked.
      rel="noopener noreferrer" 
    ><button type='button' className='signIn-Button'>Sign In</button> 
    </a>
  )
}

/* Funtion component below to display company logo and to welcome user if loggedIn is set to true else display sign in button. */
function Header(props) {
  return (
    <div className="Header-div">
      <header className="App-header">
        <h1>United Tech</h1> {/*Company Name*/}
        <h3>Lets unite & discuss technology!</h3> {/*Company Slogan*/}
        <img src={logo} className="App-logo" alt="logo" /> {/*Company Logo*/}
        <h4>{props.loggedIn ? `Welcome back, ${props.name}!` : <SignIn />}</h4> {/* A Conditional (ternary) operator. */}
      </header>

    </div>
  );
}

export default Header; // Export LandingPage component to use in App.js.

