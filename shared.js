/* shared.js — injects nav and footer into every page */

const NAV_SVG = `<svg width="42" height="42" viewBox="0 0 46 46" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="nd" cx="32%" cy="26%" r="70%">
      <stop offset="0%" stop-color="#C82038"/><stop offset="45%" stop-color="#620010"/><stop offset="100%" stop-color="#1A0003"/>
    </radialGradient>
    <radialGradient id="nr" cx="32%" cy="26%" r="70%">
      <stop offset="0%" stop-color="#FF9090"/><stop offset="35%" stop-color="#FF1515"/><stop offset="100%" stop-color="#7A0000"/>
    </radialGradient>
  </defs>
  <line x1="9" y1="14" x2="23" y2="6" stroke="#6B0010" stroke-width="1.5" stroke-linecap="round" opacity="0.8"/>
  <line x1="9" y1="14" x2="7" y2="31" stroke="#6B0010" stroke-width="1.5" stroke-linecap="round" opacity="0.8"/>
  <line x1="26" y1="26" x2="23" y2="6"  stroke="#8B0018" stroke-width="1.8" stroke-linecap="round"/>
  <line x1="26" y1="26" x2="9"  y2="14" stroke="#8B0018" stroke-width="1.8" stroke-linecap="round"/>
  <line x1="26" y1="26" x2="7"  y2="31" stroke="#8B0018" stroke-width="1.8" stroke-linecap="round"/>
  <line x1="26" y1="26" x2="40" y2="24" stroke="#8B0018" stroke-width="1.8" stroke-linecap="round"/>
  <line x1="26" y1="26" x2="36" y2="38" stroke="#8B0018" stroke-width="1.8" stroke-linecap="round"/>
  <circle cx="23" cy="6"  r="5.2" fill="url(#nd)"/>
  <circle cx="9"  cy="14" r="5.2" fill="url(#nd)"/>
  <circle cx="7"  cy="31" r="5.2" fill="url(#nd)"/>
  <circle cx="40" cy="24" r="4"   fill="url(#nd)"/>
  <circle cx="36" cy="38" r="4"   fill="url(#nd)"/>
  <circle cx="26" cy="26" r="6.5" fill="url(#nr)"/>
</svg>`;

const FOOTER_SVG = `<svg width="26" height="26" viewBox="0 0 46 46" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="fd" cx="32%" cy="26%" r="70%">
      <stop offset="0%" stop-color="#C82038"/><stop offset="45%" stop-color="#620010"/><stop offset="100%" stop-color="#1A0003"/>
    </radialGradient>
    <radialGradient id="fr" cx="32%" cy="26%" r="70%">
      <stop offset="0%" stop-color="#FF9090"/><stop offset="35%" stop-color="#FF1515"/><stop offset="100%" stop-color="#7A0000"/>
    </radialGradient>
  </defs>
  <line x1="9" y1="14" x2="23" y2="6" stroke="#6B0010" stroke-width="1.5" stroke-linecap="round" opacity="0.8"/>
  <line x1="9" y1="14" x2="7" y2="31" stroke="#6B0010" stroke-width="1.5" stroke-linecap="round" opacity="0.8"/>
  <line x1="26" y1="26" x2="23" y2="6"  stroke="#8B0018" stroke-width="1.8" stroke-linecap="round"/>
  <line x1="26" y1="26" x2="9"  y2="14" stroke="#8B0018" stroke-width="1.8" stroke-linecap="round"/>
  <line x1="26" y1="26" x2="7"  y2="31" stroke="#8B0018" stroke-width="1.8" stroke-linecap="round"/>
  <line x1="26" y1="26" x2="40" y2="24" stroke="#8B0018" stroke-width="1.8" stroke-linecap="round"/>
  <line x1="26" y1="26" x2="36" y2="38" stroke="#8B0018" stroke-width="1.8" stroke-linecap="round"/>
  <circle cx="23" cy="6"  r="5.2" fill="url(#fd)"/>
  <circle cx="9"  cy="14" r="5.2" fill="url(#fd)"/>
  <circle cx="7"  cy="31" r="5.2" fill="url(#fd)"/>
  <circle cx="40" cy="24" r="4"   fill="url(#fd)"/>
  <circle cx="36" cy="38" r="4"   fill="url(#fd)"/>
  <circle cx="26" cy="26" r="6.5" fill="url(#fr)"/>
</svg>`;

