// require('dotenv').config();
"use strict";

function Thermostat() {
  this.DEFAULT_TEMPERATURE = 20
  this.temperature = this.DEFAULT_TEMPERATURE;
  this.minimumTemperature = 10;
  this.maximumTemperature = 32;
  this.maximumTemperaturePowerSaving = 25;
  this.powerSavingMode = true;
  this.currentEnergyUsage = function() {
    if (this.temperature < 18) {
      return "low";
    }
    else if (this.temperature < 25) {
      return "medium";
    }
    else {
      return "high";
    }
  };

  this.color = function() {
    if (this.temperature < 18) {
      return "#05c10d";
    }
    else if (this.temperature < 25) {
      return "#ffa800";
    }
    else {
      return "#ff0000";
    }
  };

  this.isPowerSavingOn = function() {
    if (this.powerSavingMode === true) {
      return "On";
    } else {
      return "Off";
    }
  };
};

Thermostat.prototype.increaseTemperature = function() {
  if (this.powerSavingMode === true &&
    this.temperature === this.maximumTemperaturePowerSaving) {
    var maxTempError = new Error("temperature is at maximum for power saving mode!");
    throw maxTempError;
  }
  else if (this.temperature === this.maximumTemperature) {
    throw new Error("temperature is already at maximum!");
  };
  this.temperature++;
};

Thermostat.prototype.decreaseTemperature = function() {
  if (this.temperature <= this.minimumTemperature) {
    throw new Error("temperature is already at minimum!");
  };
  this.temperature--;
};

Thermostat.prototype.togglePowerSaving = function() {
  if (this.temperature > this.maximumTemperaturePowerSaving) {
    this.temperature = this.maximumTemperaturePowerSaving;
  }
  this.powerSavingMode = !this.powerSavingMode;
};

Thermostat.prototype.resetTemperature = function() {
  this.temperature = this.DEFAULT_TEMPERATURE;
};

Thermostat.prototype.isHighUsage = function() {
  this.currentEnergyUsage === "high"
};

Thermostat.prototype.isMediumUsage = function() {
  this.currentEnergyUsage === "medium"
};

Thermostat.prototype.isLowUsage = function() {
  this.currentEnergyUsage === "low"
};

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
};


var t = new Thermostat();

// function updateTemp(){
//   temp = t.temperature;
//   document.getElementById('temperature').value = temp;
// };
