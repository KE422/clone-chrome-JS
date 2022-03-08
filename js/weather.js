const API_KEY = '170e0340c94af9ef1f3ec819242bcc55';

const onGeoSuccess = (position) => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  // api url
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url).then((res) =>
    res.json().then((data) => {
      const weather = document.querySelector('#weather span:first-child');
      const city = document.querySelector('#weather span:last-child');
      city.innerText = data.name;
      weather.innerText = data.weather[0].main;
    })
  );
};

const onGeoError = () => {
  alert('Cant find you');
};

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