const PAGES = [
  { href: 'index.html',        label: 'Home' },
  { href: 'members.html',      label: 'Members' },
  { href: 'research.html',     label: 'Research' },
  { href: 'publications.html', label: 'Publications' },
  { href: 'teaching.html',     label: 'Teaching' },
  { href: 'contact.html',      label: 'Contact' },
];

function injectNav(activePage) {
  const links = PAGES.map(p =>
    `<a href="${p.href}" class="${p.label === activePage ? 'active' : ''}">${p.label}</a>`
  ).join('');

  document.querySelector('nav').innerHTML = `
    <div style="display:flex;align-items:center;gap:0;">
      <!-- 광운대학교 로고 -->
      <a href="http://kw.ac.kr" target="_blank" style="display:flex;align-items:center;margin-right:20px;opacity:0.92;transition:opacity 0.2s;" onmouseover="this.style.opacity=1" onmouseout="this.style.opacity=0.92">
        <img src="images/kw_logo.svg" alt="Kwangwoon University" style="height:34px;width:auto;display:block;">
      </a>
      <!-- 구분선 -->
      <div style="width:1px;height:28px;background:rgba(255,255,255,0.2);margin-right:20px;"></div>
      <!-- DA-Lab 로고 -->
      <a href="index.html" class="nav-logo">
        ${NAV_SVG}
        <span class="nav-logo-text">DA-Lab</span>
      </a>
    </div>
    <div class="nav-links">${links}</div>
  `;
}

function injectFooter() {
  document.querySelector('footer').innerHTML = `
    <div class="footer-inner">
      <div class="footer-brand">
        <div class="footer-logo-row">
          ${FOOTER_SVG}
          <span class="footer-logo-text">DA-Lab</span>
        </div>
        <p class="footer-tagline">Data Analytics Laboratory<br>School of Information Convergence<br>Kwangwoon University</p>
      </div>
      <div class="footer-divider"></div>
      <div class="footer-cols">
        <div class="footer-col">
          <h4>Address</h4>
          <p>#802 Sabit-Bldg, 20, Gwangun-ro<br>Nowon-gu, Seoul, Republic of Korea<br>ZIP: 01897</p>
        </div>
        <div class="footer-col">
          <h4>Contact</h4>
          <a href="mailto:mcho@kw.ac.kr">Professor | mcho@kw.ac.kr</a>
          <a href="tel:+8229408454">Tel: +82-2-940-8454</a>
          <a href="http://kw.ac.kr" target="_blank">Kwangwoon University</a>
        </div>
        <div class="footer-col">
          <h4>Links</h4>
          <a href="https://scholar.google.co.kr/citations?user=HwE3cfoAAAAJ&hl=ko" target="_blank">Google Scholar</a>
          <a href="https://www.researchgate.net/profile/Minsu-Cho" target="_blank">ResearchGate</a>
          <a href="https://www.linkedin.com/in/mscho1990/" target="_blank">LinkedIn</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <span class="footer-copy">© 2025 Data Analytics Lab., Kwangwoon University. All rights reserved.</span>
      <div class="footer-socials">
        <a href="https://scholar.google.co.kr/citations?user=HwE3cfoAAAAJ&hl=ko" target="_blank">Google Scholar</a>
        <a href="https://www.linkedin.com/in/mscho1990/" target="_blank">LinkedIn</a>
      </div>
    </div>
  `;
}
