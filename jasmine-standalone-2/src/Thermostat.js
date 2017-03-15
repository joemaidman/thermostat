function Thermostat() {
  this.DEFAULT_TEMPERATURE = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this.POWER_MODE = true;
  this.temperature = this.DEFAULT_TEMPERATURE;
}

Thermostat.prototype.up = function() {
  this.temperature += 1;
}

Thermostat.prototype.down = function() {
  if(this.temperature <= this.MINIMUM_TEMPERATURE) {
    throw 'Cannot go below minimum temperature';
  } else {
    this.temperature -= 1;
  };
}
