import React from "react";

import team1 from "./../../assets/team-5.jpg";
import team2 from "./../../assets/team-6.jpg";
import team3 from "./../../assets/team-8.jpg";
import propertying from './../../assets/hero1.jpeg'
import { Link } from "react-router-dom";

const Agents = () => {
  return (
    <>
      <div className="container page-section my-5 mt-4 fs-5">
        <Link to="/" className="text-decoration-none">
          Home &nbsp; &gt; &nbsp; <span className="text-muted">Agents</span>
        </Link>
      </div>
      <div className="container agent my-5">
        <h2 className="fw-bold">Agents</h2>
        <div className="row">
          <div className="col-lg-8 mt-4">
            <div className="agent-card mb-4 p-3 d-flex d-flex-row align-items-center">
              <img src={team1} alt="Agent Image" className="me-4" />
              <div>
                <h5 className="mb-0">
                  Liberty Ojua <i className="fas fa-check"></i>
                </h5>
                <small>
                  Company Agent at The <span>James Estate Agents</span>
                </small>
                <hr />
                <div className="agent-section">
                  <div className="agent-detail">
                    <div className="agent-icons">
                      <i className="fas fa-phone"></i>
                    </div>
                    <div className="agent-text">
                      <h4 className="mb-0">Office</h4>
                      <span>0911-2524-812</span>
                    </div>
                  </div>
                  <div className="agent-detail">
                    <div className="agent-icons">
                      <i className="fas fa-mobile-alt"></i>
                    </div>
                    <div className="agent-text">
                      <h4 className="mb-0">Mobile</h4>
                      <p>0911-2524-812</p>
                    </div>
                  </div>
                  <div className="agent-detail">
                    <div className="agent-icons">
                        <i className="fas fa-envelope"></i>
                    </div>
                    <div className="agent-text">
                        <h4 className="mb-0">Email</h4>
                        <p>newguidance@inspirytheme.com</p>
                    </div>
                  </div>
                </div>
                <div className="agent-content d-flex justify-content-between">
                    <div className="mt-2 agent-social-icon d-flex gap-2">
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-linkedin"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-pinterest"></i>
                    </div>
                    <div className="mt-2">
                        <a>
                            4 Listed Properties
                            <i className="fa-solid fa-caret-right"></i>
                        </a>
                    </div>
                </div>
              </div>
            </div>

            <div className="agent-card mb-4 p-3 d-flex d-flex-row align-items-center">
              <img src={team2} alt="Agent Image" className="me-4" />
              <div>
                <h5 className="mb-0">
                  New Guidance
                </h5>
                <small>
                  Company Agent at The <span>James Estate Agents</span>
                </small>
                <hr />
                <div className="agent-section">
                  <div className="agent-detail">
                    <div className="agent-icons">
                      <i className="fas fa-phone"></i>
                    </div>
                    <div className="agent-text">
                      <h4 className="mb-0">Office</h4>
                      <span>0911-2524-812</span>
                    </div>
                  </div>
                  <div className="agent-detail">
                    <div className="agent-icons">
                      <i className="fas fa-mobile-alt"></i>
                    </div>
                    <div className="agent-text">
                      <h4 className="mb-0">Mobile</h4>
                      <p>0911-2524-812</p>
                    </div>
                  </div>
                  <div className="agent-detail">
                    <div className="agent-icons">
                        <i className="fas fa-envelope"></i>
                    </div>
                    <div className="agent-text">
                        <h4 className="mb-0">Email</h4>
                        <p>newguidance@inspirytheme.com</p>
                    </div>
                  </div>
                </div>
                <div className="agent-content d-flex justify-content-between">
                    <div className="mt-2 agent-social-icon d-flex gap-2">
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-linkedin"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-pinterest"></i>
                    </div>
                    <div className="mt-2">
                        <a>
                            4 Listed Properties
                            <i className="fa-solid fa-caret-right"></i>
                        </a>
                    </div>
                </div>
              </div>
            </div>

            <div className="agent-card mb-4 p-3 d-flex d-flex-row align-items-center">
              <img src={team3} alt="Agent Image" className="me-4" />
              <div>
                <h5 className="mb-0">
                    Lady Gold <i className="fas fa-check"></i>
                </h5>
                <small>
                  Company Agent at The <span>All Estate Agent</span>
                </small>
                <hr />
                <div className="agent-section">
                  <div className="agent-detail">
                    <div className="agent-icons">
                      <i className="fas fa-phone"></i>
                    </div>
                    <div className="agent-text">
                      <h4 className="mb-0">Office</h4>
                      <span>0911-2524-812</span>
                    </div>
                  </div>
                  <div className="agent-detail">
                    <div className="agent-icons">
                      <i className="fas fa-mobile-alt"></i>
                    </div>
                    <div className="agent-text">
                      <h4 className="mb-0">Mobile</h4>
                      <p>0911-2524-812</p>
                    </div>
                  </div>
                  <div className="agent-detail">
                    <div className="agent-icons">
                        <i className="fas fa-envelope"></i>
                    </div>
                    <div className="agent-text">
                        <h4 className="mb-0">Email</h4>
                        <p>newguidance@inspirytheme.com</p>
                    </div>
                  </div>
                </div>
                <div className="agent-content d-flex justify-content-between">
                    <div className="mt-2 agent-social-icon d-flex gap-2">
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-linkedin"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-pinterest"></i>
                    </div>
                    <div className="mt-2">
                        <a>
                            4 Listed Properties
                            <i className="fa-solid fa-caret-right"></i>
                        </a>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="mb-5 mt-4 hide-elm sm">
                <h5 className="fw-bold">Featured Properties</h5>
                <div className="property-card rounded-4 p-3 mt-3">
                    <div className="mb-2">
                        <h6 className="fw-bold mb-1">Villa in coral Gables</h6>
                        <p className="text-muted m-0">
                            <i className="ri-map-pin-line me-1"></i>
                            Deering Bay Drive, Coral Gables, FL 33158, USA
                        </p>
                    </div>
                    <div className="image-container agent-right-img position-relative rounded-4 overflow-hidden mb-3">
                        <img src={propertying} alt="property" className="img-fluid w-100" />
                        <div className="badge-wrapper d-flex gap-1 position-absolute top-0 start-0 m-2">
                            <span className="badge bg-primary">For Sale</span>
                            <span className="badge bg-secondary">Featured</span>
                        </div>
                        <span className="build-year position-absolute top-0 end-0 m-2 text-white small">
                            Build 2019
                        </span>
                        <div className="icons position-absolute bottom-0 end-0 m-2 d-flex gap-2">
                            <i className="ri-heart-line text-white fs-5"></i>
                            <i className="share-line text-white fs-5"></i>
                        </div>
                    </div>
                    <p className="fw-bold text-primary mb-0">$825,000</p>
                </div>
            </div>
            {/* property Type */}
            <div className="hide-elm">
                <h5 className="fw-bold">Property Types</h5>
                <div className="row mt-3">
                    {[
                        "Apartment", "Apartment Building", "Office", "Shop", "Single Family", "Villa"
                    ].map((type, idx) => (
                        <div className="col-5 mb-2" key={idx}>
                            <i className="ri-arrow-right-s-line text-primary me-1"></i>
                            <span>{type}</span>
                        </div>
                    ))}
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Agents;
