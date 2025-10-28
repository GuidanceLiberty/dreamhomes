import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div className="container page-section my-5 mt-4 fs-5">
        <Link to="/" className="text-decoration-none">
          Home &nbsp; &gt; &nbsp; <span className="text-muted">Contact</span>
        </Link>
      </div>
      <section className="contact py-5">
        <div className="container">
          <h2>Contact</h2>
          <div className="col-lg-12">
            <iframe
              className="map mt-4"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3586.610421784482!2d3.3471170744809524!3d6.605411322207115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b923211b96911%3A0xd3abad8f69c49cd6!2s105%20Allen%20Ave%2C%20Road%2C%20Lagos%20101233%2C%20Lagos!5e1!3m2!1sen!2sng!4v1761660316924!5m2!1sen!2sng"
              width="100%"
              height="400"
              style={{ border:0, borderRadius: "30px" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="container con-page-info text-center">
            <div className="row">
                <div className="col-md-4 mb-4 mb-md-0">
                    <div className="contact-icon">
                        <i className="bi bi-phone"></i>
                    </div>
                    <p className="mb-0">+234-911-2524-812</p>
                </div>
                <div className="col-md-4 mb-4 mb-md-0">
                    <div className="contact-icon">
                        <i className="bi bi-geo-alt"></i>
                    </div>
                    <p className="mb-0">103 Allen Ave, <br />Ikeja Lagos</p>
                </div>
                <div className="col-md-4">
                    <div className="contact-icon">
                        <i className="bi bi-envelope"></i>
                    </div>
                    <p className="mb-0">newguidance.com</p>
                </div>
            </div>
        </div>
      </section>

      <div className="container my-5 d-flex align-items-center justify-content-center">
        <div className="col-lg-8 con-page">
            <form className="contact-form">
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="" className="form-label">Name</label>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Your Name"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label  className="form-label">Phone</label>
                        <div className="input group">
                            <input type="text" className="form-control" placeholder="Your Phone"/>
                        </div>
                    </div>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Email</label>
                    <div className="input-group">
                        <input type="email" className="form-control" placeholder="Your Email"/>
                    </div>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Message</label>
                    <div className="input-group">
                        <textarea  className="form-control" rows="4" placeholder="Your Message"></textarea>
                    </div>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="gdprCheck" required/>
                    <label htmlFor="gdprCheck" className="form-check-label">
                        I consent to having this website store my submitted information so they can respond to my inquiry.
                    </label>
                </div>
                <button type="submit" className="sub-btn">Send Message</button>
            </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
