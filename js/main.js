/**
 * Netflix Clone - main.js
 * Handles: movie data, row rendering, card hover effects,
 *          search toggle, navbar scroll, video preview modal.
 */

/* =====================
   Movie Data
   ===================== */
const MOVIES = {
  trending: [
    {
      id: 1,
      title: "Stranger Things",
      img: "https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg",
      match: "97%",
      rating: "TV-14",
      duration: "4 Seasons",
      genres: ["Sci-Fi", "Horror", "Drama"],
      cast: "Millie Bobby Brown, Finn Wolfhard, Winona Ryder",
      year: "2016",
      description:
        "When a boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.",
    },
    {
      id: 2,
      title: "Wednesday",
      img: "https://image.tmdb.org/t/p/w500/jeGtaMwGxPmQN5xM4ClnwPQcNQz.jpg",
      match: "95%",
      rating: "TV-14",
      duration: "1 Season",
      genres: ["Comedy", "Horror", "Mystery"],
      cast: "Jenna Ortega, Emma Myers, Hunter Doohan",
      year: "2022",
      description:
        "Smart, sarcastic and a little dead inside, Wednesday Addams investigates a murder spree while making new friends — and foes — at Nevermore Academy.",
    },
    {
      id: 3,
      title: "The Crown",
      img: "https://image.tmdb.org/t/p/w500/1M876KPjulVwppEpldhdc8V4o68.jpg",
      match: "92%",
      rating: "TV-MA",
      duration: "6 Seasons",
      genres: ["Drama", "History"],
      cast: "Claire Foy, Matt Smith, Olivia Colman",
      year: "2016",
      description:
        "This drama follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the 20th century.",
    },
    {
      id: 4,
      title: "Squid Game",
      img: "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
      match: "98%",
      rating: "TV-MA",
      duration: "2 Seasons",
      genres: ["Action", "Thriller", "Drama"],
      cast: "Lee Jung-jae, Park Hae-soo, Wi Ha-jun",
      year: "2021",
      description:
        "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits — with deadly high stakes.",
    },
    {
      id: 5,
      title: "Ozark",
      img: "https://image.tmdb.org/t/p/w500/pCGyPVrI9Fzw6rE1noOtSF3HqKU.jpg",
      match: "94%",
      rating: "TV-MA",
      duration: "4 Seasons",
      genres: ["Crime", "Drama", "Thriller"],
      cast: "Jason Bateman, Laura Linney, Sofia Hublitz",
      year: "2017",
      description:
        "A Chicago financial advisor secretly relocates his family to the Missouri Ozarks, where he must launder money to appease a drug boss.",
    },
    {
      id: 6,
      title: "Money Heist",
      img: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
      match: "96%",
      rating: "TV-MA",
      duration: "5 Parts",
      genres: ["Action", "Crime", "Mystery"],
      cast: "Álvaro Morte, Úrsula Corberó, Itziar Ituño",
      year: "2017",
      description:
        "Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his master plan.",
    },
  ],

  topRated: [
    {
      id: 7,
      title: "Breaking Bad",
      img: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
      match: "99%",
      rating: "TV-MA",
      duration: "5 Seasons",
      genres: ["Crime", "Drama", "Thriller"],
      cast: "Bryan Cranston, Aaron Paul, Anna Gunn",
      year: "2008",
      description:
        "A chemistry teacher diagnosed with cancer teams with a former student to manufacture and sell crystal meth to secure his family's future.",
    },
    {
      id: 8,
      title: "Dark",
      img: "https://image.tmdb.org/t/p/w500/apbrbWs2BerzAN6sncWADrjOxnU.jpg",
      match: "95%",
      rating: "TV-MA",
      duration: "3 Seasons",
      genres: ["Sci-Fi", "Thriller", "Mystery"],
      cast: "Louis Hofmann, Oliver Masucci, Karoline Eichhorn",
      year: "2017",
      description:
        "A missing child sets four families on a frantic hunt for answers as they unearth a sinister time travel conspiracy spanning several generations.",
    },
    {
      id: 9,
      title: "Mindhunter",
      img: "https://image.tmdb.org/t/p/w500/rxZCKAHMnJJiD8ywCGEaP6MoVuW.jpg",
      match: "93%",
      rating: "TV-MA",
      duration: "2 Seasons",
      genres: ["Crime", "Drama", "Thriller"],
      cast: "Jonathan Groff, Holt McCallany, Anna Torv",
      year: "2017",
      description:
        "In the late 1970s, two FBI agents expand criminal science by delving into the psychology of murder and getting inside the minds of serial killers.",
    },
    {
      id: 10,
      title: "The Witcher",
      img: "https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLQTVa04URsPm.jpg",
      match: "88%",
      rating: "TV-MA",
      duration: "3 Seasons",
      genres: ["Fantasy", "Action", "Adventure"],
      cast: "Henry Cavill, Anya Chalotra, Freya Allan",
      year: "2019",
      description:
        "Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts.",
    },
    {
      id: 11,
      title: "Narcos",
      img: "https://image.tmdb.org/t/p/w500/rTmal9fDbwh5F0waol2hq35U4ah.jpg",
      match: "94%",
      rating: "TV-MA",
      duration: "3 Seasons",
      genres: ["Biography", "Crime", "Drama"],
      cast: "Wagner Moura, Boyd Holbrook, Pedro Pascal",
      year: "2015",
      description:
        "A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar, as well as the many other drug kingpins who plagued the country through the years.",
    },
    {
      id: 12,
      title: "Peaky Blinders",
      img: "https://image.tmdb.org/t/p/w500/vUUqzWa2LnHIVqkaKVlVGkPaZo3.jpg",
      match: "96%",
      rating: "TV-MA",
      duration: "6 Seasons",
      genres: ["Crime", "Drama", "History"],
      cast: "Cillian Murphy, Helen McCrory, Paul Anderson",
      year: "2013",
      description:
        "A gangster family epic set in 1919 Birmingham, England, centering on a gang who sews razor blades in the peaks of their caps, and their boss Tommy Shelby.",
    },
  ],

  action: [
    {
      id: 13,
      title: "Extraction",
      img: "https://image.tmdb.org/t/p/w500/wlfDxbGEsW58vGhFljKkcR5IxDj.jpg",
      match: "89%",
      rating: "R",
      duration: "1h 56m",
      genres: ["Action", "Thriller"],
      cast: "Chris Hemsworth, Rudhraksh Jaiswal, Randeep Hooda",
      year: "2020",
      description:
        "A hardened mercenary's mission becomes a soul-searching race to survive when he's sent into Bangladesh to rescue a drug lord's kidnapped son.",
    },
    {
      id: 14,
      title: "The Old Guard",
      img: "https://image.tmdb.org/t/p/w500/cjkB8kbrNLJMmJcVcxIxE3IDHQz.jpg",
      match: "87%",
      rating: "R",
      duration: "2h 5m",
      genres: ["Action", "Fantasy", "Sci-Fi"],
      cast: "Charlize Theron, KiKi Layne, Matthias Schoenaerts",
      year: "2020",
      description:
        "A covert team of immortal mercenaries is suddenly exposed and must now fight to keep their identity a secret just as an unexpected new member is discovered.",
    },
    {
      id: 15,
      title: "Project Power",
      img: "https://image.tmdb.org/t/p/w500/vNpuAxGTl9HsUbHqam3SobzL7WO.jpg",
      match: "81%",
      rating: "R",
      duration: "1h 53m",
      genres: ["Action", "Crime", "Sci-Fi"],
      cast: "Jamie Foxx, Joseph Gordon-Levitt, Dominique Fishback",
      year: "2020",
      description:
        "When a pill that gives its users unpredictable superpowers for five minutes hits the streets of New Orleans, a cop and an ex-soldier must team up to stop the source.",
    },
    {
      id: 16,
      title: "Army of the Dead",
      img: "https://image.tmdb.org/t/p/w500/z8CExJekGrEThbpMXAmCFyJpbzO.jpg",
      match: "83%",
      rating: "R",
      duration: "2h 28m",
      genres: ["Action", "Horror", "Thriller"],
      cast: "Dave Bautista, Ella Purnell, Ana De La Reguera",
      year: "2021",
      description:
        "A group of mercenaries plan a heist during a zombie outbreak by taking advantage of the chaos to loot a casino's safe.",
    },
    {
      id: 17,
      title: "Red Notice",
      img: "https://image.tmdb.org/t/p/w500/wdE6ewaKZHr62bLqCn7A89e3xLO.jpg",
      match: "79%",
      rating: "PG-13",
      duration: "1h 58m",
      genres: ["Action", "Comedy", "Crime"],
      cast: "Dwayne Johnson, Ryan Reynolds, Gal Gadot",
      year: "2021",
      description:
        "An Interpol-issued Red Notice is a global alert to hunt down the world's most wanted art thief. When a heist goes wrong, an FBI profiler and outlaw must work together.",
    },
    {
      id: 18,
      title: "The Gray Man",
      img: "https://image.tmdb.org/t/p/w500/8hHCMwU4GN5TPPX4va5oMEBhNMI.jpg",
      match: "84%",
      rating: "PG-13",
      duration: "2h 2m",
      genres: ["Action", "Thriller", "Spy"],
      cast: "Ryan Gosling, Chris Evans, Ana de Armas",
      year: "2022",
      description:
        "When the CIA's top asset uncovers agency secrets, he triggers a worldwide manhunt by shadowy agency operatives led by a sociopathic former colleague.",
    },
  ],

  comedy: [
    {
      id: 19,
      title: "Murder Mystery",
      img: "https://image.tmdb.org/t/p/w500/koOTSNjwt4RE6LiCBPUhg7axiG7.jpg",
      match: "75%",
      rating: "PG-13",
      duration: "1h 37m",
      genres: ["Comedy", "Crime", "Mystery"],
      cast: "Adam Sandler, Jennifer Aniston, Luke Evans",
      year: "2019",
      description:
        "A New York City cop and his wife, on a European vacation, are invited to a billionaire's dinner on a yacht, where they become the prime suspects when the billionaire is murdered.",
    },
    {
      id: 20,
      title: "The Half of It",
      img: "https://image.tmdb.org/t/p/w500/gHDdIbRoFCFBSoKfhOjGRMhUMXf.jpg",
      match: "88%",
      rating: "PG-13",
      duration: "1h 44m",
      genres: ["Comedy", "Drama", "Romance"],
      cast: "Leah Lewis, Daniel Diemer, Alexxis Lemire",
      year: "2020",
      description:
        "A shy, introverted student is asked by a sweet but inarticulate jock to help him woo the girl they both love. But the process of helping him raises questions about her own desires.",
    },
    {
      id: 21,
      title: "We Are the Millers",
      img: "https://image.tmdb.org/t/p/w500/us0s06Vgm7mBuCZCmHbBPFbTEFj.jpg",
      match: "77%",
      rating: "R",
      duration: "1h 50m",
      genres: ["Comedy", "Crime"],
      cast: "Jason Sudeikis, Jennifer Aniston, Emma Roberts",
      year: "2013",
      description:
        "A veteran pot dealer creates a fake family as part of his plan to move a huge shipment of weed into the U.S. from Mexico.",
    },
    {
      id: 22,
      title: "Enola Holmes",
      img: "https://image.tmdb.org/t/p/w500/riYInlsq2kf1AWoGm80JQW5dLKp.jpg",
      match: "91%",
      rating: "PG-13",
      duration: "2h 3m",
      genres: ["Adventure", "Comedy", "Mystery"],
      cast: "Millie Bobby Brown, Henry Cavill, Sam Claflin",
      year: "2020",
      description:
        "When Enola Holmes, Sherlock's teen sister, discovers her mother has disappeared, she sets off to find her, becoming a detective in her own right.",
    },
    {
      id: 23,
      title: "Yes Day",
      img: "https://image.tmdb.org/t/p/w500/vYTaB7qmAKZPTwEzAOzDrXi1W9H.jpg",
      match: "72%",
      rating: "PG",
      duration: "1h 26m",
      genres: ["Comedy", "Family"],
      cast: "Jennifer Garner, Edgar Ramirez, Jenna Ortega",
      year: "2021",
      description:
        "Tired of saying no all the time, a couple decides to give their three wild kids a \"Yes Day\", allowing the kids to make all the family decisions for 24 hours.",
    },
    {
      id: 24,
      title: "Thunder Force",
      img: "https://image.tmdb.org/t/p/w500/moxCyJ5mTLMYKC8HG0X7WlXNKaa.jpg",
      match: "68%",
      rating: "PG-13",
      duration: "1h 47m",
      genres: ["Action", "Comedy", "Sci-Fi"],
      cast: "Melissa McCarthy, Octavia Spencer, Jason Bateman",
      year: "2021",
      description:
        "In a world where supervillains are commonplace, two childhood best friends reunite after one devises a process to give superpowers to regular people.",
    },
  ],
};

