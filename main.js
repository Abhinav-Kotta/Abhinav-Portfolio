import '@fontsource/kalam/latin-700.css';
import '@fontsource/patrick-hand/latin-400.css';
import { createIcons, ArrowDownRight, ArrowUpRight, ArrowRight, MoveDown, Menu, X, Play, Pause, Sparkles, Pencil, Braces, BrainCircuit, PanelsTopLeft, Server, MapPin, Copy, GraduationCap, Music2 } from 'lucide';
import './styles/main.css';
import { Navigation, Hero, ProjectCard } from './components/index.js';
import { star, arrow } from './components/Illustrations.js';
import { profile, projects, toolbox, experience } from './src/content.js';

const icons = { ArrowDownRight, ArrowUpRight, ArrowRight, MoveDown, Menu, X, Play, Pause, Sparkles, Pencil, Braces, BrainCircuit, PanelsTopLeft, Server, MapPin, Copy, GraduationCap, Music2 };
const renderIcons = () => createIcons({ icons, attrs: { 'stroke-width': 2.5, 'aria-hidden': 'true' } });

document.querySelector('#app').innerHTML = `
  <a class="skip-link button" href="#main">Skip to content</a>
  ${Navigation()}
  <main id="main" tabindex="-1">
    ${Hero()}
    <section id="work" class="section page-width" aria-labelledby="work-title">
      <div class="section-heading"><div><span class="section-label">01 / Things I’ve made</span><h2 id="work-title">From “what if” to <span class="ink-underline">here it is.</span></h2></div><span class="margin-note">A few pages from<br>my sketchbook ${arrow()}</span></div>
      <div class="work-toolbar"><p>A collection of code, research, and happy experiments.</p><div class="filters" role="group" aria-label="Filter projects"><button class="filter active" data-filter="all" aria-pressed="true">All work <span>06</span></button><button class="filter" data-filter="product" aria-pressed="false">Products</button><button class="filter" data-filter="research" aria-pressed="false">AI & research</button></div></div>
      <p class="sr-only" id="filter-status" role="status" aria-live="polite"></p>
      <div class="projects-grid">${projects.map(ProjectCard).join('')}</div>
      <div class="work-end"><span>There’s always another idea in the margins.</span><a class="text-link" href="${profile.github}?tab=repositories" target="_blank" rel="noopener noreferrer">More on GitHub <i data-lucide="arrow-up-right"></i></a></div>
    </section>
    <section id="about" class="section about-section" aria-labelledby="about-title"><div class="page-width about-grid">
      <div class="about-collage"><div class="portrait-paper"><span class="tape" aria-hidden="true"></span><img src="/images/abhinav.jpg" alt="Abhinav Kotta" width="800" height="800" loading="lazy"><p>the human behind the keyboard.</p><span class="portrait-star" aria-hidden="true">✳</span></div><div class="sticky-note photo-note"><i data-lucide="music-2"></i><span>Also found playing tabla,<br>or taking the scenic route.</span></div></div>
      <div class="about-copy"><span class="section-label">02 / A little about me</span><h2 id="about-title">A little logic.<br>A lot of <span class="ink-underline">curiosity.</span></h2><p class="drop-cap">I’m Abhinav, an AI/ML software developer who enjoys turning complex problems into useful, thoughtful experiences. My work spans intelligent systems, high-performance computing, and full-stack applications.</p><p>Off the keyboard, you’ll find me playing tabla, on a badminton or table tennis court, at the gym, or out on a hike. Different kinds of problem-solving. Same curious mind.</p><a href="/Abhinav_Kotta_Resume.pdf" class="text-link" target="_blank" rel="noopener noreferrer">View my résumé <i data-lucide="arrow-up-right"></i></a><p class="handwritten-signature">Always learning, always making.<span>— Abhinav</span></p></div>
    </div></section>
    <section id="journey" class="section page-width" aria-labelledby="journey-title"><div class="section-heading"><div><span class="section-label">03 / Notes along the way</span><h2 id="journey-title">Good work. <span class="ink-underline">Great lessons.</span></h2><p>A few stops on my journey through research and engineering.</p></div><span class="margin-note">Still writing<br>the next chapter…</span></div>
      <div class="timeline">${experience.map((job, index) => `<article class="timeline-item"><span class="timeline-number" aria-hidden="true">0${index + 1}</span><div class="timeline-meta"><span>${job.date}</span><h3>${job.company}</h3><p>${job.role}</p></div><p class="timeline-description">${job.description}</p></article>`).join('')}</div>
      <div class="education-grid"><article class="education-card"><i data-lucide="graduation-cap"></i><div><span>2025 – 2026</span><h3>Cornell Tech</h3><p>M.Eng. · Computer Science</p></div></article><article class="education-card"><i data-lucide="graduation-cap"></i><div><span>2021 – 2025</span><h3>University of Central Florida</h3><p>B.S. · Computer Science</p></div></article></div>
      <a class="publication-note" href="https://ieeexplore.ieee.org/document/10749545" target="_blank" rel="noopener noreferrer"><span class="rough-icon"><i data-lucide="pencil"></i></span><div><span class="section-label">A page in print / IEEE PVSC 2024</span><h3>Hurricane Power Outage Prediction Using Spatio-Temporal Graph Neural Networks</h3><span>Abhinav Kotta, et al. · Read the paper <i data-lucide="arrow-up-right"></i></span></div></a>
    </section>
    <section id="toolbox" class="section toolbox-section" aria-labelledby="toolbox-title"><div class="page-width"><div class="section-heading"><div><span class="section-label">04 / The tools behind the ideas</span><h2 id="toolbox-title">A few trusty <span class="ink-underline">tools.</span></h2><p>Different problems, different tools. Always something new to learn.</p></div>${star('toolbox-star')}</div>
      <div class="toolbox-grid">${toolbox.map(tool => `<div class="tool-card"><span class="rough-icon"><i data-lucide="${tool.icon}"></i></span><h3>${tool.name}</h3><p>${tool.tools}</p></div>`).join('')}</div><p class="toolbox-note"><i data-lucide="pencil"></i> Plus a blank page, a stubborn question, and a willingness to figure it out.</p></div>
    </section>
    <section id="contact" class="section page-width" aria-labelledby="contact-title"><div class="contact-paper"><span class="contact-pin" aria-hidden="true"></span><span class="section-label">05 / Your turn</span><h2 id="contact-title">Good things start<br>with a <span class="ink-underline">hello.</span></h2><p>Have an interesting problem, a project in mind,<br>or just a good idea? I’d love to hear it.</p><a class="button" href="mailto:${profile.email}">Say hello <i data-lucide="arrow-up-right"></i></a><div class="email-row"><a href="mailto:${profile.email}">${profile.email}</a><button class="icon-button copy-email" aria-label="Copy email address"><i data-lucide="copy"></i></button></div><p class="copy-status" role="status" aria-live="polite"></p><div class="contact-socials"><a class="text-link" href="${profile.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn <i data-lucide="arrow-up-right"></i></a><a class="text-link" href="${profile.github}" target="_blank" rel="noopener noreferrer">GitHub <i data-lucide="arrow-up-right"></i></a></div><span class="contact-doodle" aria-hidden="true">${star()}<span>something good<br>could start here</span>${arrow()}</span></div></section>
  </main>
  <footer class="site-footer page-width"><a href="#home" class="wordmark">abhinav<span class="wordmark-dot">.</span></a><p>Made with thought, a little ink, and a lot of curiosity.</p><a class="footer-link" href="#home">Back to top ↑</a><span class="copyright">© ${new Date().getFullYear()} ${profile.name}</span></footer>
  <dialog class="project-dialog" aria-labelledby="dialog-title"><button class="icon-button dialog-close" aria-label="Close project notes"><i data-lucide="x"></i></button><div id="dialog-content"></div></dialog>
`;
renderIcons();

