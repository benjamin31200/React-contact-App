import React from "react";
import '../style.css';

const Contact = Props => {
    const isDeletable = Boolean;
    return (
      <div className="friend-item">
        <h3>{Props.name}</h3>
        <h4>{Props.email}</h4>
        <h4>{Props.phone}</h4>
        <div>
            { isDeletable ? <button>Delete</button> : null }
        </div>
      </div>
    );
  };

  export default Contact;