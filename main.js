var ele = document.getElementById('zipcode');

if (ele.addEventListener) {
  ele.addEventListener('submit', (e) => submitForm(e), false);  //Modern browsers
} else if (ele.attachEvent) {
  ele.attachEvent('onsubmit', (e) => submitForm(e));            //Old IE
}

function submitForm(event) {
  event.preventDefault();
  let zipcode = document.getElementById('zipcodeInput').value;
  document.getElementById('zipcodeInput').value = '';
  document.getElementById('cityName').innerHTML = '';
  document.getElementById('kelvin').innerHTML = '';
  document.getElementById('celcius').innerHTML = '';
  document.getElementById('farenheit').innerHTML = '';
  document.getElementById('sky').innerHTML = '';
  getTempData(zipcode);
}

function getTempData(zipcode) {
  console.log(zipcode);
  const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&appid=4904dcdd9c11a68c767a9aa435ae14db`;
  return fetch(url, {
    method: 'GET'
  })
    .then(res => res.json())
    .then(res => {
      console.log(res);
      const city = res.name;
      const kelvin = res.main.temp;
      const sky = res.weather[0].description;
      console.log(city);
      console.log(kelvin);
      console.log(sky);
      document.getElementById('cityName').insertAdjacentHTML('beforeend', `Checkout the weather in: ${city}`);
      document.getElementById('kelvin').insertAdjacentHTML('beforeend', `Temp: ${Math.floor(kelvin)} degrees kelvins`);
      document.getElementById('celcius').insertAdjacentHTML('beforeend', `Temp: ${Math.floor(kelvin - 273.15)} degrees celcius`);
      document.getElementById('farenheit').insertAdjacentHTML('beforeend', `Temp: ${Math.floor(kelvin * (9 / 5) - 459.67)} degrees farenheit`);
      document.getElementById('sky').insertAdjacentHTML('beforeend', `Sky looks: ${sky}`);
    });
}