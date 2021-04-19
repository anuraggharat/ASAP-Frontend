import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ logoutUser, username, normalUser }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            ASAP
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <div className="dropdown ml-auto">
              <button
                className="btn btn-primary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {username}
              </button>
              <ul
                className="dropdown-menu w-100"
                aria-labelledby="dropdownMenuButton"
              >
                {normalUser && (
                  <>
                    <li>
                      <Link className="dropdown-item" to="/user/preferences">
                        Preferences
                      </Link>
                    </li>
                    {/* <li>
                      <Link className="dropdown-item" to="/user/services">
                        Services
                      </Link>
                    </li> */}
                  </>
                )}
                {!normalUser && (
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/healthcare/appointments"
                    >
                      Appointments
                    </Link>
                  </li>
                )}
                <li>
                  <button className="dropdown-item" onClick={logoutUser}>
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
