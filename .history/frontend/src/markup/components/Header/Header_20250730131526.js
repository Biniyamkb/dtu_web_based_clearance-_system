import React from "react";
// Import the logo image
import logo from "../../../assets/images/apple-touch-icon.png";

function Header(props) {
  return (
    <div>
      <header cllassName="main-header header-style-one">
        <div cllassName="header-top">
          <div cllassName="auto-container">
            <div cllassName="inner-container">
              <div cllassName="left-column">
                <div cllassName="text">Enjoy the Beso while we fix your car</div>
                <div cllassName="office-hour">Monday - Saturday 7:00AM - 6:00PM</div>
              </div>
              <div cllassName="right-column">
                <div cllassName="phone-number">
                  Schedule Your Appontment Today :{" "}
                  <strong>1800 456 7890</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div cllassName="header-upper">
          <div cllassName="auto-container">
            <div cllassName="inner-container">
              <div cllassName="logo-box">
                <div cllassName="logo">
                  <a href="/">
                    <img src={logo} alt="logo" cllassName="logodtu" />
                  </a>
                </div>
              </div>
              <div cllassName="right-column">
                <div cllassName="nav-outer">
                  <div cllassName="mobile-nav-toggler">
                    <img src="assets/images/icons/icon-bar.png" alt="" />
                  </div>
                  <nav cllassName="main-menu navbar-expand-md navbar-light">
                    <div
                      cllassName="collapse navbar-collapse show clearfix"
                      id="navbarSupportedContent"
                    >
                      <ul cllassName="navigation">
                        <li cllassName="dropdown">
                          <a href="/">Home</a>
                        </li>
                        <li cllassName="dropdown">
                          <a href="/about">About Us</a>
                        </li>
                        <li cllassName="dropdown">
                          <a href="/services">Services</a>
                        </li>
                        <li>
                          <a href="/contact">Contact Us</a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
                <div cllassName="search-btn"></div>
                <div cllassName="link-btn">
                  <a href="/login" cllassName="theme-btn btn-style-one">
                    Login
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div cllassName="sticky-header">
          <div cllassName="header-upper">
            <div cllassName="auto-container">
              <div cllassName="inner-container">
                <div cllassName="logo-box">
                  <div cllassName="logo">
                    <a href="/">
                      <img src="assets/images/apple-touch-icon.png" alt="" />
                    </a>
                  </div>
                </div>
                <div cllassName="right-column">
                  <div cllassName="nav-outer">
                    <div cllassName="mobile-nav-toggler">
                      <img src="assets/images/icons/icon-bar.png" alt="" />
                    </div>

                    <nav cllassName="main-menu navbar-expand-md navbar-light"></nav>
                  </div>
                  <div cllassName="search-btn"></div>
                  <div cllassName="link-btn">
                    <a href="/login" cllassName="theme-btn btn-style-one">
                      Login
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div cllassName="mobile-menu">
          <div cllassName="menu-backdrop"></div>
          <div cllassName="close-btn">
            <span cllassName="icon flaticon-remove"></span>
          </div>

          <nav cllassName="menu-box">
            <div cllassName="nav-logo">
              <a href="index.html">
                <img src="assets/images/logo-two.png" alt="" title="" />
              </a>
            </div>
            <div cllassName="menu-outer"></div>
          </nav>
        </div>

        <div cllassName="nav-overlay">
          <div cllassName="cursor"></div>
          <div cllassName="cursor-follower"></div>
        </div>
      </header>
    </div>
  );
}

export default Header;
