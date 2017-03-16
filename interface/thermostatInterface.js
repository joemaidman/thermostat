'use strict';

var thermostat = new Thermostat();

function psmOn(){
  thermostat.setPowerSavingModeOn();
  var psmOnBtn = document.getElementById('psmOn');
  if (thermostat.isPowerSavingModeOn()) {psmOnBtn.disabled = true;}
};
