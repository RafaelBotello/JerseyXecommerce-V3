import React from "../../../node_modules/react";
import "./style.css";

function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-dark navbar-custom fixed-top navbar-expand-lg">
        <a className="navbar-brand" href="#">
          Jersey
          <img
            src="http://pluspng.com/img-png/x-png-image-35402-272.png"
            height="20"
            width="20"
            alt="Jersey X logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav  droptoggle mr-auto mt-2 mt-lg-0">
            <li className={props.classli1}>
              <a className="nav-link" href="/">
                Home{" "}
              </a>
            </li>
            <li className={props.classli2}>
              <a className="nav-link" href="/product">
                Products<span className="sr-only">(current)</span>
              </a>
            </li>
            <li className={props.classli3}>
              <a className="nav-link" href="/contact">
                Contact
              </a>
            </li>
            <li>
              <a className="nav-link" href="http://localhost:3000/api/users">
                Users
              </a>
            </li>
            <li>
              <form
                className="form-inline"
                method="GET"
                action={`http://localhost:3000/api/productFilter/SELECT * FROM price`}
              >
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                ></input>
                <button
                  className="btn btn-outline-light my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
