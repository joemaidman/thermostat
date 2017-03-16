'use strict';

var thermostat = new Thermostat();

$( document ).ready(function() {
  displayTemp();
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
  $('#currentTemp').text(thermostat.getCurrentTemperature())
}
