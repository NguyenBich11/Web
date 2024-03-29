const search = document.querySelector('.search');
const city = document.querySelector('.city');
const country = document.querySelector('.country');
const time = document.querySelector('.time');
const value = document.querySelector('.value');
const shortDesc = document.querySelector('.short-desc');
const visibility = document.querySelector('.visibility span');
const wind = document.querySelector('.wind span');
const content = document.querySelector('.content');
const sun = document.querySelector('.sun span');
const body = document.querySelector('body'); 

async function changeWeatherUI(capitalSearch) {
   let api = `https://api.openweathermap.org/data/2.5/weather?q=${capitalSearch}&appid=5efc3008967f73d3be34dc86cb6f6286`;

   let data = await fetch(api).then(res => res.json());
   if(data.cod == 200) {
      content.classList.remove('hide');
      city.innerText = data.name;
      country.innerText = data.sys.country;
      visibility.innerText = data.visibility + 'm';
      wind.innerText = data.wind.speed + 'm/s';
      sun.innerText = data.main.humidity + '%'
      let temp = Math.floor((data.main.temp - 273.15));
      value.innerText = temp;
      shortDesc.innerText = data.weather[0] ? data.weather[0].main : '';
      time.innerText = new Date().toLocaleString('vi');

      body.setAttribute('class', 'hot');
      if(temp <= 25) {
         body.setAttribute('class', 'cool');
         console.log(body.setAttribute('class', 'cool'));
      }
      
      if(temp<=22) {
         body.setAttribute('class', 'warm');
         console.log(body.setAttribute('class', 'warm'));
      }

      if(temp<=19) {
         body.setAttribute('class', 'cold');
         console.log(body.setAttribute('class', 'cold'));
      }
      
   }else {
      content.classList.add('hide');
   }
}

search.addEventListener('keypress', function(e) {
   if(e.code === 'Enter') {
      let capitalSearch = search.value.trim();
      changeWeatherUI(capitalSearch);
   }
});

changeWeatherUI('Ha Noi');
