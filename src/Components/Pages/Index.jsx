/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import heroImage1 from "./../../assets/hero1.jpeg";
import heroImage2 from "./../../assets/hero2.jpeg";
import heroImage3 from "./../../assets//hero3.jpeg";

import heroIcon1 from "./../../assets/heroicon1.svg";
import heroIcon2 from "./../../assets/heroicon2.svg";
import heroIcon3 from "./../../assets/heroicon3.svg";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

// Data
import PropertieData from "./../../Data.json";

import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import propIcon1 from "./../../assets/prop-icon2.svg";
import propIcon2 from "./../../assets/prop-icon3.svg";
import propIcon3 from "./../../assets/prop-icon1.svg";
import test1 from "./../../assets/team-1.png";
import test2 from "./../../assets/team-2.png";
import test3 from "./../../assets/team-3.png";
import test4 from "./../../assets/team-4.png";
import bannerbg from "./../../assets/banner-bg-2.png";
import team1 from "./../../assets/team-5.jpg";
import team2 from "./../../assets/team-6.jpg";
import team3 from "./../../assets/team-8.jpg";
import team4 from "./../../assets/team-7.jpg";
import agentprop1 from "./../../assets/properties-1-1.jpeg";
import agentprop2 from "./../../assets/properties-1-2.jpeg";
import agentprop3 from "./../../assets/properties-1-3.jpeg";
import discover1 from "./../../assets/discovery-1.jpeg";
import discover2 from "./../../assets/discovery-2.jpeg";
import discover3 from "./../../assets/discovery-3.webp";
import discover4 from "./../../assets/discovery-4.webp";
import news1 from "./../../assets/news-1.jpeg";
import news2 from "./../../assets/news-2.webp";
import news3 from "./../../assets/news-3.jpeg";
import news4 from "./../../assets/news-4.webp";
import newsClient from "./../../assets/news-client.jpg";
import brand1 from "./../../assets/brand-1.svg";
import brand2 from "./../../assets/brand-2.svg";
import brand3 from "./../../assets/brand-3.svg";
import brand4 from "./../../assets/brand-4.svg";
import brand5 from "./../../assets/brand-5.svg";
import { Link } from "react-router-dom";

