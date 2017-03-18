'use strict';

function Thermostat() {
  this.DEFAULT_TEMPERATURE = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this.MAX_TEMP_PSM_ON = 25;
  this.MAX_TEMP_PSM_OFF = 32;
  this.setPowerSavingModeOn();
  this._setMaxTemp();
  this.temperature = this.DEFAULT_TEMPERATURE;
}

Thermostat.prototype.isPowerSavingModeOn = function () {
  return this.POWER_MODE;
}

Thermostat.prototype.up = function() {
  if(this.temperature >= this.currentMaxTemp) {
    throw 'Cannot go above maximum temperature';
  };
  this.temperature++;
}

Thermostat.prototype.down = function() {
  if(this.temperature <= this.MINIMUM_TEMPERATURE) {
    throw 'Cannot go below minimum temperature';
  };
  this.temperature--;
}

Thermostat.prototype.setPowerSavingModeOff = function() {
  this.POWER_MODE = false;
  this._setMaxTemp();
}

Thermostat.prototype.setPowerSavingModeOn = function(){
  this.POWER_MODE = true;
  this._setMaxTemp();
}

Thermostat.prototype.resetTemp = function() {
  this.temperature = this.DEFAULT_TEMPERATURE;
}

Thermostat.prototype.energyUsage = function() {
  var check = this.temperature;
  switch(true) {
    case(check < 18):
      return 'low';
      break;
    case(check < 25):
      return 'medium';
      break;
    default:
      return 'high';
      break;
  }
}

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
}

Thermostat.prototype._setMaxTemp = function(){
  this.currentMaxTemp = this.POWER_MODE ? this.MAX_TEMP_PSM_ON : this.MAX_TEMP_PSM_OFF;
  this._checkMaxTemp();
}

Thermostat.prototype._checkMaxTemp = function(){
  if(this.temperature > 25){
    this.POWER_MODE ? this.temperature = this.MAX_TEMP_PSM_ON : this.MAX_TEMP_PSM_OFF;
  }
}
