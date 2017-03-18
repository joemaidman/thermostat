'use strict';

var thermostat;
// Document ready
$( document ).ready(function() {
  thermostat = new Thermostat();
  updateTemperature();
  getOutsideTemp('London');
  $("#toggle").click();
});

//Functions
function getOutsideTemp(city){
  var url = 'http://api.openweathermap.org/data/2.5/weather?q=';
  var units = '&units=metric';
  var appid = '&APPID=' + config.APPID;
  var responseCall = $.get(url+city+units+appid).done(function(data){
    moveNeedle(data.main.temp);
    $("#windSpeed").text(data.wind.speed + " mph");
    $("#humidity").text(data.main.humidity + "%");
    var forecast = data.weather[0].description;
    var forecastOutput = "' " + forecast[0].toUpperCase() + forecast.slice(1) + " '" ;
    $("#weatherReport").text(forecastOutput);
  });
}

function psmToogle(){
  thermostat.isPowerSavingModeOn() ? thermostat.setPowerSavingModeOff() : thermostat.setPowerSavingModeOn();
  thermostat.isPowerSavingModeOn() ? $('#psm-btn').css('background-color', 'green') : $('#psm-btn').css('background-color', 'red');
};

function displayTemp(){
  $('#currentTemp').text(thermostat.getCurrentTemperature());
  changeClass();
}

function changeClass(){
  $('#energyUsage').removeClass();
  $('#energyUsage').addClass(thermostat.energyUsage());
}

function calcAngle(){
  var angle = (((thermostat.getCurrentTemperature() -10) / 180) * 100);
  return Math.round(angle,0);
}

function updateTemperature() {
  $("#currentTemp").text(thermostat.getCurrentTemperature());
  $("#outer").attr('class', thermostat.energyUsage());
}

function moveNeedle(tempIn){
  var temp = Math.round(tempIn) - 20;
  var angle = temp * 4.5;
  $('.needle').css({
    'transition': 'transform 2s',
    '-webkit-transform': 'rotate('+angle+'deg)'
  })
}

// Callbacks
$("#toggle").on("click", function(){
  if (thermostat.isPowerSavingModeOn() === true){
    thermostat.setPowerSavingModeOff();
  } else {
    thermostat.setPowerSavingModeOn();
  };
  updateTemperature();
});

$("#up").on("click", function() {
  thermostat.up();
  updateTemperature();
});

$("#down").on("click", function() {
  thermostat.down();
  updateTemperature();
})

$("#reset").on("click", function() {
  thermostat.resetTemp();
  updateTemperature();
})

$("#select-city").on("change", function(){
  getOutsideTemp($('#select-city').val());
})
