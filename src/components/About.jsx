function About() {
  return (
    <section id = "about" className="About">
      <div className="About-content">
        <div className="logo">
        About Raa<span>ही</span>
    </div>

        <p>
          We help you discover beautiful destinations and create
          unforgettable travel experiences.
        </p>

        <p>
          From peaceful escapes to exciting adventures, we make
          your journey simple, memorable, and enjoyable.
        </p>
        <div className="About-highlights">

  <div className="About-highlight">
    <span>✈️</span>
    <div>
      <h3>Curated Destinations</h3>
      <p>Handpicked places for every kind of traveler.</p>
    </div>
  </div>

  <div className="About-highlight">
    <span>🧳</span>
    <div>
      <h3>Hassle-Free Planning</h3>
      <p>Simple packages designed for a smooth journey.</p>
    </div>
  </div>

  <div className="About-highlight">
    <span>⭐</span>
    <div>
      <h3>Memorable Experiences</h3>
      <p>Travel experiences you will remember for years.</p>
    </div>
  </div>

</div>
      </div>

      <div className="About-image">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/059/555/579/small/excited-traveler-enjoying-the-breathtaking-view-of-islands-and-sea-in-a-tropical-paradise-free-photo.jpg"
          alt="Beautiful travel destination"
        />
      </div>
    </section>
  );
}

export default About;