const Index = () => {
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
      {/* HERO */}
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className="mb-4"
      >
        {[heroImage3, heroImage1, heroImage2].map((img, index) => (
          <SwiperSlide key={index}>
            <div className="hero-main mb-4 position-relative">
              <img src={img} alt="" />
              <div className="hero-content">
                <div className="container my-5">
                  <div className="hero-info p-5 rounded-4 shadow d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center bg-white">
                    <div className="">
                      <h5 className="mb-1 fs-4 fw-semibold">
                        Home in coral Gables
                        <small className="text-muted ms-2 fs-6 fw-normal">
                          Build 2019
                        </small>
                      </h5>
                      <p className="mb-2 text-muted">
                        <strong>Added:</strong> June 8, 2022
                      </p>
                    </div>
                    <div className="d-flex gap-4 align-items-center my-3 my-md-0 text-primary">
                      <div className="d-flex align-items-center text-black">
                        <img
                          src={heroIcon2}
                          alt=""
                          className="hero-icon me-2"
                        />{" "}
                        4
                      </div>
                      <div className="d-flex align-items-center text-black">
                        <img
                          src={heroIcon3}
                          alt=""
                          className="hero-icon me-2"
                        />{" "}
                        4.5
                      </div>
                      <div className="d-flex align-items-center text-black">
                        <img
                          src={heroIcon1}
                          alt=""
                          className="hero-icon me-2"
                        />{" "}
                        3800 sq ft
                      </div>
                    </div>
                    <div className="text-end sm-md-3 hero-sale">
                      <span className="text-start d-block mb-1"> For Sale</span>
                      <h4 className="mb-0 fw-bold fs-3">$850,000</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* PROPERTIES */}
      <div className="container position-relative py-5">
        <Swiper
          modules={[Autoplay, Navigation]}
          slidesPerView={3}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          breakpoints={{
            1399: { slidesPerView: 3 },
            991: { slidesPerView: 2 },
            767: { slidesPerView: 1 },
            0: { slidesPerView: 1 },
          }}
          className="mt-5 py-5"
        >
          {PropertieData.map((PropData, propIndex) => (
            <SwiperSlide key={PropData.id}>
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
                <Link
                  to={`/property/${PropData.id}`}
                  className="text-decoration-none"
                >
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
                          <img src={propIcon2} alt="" className="img-fluid" />{" "}
                          3.5
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
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-prev swiper-btn swiper-prev">
          <i className="bi bi-caret-left-fill"></i>
        </div>
        <div className="swiper-button-next swiper-btn swiper-next">
          <i className="bi bi-caret-right-fill"></i>
        </div>
      </div>

      {/* About Property */}
      <div className="about-property position-relative">
        <div className="dots-element position-absolute"></div>
        <div className="dots-element2 position-absolute"></div>
        <div className="container mt-5 py-5 position-relative">
          <Swiper
            modules={[Navigation, EffectFade]}
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            effect="fade"
            fadeEffect={{ crossFade: true }}
          >
            {PropertieData.slice(0, 4).map((AbpropData) => (
              <SwiperSlide key={AbpropData.id}>
                <div className="ap-wrapper row">
                  <div className="col-lg-6">
                    <div className="ap-img rounded position-relative">
                      <img
                        src={AbpropData.apImage}
                        alt=""
                        className="img-fluid rounded"
                      />

                      <div
                        className="property-img-vid position-absolute"
                        style={{ top: "20px", right: "15px", zIndex: 10 }}
                      >
                        <span
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            const trigger = document.querySelector(
                              `#about-gallery-trigger-${AbpropData.id}`
                            );
                            if (trigger) trigger.click();
                          }}
                        >
                          <i className="bi bi-camera-fill">
                            &nbsp; {AbpropData.images || "view"}
                          </i>
                        </span>

                        <span
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            const trigger = document.querySelector(
                              `#about-video-trigger-${AbpropData.id}`
                            );
                            if (trigger) trigger.click();
                          }}
                        >
                          <i className="bi bi-camera-reels-fill">
                            &nbsp; {AbpropData.images || "play"}
                          </i>
                        </span>
                      </div>
                      <a
                        id={`about-video-trigger-${AbpropData.id}`}
                        data-fancybox
                        href={AbpropData.videoSlide}
                        style={{ display: "none" }}
                      ></a>
                      <div style={{ display: "none" }}>
                        {AbpropData.imageSlides?.map((img, index) => (
                          <a
                            key={index}
                            id={
                              index === 0
                                ? `about-gallery-trigger-${AbpropData.id}`
                                : undefined
                            }
                            data-fancybox={`about-gallery-${AbpropData.id}`}
                            href={img}
                          >
                            <img src={img} alt={`hidden-about-${index}`} />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="ap-content mt-4 d-flex flex-column gap-3">
                      <div className="property-tags ap-tags">
                        {Object.values(AbpropData.tags)
                          .slice(0, 3)
                          .map((tag, index) => (
                            <span key={index} className={`span${index + 1}`}>
                              {tag}
                            </span>
                          ))}
                      </div>
                      <h2 className="mt-2 mb-0">{AbpropData.name}</h2>
                      <p>
                        <i className="bi bi-geo-alt-fill"></i>
                        {AbpropData.address}
                      </p>
                      <div className="ap-info my-3">
                        <span>
                          <img src={propIcon1} alt="" className="img-fluid" />3
                        </span>
                        <span>
                          <img src={propIcon2} alt="" className="img-fluid" />
                          3.5
                        </span>
                        <span>
                          <img src={propIcon3} alt="" className="img-fluid" />
                          3500 sq ft
                        </span>
                      </div>
                      <h1 className="mt-3">{AbpropData.price}</h1>
                      <p className="ap-pere">
                        Enchanting three bedroom, three bath home with spacious
                        one bedroom, one bath cabana, in-laws
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Testimonial */}
      <div className="container py-5 text-center position-relative">
        <h2 className="fw-bold mb-5">Customers Love Us</h2>

        <Swiper
          loop={true}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
          modules={[Navigation]}
          className="testimonial-swiper"
        >
          <SwiperSlide>
            <div
              className="bg-white rounded p-4 p-md-5 mx-auto"
              style={{ maxWidth: "900px" }}
            >
              <div className="row align-items-center">
                <div className="col-md-4 text-center mb-4 mb-md-0 imgaf">
                  <div className="test-img">
                    <img
                      src={test1}
                      alt=""
                      className="rounded-circle shadow"
                      style={{
                        width: "150px",
                        height: "150px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-8 text-start">
                  <h4 className="text-primary fw-bold mb-3 fs-2">
                    This is genuinely the best theme I have ever bought in terms
                    of super easy & clear instructions to follow.
                  </h4>
                  <p className="text-muted mb-3">
                    I have been a web developer for over 18 years now. The theme
                    is fantastic, flexible and simply excellent to use. i
                    recommend enough!
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="bg-white rounded p-4 p-md-5 mx-auto"
              style={{ maxWidth: "900px" }}
            >
              <div className="row align-items-center">
                <div className="col-md-4 text-center mb-4 mb-md-0 imgaf">
                  <div className="test-img">
                    <img
                      src={test2}
                      alt=""
                      className="rounded-circle shadow"
                      style={{
                        width: "150px",
                        height: "150px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-8 text-start">
                  <h4 className="text-primary fw-bold mb-3 fs-2">
                    This is genuinely the best theme I have ever bought in terms
                    of super easy & clear instructions to follow.
                  </h4>
                  <p className="text-muted mb-3">
                    I have been a web developer for over 18 years now. The theme
                    is fantastic, flexible and simply excellent to use. i
                    recommend enough!
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="bg-white rounded p-4 p-md-5 mx-auto"
              style={{ maxWidth: "900px" }}
            >
              <div className="row align-items-center">
                <div className="col-md-4 text-center mb-4 mb-md-0 imgaf">
                  <div className="test-img">
                    <img
                      src={test3}
                      alt=""
                      className="rounded-circle shadow"
                      style={{
                        width: "150px",
                        height: "150px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-8 text-start">
                  <h4 className="text-primary fw-bold mb-3 fs-2">
                    This is genuinely the best theme I have ever bought in terms
                    of super easy & clear instructions to follow.
                  </h4>
                  <p className="text-muted mb-3">
                    I have been a web developer for over 18 years now. The theme
                    is fantastic, flexible and simply excellent to use. i
                    recommend enough!
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="bg-white rounded p-4 p-md-5 mx-auto"
              style={{ maxWidth: "900px" }}
            >
              <div className="row align-items-center">
                <div className="col-md-4 text-center mb-4 mb-md-0 imgaf">
                  <div className="test-img">
                    <img
                      src={test4}
                      alt=""
                      className="rounded-circle shadow"
                      style={{
                        width: "150px",
                        height: "150px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-8 text-start">
                  <h4 className="text-primary fw-bold mb-3 fs-2">
                    This is genuinely the best theme I have ever bought in terms
                    of super easy & clear instructions to follow.
                  </h4>
                  <p className="text-muted mb-3">
                    I have been a web developer for over 18 years now. The theme
                    is fantastic, flexible and simply excellent to use. i
                    recommend enough!
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Banner */}
      <div className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h1 className="hero-heading">
                Finding a perfect property have never <br /> been this easy
                earlier
              </h1>
              <p className="hero-subtext">
                You can find perfectly suited properties for your all needs with
                ease
              </p>
            </div>
            <div className="col-md-4 text-md-end text-start mt-4 mt-md-0">
              <div className="btn check-button">Check Properties</div>
            </div>
          </div>
          <div className="hero-divider">
            <div className="row hero-contact text-center text-md-start">
              <div className="col-md-6 mb-3 mb-md-0">
                <div className="contact-label">Email</div>
                <p className="contact-info">hello@yoursite.com</p>
              </div>
              <div className="col-md-6 mb-3 mb-md-0">
                <div className="contact-label">Phone Number</div>
                <p className="contact-info">+234 911 2524 812</p>
              </div>
            </div>
          </div>
        </div>
        <img
          src={bannerbg}
          alt=""
          className="img-fluid position-absolute banner-img"
        />
      </div>

      {/* Our agents */}
      <div className="our-agents py-5 my-5 position-relative">
        <div className="container">
          <div className="row justify-content-between">
            <div className="agents-title col-lg-6">
              <h2>Meet Our Agents</h2>
            </div>
            <div className="agents-btn col-lg-6 d-flex justify-content-end">
              <button className="btn btn1">View All</button>
            </div>
          </div>
        </div>
        <div className="agents-swiper mt-5">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            modules={[Navigation]}
            navigation={{
              nextEl: ".swiper-next",
              prevEl: ".swiper-prev",
            }}
            breakpoints={{
              1399: { slidesPerView: 3 },
              991: { slidesPerView: 2 },
              575: { slidesPerView: 1 },
              0: { slidesPerView: 1 },
            }}
          >
            {/* slide 1 */}
            <SwiperSlide>
              <div className="agent-card d-flex flex-column gap-2 shadow-sm border rounded p-3">
                <div className="agent-info d-flex align-items-center gap-3">
                  <div className="agent-img">
                    <img src={team1} alt="" className="img-fluid" />
                  </div>
                  <div className="agent-det">
                    <h2>Liberty Ojua</h2>
                    <p>Agent Liberty Ojua</p>
                  </div>
                </div>
                <div className="agent-gallery mt-3">
                  <div className="agent-gallery-col d-flex gap-3">
                    <img
                      src={agentprop1}
                      alt=""
                      className="img-fluid rounded"
                    />
                    <img
                      src={agentprop2}
                      alt=""
                      className="img-fluid rounded"
                    />
                    <img
                      src={agentprop3}
                      alt=""
                      className="img-fluid rounded"
                    />
                  </div>
                  <div className="agent-hide-content mt-3 d-flex justify-content-between align-items-center">
                    <button className="btn btn1">View Profile</button>
                    <a href="">3 Listed Properties</a>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* slide 2 */}
            <SwiperSlide>
              <div className="agent-card d-flex flex-column gap-2 shadow-sm border rounded p-3">
                <div className="agent-info d-flex align-items-center gap-3">
                  <div className="agent-img">
                    <img src={team2} alt="" className="img-fluid" />
                  </div>
                  <div className="agent-det">
                    <h2>New Guidance</h2>
                    <p>Agent New Guidance</p>
                  </div>
                </div>
                <div className="agent-gallery mt-3">
                  <div className="agent-gallery-col d-flex gap-3">
                    <img
                      src={agentprop1}
                      alt=""
                      className="img-fluid rounded"
                    />
                    <img
                      src={agentprop2}
                      alt=""
                      className="img-fluid rounded"
                    />
                    <img
                      src={agentprop3}
                      alt=""
                      className="img-fluid rounded"
                    />
                  </div>
                  <div className="agent-hide-content mt-3 d-flex justify-content-between align-items-center">
                    <button className="btn btn1">View Profile</button>
                    <a href="">3 Listed Properties</a>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* slide 3 */}
            <SwiperSlide>
              <div className="agent-card d-flex flex-column gap-2 shadow-sm border rounded p-3">
                <div className="agent-info d-flex align-items-center gap-3">
                  <div className="agent-img">
                    <img src={team3} alt="" className="img-fluid" />
                  </div>
                  <div className="agent-det">
                    <h2>Lady Gold</h2>
                    <p>Agent Lady Gold</p>
                  </div>
                </div>
                <div className="agent-gallery mt-3">
                  <div className="agent-gallery-col d-flex gap-3">
                    <img
                      src={agentprop1}
                      alt=""
                      className="img-fluid rounded"
                    />
                    <img
                      src={agentprop2}
                      alt=""
                      className="img-fluid rounded"
                    />
                    <img
                      src={agentprop3}
                      alt=""
                      className="img-fluid rounded"
                    />
                  </div>
                  <div className="agent-hide-content mt-3 d-flex justify-content-between align-items-center">
                    <button className="btn btn1">View Profile</button>
                    <a href="">3 Listed Properties</a>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* slide 4 */}
            <SwiperSlide>
              <div className="agent-card d-flex flex-column gap-2 shadow-sm border rounded p-3">
                <div className="agent-info d-flex align-items-center gap-3">
                  <div className="agent-img">
                    <img src={team4} alt="" className="img-fluid" />
                  </div>
                  <div className="agent-det">
                    <h2>Amos Akom</h2>
                    <p>Amos Akom</p>
                  </div>
                </div>
                <div className="agent-gallery mt-3">
                  <div className="agent-gallery-col d-flex gap-3">
                    <img
                      src={agentprop1}
                      alt=""
                      className="img-fluid rounded"
                    />
                    <img
                      src={agentprop2}
                      alt=""
                      className="img-fluid rounded"
                    />
                    <img
                      src={agentprop3}
                      alt=""
                      className="img-fluid rounded"
                    />
                  </div>
                  <div className="agent-hide-content mt-3 d-flex justify-content-between align-items-center">
                    <button className="btn btn1">View Profile</button>
                    <a href="">3 Listed Properties</a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      {/* Discovery Properties Section */}
      <div className="discover-propertie py-5">
        <div className="container">
          <div className="row">
            <div className="dis-prop-head text-center">
              <h2>Discover Properties</h2>
              <p>Find Properties In Your Favourite Cities</p>
            </div>
          </div>

          <div className="row mt-5">
            {/* Property 1 */}
            <div className="col-lg-3 col-md-6 dis-prop-col rounded position-relative">
              <div className="dis-prop-img position-relative">
                <img
                  src={discover1}
                  alt="Miami"
                  className="img-fluid rounded"
                />
              </div>

              <div className="dis-prop-content text-center rounded position-absolute">
                <span>Miami</span>
                <h2>7</h2>
                <div className="m-0 text-muted">Properties</div>
              </div>

              <button className="btn dis-prop-view-btn position-absolute">
                View all <i className="bi bi-caret-right-fill"></i>
              </button>
            </div>

            {/* Property 2 */}
            <div className="col-lg-3 col-md-6 dis-prop-col rounded position-relative">
              <div className="dis-prop-img position-relative">
                <img
                  src={discover2}
                  alt="Los Angeles"
                  className="img-fluid rounded"
                />
              </div>

              <div className="dis-prop-content text-center rounded position-absolute">
                <span>Los Angeles</span>
                <h2>12</h2>
                <div className="m-0 text-muted">Properties</div>
              </div>

              <button className="btn dis-prop-view-btn position-absolute">
                View all <i className="bi bi-caret-right-fill"></i>
              </button>
            </div>

            {/* Property 3 */}
            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0 dis-prop-col rounded position-relative">
              <div className="dis-prop-img position-relative">
                <img
                  src={discover3}
                  alt="New York"
                  className="img-fluid rounded"
                />
              </div>

              <div className="dis-prop-content text-center rounded position-absolute">
                <span>New York</span>
                <h2>9</h2>
                <div className="m-0 text-muted">Properties</div>
              </div>

              <button className="btn dis-prop-view-btn position-absolute">
                View all <i className="bi bi-caret-right-fill"></i>
              </button>
            </div>

            {/* Property 4 */}
            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0 dis-prop-col rounded position-relative">
              <div className="dis-prop-img position-relative">
                <img
                  src={discover4}
                  alt="Little Havana"
                  className="img-fluid rounded"
                />
              </div>

              <div className="dis-prop-content text-center rounded position-absolute">
                <span>Little Havana</span>
                <h2>7</h2>
                <div className="m-0 text-muted">Properties</div>
              </div>

              <button className="btn dis-prop-view-btn position-absolute">
                View all <i className="bi bi-caret-right-fill"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Latest News    */}
      <div className="latest-news py-5 position-relative">
        <div className="container">
          <div className="row">
            <div className="dis-prop-head">
              <h2>Latest News & Update</h2>
              <p>Latest News about Real Estate</p>
            </div>
          </div>
          <div className="row mt-5 w-100">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              loop={true}
              modules={[Navigation]}
              navigation={{
                nextEl: ".news-swiper-next",
                prevEl: ".news-swiper-prev",
              }}
              breakpoints={{
                1399: { slidesPerView: 3 },
                991: { slidesPerView: 2 },
                575: { slidesPerView: 1 },
                0: { slidesPerView: 1 },
              }}
              className="news-swiper"
            >
              <SwiperSlide>
                <div className="news-card">
                  <div className="news-card-img position-relative">
                    <img src={news1} alt="" className="img-fluid rounded" />
                    <div className="news-client-info d-flex align-items-center position-absolute">
                      <img src={newsClient} alt="" className="img-fluid" />
                      <p className="ms-2">New Guidance</p>
                    </div>
                  </div>
                  <div className="news-card-content mt-3">
                    <p>June 16, 2022</p>
                    <h5>
                      As The Estate Market Heats Up, Here's How first-time
                      Buyers can Keep their Cool
                    </h5>
                    <a href="">Luxury</a>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="news-card">
                  <div className="news-card-img position-relative">
                    <img src={news2} alt="" className="img-fluid rounded" />
                    <div className="news-client-info d-flex align-items-center position-absolute">
                      <img src={newsClient} alt="" className="img-fluid" />
                      <p className="ms-2">New Guidance</p>
                    </div>
                  </div>
                  <div className="news-card-content mt-3">
                    <p>June 16, 2022</p>
                    <h5>
                      As The Estate Market Heats Up, Here's How first-time
                      Buyers can Keep their Cool
                    </h5>
                    <a href="">Luxury</a>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="news-card">
                  <div className="news-card-img position-relative">
                    <img src={news3} alt="" className="img-fluid rounded" />
                    <div className="news-client-info d-flex align-items-center position-absolute">
                      <img src={newsClient} alt="" className="img-fluid" />
                      <p className="ms-2">New Guidance</p>
                    </div>
                  </div>
                  <div className="news-card-content mt-3">
                    <p>June 16, 2022</p>
                    <h5>
                      As The Estate Market Heats Up, Here's How first-time
                      Buyers can Keep their Cool
                    </h5>
                    <a href="">Luxury</a>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="news-card">
                  <div className="news-card-img position-relative">
                    <img src={news4} alt="" className="img-fluid rounded" />
                    <div className="news-client-info d-flex align-items-center position-absolute">
                      <img src={newsClient} alt="" className="img-fluid" />
                      <p className="ms-2">New Guidance</p>
                    </div>
                  </div>
                  <div className="news-card-content mt-3">
                    <p>June 16, 2022</p>
                    <h5>
                      As The Estate Market Heats Up, Here's How first-time
                      Buyers can Keep their Cool
                    </h5>
                    <a href="">Luxury</a>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className=" swiper-btn news-swiper-prev new-swiper-btn">
              <i className="bi bi-caret-left-fill"></i>
            </div>
            <div className=" swiper-btn news-swiper-next new-swiper-btn">
              <i className="bi bi-caret-right-fill"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Brands */}
      <div className="container-fluid">
        <div className="container py-5 mt-5">
          <h2>
            <strong>Partners of RealHomes</strong>
          </h2>
          <p>We are pleased to work with our partners</p>

          <div className="row d-flex justify-content-between">
            <div className="col-12 col-sm-6 col-md-6 col-lg-2">
              <div className="partner-card">
                <img src={brand1} alt="" className="partner-img" />
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-6 col-lg-2">
              <div className="partner-card">
                <img src={brand2} alt="" className="partner-img" />
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 mt-4 mt-lg-0 col-lg-2">
              <div className="partner-card">
                <img src={brand3} alt="" className="partner-img" />
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 mt-4 mt-lg-0 col-lg-2">
              <div className="partner-card">
                <img src={brand4} alt="" className="partner-img" />
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 mt-4 mt-lg-0 col-lg-2">
              <div className="partner-card">
                <img src={brand5} alt="" className="partner-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
