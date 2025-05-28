import { benefits } from './benefits.js';

document.querySelector('#quiz').addEventListener('submit', e => {
  e.preventDefault();

  const form = e.target;
  const data = Object.fromEntries(new FormData(form));

  const eligible = benefits.filter(b => b.criteria(data));

  const list = document.querySelector('#result');
  list.innerHTML = eligible.length
    ? eligible.map(b => `<li><a href="${b.url}" target="_blank">${b.name}</a> – ${b.details}</li>`).join('')
    : '<li>❌ Inga bidrag hittades – prova att ändra svaren.</li>';
});

const ageSelect = document.getElementById('ageSelect');
for (let i = 1; i <= 110; i++) {
  const option = document.createElement('option');
  option.value = i;
  option.textContent = i;
  ageSelect.appendChild(option);
}