const ROW_CONFIG = [
  { key: "trending",  label: "Trending Now" },
  { key: "topRated", label: "Top Rated" },
  { key: "action",   label: "Action & Adventure" },
  { key: "comedy",   label: "Comedies" },
];

/* =====================
   Utility
   ===================== */
function el(id) {
  return document.getElementById(id);
}

/* =====================
   Navbar Scroll Effect
   ===================== */
(function initNavbar() {
  const navbar = el("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
})();

/* =====================
   Search Toggle
   ===================== */
(function initSearch() {
  const toggleBtn = el("searchToggle");
  const searchBox = el("searchBox");
  const input = el("searchInput");

  toggleBtn.addEventListener("click", () => {
    searchBox.classList.toggle("open");
    if (searchBox.classList.contains("open")) {
      input.focus();
    }
  });

  // Close when clicking outside
  document.addEventListener("click", (e) => {
    if (!searchBox.contains(e.target) && e.target !== toggleBtn) {
      searchBox.classList.remove("open");
    }
  });
})();

/* =====================
   Modal
   ===================== */
const modal = el("videoModal");
const modalVideo = el("modalVideo");

function openModal(movie) {
  el("modalTitle").textContent = movie.title;
  el("modalMatch").textContent = movie.match + " Match";
  el("modalYear").textContent = movie.year;
  el("modalRating").textContent = movie.rating;
  el("modalSeasons").textContent = movie.duration;
  el("modalDesc").textContent = movie.description;
  el("modalCast").textContent = movie.cast;
  el("modalGenre").textContent = movie.genres.join(", ");

  // Reset and (re)play
  if (modalVideo) {
    modalVideo.pause();
    modalVideo.currentTime = 0;
    modalVideo.play().catch(() => {});
  }

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("open");
  document.body.style.overflow = "";
  if (modalVideo) {
    modalVideo.pause();
  }
}

el("modalClose").addEventListener("click", closeModal);
el("modalBackdrop").addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

/* =====================
   Hero Buttons
   ===================== */
(function initHero() {
  const heroMovie = MOVIES.trending[0];

  el("heroPlayBtn").addEventListener("click", () => openModal(heroMovie));
  el("heroInfoBtn").addEventListener("click", () => openModal(heroMovie));
})();

/* =====================
   Card Builder
   ===================== */
function buildCard(movie) {
  const card = document.createElement("div");
  card.className = "card";
  card.setAttribute("role", "button");
  card.setAttribute("tabindex", "0");
  card.setAttribute("aria-label", `Open ${movie.title}`);

  const genresHtml = movie.genres
    .map((g, i) =>
      i === 0
        ? `<span>${g}</span>`
        : `<span class="card__genre-dot">•</span><span>${g}</span>`
    )
    .join("");

  card.innerHTML = `
    <div class="card__thumb">
      <img class="card__img" src="${movie.img}" alt="${movie.title}" loading="lazy" />
    </div>
    <div class="card__preview">
      <div class="card__preview-actions">
        <button class="card__action-btn card__action-btn--play" aria-label="Play ${movie.title}">
          <i class="fa fa-play"></i>
        </button>
        <button class="card__action-btn card__action-btn--secondary" aria-label="Add to list">
          <i class="fa fa-plus"></i>
        </button>
        <button class="card__action-btn card__action-btn--secondary" aria-label="Like">
          <i class="fa fa-thumbs-up"></i>
        </button>
        <button class="card__action-btn card__action-btn--expand" aria-label="More info">
          <i class="fa fa-chevron-down"></i>
        </button>
      </div>
      <div class="card__preview-meta">
        <span class="card__match">${movie.match} Match</span>
        <span class="card__rating">${movie.rating}</span>
        <span class="card__duration">${movie.duration}</span>
      </div>
      <div class="card__preview-title">${movie.title}</div>
      <div class="card__preview-genres">${genresHtml}</div>
    </div>
  `;

  // Play button -> open modal
  card
    .querySelector(".card__action-btn--play")
    .addEventListener("click", (e) => {
      e.stopPropagation();
      openModal(movie);
    });

  // Expand / More info -> open modal
  card
    .querySelector(".card__action-btn--expand")
    .addEventListener("click", (e) => {
      e.stopPropagation();
      openModal(movie);
    });

  // Clicking anywhere on the card also opens modal
  card.addEventListener("click", () => openModal(movie));

  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openModal(movie);
    }
  });

  return card;
}

