// WeatherWidget.js - Live Geolocation weather fetcher using Open-Meteo API (requires no keys)
import { CONFIG } from '../config.js';

export class WeatherWidget {
  constructor(cityEl, tempEl, descEl, iconEl, humidityEl, windEl, refreshBtnEl) {
    this.cityEl = cityEl;
    this.tempEl = tempEl;
    this.descEl = descEl;
    this.iconEl = iconEl;
    this.humidityEl = humidityEl;
    this.windEl = windEl;
    this.refreshBtn = refreshBtnEl;
    
    this.city = localStorage.getItem('os_weather_city') || CONFIG.weather.defaultCity;
    this.lat = localStorage.getItem('os_weather_lat') || CONFIG.weather.defaultLat;
    this.lon = localStorage.getItem('os_weather_lon') || CONFIG.weather.defaultLon;

    this.init();
  }

  init() {
    this.refreshBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.refreshBtn.classList.add('fa-spin');
      this.updateWeather().finally(() => {
        setTimeout(() => this.refreshBtn.classList.remove('fa-spin'), 600);
      });
    });

    this.geolocateUser();
  }

  geolocateUser() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          this.lat = pos.coords.latitude.toFixed(4);
          this.lon = pos.coords.longitude.toFixed(4);
          this.city = "Local Area";
          this.updateWeather();
        },
        (err) => {
          console.warn("Geolocation declined / unavailable. Defaulting weather coordinates.");
          this.updateWeather();
        },
        { timeout: 5000 }
      );
    } else {
      this.updateWeather();
    }
  }

  async updateWeather() {
    this.cityEl.textContent = this.city;
    
    try {
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${this.lat}&longitude=${this.lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weather_code,wind_speed_10m&timezone=auto`;
      const res = await fetch(url);
      if (!res.ok) throw new Error("Weather service unreachable");
      const data = await res.json();
      
      this.renderWeather(data.current);
    } catch (e) {
      console.error(e);
      this.cityEl.textContent = "Offline";
      this.tempEl.textContent = "--°C";
      this.descEl.textContent = "Unable to connect";
    }
  }

  renderWeather(current) {
    const temp = Math.round(current.temperature_2m);
    const humidity = current.relative_humidity_2m;
    const wind = current.wind_speed_10m;
    const code = current.weather_code;

    this.tempEl.textContent = `${temp}°C`;
    this.humidityEl.textContent = `${humidity}%`;
    this.windEl.textContent = `${wind} km/h`;

    const weatherMap = this.decodeWMOCode(code, current.is_day);
    this.descEl.textContent = weatherMap.desc;
    this.iconEl.innerHTML = `<i class="${weatherMap.icon}"></i>`;
  }

  decodeWMOCode(code, isDay) {
    // Decode WMO weather codes (0-99)
    // 0: Clear, 1-3: Partly Cloudy, 45-48: Fog, 51-55: Drizzle, 61-65: Rain, 71-77: Snow, 80-82: Showers, 95-99: Thunderstorm
    let desc = "Clear Sky";
    let icon = isDay ? "fa-solid fa-sun" : "fa-solid fa-moon";

    if (code === 0) {
      desc = "Clear Sky";
      icon = isDay ? "fa-solid fa-sun" : "fa-solid fa-moon";
    } else if (code >= 1 && code <= 3) {
      desc = "Partly Cloudy";
      icon = isDay ? "fa-solid fa-cloud-sun" : "fa-solid fa-cloud-moon";
    } else if (code === 45 || code === 48) {
      desc = "Foggy";
      icon = "fa-solid fa-smog";
    } else if (code >= 51 && code <= 55) {
      desc = "Light Drizzle";
      icon = "fa-solid fa-cloud-rain";
    } else if (code >= 61 && code <= 65) {
      desc = "Rainy";
      icon = "fa-solid fa-cloud-showers-heavy";
    } else if (code >= 71 && code <= 77) {
      desc = "Snowing";
      icon = "fa-solid fa-snowflake";
    } else if (code >= 80 && code <= 82) {
      desc = "Rain Showers";
      icon = "fa-solid fa-cloud-showers-water";
    } else if (code >= 95 && code <= 99) {
      desc = "Thunderstorm";
      icon = "fa-solid fa-cloud-bolt";
    }

    return { desc, icon };
  }
}
