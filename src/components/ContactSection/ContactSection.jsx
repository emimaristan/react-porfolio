// require("dotenv").config();
import { useState } from "react";
import "./ContactSection.css";

import emailjs from "@emailjs/browser";

const EMAILJS_PUBLIC_KEY = "6JL9MipsIdtF_ElJ4";
const EMAILJS_SERVICEID = "contact_me_service";
const EMAILJS_TEMPLATEID = "contact_me_template";

function ContactSection() {
  const [statusButton, setStatusButton] = useState("Submit");

  emailjs.init({
    publicKey: EMAILJS_PUBLIC_KEY,
    // Do not allow headless browsers
    blockHeadless: true,
  });

  const sendEmail = (e) => {
    e.preventDefault();
    setStatusButton("Sending...");
    const data = new FormData(e.target);

    emailjs
      .send(EMAILJS_SERVICEID, EMAILJS_TEMPLATEID, {
        from_name: data.get("fullname"),
        message: data.get("message"),
        from_email: data.get("email"),
      })
      .then(
        (response) => {
          e.target.reset();
          setStatusButton("Submit");
        },
        (error) => {
          setStatusButton("Submit");
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <h2 className="heading">
        Contact <span>Me</span>
      </h2>
      <form onSubmit={sendEmail}>
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
          <button type="submit" disabled={statusButton === "Sending..."}>
            {statusButton}
          </button>
        </div>
      </form>
    </section>
  );
}

export default ContactSection;
