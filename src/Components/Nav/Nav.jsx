/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="nav-wrapper w-100 z-2">
        <nav
          className="navbar navbar-expand-lg bg-white"
          style={{ height: "90px" }}
        >
          <div className="container-fluid text-center">
            <Link to='/' className="navbar-brand nav-logo fs-3 p-0">
              DreamHomes
            </Link>

            <div className="collapse navbar-collapse d-lg-flex d-none">
              <ul className="navbar-nav navbar-menu gap-4 ms-xl-0 ms-auto mb-2 mb-lg-0">
                <li className="nav-item fs-6 fw-normal p-0">
                  <Link to='/' className="nav-link text-black">
                    Home
                  </Link>
                </li>

                <li className="nav-item fs-6 dropdown p-0">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle text-black"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Real Estate
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link to='/properties'  className="dropdown-item text-black">
                        Properties
                      </Link>
                    </li>
                    <li>
                      <Link to='/agents' className="dropdown-item text-black">
                        Agents
                      </Link>
                    </li>
                    <li>
                      <Link to='/agencies' className="dropdown-item text-black">
                        Agencies
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item fs-6 p-0">
                  <Link to='/' className="nav-link text-black">
                    Gallery
                  </Link>
                </li>
                <li className="nav-item fs-6 p-0">
                  <Link to='/' className="nav-link text-black">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="nav-wrapper d-flex align-items-center gap-3 ms-auto">
              <div className="nav-social d-xl-flex d-none">
                <i className="bi bi-facebook mx-2 fs-6"></i>
                <i className="bi bi-twitter mx-2 fs-6"></i>
                <i className="bi bi-instagram mx-2 fs-6"></i>
                <i className="bi bi-youtube mx-2 fs-6"></i>
              </div>
              <div className="nav-user-phone px-3 border-start">
                <div className="user-phone-info">
                  <i className="bi bi-telephone pe-2 fs-6"></i>
                  <span>0911-2524-812</span>
                </div>
              </div>
              <div className="user-profile position-relative">
                <i className="bi bi-person-circle user-icon"></i>
                <div className="user-modal" onClick={() => setShowModal(true)}>
                  <div className="user-modal-box">
                    <i className="bi bi-heart-fill"></i>
                    <span className="fs-6">My Favorite</span>
                  </div>
                </div>
                {showModal && (
                  <div
                    className="modal d-block position-fixed top-0 start-0 w-100 bg-dark bg-opacity-50"
                    onClick={() => setShowModal(false)}
                  >
                    <div
                      className="container h-100 d-flex justify-content-center align-items-center"
                      onClick={(e) => e.stopPropagation}
                    >
                      <div
                        className="row w-100 rounded-4 overflow-hidden shadow"
                        style={{ maxWidth: "900px" }}
                      >
                        <div className="col-md-6 text-white d-flex flex-column justify-content-between login-left">
                          <div className="login-left-overlay"></div>
                          <div className="position-relative z-1">
                            <i className="bi bi-quote fs-1"></i>
                            <p className="fs-5 fw-semibold">
                              Owning a home is a keystone of wealth... both
                              financial affluence and emotional Security.
                            </p>
                            <p className="fw-light">Suze Orman</p>
                          </div>
                        </div>
                        <div className="col-md-6 p-4 position-relative bg-white login-right">
                          <i
                            className="bi bi-x-lg login-close position-absolute"
                            aria-label="close"
                            onClick={() => setShowModal}
                          ></i>
                          <h4 className="fw-500 fs-3 mb-3 text-muted">
                            RealHomes Ultra
                          </h4>
                          <h6
                            className="text-primary pb-2 mb-3"
                            style={{ cursor: "pointer", width: "fit-content" }}
                          >
                            Login
                          </h6>
                          <div className="bg-light p-4 rounded-4 login-form">
                            <div className="mb-3">
                              <label className="form-label">UserName</label>
                              <input
                                type="text"
                                className="form-control rounded-pill px-4 py-2"
                                placeholder="UserName"
                              />
                            </div>
                            <div className="mb-3">
                              <label className="form-label d-flex justify-content-between">
                                PassWord
                                <a href="#" className="text-primary small">
                                  Forgotten Password
                                </a>
                              </label>
                              <input
                                type="password"
                                className="form-control rounded-pill px-4 py-2"
                                placeholder="PassWord"
                              />
                            </div>
                            <button className="btn btn-primary w-100 rounded-pill py-2">
                              Login
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <button
                className="navbar-toggler d-lg-none"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#sidebarMenu"
                aria-controls="sidebarMenu"
              >
                <span className="bi bi-list fs-2"></span>
              </button>
            </div>
          </div>
          <div
            className="offcanvas offcanvas-start d-lg-none d-flex "
            tabIndex={"-1"}
            id="sidebarMenu"
            aria-labelledby="sidebarMenuLabel"
          >
            <div className="offcanvas-header">
                <a href="#" className="navbar-brand nav-logo fs-3 p-0">
              DreamHomes
            </a>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="close"
            ></button>
            </div>
            <div className="offcanvas-body">
                <ul className="navbar-nav navbar-menu gap-4 ms-xl-0 ms-auto mb-2 mb-lg-0">
                <li className="nav-item fs-6 fw-normal p-0">
                  <Link to='/' className="nav-link text-black">
                    Home
                  </Link>
                </li>

                <li className="nav-item fs-6 dropdown p-0">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle text-black"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Real Estate
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="#" className="dropdown-item text-black">
                        Properties
                      </a>
                    </li>
                    <li>
                      <Link to='/agents' className="dropdown-item text-black">
                        Agents
                      </Link>
                    </li>
                    <li>
                      <Link to='/agencies' className="dropdown-item text-black">
                        Agencies
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item fs-6 p-0">
                  <Link to='/' className="nav-link text-black">
                    Gallery
                  </Link>
                </li>
                <li className="nav-item fs-6 p-0">
                  <Link to='/' className="nav-link text-black">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="nav-banner bg-white overflow-hidden">
            <div className="row g-0">
                <div className="col-lg-6 m-0 p-0">
                    <div className="nav-banner-left py-5 px-4 px-lg-5">
                        <h2>Find Your Sweet home</h2>
                    </div>
                </div>
                <div className="col-lg-6 m-0 p-0">
                    <div className="nav-banner-right justify-content-start justify-content-center flex-wrap py-5 px-4 px-lg-5 d-flex align-items-center gap-sm-5 gap-3">
                        <h2 className="fs-5 fw-bolder text-center mb-0">Need Help To Choose your property</h2>
                        <button className="custome-btn1">Let Us Call You!</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
