import './css/style.css';
import Weather from './scripts/api';

let currentWeather = new Weather('Philadelphia', 'f');
let p = document.createElement('p');
document.body.appendChild(p);

// Option 3
async function main() {
  let result = await currentWeather.getCurrentTemp();
  p.textContent = result;
}

main();