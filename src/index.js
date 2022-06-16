import React from 'react';
import ReactDOM from 'react-dom';
import Contact from './component/Contact';
import './style.css';

export const App = (
  <div>
    <h1 className="text-center">My contacts list 📱</h1>

    <div>
      <div id="container">
        <Contact/>
      </div>
    </div>
  </div>
);

ReactDOM.render(App, document.getElementById('root'));
