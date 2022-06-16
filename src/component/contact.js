import React from "react";
import "../style.css";

const contactInfo = [
  {
    Name: "Emmanuel",
    Email: "emmanuel@email.com",
    Phone: "552312354",
    isDeletable: Boolean,
  },
  {
    Name: "Johana",
    Email: "johana@email.com",
    Phone: "92034902",
    isDeletable: Boolean,
  },
  {
    Name: "Lucas",
    Email: "lucas@email.com",
    Phone: "234983499",
    isDeletable: Boolean,
  },
  {
    Name: "Marie",
    Email: "marie@email.com",
    Phone: "238942384",
    isDeletable: Boolean,
  },
  {
    Name: "Pedro",
    Email: "pedro@email.com",
    Phone: "934584875",
    isDeletable: Boolean,
  },
];

const Contact = (Props) => {
  return (
    <div className="friend-item">
      <ul>
        {contactInfo.map((Info, index) => (
            <div className="friend-item">
                <h3>{Info.Name}</h3>
                <h4>{Info.Email}</h4>
                <h4>{Info.Phone}</h4>
                {Info.isDeletable ? <button>Delete</button> : null}
            </div>
        ))}
      </ul>
    </div>
  );
};

export default Contact;
