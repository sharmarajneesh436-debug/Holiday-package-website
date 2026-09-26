function Hero() {
  return (
    <section id="home" className="Hero">

      <p className="Hero-tagline">
        TRAVEL • EXPLORE • EXPERIENCE
      </p>

      <h1>
        Escape The Ordinary,
        <br />
        Explore The Extraordinary.
      </h1>

      <p className="Hero-description">
        Discover breathtaking destinations and create
        unforgettable memories with every journey.
      </p>

      <button onClick={() => window.location.href = "#packages"}>
        Explore Packages
      </button>

    </section>
  );
}

export default Hero;