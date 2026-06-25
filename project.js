// ─── NAV SCROLL BEHAVIOR ────────────────────────────────────────────────────
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// ─── RESOLVE PROJECT FROM URL ────────────────────────────────────────────────
const params = new URLSearchParams(window.location.search);
const slug = params.get('slug');
const project = PROJECTS.find(p => p.slug === slug);

if (!project) {
  document.title = 'Project Not Found — Zachary Spillers';
  document.body.innerHTML = `<div style="padding:120px 5vw;font-family:sans-serif;">
    <p>Project not found. <a href="index.html">Return home</a></p>
  </div>`;
  throw new Error('Project not found: ' + slug);
}

// ─── POPULATE META ────────────────────────────────────────────────────────────
document.title = `${project.title} — Zachary Spillers`;
document.querySelector('meta[name="description"]').setAttribute(
  'content',
  `${project.title}, ${project.location} — ${project.scope}`
);

const heroImg = document.getElementById('hero-img');
heroImg.src = project.cover;
heroImg.alt = project.title;

document.getElementById('project-category-label').textContent = project.categoryLabel;
document.getElementById('project-title').textContent = project.title;
document.getElementById('project-location').textContent = project.location;
document.getElementById('project-scope').textContent = project.scope;

const descEl = document.getElementById('project-description');
if (project.description && project.description !== 'PLACEHOLDER') {
  descEl.textContent = project.description;
} else {
  document.getElementById('project-description-wrap').style.display = 'none';
}

if (!project.scope || project.scope === 'PLACEHOLDER') {
  document.getElementById('project-scope-block').style.display = 'none';
}

// ─── BUILD GALLERY ────────────────────────────────────────────────────────────
const galleryGrid = document.getElementById('gallery-grid');
const images = project.gallery;

images.forEach((src, i) => {
  const item = document.createElement('div');
  item.className = 'gallery-item';
  item.setAttribute('data-index', i);
  item.setAttribute('role', 'button');
  item.setAttribute('tabindex', '0');
  item.setAttribute('aria-label', `View image ${i + 1} of ${images.length}`);

  const img = document.createElement('img');
  img.src = src;
  img.alt = `${project.title} — image ${i + 1}`;
  img.loading = 'lazy';

  item.appendChild(img);
  item.addEventListener('click', () => openLightbox(i));
  item.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openLightbox(i); });
  galleryGrid.appendChild(item);
});

// ─── LIGHTBOX ─────────────────────────────────────────────────────────────────
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCounter = document.getElementById('lightbox-counter');
let currentIndex = 0;

function openLightbox(index) {
  currentIndex = index;
  updateLightbox();
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
  lightboxImg.focus();
}

function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}

function updateLightbox() {
  lightboxImg.src = images[currentIndex];
  lightboxImg.alt = `${project.title} — image ${currentIndex + 1}`;
  lightboxCounter.textContent = `${currentIndex + 1} / ${images.length}`;
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateLightbox();
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  updateLightbox();
}

document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
document.getElementById('lightbox-prev').addEventListener('click', prevImage);
document.getElementById('lightbox-next').addEventListener('click', nextImage);

lightbox.addEventListener('click', e => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', e => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') prevImage();
  if (e.key === 'ArrowRight') nextImage();
});

// ─── PROJECT NAV (PREV / NEXT) ────────────────────────────────────────────────
const currentIdx = PROJECTS.findIndex(p => p.slug === slug);
const prevProject = PROJECTS[currentIdx - 1] || null;
const nextProject = PROJECTS[currentIdx + 1] || null;

const projectNav = document.getElementById('project-nav');

if (prevProject || nextProject) {
  if (prevProject) {
    const prevEl = document.createElement('a');
    prevEl.className = 'project-nav-item prev';
    prevEl.href = `project.html?slug=${prevProject.slug}`;
    prevEl.innerHTML = `
      <span class="project-nav-arrow">&#8592;</span>
      <span class="project-nav-label">Previous</span>
      <span class="project-nav-title">${prevProject.title}</span>
    `;
    projectNav.appendChild(prevEl);
  } else {
    projectNav.appendChild(document.createElement('div'));
  }

  if (nextProject) {
    const nextEl = document.createElement('a');
    nextEl.className = 'project-nav-item next';
    nextEl.href = `project.html?slug=${nextProject.slug}`;
    nextEl.innerHTML = `
      <span class="project-nav-arrow">&#8594;</span>
      <span class="project-nav-label">Next</span>
      <span class="project-nav-title">${nextProject.title}</span>
    `;
    projectNav.appendChild(nextEl);
  }
}

// ─── SCROLL ANIMATIONS ────────────────────────────────────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

document.querySelectorAll('.fade-in, .stagger').forEach(el => observer.observe(el));