/* =====================
   Row Builder
   ===================== */
function buildRow(config) {
  const movies = MOVIES[config.key];
  if (!movies || movies.length === 0) return null;

  const row = document.createElement("section");
  row.className = "row";
  row.setAttribute("aria-label", config.label);

  row.innerHTML = `
    <h2 class="row__title">
      ${config.label}
      <span class="row__explore">Explore All <i class="fa fa-angle-right"></i></span>
    </h2>
    <div class="row__slider-wrapper">
      <button class="row__nav-btn row__nav-btn--left" aria-label="Scroll left">
        <i class="fa fa-chevron-left"></i>
      </button>
      <div class="row__slider" role="list"></div>
      <button class="row__nav-btn row__nav-btn--right" aria-label="Scroll right">
        <i class="fa fa-chevron-right"></i>
      </button>
    </div>
  `;

  const slider = row.querySelector(".row__slider");
  movies.forEach((movie) => {
    const card = buildCard(movie);
    card.setAttribute("role", "listitem");
    slider.appendChild(card);
  });

  // Scroll navigation
  const leftBtn = row.querySelector(".row__nav-btn--left");
  const rightBtn = row.querySelector(".row__nav-btn--right");
  const scrollAmount = () => slider.clientWidth * 0.75;

  leftBtn.addEventListener("click", () => {
    slider.scrollBy({ left: -scrollAmount(), behavior: "smooth" });
  });
  rightBtn.addEventListener("click", () => {
    slider.scrollBy({ left: scrollAmount(), behavior: "smooth" });
  });

  return row;
}

/* =====================
   Render All Rows
   ===================== */
(function renderRows() {
  const container = el("movieRows");
  ROW_CONFIG.forEach((cfg) => {
    const row = buildRow(cfg);
    if (row) container.appendChild(row);
  });
})();
