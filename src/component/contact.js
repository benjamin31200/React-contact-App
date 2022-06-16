import React from "react";

// move this component to it's own file and import it here
const Contact = props => {
    const isDeletable = Boolean;
    return (
      <div className="friend-item">
        {/* replace the values by a jsx expression */}
        <h3>{props.name}</h3>
        <h4>{props.email}</h4>
        <h4>{props.phone}</h4>
        {/* show the button only if isDeletable is true */}
        <div>
            { isDeletable ? <button>Delete</button> : null }
        </div>
      </div>
    );
  };

  export default Contact;