import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from "react";
import "./Navbar.css";

const LoginButton = () => {
  const [alert, setAlert] = useState(false);
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  return (
    <>
      {isAuthenticated ? (
        <>
          <img
            className="log-out"
            src={user.picture}
            alt={user.name}
            onClick={() => setAlert(!alert)}
          />
        </>
      ) : (
        <button onClick={() => loginWithRedirect()} className="buttons loginButtons">
          Log In
        </button>
      )}
      {alert && (
        <div>
          <div className="alert-text">
            Do you want to <span style={{ color: "red" }}>logout?</span>
          </div>
          <div className="alert-btn-container">
            <button className="alert-btn no" onClick={() => setAlert(false)}>
              No!
            </button>
            <button className="alert-btn" onClick={logout}>
              Yes
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginButton;
