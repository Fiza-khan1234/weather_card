var weather = prompt("Hello User!\n Please enter a season you would like to see:\n(winter, summer, autumn, spring, or monsoon)");
weather = weather.toLowerCase();
if (weather === "winter") {
    document.write(`
        <div class="winter_background">
  <div class="card">
    <div class="top-label">❄️ Winter Vibes</div>
    <img src="https://i.pinimg.com/originals/ba/5b/61/ba5b613b625e1013284f588943cd6e15.gif" alt="Winter Weather" class="weather-img" >
    <div class="description">Snowfall & Freezing Winds</div>
    <div class="icons-list">
      <div>💧 <strong>Humidity:</strong> 80%</div>
      <div>🌨️ <strong>Snowfall:</strong> Light to Moderate</div>
      <div>❄️ <strong>Wind Chill:</strong> -5°C</div>
      <div>🥶 <strong>Feels Like:</strong> -8°C</div>
    </div>
  </div>
</div>
      
    `);
  } else if (weather === "summer") {
    document.write(`
      <div class="summer_background">
  <div class="weather-card">
    <h2>🏖️ Karachi, Pakistan</h2>
    <div class="date">Monday, July 29 — 12:30 PM</div>
    <img
      src="https://i.pinimg.com/originals/7f/f7/3b/7ff73b056ecb12d88c9fadfd3c1a1482.gif"
      alt="Summer Sun"
      class="weather-icon"
    />
    <div class="temp">38°C</div>
    <div class="condition">☀️ Hot & Sunny</div>
    <div class="details">
      <span><span class="emoji">💧</span>Humidity: <strong>30%</strong></span>
      <span><span class="emoji">🌬️</span>Wind: <strong>10 km/h</strong></span>
      <span><span class="emoji">🔥</span>UV Index: <strong>High</strong></span>
      <span><span class="emoji">😓</span>Feels Like: <strong>41°C</strong></span>
    </div>
  </div>
  </div>
    `);
  } else if (weather === "autumn") {
    document.write(`
      <div class="autumn_background">
  <div class="autumn-card">
    <div class="one">
      <span class="leave">🍂</span>
      <h2>Autumn Breeze</h2>
    </div>
    <div class="autumn-date">Tuesday, July 30 - 6:15 PM</div>
    <img src="https://i.pinimg.com/originals/1c/2d/58/1c2d580c4ac14c3c87fd1ace869722f3.gif" alt="Autumn Icon" class="autumn-icon">
    <div class="autumn-temp">22°C</div>
    <div class="autumn-condition">Windy with Falling Leaves</div>
    <div class="autumn-details">
      <span>🍁 Humidity: 55%</span>
      <span>🍃 Wind: 20 km/h</span>
      <span>🌫️ Visibility: Moderate</span>
      <span>🌥️ Cloud Cover: 30%</span>
    </div>
  </div>
  </div>
    `);
  } else if (weather === "spring") {
    document.write(`
   <div class="spring_background">
  <div class="spring-card">
    <div class="spring-header">
      🌸 Spring<span>Vibes</span>
    </div>
      <img class="spring-gif" src="https://i.pinimg.com/originals/5a/db/ce/5adbce510cc38c822382755e6556d4c0.gif"
      alt="Spring Weather">
    <div class="spring-temp">22°C</div>
    <div class="spring-condition">Breezy & Bloomy</div>
    <div class="spring-details">
      <span>💧 Humidity: 55%</span>
      <span>🌬️ Wind: 10 km/h</span>
      <span>🌷 Flowers Blooming</span>
      <span>🔍 Visibility: Clear</span>
    </div>
  </div>
  </div>
    `);
  } else if (weather === "monsoon") {
    document.write(`
     <div class="monsoon_background">
  <div class="monsoon-card">
    <div class="monsoon-header">
      🌧️ Monsoon <span>Magic</span>
    </div>
    <img class="monsoon-gif" src="./rainy cloud.png" alt="Rainy Weather">
    <div class="monsoon-temp">26°C</div>
    <div class="monsoon-condition">Cloudy with Heavy Showers</div>
    <div class="monsoon-details">
      <span>💧 Humidity: 92%</span>
      <span>🌬️ Wind: 18 km/h</span>
      <span>🌧️ Rainfall: 75 mm</span>
      <span>🔍 Visibility: Moderate</span>
    </div>
  </div>
  </div>
    `);
  } else {
    document.write(`
<div class="body">
<div class="not-found-wrapper">
  <div class="not-found-card">
    <h1>404</h1>
    <p class="oops">Oops! Page Not Found</p>
    <p class="message">We couldn't find the season you're looking for.</p>
    <span class="hint">Try entering: <strong>winter, summer, autumn, spring, monsoon</strong></span>
    <a href="#" onclick="location.reload()">🔁 Try Again</a>
  </div>
</div>
</div>
    `);
  }