const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');
function closeMenu() {
  menu.setAttribute('aria-expanded', 'false');
  menu.setAttribute('aria-label', 'Open navigation');
  nav.classList.remove('is-open');
}
menu.addEventListener('click', () => {
  const isOpen = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(isOpen));
  menu.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  nav.classList.toggle('is-open', isOpen);
});
nav.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') { closeMenu(); menu.focus(); } });
document.addEventListener('click', event => { if (!event.target.closest('.site-header')) closeMenu(); });

// Actual filtering, with a live announcement for assistive technology.
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-filter]').forEach(filter => {
    const selected = filter === button;
    filter.classList.toggle('active', selected);
    filter.setAttribute('aria-pressed', String(selected));
  });
  let visible = 0;
  document.querySelectorAll('[data-category]').forEach(card => {
    card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter;
    if (!card.hidden) visible++;
  });
  document.querySelector('#filter-status').textContent = `${visible} ${visible === 1 ? 'project' : 'projects'} shown.`;
}));

const sparkButton = document.querySelector('.spark-toggle');
sparkButton.addEventListener('click', () => {
  const playing = sparkButton.getAttribute('aria-pressed') !== 'true';
  sparkButton.setAttribute('aria-pressed', String(playing));
  document.querySelector('.hero-art').classList.toggle('is-connected', playing);
  sparkButton.innerHTML = `<i data-lucide="${playing ? 'pause' : 'play'}"></i><span>${playing ? 'A little spark. Pause?' : 'Connect the dots!'}</span>`;
  renderIcons();
});

// Native dialog provides focus trapping, Escape dismissal, and focus restoration.
const dialog = document.querySelector('.project-dialog');
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => {
  const project = projects.find(item => item.id === button.dataset.project);
  document.querySelector('#dialog-content').innerHTML = `<span class="section-label">Project notes / ${project.number}</span><h2 id="dialog-title">${project.title}</h2><p class="dialog-intro">${project.intro}</p>${project.details.map(([title, text]) => `<h3>${title}</h3><p>${text}</p>`).join('')}<ul class="tags">${project.tags.map(tag => `<li>${tag}</li>`).join('')}</ul><a class="button" href="${project.source}" target="_blank" rel="noopener noreferrer">${project.sourceLabel || 'Explore the source'} <i data-lucide="arrow-up-right"></i></a>`;
  renderIcons();
  dialog.showModal();
  dialog.scrollTop = 0;
  document.body.classList.add('dialog-open');
}));
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const bounds = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
});
dialog.addEventListener('close', () => document.body.classList.remove('dialog-open'));

let copyReset;
document.querySelector('.copy-email').addEventListener('click', async () => {
  const status = document.querySelector('.copy-status');
  try {
    await navigator.clipboard.writeText(profile.email);
    status.textContent = 'Email copied. Talk soon!';
  } catch {
    status.textContent = 'Select the address above to copy it, or click it to open your email app.';
  }
  clearTimeout(copyReset);
  copyReset = setTimeout(() => { status.textContent = ''; }, 5000);
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    document.querySelectorAll('#main-nav a').forEach(link => {
      if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  });
}, { rootMargin: '-15% 0px -60% 0px' });
document.querySelectorAll('main > section[id]').forEach(section => observer.observe(section));
