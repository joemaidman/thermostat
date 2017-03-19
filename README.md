Thermostat
======
Thermostat is a browser based web application built using javascript, jQuery and CSS to emulate the behaviour of a thermostat. It also makes use of the <a href="https://openweathermap.org/">OpenWeatherMap</a> API to display current weather conditions for a given location. A demo of the application can be found at http://thermostat.netlify.com

## User Stories
```
As a thermostat
So that I can start at a sensible temperature
I want to start at 20 degrees

As a user
So that I don't get too cold
I want to increase temp with an up function

As a user
So that I don't get too warm
I want to decrease temp with an down function

As a thermostat
So that it doesn't get too cold
The temp can't be set below 10 degrees

As a user
So that I can reset the temperature
I want to reset the thermostat

As a thermostat
When power saving mode is on
The max temp is 25 degrees

As a thermostat
When power saving mode is off
The max temp is 32 degrees

As a thermostat
So that I can save power
Power saving mode will be on by default

As a user
So that I can know the current energy usage
I want to ask the thermostat for the current energy usage
```
## Screenshot
![thermostat](https://github.com/joemaidman/thermostat-final/blob/master/screenshots/homepage.png)

## Technologies used
- Jasmine (testing)
- HTML
- JavaScript
- jQuery
- CSS

## Installation
- Clone the repo
- Create a `config.js` file in the project folder containing your openweathermap API key in the following format:
`var config = {
  APPID: 'my-api-key'
}`

## Testing
- `cd` to the jasmine folder
- Run `open SpecRunner.html`

## Running
- Run `open index.html`

## Potential feature improvements
* Save application state to a server.
* Provide additional location options.
* Display additional weather information.

## Contributors
 - Ashwini Mani
 - Clem Capel-Bird
 - Christos Paraskeva
 - Katie Koschland
