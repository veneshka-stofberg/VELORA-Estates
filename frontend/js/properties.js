
"use strict";

// VELORA ESTATES — DEMONSTRATION PROPERTY DATA
// Fictional listings for portfolio purposes.

const properties = [
  {
    id: 1,
    name: "The Aurelia Residence",
    location: "Sandton, Johannesburg",
    type: "Villa",
    price: 18500000,
    bedrooms: 5,
    bathrooms: 5,
    garages: 3,
    area: 780,
    description: "A remarkable contemporary residence with expansive living spaces, refined finishes and a seamless connection between indoor and outdoor living.",
    features: ["Swimming Pool", "Private Cinema", "Smart Home", "Landscaped Garden", "Entertainment Terrace"],
    images: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85"
    ],
    featured: true
  },
  {
    id: 2,
    name: "Maison Solenne",
    location: "Cape Town, Western Cape",
    type: "Villa",
    price: 24900000,
    bedrooms: 6,
    bathrooms: 6,
    garages: 4,
    area: 950,
    description: "An architectural sanctuary that combines sophisticated interiors with generous entertainment spaces and understated elegance.",
    features: ["Ocean-Inspired Design", "Infinity Pool", "Wine Cellar", "Home Gym", "Outdoor Lounge"],
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=85"
    ],
    featured: true
  },
  {
    id: 3,
    name: "The Elara Estate",
    location: "Umhlanga, Durban",
    type: "House",
    price: 12750000,
    bedrooms: 4,
    bathrooms: 4,
    garages: 2,
    area: 620,
    description: "A beautifully considered home defined by warm natural materials, generous proportions and timeless architectural details.",
    features: ["Swimming Pool", "Designer Kitchen", "Study", "Garden", "Covered Patio"],
    images: [
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600566753051-f0b89df2dd90?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85"
    ],
    featured: true
  },
  {
    id: 4,
    name: "The Meridian Penthouse",
    location: "Sandton, Johannesburg",
    type: "Penthouse",
    price: 9800000,
    bedrooms: 3,
    bathrooms: 3,
    garages: 2,
    area: 340,
    description: "An elevated urban retreat featuring open-plan living, luxurious finishes and an effortless contemporary atmosphere.",
    features: ["Private Terrace", "Concierge", "Secure Parking", "Smart Lighting"],
    images: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=85"
    ],
    featured: false
  },
  {
    id: 5,
    name: "Villa Seraphine",
    location: "Stellenbosch, Western Cape",
    type: "Villa",
    price: 16200000,
    bedrooms: 5,
    bathrooms: 4,
    garages: 3,
    area: 710,
    description: "A serene countryside-inspired residence where sophisticated design meets tranquil outdoor living.",
    features: ["Wine Room", "Swimming Pool", "Guest Suite", "Garden", "Outdoor Dining"],
    images: [
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600566753051-f0b89df2dd90?auto=format&fit=crop&w=1600&q=85"
    ],
    featured: false
  },
  {
    id: 6,
    name: "The Noire Apartment",
    location: "Rosebank, Johannesburg",
    type: "Apartment",
    price: 4750000,
    bedrooms: 2,
    bathrooms: 2,
    garages: 2,
    area: 185,
    description: "An elegant metropolitan apartment featuring carefully selected materials, contemporary finishes and inviting interiors.",
    features: ["Balcony", "Secure Access", "Modern Kitchen", "Parking"],
    images: [
      "https://images.unsplash.com/photo-1600566753051-f0b89df2dd90?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85"
    ],
    featured: false
  }
];

function formatPrice(price) {
  return new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
    maximumFractionDigits: 0
  }).format(price);
}

function propertyCard(property) {
  return `
    <a class="listing-card" href="property.html?id=${property.id}">
      <div class="listing-image">
        <img src="${property.images[0]}"
             alt="${property.name} — illustrative property photograph"
             loading="lazy">
        <span class="listing-badge">
          ${property.featured ? "SIGNATURE COLLECTION" : "EXCLUSIVE RESIDENCE"}
        </span>
      </div>
      <div class="listing-info">
        <span class="listing-location">${property.location}</span>
        <h3>${property.name}</h3>
        <p class="listing-price">${formatPrice(property.price)}</p>
        <div class="listing-specs">
          <span>${property.bedrooms} Beds</span>
          <span>${property.bathrooms} Baths</span>
          <span>${property.area} m²</span>
        </div>
        <span class="listing-action">EXPLORE RESIDENCE ↗</span>
      </div>
    </a>
  `;
}

function initPropertyListings() {
  const grid = document.getElementById("listingGrid");
  if (!grid) return;

  const search = document.getElementById("searchInput");
  const type = document.getElementById("typeFilter");
  const price = document.getElementById("priceFilter");
  const beds = document.getElementById("bedFilter");
  const count = document.getElementById("resultCount");
  const reset = document.getElementById("resetFilters");

  function render() {
    const term = search.value.trim().toLowerCase();
    const maxPrice = Number(price.value);
    const minBeds = Number(beds.value);

    const results = properties.filter(p => {
      const matchesSearch =
        p.name.toLowerCase().includes(term) ||
        p.location.toLowerCase().includes(term);

      return matchesSearch &&
        (!type.value || p.type === type.value) &&
        (!maxPrice || p.price <= maxPrice) &&
        (!minBeds || p.bedrooms >= minBeds);
    });

    grid.innerHTML = results.length
      ? results.map(propertyCard).join("")
      : `<div class="empty-results">
           <h3>No residences found</h3>
           <p>Try adjusting your search or filters.</p>
         </div>`;

    count.textContent = `${results.length} residences found`;
  }

  [search, type, price, beds].forEach(control => {
    control.addEventListener("input", render);
  });

  reset.addEventListener("click", () => {
    search.value = "";
    type.value = "";
    price.value = "";
    beds.value = "";
    render();
  });

  render();
}

