/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

// Data
import PropertieData from "./../../Data.json";

import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import propIcon1 from "./../../assets/prop-icon2.svg";
import propIcon2 from "./../../assets/prop-icon3.svg";
import propIcon3 from "./../../assets/prop-icon1.svg";
import { Link } from "react-router-dom";

const Properties = () => {
  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {});
    return () => {
      Fancybox.destroy();
    };
  }, []);

  const [likedItems, setLikedItems] = useState([]);

  const toggleLike = (id) => {
    setLikedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };
  return (
    <>
      <div className="container page-section my-5 mt-5 fs-5">
        <Link to="/" className="text-decoration-none">
          Home
        </Link>
        &nbsp; &gt; &nbsp; <span className="text-muted">All Properties</span>
      </div>

      <div className="container">
        <div className="row">
          <div className="prop-page-top">
            <div className="prop-page-head">
              <h2>All Properties</h2>
              <p>
                <strong>1</strong>to <strong>6</strong> out of
                <strong>10</strong> Properties
              </p>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          {PropertieData.map((PropData, propIndex) => (
            <div className="col-lg-4" key={PropData.id}>
              <div className="property-card card">
                <div className="property-image position-relative">
                  <img
                    src={PropData.img}
                    alt={PropData.name}
                    className="img-fluid rounded"
                  />
                  <div className="property-tags position-absolute">
                    {Object.values(PropData.tags)
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
                      }}
                    >
                      <i className="bi bi-camera-fill"></i>
                      &nbsp; {PropData.images}
                    </span>

                    <span
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        const videoTrigger = document.querySelector(
                          `#video-trigger-${propIndex}`
                        );
                        if (videoTrigger) videoTrigger.click();
                      }}
                    >
                      <i className="bi bi-camera-reels-fill"></i>
                      &nbsp; {PropData.videos}
                    </span>
                  </div>
                  <a
                    id={`video-trigger-${propIndex}`}
                    data-fancybox
                    href={PropData.videoSlide}
                    style={{ display: "none" }}
                  ></a>
                  <div style={{ display: "none" }}>
                    {PropData.imageSlides?.map((img, index) => (
                      <a
                        key={index}
                        id={
                          index === 0
                            ? `gallery-trigger-${propIndex}`
                            : undefined
                        }
                        data-fancybox={`gallery-${propIndex}`}
                        href={img}
                      >
                        <img src={img} alt={`hidden-${index}`} />
                      </a>
                    ))}
                  </div>
                  <span
                    className={`liked-property position-absolute ${
                      likedItems.includes(PropData.id) ? "liked" : ""
                    }`}
                    onClick={() => toggleLike(PropData.id)}
                  >
                    <i className="bi bi-heart-fill"></i>
                  </span>
                </div>
                <Link to={`/property/${PropData.id}`} className="text-decoration-none">
                <div className="property-content mt-3 px-3">
                  <h2>{PropData.name}</h2>
                  <p>
                    <i className=" bi bi-geo-alt-fill"></i>
                    {PropData.address}
                  </p>
                  <h5>{PropData.type}</h5>

                  <div className="d-flex mt-3 pb-3 justify-content-between align-items-center w-100">
                    <h3 className="m-0">{PropData.price}</h3>
                    <div className="property-detail">
                      <span>
                        <img src={propIcon1} alt="" className="img-fluid" /> 3
                      </span>
                      <span>
                        <img src={propIcon2} alt="" className="img-fluid" /> 3.5
                      </span>
                      <span>
                        <img src={propIcon3} alt="" className="img-fluid" />{" "}
                        3500 sq ft
                      </span>
                    </div>
                  </div>
                  <p>
                    <span>Added:</span>
                    {PropData.date}
                  </p>
                </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Properties;
