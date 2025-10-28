/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

// Data
import PropertieData from "./../../Data.json";

import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import BedRooms1 from "./../../assets/bedroom-2.webp";
import BedRooms2 from "./../../assets/bedroom-3.webp";
import BedRooms3 from "./../../assets/bedroom-1.webp";
import turing from "./../../assets/properties-1-2.jpeg";
import commenting from "./../../assets/team-2.png";
import propertie from "./../../assets/hero1.jpeg";

const PropertiesDetails = () => {
  const { id } = useParams();
  const property = PropertieData.find((item) => String(item.id) === String(id));
  const propIndex = PropertieData.findIndex(
    (item) => String(item.id) === String(id)
  );

  const [likedItems, setLikedItems] = useState([]);

  const [img, setImg] = useState(property ? `./../${property.img}` : "");

  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {});
    return () => {
      Fancybox.destroy();
    };
  }, []);

  if (!property) return <h2>Property Not Found!</h2>;

  const toggleLike = (id) => {
    setLikedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const images = [BedRooms1, BedRooms2, BedRooms3];

  const floorPlans = [
    {
      title: "1 Bedroom Apartment",
      description:
        "A walk-in closet and a bathroom with a vanity, toilet, and walk-in shower are also included in the attached bedroom.",
      size: "654 sq ft",
    },
    {
      title: "2 Bedroom Apartment",
      description:
        "Includes two spacious bedrooms with built-in wardrobes, a shared bathroom, an open-concept living area, and a fully equipped kitchen.",
      size: "980 sq ft",
    },
    {
      title: "4 Bedroom Apartment",
      description:
        "A luxury family apartment featuring four large bedrooms, multiple bathrooms, a private balcony, and an expansive living and dining area perfect for gatherings.",
      size: "1,850 sq ft",
    },
  ];

  return (
    <>
      <div className="container page-section my-5 mt-5 fs-5">
        <Link to="/" className="text-decoration-none">
          Home
        </Link>
        &nbsp; &gt; &nbsp;{" "}
        <span className="text-muted"> Properties Details</span>
      </div>

      <div className="container my-5 py-5 border-bottom">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="prop-detail-img position-relative">
              <img
                src={img}
                alt={property.name}
                className="img-fluid rounded"
              />
              <div className="property-tags position-absolute">
                {Object.values(property.tags)
                  .slice(0, 3)
                  .map((tag, index) => (
                    <span key={index} className={`span${index + 1}`}>
                      {tag}
                    </span>
                  ))}
              </div>
              <div className="property-img-vid position-absolute">
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    const trigger = document.querySelector(
                      `#gallery-trigger-${propIndex}`
                    );
                    if (trigger) trigger.click();
                    else alert("Gallery images not found.");
                  }}
                >
                  <i className="bi bi-camera-fill"></i>
                  &nbsp; {property.images}
                </span>
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    const videoTrigger = document.querySelector(
                      `#video-trigger-${propIndex}`
                    );
                    if (videoTrigger) videoTrigger.click();
                    else alert("Video not found");
                  }}
                >
                  <i className="bi bi-camera-reels-fill "></i>&nbsp;{" "}
                  {property.videos}
                </span>
              </div>
              {property.videoSlide ? (
                <a
                  id={`video-trigger-${propIndex}`}
                  data-fancybox
                  href={`/${property.videoSlide}`}
                  style={{ display: "none" }}
                ></a>
              ) : (
                <p className="text-danger">Video not available.</p>
              )}
              {property.imageSlides?.length > 0 && (
                <div style={{ display: "none" }}>
                  {property.imageSlides?.length > 0 && (
                    <div style={{ display: "none" }}>
                      {property.imageSlides.map((imgSrc, index) => (
                        <a
                          key={index}
                          id={
                            index === 0
                              ? `gallery-trigger-${propIndex}`
                              : undefined
                          }
                          data-fancybox={`gallery-${propIndex}`}
                          href={`/${imgSrc}`}
                        >
                          <img src={`/${imgSrc}`} alt={`hidden`} />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              )}
              <span
                style={{ cursor: "pointer" }}
                className={`liked-property position-absolute ${
                  likedItems.includes(property.id) ? "liked" : ""
                }`}
                onClick={() => toggleLike(property.id)}
              >
                <i className="bi bi-heart-fill"></i>
              </span>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="prop-detail-content">
              <h3>{property.type}</h3>
              <h2>{property.name}</h2>
              <p className="m-0">{property.address}</p>
              <h1>{property.price}</h1>
              <p className="mt-4">
                This charming home combines modern elegance with everyday
                comfort, offering spacious interiors and a warm, inviting
                atmosphere ideal for families or professionals.
              </p>
              <p className="hied-elm">
                Perfectly situated in a prime neighborhood, the property
                provides convenient access to schools, shopping centers, and
                essential local amenities.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5 pb-5">
        <div className="row">
          <div className="col-lg-8">
            <h5 className="pd-title">Description</h5>
            <p>
              Enchanting three bedroom, three bath home with spacious one
              bedroom, one bath cabina, un-laws quater.
            </p>
            <h5 className="pd-title">Aditional Details</h5>

            <div className="ad-det d-flex justify-content-start gap-5">
              <div className="ad-det-col">
                <p>Bedroom Features:</p>
                <p>Dining Area:</p>
                <p>DOORS & WINDOWS:</p>
                <p>Entry Location:</p>
                <p>Exterior Construction</p>
                <p>Fireplace Fuel:</p>
                <p> FIREPLACE LOCATION:</p>
                <p>Floors:</p>
              </div>
              <div className="ad-det-col">
                <p>Main Floor Master Bedroom, Walk-In Closet</p>
                <p>Breakfast Counter/Bar, Living/Dining Combo</p>
                <p>Bay Window</p>
                <p>Mid Level</p>
                <p>Wood</p>
                <p>Pellet Stove</p>
                <p>Living Room</p>
                <p>Raised Foundation, Vinyl Tile, wall-to-wall carpet, wood</p>
              </div>
            </div>

            <h6 className="mt-4 pd-title">Properties Common Note</h6>
            <div className="bg-light p-3">
              This is a common note that can be displayed on all properties but
              controlled from one simple option.
            </div>

            {/* Features */}
            <h5 className="mt-5 pd-title">Features</h5>
            <div className="d-flex flex-wrap gap-3 mb-4">
              {["2 Stories", "Home Theater", "Lawn", "Mable Floors"].map(
                (feature, index) => (
                  <span className="feature-item">
                    <i className="ri-checkbox-circle-line text-primary me-1">
                      {feature}
                    </i>
                  </span>
                )
              )}
            </div>

            {/* Property Attachments */}
            <h5 className="pd-title">Property Attachments</h5>
            <div className="row">
              {[
                {
                  type: "ri-file-pdf-line",
                  name: "Ultra Demo PDF File",
                  size: "16.57 kb",
                },
                {
                  type: "ri-file-word-line",
                  name: "Ultra Demo Word File",
                  size: "12.13 kb",
                },
                {
                  type: "ri-file-excel-line",
                  name: "Ultra Demo EXCEL File",
                  size: "8.60.57 kb",
                },
                {
                  type: "ri-file-image-line",
                  name: "Ultra Demo Image File",
                  size: "6.00 kb",
                },
              ].map((file, idx) => (
                <div className="col-md-6 mb-3" key={idx}>
                  <div className="attachment-card p-3 d-flex align-items-center bg-light rounded">
                    <i
                      className={`${file.type} display-4 text-primary me-3`}
                    ></i>
                    <div className="">
                      <h6 className="mb-1">{file.name}</h6>
                      <small className="text-muted">{file.size}</small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <h5 className="mt-5 pd-title">Floor Plans</h5>
            <div className="floorplans-tab p-3 rounded">
              <ul className="nav nav-tabs mb-3">
                {[
                  "1 Bedroom Apartment",
                  "2 Bedrooms Apartment",
                  "4 Bedrooms Apartment",
                ].map((tab, idx) => (
                  <li className="nav-item" key={idx}>
                    <button
                      className={`nav-link ${
                        activeTab === idx ? "active" : ""
                      }`}
                      onClick={() => setActiveTab(idx)}
                    >
                      {tab}
                    </button>
                  </li>
                ))}
              </ul>

              <div className="floorplan-content">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <strong>{floorPlans[activeTab].title}</strong>
                  <span className="text-muted">Price On Call</span>
                </div>
                <p className="mb-3">{floorPlans[activeTab].description}</p>

                <div className="d-flex gap-4 mb-3">
                  <span>
                    <i className="ri-hotel-bed-line me-1">
                      <strong>1</strong>Bedroom
                    </i>
                  </span>
                  <span>
                    <i className="ri-bathtub-bed-line me-1">
                      <strong>1</strong>Bedroom
                    </i>
                  </span>
                  <span>
                    <i className="ri-expand-left-right-line me-1">
                      <strong>{floorPlans[activeTab].size}</strong>
                    </i>
                  </span>
                </div>
                <img
                  src={images[activeTab]}
                  alt=""
                  className="img-fluid rounded border"
                />
              </div>
            </div>

            <div className="my-5">
              <div className="tour-form-wrapper rounded-4 shadow-sm">
                <div className="row g-0">
                  <div className="col-md-7 p-4">
                    <h4 className="fw-bold mb-4">Schedule A Tour</h4>

                    <div className="d-flex gap-3 mb-3 flex-wrap">
                      <div className="input-group custom-input">
                        <span className="input-group-text">
                          <i className="ri-calendar-line"></i>
                        </span>
                        <input
                          type="date"
                          className="form-control"
                          placeholder="Select date"
                        />
                      </div>

                      <div className="input-group custom-input">
                        <span className="input-group-text">
                          <i className="ri-time-line"></i>
                        </span>
                        <input
                          type="time"
                          className="form-control"
                          placeholder="10:00"
                        />
                      </div>
                    </div>

                    <div className="tour-type-toggle mb-4">
                      <button className="btn tour-type active">
                        In Person
                      </button>
                      <button className="btn tour-type">Video Chat</button>
                    </div>

                    <div className="input-group custom-input mb-3">
                      <span className="input-group-text">
                        <i className="ri-user-line"></i>
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                      />
                    </div>

                    <div className="input-group custom-input mb-3">
                      <span className="input-group-text">
                        <i className="ri-phone-line"></i>
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                      />
                    </div>

                    <div className="input-group custom-input mb-3">
                      <span className="input-group-text">
                        <i className="ri-mail-line"></i>
                      </span>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your Email"
                      />
                    </div>
                    <div className="input-group custom-textarea mb-4">
                      <textarea
                        className="form-control p-4"
                        placeholder="Message"
                        rows="3"
                      ></textarea>
                    </div>

                    <button className="btn btn-primary schedule-btn">
                      schedule
                    </button>
                  </div>
                  <div className="col-md-5 p-4 d-flex flex-column justify-content-center">
                    <img src={turing} alt="" className="fluid rounded-4 mb-3" />
                    <h6 className="fw-bold">Discover your dream property</h6>
                    <p className="text-muted mb-1">
                      Immerse yourself in the captivating ambiance of our
                      properties. <strong>Book a personalized tour</strong> to
                      explore the exquisite beauty and unique features of our
                      property.
                    </p>
                    <p className="text-muted">
                      Our knowledgeable staff will guide you through the
                      property
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="container my-5">
              <div className="mb-5">
                <h5 className="pd-title">1 Comment</h5>
                <div className="d-flex align-items-start gap-3 mt-3">
                  <img
                    src={commenting}
                    alt=""
                    className="rounded-circle"
                    width={60}
                    height={60}
                  />
                  <div>
                    <strong>New Guidance</strong>
                    <p
                      className="text-muted mb-1"
                      style={{ fontSize: "0.85rem" }}
                    >
                      September 9, 2025
                    </p>
                    <p className="text-muted mb-1">
                      This is a sample comment. We have been extremely pleased
                      with communication, honesty and advice throughout the
                      entire process....
                    </p>
                    <a href="" className="text-primary fw-medium">
                      Reply
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 right-side">
            <div className="card">
              <div className="card-body text-center">
                <form>
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Name"
                  />
                  <input
                    type="email"
                    className="form-control mb-2"
                    placeholder="Email"
                  />
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Phone"
                  />
                  <textarea
                    className="form-control mb-2"
                    rows="3"
                    placeholder="Hello, I am interested in [Home in Merick Way]"
                  ></textarea>
                  <div className="form-check mb-2 text-start">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="gdpConsent"
                    />
                    <label className="form-check-label" htmlFor="gdpConsent">
                      I consent to having this website store my submitted
                      information
                    </label>
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            <div className="mb-5 mt-4 hide-elm-sm">
              <h5 className="fw-bold">Featured Properties</h5>
              <div className="property-card rounded-4 p-3 mt-3">
                <div className="mb-2">
                  <h6 className="fw-bold mb-1">Villa in Coral Gables</h6>
                  <p
                    className="text-muted mb-0"
                    style={{ fontSize: "0.85rem" }}
                  >
                    <i className="ri-map-pin-line me-1"></i>
                    Deering Bay Drive, Coral Gables, FL 33158, USA
                  </p>
                </div>
                <div className="image-container position-relative rounded-4 overflow-hidden mb-3">
                  <img src={propertie} alt="" className="img-fluid" />
                  <div className="badge-wrapper d-flex gap-1 position-absolute top-0 start-0 m-2">
                    <span className="badge bg-primary">For Sale</span>
                    <span className="badge bg-secondary">Featured</span>
                  </div>
                  <span className="build-year position-absolute top-0 end-0 m-2 text-white small">
                    Build 2019
                  </span>
                  <div className="play-icon position-absolute top-50 start-50 translate-middle">
                    <i className="ri-play-circle-fill text-white fs-3"></i>
                  </div>
                  <div className="icons position-absolute bottom-0 end-0 m-2 d-flex gap-2">
                    <i className="ri-heart-line text-white fs-5"></i>
                    <i className="ri-share-line text-white fs-5"></i>
                  </div>
                </div>
                <p className="fw-bold text-primary mb-0">$825,000</p>
              </div>
            </div>
            <div className="hide-elm">
              <h5 className="fw-bold">Property Type</h5>
              <div className="row mt-3">
                {[
                  "Apartment",
                  "Apartment Building",
                  "Office",
                  "Shop",
                  "Single Family",
                  "Villa",
                ].map((type, idx) => (
                  <div className="col-6 mb-2" key={idx}>
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

export default PropertiesDetails;
