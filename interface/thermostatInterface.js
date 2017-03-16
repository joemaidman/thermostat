'use strict';
  var thermostat;

$( document ).ready(function() {
  thermostat = new Thermostat();
  displayTemp();
  http://api.openweathermap.org/data/2.5/weather?q=
  $.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&APPID=7ee15802e5e3d8abeb518e24540bd2cd').done(function(data){
    console.log(data);
  });
});

function psmToogle(){
  thermostat.isPowerSavingModeOn() ? thermostat.setPowerSavingModeOff() : thermostat.setPowerSavingModeOn();
  thermostat.isPowerSavingModeOn() ? $('#psm-btn').css('background-color', 'green') : $('#psm-btn').css('background-color', 'red');
};

$("#resetTemp").click(function(){
  thermostat.resetTemp();
  displayTemp();
});

$("#upTemp").click(function(){
  thermostat.up();
  displayTemp();
});

$("#downTemp").click(function(){
  thermostat.down();
  displayTemp();
});


function displayTemp(){
  $('#currentTemp').text(thermostat.getCurrentTemperature());
  changeClass();
}

function changeClass(){
  $('#energyUsage').removeClass();
  $('#energyUsage').addClass(thermostat.energyUsage());
}
