import React from "react";
import { Link } from "react-router-dom";

function Toolbar(props) {
  return (
    <header className="item header margin-top-0">
      <div className="wrapper">
        <nav
          role="navigation"
          className="navbar navbar-white navbar-embossed navbar-lg navbar-fixed-top"
        >
          <div className="container">
            <div className="navbar-header">
              <button
                data-target="#navbar-collapse-02"
                data-toggle="collapse"
                class="navbar-toggle"
                type="button"
              >
                <i className="fa fa-bars"></i>
                <span className="sr-only">Toggle navigation</span>
              </button>
              <a href="index.html" className="navbar-brand brand">
                {" "}
                Exclusive Jewels{" "}
              </a>
            </div>
            <div id="navbar-collapse-02" class="collapse navbar-collapse">
              <ul class="nav navbar-nav navbar-right">
                <li className="propClone">
                <Link to="/">Home</Link>
                  {/* <a href="/">Home</a> */}
                </li>
                <li className="propClone">
                <Link to="/gem">Gems</Link>
                  {/* <a href="/gem">Gems</a> */}
                </li>
                <li className="propClone">
                <Link to="/gem">Product</Link>
                  {/* <a href="/jewellery">Jewellery</a> */}
                </li>
                <li className="propClone">
                <Link to="/gem">Checkout</Link>
                  {/* <a href="checkout.html">Checkout</a> */}
                </li>
                <li className="propClone">
                <Link to="/signin">Dashboard</Link>
                  {/* <a href="contact.html">Contact</a> */}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Toolbar;
