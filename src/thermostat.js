function Thermostat() {
  this.DEFAULT_TEMPERATURE = 20
  this.temperature = this.DEFAULT_TEMPERATURE;
  this.minimumTemperature = 10;
  this.maximumTemperature = 32;
  this.maximumTemperaturePowerSaving = 25;
  this.powerSavingMode = true;
  this.currentEnergyUsage = function() {
    if (this.temperature < 18) {
      return "low-usage";
    }
    else if (this.temperature < 25) {
      return "medium-usage";
    }
    else {
      return "high-usage";
    }
  };
};

Thermostat.prototype.increaseTemperature = function() {
  if (this.powerSavingMode === true &&
    this.temperature === this.maximumTemperaturePowerSaving) {
    throw new Error("temperature is at maximum for power saving mode!");
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
  this.powerSavingMode ^= true;
};

Thermostat.prototype.resetTemperature = function() {
  this.temperature = this.DEFAULT_TEMPERATURE;
};
