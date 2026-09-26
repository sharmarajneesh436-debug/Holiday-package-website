
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all the fields.");
      return;
    }

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  }

  return (
    <section id="contact" className="Contact">

      <div className="Contact-form">
        <h2>Get In Touch</h2>

        <p>
          Have a question or want to plan your next trip?
          Get in touch with us.
        </p>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit">Send Message</button>

        </form>

        {submitted && (
          <p className="success-message">
            Thank you! Your message has been submitted successfully.
          </p>
        )}
      </div>

      <div className="Contact-text">

        <div className="Contact-image">
          <img
            src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff"
            alt="Beautiful travel destination"
          />
        </div>

        <h2>Ready for your next adventure?</h2>

        <p>
          Discover amazing destinations, explore new places,
          and create unforgettable memories with Holiday.
        </p>

        <p>
          Your next journey is just a message away.
        </p>

      </div>

    </section>
  );
}

export default Contact;
