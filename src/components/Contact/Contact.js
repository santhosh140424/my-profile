import React, { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaInstagram, FaGithub } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container container">
        <h2><FaEnvelope className="icon" /> Get in touch.</h2>
        <div className="contact-form-container">
          <div className="contact-form-item">
            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit" className="btn-submit">Send Message</button>
            </form>

            {/* Right Side (Info) */}
            <div className="contact-info">
              <p>
                Here is a good spot for a message to your readers to let them know
                how best to reach out to you.
              </p>
              <ul>
                <li><FaEnvelope /> santhoshkumar140424@gmail.com</li>
                <li><FaMapMarkerAlt /> Chennai City, India</li>
                <li><FaInstagram /> @yourusername</li>
                <li><FaGithub /> yourgithub</li>
              </ul>
            </div>                    
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
