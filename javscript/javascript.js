import { benefits } from './benefits.js';

// 👉 utility for a tasty random gradient
function randomGradient() {
  const h1 = Math.floor(Math.random() * 360);
  const h2 = (h1 + 60 + Math.floor(Math.random() * 120)) % 360;
  return `linear-gradient(135deg,
          hsl(${h1} 70% 55%),
          hsl(${h2} 80% 45%))`;
}

document.querySelector('#quiz').addEventListener('submit', e => {
  e.preventDefault();

  const data      = Object.fromEntries(new FormData(e.target));
  const eligible  = benefits.filter(b => b.criteria(data));
  const container = document.querySelector('#result');

  container.innerHTML = eligible.length
    ? eligible.map(b => `
        <div class="benefit-card" style="background:${randomGradient()};">
          <h3><a href="${b.url}" target="_blank">${b.name}</a></h3>
          <p>${b.details}</p>
        </div>
      `).join('')
    : `<p class="no-result">❌ Inga bidrag hittades – prova att ändra svaren.</p>`;
});

// age-select filler (unchanged)
const ageSelect = document.getElementById('ageSelect');
for (let i = 1; i <= 110; i++) {
  ageSelect.insertAdjacentHTML('beforeend',
    `<option value="${i}">${i}</option>`);
}


