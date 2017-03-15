describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('has a default temperature of 20 degrees', function() {
    expect(thermostat.temperature).toEqual(thermostat.DEFAULT_TEMPERATURE);
  });

  it('can increase the temperature with an up function', function() {
    thermostat.up();
    expect(thermostat.temperature).toEqual(thermostat.DEFAULT_TEMPERATURE + 1);
  })

  it('can decrease the temperature with a down function', function() {
    thermostat.down();
    expect(thermostat.temperature).toEqual(thermostat.DEFAULT_TEMPERATURE - 1);
  })

  it('has a minimum temperature of 10 degrees', function() {
    for(var i = 1; i <= thermostat.MINIMUM_TEMPERATURE; i ++) {
      thermostat.down();
    };
    expect(function() {thermostat.down()}).toThrow('Cannot go below minimum temperature');

    expect(thermostat.temperature).toEqual(thermostat.MINIMUM_TEMPERATURE);
  })

  it('expect power saving mode to be on as default', function() {
    expect(thermostat.POWER_MODE).toEqual(true);
  })

})
