'use strict';

const populations = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

let total = 0;

for (const item of populations) {
  const num = +item.textContent.replaceAll(',', '');

  total += num;
}

const average = Math.round(total / populations.length);

totalPopulation.textContent = total.toLocaleString('en-US');
averagePopulation.textContent = average.toLocaleString('en-US');
