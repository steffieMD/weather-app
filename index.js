let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};

console.log(Object.keys(weather));

console.log(Math.round(weather.paris.temp));

// write your code here
const toFahrenheit = (celsius) => {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
};

console.log(Math.round(toFahrenheit(weather.paris.temp)));

let city = prompt("Enter a city");

if (city.toLowerCase() === "paris") {
  alert(
    `It is currently ${Math.round(weather.paris.temp)}°C (${Math.round(
      toFahrenheit(weather.paris.temp)
    )}°F) in ${city} with a humidity of ${weather.paris.humidity}%`
  );
} else if (city.toLowerCase() === "tokyo") {
  alert(
    `It is currently ${Math.round(weather.tokyo.temp)}°C (${Math.round(
      toFahrenheit(weather.tokyo.temp)
    )}°F) in ${city} with a humidity of ${weather.tokyo.humidity}%`
  );
} else if (city.toLowerCase() === "lisbon") {
  alert(
    `It is currently ${Math.round(weather.lisbon.temp)}°C (${Math.round(
      toFahrenheit(weather.lisbon.temp)
    )}°F) in ${city} with a humidity of ${weather.lisbon.humidity}%`
  );
} else if (city.toLowerCase() === "san francisco") {
  alert(
    `It is currently ${Math.round(
      weather["san francisco"].temp
    )}°C (${Math.round(
      toFahrenheit(weather["san francisco"].temp)
    )}°F) in ${city} with a humidity of ${weather["san francisco"].humidity}%`
  );
} else if (city.toLowerCase() === "oslo") {
  alert(
    `It is currently ${Math.round(weather.oslo.temp)}°C (${Math.round(
      toFahrenheit(weather.oslo.temp)
    )}°F) in ${city} with a humidity of ${weather.oslo.humidity}%`
  );
} else {
  alert(
    `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
  );
}
