function Thermostat() {
  this.DEFAULT_TEMPERATURE = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this.MAXIMUM_TEMPERATURE_ON = 25;
  this.POWER_MODE = true;
  this.temperature = this.DEFAULT_TEMPERATURE;
}

Thermostat.prototype.up = function() {
  if(this.temperature >= this.MAXIMUM_TEMPERATURE_ON) {
    throw 'Cannot go above maximum temperature';
  };
  this.temperature += 1;
}

Thermostat.prototype.down = function() {
  if(this.temperature <= this.MINIMUM_TEMPERATURE) {
    throw 'Cannot go below minimum temperature';
  };
    this.temperature -= 1;

}
