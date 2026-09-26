import { useState } from "react";

function Packages() {
    const [selectedPackage, setSelectedPackage] = useState(null);
    const packageDetails = {
  bali: {
    name: "Bali",
    image: "https://ik.imagekit.io/travalot/development/resources/attachments/2025/7/21/c9c71920-7e74-11f0-bffc-6921f123467e.jpg?tr=w-1600,h-1067,c-at_max:f-webp:q-85",
    duration: "5 Days / 4 Nights",
    price: "₹39,999",
    description:
      "Explore Bali's tropical beaches, beautiful temples, scenic landscapes, and vibrant local culture.",
    places: ["Ubud", "Nusa Penida", "Uluwatu Temple"],
    hotels: ["The Anvaya Beach Resort", "Bali Dynasty Resort"],
  },

  paris: {
    name: "Paris",
    image: "https://images.unsplash.com/photo-1549144511-f099e773c147?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGFyaXN8ZW58MHx8MHx8fDA%3D",
    duration: "6 Days / 5 Nights",
    price: "₹89,999",
    description:
      "Experience iconic landmarks, romantic streets, art, fashion, and authentic French cuisine.",
    places: ["Eiffel Tower", "Louvre Museum", "Arc de Triomphe"],
    hotels: ["Novotel Paris Centre", "Mercure Paris Gare Montparnasse"],
  },

  switzerland: {
    name: "Switzerland",
    image: "https://images.unsplash.com/photo-1514970746-d4a465d514d0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHN3aXR6ZXJsYW5kfGVufDB8fDB8fHww",
    duration: "7 Days / 6 Nights",
    price: "₹1,29,999",
    description:
      "Experience the Swiss Alps, scenic villages, peaceful lakes, and breathtaking mountain views.",
    places: ["Interlaken", "Lucerne", "Jungfraujoch"],
    hotels: ["Hotel Interlaken", "Hotel Central Luzern"],
  },
};
  return (
    
    <section id="packages" className="Packages">
      <h2>Explore Our Packages</h2>

      <div className="Packages-grid">

        <div className="Package-card">
          <img
            src="https://images.unsplash.com/photo-1537996194471-e657df975ab4"
            alt="Bali"
          />

          <h3>Bali</h3>

          <p className="Package-duration">5 Days / 4 Nights</p>

          <p>
            Explore tropical beaches, beautiful temples,
            and the vibrant culture of Bali.
          </p>

          <h4>Starting from ₹39,999</h4>

          <button onClick={() => setSelectedPackage(packageDetails.bali)}>
  View Details
</button>
        </div>


        <div className="Package-card">
          <img
            src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34"
            alt="Paris"
          />

          <h3>Paris</h3>

          <p className="Package-duration">6 Days / 5 Nights</p>

          <p>
            Discover iconic landmarks, romantic streets,
            art, fashion, and French cuisine.
          </p>

          <h4>Starting from ₹89,999</h4>

          <button onClick={() => setSelectedPackage(packageDetails.paris)}>
  View Details
</button>
        </div>


        <div className="Package-card">
          <img
            src="https://cdn.getyourguide.com/image/format=auto%2Cfit=contain%2Cgravity=auto%2Cquality=60%2Cwidth=1440%2Cheight=650%2Cdpr=2/tour_img/5e44f9fa97cc3.jpeg"
            alt="Switzerland"
          />

          <h3>Switzerland</h3>

          <p className="Package-duration">7 Days / 6 Nights</p>

          <p>
            Experience stunning Alps, scenic villages,
            peaceful lakes, and unforgettable views.
          </p>

          <h4>Starting from ₹1,29,999</h4>

         <button onClick={() => setSelectedPackage(packageDetails.switzerland)}>
  View Details
</button>
        </div>

      </div>
      {selectedPackage && (
  <div className="Package-modal">

    <div className="Package-modal-content">

      <button
        className="Package-modal-close"
        onClick={() => setSelectedPackage(null)}
      >
        ×
      </button>
      <img
  className="Package-modal-image"
  src={selectedPackage.image}
  alt={selectedPackage.name}
/>

      <h2>{selectedPackage.name}</h2>

      <p>{selectedPackage.description}</p>

      <p>
        <strong>Duration:</strong> {selectedPackage.duration}
      </p>

      <p>
        <strong>Starting from:</strong> {selectedPackage.price}
      </p>
      <h3>Places to Visit</h3>

<ul>
  {selectedPackage.places.map((place, index) => (
    <li key={index}>{place}</li>
  ))}
</ul>

<h3>Recommended Hotels</h3>

<ul>
  {selectedPackage.hotels.map((hotel, index) => (
    <li key={index}>{hotel}</li>
  ))}
</ul>

    </div>

  </div>
)}
    </section>
  );
}

export default Packages;