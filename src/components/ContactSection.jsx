import React from "react";

function ContactSection() {
  return (
    <section className="contact" id="contact">
      <h2 className="heading">
        Contact <span>Me</span>
      </h2>
      <form action="#">
        <div className="input-box">
          <div className="input-field">
            <input
              type="text"
              name="fullname"
              placeholder="Full Name"
              required
            />
            <span className="focus"></span>
          </div>
          <div className="input-field">
            <input type="email" name="email" placeholder="Email" required />
            <span className="focus"></span>
          </div>
        </div>
        <div className="input-box">
          <div className="input-field">
            <input
              type="text"
              name="fullname"
              placeholder="Full Name"
              required
            />
            <span className="focus"></span>
          </div>
          <div className="input-field">
            <input
              type="text"
              name="subject"
              placeholder="Email Subject"
              required
            />
            <span className="focus"></span>
          </div>
        </div>
        <div className="textarea-field">
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Your Message"
            required
          ></textarea>
          <span className="focus"></span>
        </div>
        <div className="btn-box">
          <a href="#">Submit</a>
        </div>
      </form>
    </section>
  );
}

export default ContactSection;
