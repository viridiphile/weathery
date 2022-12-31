import { directionOfwWind, capitalizeFirstLetter } from "./helper.js";
import { ICON_MAP } from "./iconMap.js";

function getIconUrl(iconCode) {
  return `icons/${ICON_MAP.get(iconCode)}.svg`;
}

export const createContent = (data) => {
  const main = document.createElement("main");
  const section = document.createElement("section");
  const container = document.createElement("div");
  const inner = document.createElement("div");
  const iconBloc = document.createElement("img");
  const temperature = document.createElement("h2");
  const units = document.createElement("span");
  const description = document.createElement("p");
  const weatherInfo = document.createElement("div");
  const weatherInfoList = document.createElement("ul");
  const weatherInfoWind = document.createElement("li");
  const weatherInfoPressure = document.createElement("li");
  const weatherInfoHumidity = document.createElement("li");
  const weatherInfoClouds = document.createElement("li");

  section.classList.add("weather");
  container.classList.add("container", "weather__container");
  inner.classList.add("weather__inner");
  iconBloc.classList.add("weather__icon");
  temperature.classList.add("weather__temperature");
  units.classList.add("weather__units");
  description.classList.add("weather__description");
  weatherInfo.classList.add("weather-info");
  weatherInfoList.classList.add("weather-info__list");
  weatherInfoWind.classList.add("weather-info__item");
  weatherInfoHumidity.classList.add("weather-info__item");
  weatherInfoPressure.classList.add("weather-info__item");
  weatherInfoClouds.classList.add("weather-info__item");

  temperature.textContent = Math.floor(data.main.temp);
  description.textContent = capitalizeFirstLetter(data.weather[0].description);
  
  let iconCode = data.weather[0].icon;
  iconBloc.src = getIconUrl(iconCode);
  console.log(data.weather[0].icon)

  units.textContent = "o";

  const createWeatherItemTitle = (text) => {
    const span = document.createElement("span");
    span.textContent = text;

    return span;
  };

  const createWeatherItemContent = (text) => {
    const p = document.createElement("p");
    p.textContent = text;

    return p;
  };

  weatherInfoWind.append(
    createWeatherItemTitle("Wind"),
    createWeatherItemContent(
      data.wind.speed + " m/s, " + directionOfwWind(data.wind.deg)
    )
  );

  weatherInfoPressure.append(
    createWeatherItemTitle("Pressure"),
    createWeatherItemContent(data.main.pressure + " mmHg")
  );

  weatherInfoHumidity.append(
    createWeatherItemTitle("Humidity"),
    createWeatherItemContent(data.main.humidity + " %")
  );

  weatherInfoClouds.append(
    createWeatherItemTitle("Overcast"),
    createWeatherItemContent(data.clouds.all + " %")
  );

  main.append(section);
  section.append(container);
  container.append(inner, description, weatherInfo);
  inner.append(iconBloc, temperature, units);
  weatherInfo.append(weatherInfoList);
  weatherInfoList.append(
    weatherInfoWind,
    weatherInfoPressure,
    weatherInfoHumidity,
    weatherInfoClouds
  );

  return main;
};