function initPropertyDetails() {
  const container = document.getElementById("propertyDetail");
  if (!container) return;

  const id = Number(new URLSearchParams(location.search).get("id"));
  const property = properties.find(p => p.id === id);

  if (!property) {
    container.innerHTML = `
      <div class="not-found">
        <h1>Residence Not Found</h1>
        <p>This property does not exist in our collection.</p>
        <a href="properties.html" class="btn btn-dark">View Collection</a>
      </div>`;
    return;
  }

  document.title = `${property.name} | VELORA Estates`;

  container.innerHTML = `
    <section class="detail-heading">
      <a href="properties.html" class="back-link">← BACK TO COLLECTION</a>
      <span class="eyebrow">EXCLUSIVE RESIDENCE</span>
      <h1>${property.name}</h1>
      <div class="detail-heading-bottom">
        <span>${property.location}</span>
        <strong>${formatPrice(property.price)}</strong>
      </div>
    </section>

    <section class="detail-gallery">
      <div class="main-photo">
        <img id="mainPropertyImage" src="${property.images[0]}"
             alt="${property.name} — gallery photograph">
        <div class="gallery-controls">
          <button id="prevPhoto" aria-label="Previous photo">←</button>
          <span id="photoCounter">1 / ${property.images.length}</span>
          <button id="nextPhoto" aria-label="Next photo">→</button>
        </div>
      </div>
      <div class="thumbnail-row" id="thumbnailRow">
        ${property.images.map((src, index) => `
          <button class="thumbnail ${index === 0 ? "selected" : ""}"
                  data-index="${index}"
                  aria-label="View photo ${index + 1}"
                  aria-pressed="${index === 0}">
            <img src="${src}" alt="Gallery thumbnail ${index + 1}">
          </button>
        `).join("")}
      </div>
    </section>

    <section class="detail-content section-padding">
      <div class="detail-main">
        <div class="section-label">
          <span class="label-line"></span>
          PROPERTY OVERVIEW
        </div>
        <h2 class="section-title">A remarkable <em>residence.</em></h2>
        <p class="detail-description">${property.description}</p>

        <div class="detail-stats">
          <div><strong>${property.bedrooms}</strong><span>BEDROOMS</span></div>
          <div><strong>${property.bathrooms}</strong><span>BATHROOMS</span></div>
          <div><strong>${property.garages}</strong><span>GARAGES</span></div>
          <div><strong>${property.area}</strong><span>AREA (m²)</span></div>
        </div>

        <h3 class="features-title">Residence Features</h3>
        <div class="features-grid">
          ${property.features.map(feature => `
            <span>✧ ${feature}</span>
          `).join("")}
        </div>
      </div>

      <aside class="enquiry-panel">
        <span class="eyebrow">PRIVATE ENQUIRY</span>
        <h3>Discover Your<br>Next Chapter.</h3>
        <p>Interested in this residence? Send us an enquiry.</p>

        <form id="enquiryForm">
          <label for="enquiryName">Full Name</label>
          <input id="enquiryName" name="name" required maxlength="100"
                 autocomplete="name" placeholder="Your full name">

          <label for="enquiryEmail">Email Address</label>
          <input id="enquiryEmail" name="email" type="email" required
                 autocomplete="email" placeholder="you@example.com">

          <label for="enquiryMessage">Your Message</label>
          <textarea id="enquiryMessage" name="message" rows="4"
                    maxlength="2000" required
                    placeholder="I would like to enquire about this residence."></textarea>

          <button class="btn btn-gold" type="submit">
            PREPARE ENQUIRY ↗
          </button>
        </form>
        <p class="form-note">
          Demonstration only. This opens your email application;
          no information is stored or sent to a server.
        </p>
      </aside>
    </section>
  `;

  let currentPhoto = 0;
  const image = document.getElementById("mainPropertyImage");
  const counter = document.getElementById("photoCounter");
  const thumbnails = [...document.querySelectorAll(".thumbnail")];

  function showPhoto(index) {
    currentPhoto = (index + property.images.length) % property.images.length;
    image.src = property.images[currentPhoto];
    counter.textContent = `${currentPhoto + 1} / ${property.images.length}`;

    thumbnails.forEach((button, i) => {
      const active = i === currentPhoto;
      button.classList.toggle("selected", active);
      button.setAttribute("aria-pressed", String(active));
    });
  }

  document.getElementById("prevPhoto").addEventListener("click", () => {
    showPhoto(currentPhoto - 1);
  });

  document.getElementById("nextPhoto").addEventListener("click", () => {
    showPhoto(currentPhoto + 1);
  });

  thumbnails.forEach(button => {
    button.addEventListener("click", () => {
      showPhoto(Number(button.dataset.index));
    });
  });

  document.getElementById("enquiryForm").addEventListener("submit", event => {
    event.preventDefault();

    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const name = document.getElementById("enquiryName").value.trim();
    const email = document.getElementById("enquiryEmail").value.trim();
    const message = document.getElementById("enquiryMessage").value.trim();

    if (!name || !email || !message) return;

    const subject = encodeURIComponent(`Enquiry: ${property.name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nProperty: ${property.name}\n\n${message}`
    );

    // Replace this placeholder before using with a real client.
    window.location.href =
      `mailto:hello@example.com?subject=${subject}&body=${body}`;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initPropertyListings();
  initPropertyDetails();
});
