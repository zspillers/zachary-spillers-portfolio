// ─── NAV SCROLL BEHAVIOR ────────────────────────────────────────────────────
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// ─── BUILD WORK GRID ─────────────────────────────────────────────────────────
function buildWorkGrid() {
  const workSection = document.getElementById('work');

  CATEGORY_ORDER.forEach(({ key, label }) => {
    const projects = PROJECTS.filter(p => p.category === key);
    if (!projects.length) return;

    const categoryWrap = document.createElement('div');
    categoryWrap.className = 'work-category';

    // Category header
    const header = document.createElement('div');
    header.className = 'work-category-header';
    const headerLabel = document.createElement('p');
    headerLabel.className = 't-label';
    headerLabel.textContent = label;
    header.appendChild(headerLabel);
    categoryWrap.appendChild(header);

    // Grid
    const grid = document.createElement('div');
    const useTwo = projects.length <= 2;
    grid.className = 'project-grid stagger' + (useTwo ? ' project-grid-2' : '');

    projects.forEach(project => {
      const card = document.createElement('a');
      card.className = 'project-card';
      card.href = `project.html?slug=${project.slug}`;
      card.setAttribute('aria-label', `${project.title} — ${project.location}`);

      card.innerHTML = `
        <div class="project-card-image">
          <img src="${project.cover}" alt="${project.title}" loading="lazy" />
        </div>
        <div class="project-card-overlay"></div>
        <div class="project-card-info">
          <div class="project-card-title">${project.title}</div>
          <div class="project-card-location">${project.location}</div>
        </div>
      `;

      grid.appendChild(card);
    });

    categoryWrap.appendChild(grid);
    workSection.appendChild(categoryWrap);
  });
}

// ─── SCROLL ANIMATIONS ────────────────────────────────────────────────────────
function initScrollObserver() {
  const els = document.querySelectorAll('.fade-in, .stagger');
  if (!els.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => observer.observe(el));
}

// ─── HERO SLIDESHOW ──────────────────────────────────────────────────────────
function initHeroSlideshow() {
  const heroImage = document.querySelector('.hero-image');
  if (!heroImage) return;

  const covers = PROJECTS.map(p => p.cover);
  let current = 0;

  // Pre-load all cover images
  covers.forEach(src => { const img = new Image(); img.src = src; });

  // Create two layers for crossfade
  const layerA = heroImage.querySelector('img');
  const layerB = document.createElement('img');
  layerB.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center 30%;opacity:0;transition:opacity 1.2s ease;';
  heroImage.appendChild(layerB);
  layerA.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center 30%;opacity:1;transition:opacity 1.2s ease;';

  function advance() {
    current = (current + 1) % covers.length;
    const incoming = current % 2 === 0 ? layerA : layerB;
    const outgoing = current % 2 === 0 ? layerB : layerA;
    incoming.src = covers[current];
    incoming.style.opacity = '0';
    // Small delay to ensure new image is loaded before fading in
    incoming.onload = () => {
      incoming.style.opacity = '1';
      outgoing.style.opacity = '0';
    };
    // Fallback if already cached
    if (incoming.complete) {
      incoming.style.opacity = '1';
      outgoing.style.opacity = '0';
    }
  }

  setInterval(advance, 5000);
}

// ─── INIT ─────────────────────────────────────────────────────────────────────
buildWorkGrid();
initScrollObserver();
initHeroSlideshow();
