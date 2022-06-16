import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

// move this component to it's own file and import it here
const Contact = props => {
  return (
    <div className="friend-item">
      {/* replace the values by a jsx expression */}
      <h3>Emmanuel</h3>
      <h4>myemmanuel@email.com</h4>
      <h4>123123</h4>
      {/* show the button only if isDeletable is true */}
      <button>Delete</button>
    </div>
  );
};

export const App = (
  // write your HTML code here

  <div>
    <h1 className="text-center">My contacts list 📱</h1>

    <div>
      <div id="container">
        <Contact name="Emmanuel" email="emmanuel@email.com" phone="552312354" />
        <Contact name="Johana" email="johana@email.com" phone="92034902" />
        <Contact name="Lucas" email="lucas@email.com" phone="234983499" />
        <Contact name="Marie" email="marie@email.com" phone="238942384" />
        <Contact name="Pedro" email="pedro@email.com" phone="934584875" />
      </div>
    </div>
  </div>
);

ReactDOM.render(App, document.getElementById('root'));
