# Weathery
#### Video Demo: https://youtu.be/ad-PFprjDjE
#### Description: This is weathery. The web application that allows its users to look up the forecast at any city given. User gets daily forecast , with choice between representation of temperature in Celcius or Farenheit and some additional information such as wind, pressure, humidity and overcast.

## Files:
```index.html``` file only connects the page with JS and CSS files.

The ```css``` folder has 5 files: ```header.css```, ```content.css```,  ```media.css```, ```settings.css```, ```styles.css```.
```header.css``` file has all the styles regarding the top of the page, like search area and Celcius/Farenheit button.
```content.css``` file has all the styles regarding the bottom part of the page, where user gets the ourput on city's temperature.
```meadia.css``` file has the styles for adaptive part of the page, with styles for tablets and phones.
```settings.css``` file has the common specifications and overall page styling.
```styles.css``` file imports all the previous files. It allowed to break down the styling part of writing this project and search for the styles to edit much easier.

The ```icons``` folder has all the icons for the weather display and an icon for the tab in Chrome. The https://openweathermap.org/ does have its own icons, but for the sake of high-quality output I decided to use set up custom icons. 

The ```img``` folder has an svg which is displayed near "Current location" part of the web application. The similar feature was found and adapted further for Weathery.

The ```js``` folder has all the files regarding js. Tha content of the page and DOM elements were all added and manipulated through JS. It was a great opportunity to get more experience with working with DOM. 
```api.js``` file has a function, which gets the city weather information from the https://openweathermap.org/ and shows the error to the console if fetch is unsuccessful.
```appHeader.js``` file sets up the header of the page and adds appropriate classes for styling. The searching for cities function is here, as well as tempereature conversion.
```appContent.js``` file sets up the main part of the page, with weather details based on the data gotten from ```api.js```.
```geolocation.js``` file handles the weather of the current geolocation of the user as well as the errors if it can't get the city's information.
```helper.js``` file handles wind directions, weather description display, by capitalizing the first letter, units conversion for temperature and cleares the main part of the page, which is used later to manage the change between the old and new weather request.
```iconMap.js``` file handles the icon codes from https://openweathermap.org/ and sets up appropriate icon code with corresponding icon name.
```index.js``` file imports all the previous js files and sets up the workflow of the app.

For this project, I learned more on how to work with DOM tree and promises, researched for a suitable API. I didn't have a partner and worked on the project by myself, mainly googling.

This was Weathery.
