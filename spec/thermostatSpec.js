describe("Thermostat", function() {
  var t;
  beforeEach(function() {
    t = new Thermostat();
  });

    it("temperature is set to 20 when created", function() {
      expect(t.temperature).toEqual(20);
    });

    describe("togglePowerSaving", function() {
        it("changes powerSavingMode to false", function() {
          t.togglePowerSaving();
          expect(t.powerSavingMode).not.toBe(true);
        });

      });

    describe("resetTemperature", function() {
        it("resets temperature back to 20", function() {
          t.temperature = 30;
          t.resetTemperature();
          expect(t.temperature).toEqual(t.DEFAULT_TEMPERATURE);
        });

      });

    describe("currentEnergyUsage", function() {
        it("returns low-usage when temp is under 18", function() {
          t.temperature = 17;
          expect(t.currentEnergyUsage()).toEqual('low-usage');
        });

        it("returns medium-usage when temp is between 18 and 25", function() {
          t.temperature = 22;
          expect(t.currentEnergyUsage()).toEqual('medium-usage');
        });

        it("returns high-usage when temp is over 25", function() {
          t.temperature = 31;
          expect(t.currentEnergyUsage()).toEqual('high-usage');
        });

      });

    describe("increaseTemperature", function() {
        it("inceases temperature by 1 when called", function() {
          t.increaseTemperature();
          // debugger;
          expect(t.temperature).toEqual(21);
        });

        it("never goes above maximumTemperature", function() {
          t.togglePowerSaving();
          t.temperature = 32;
          // debugger;
          expect(function(){ t.increaseTemperature(); }).toThrowError("temperature is already at maximum!");
        });

        it("never goes above 25 in powerSavingMode", function() {
          t.temperature = 25;
          // debugger;
          expect(function(){ t.increaseTemperature(); }).toThrowError("temperature is at maximum for power saving mode!");
        });
      });

    describe("decreaseTemperature", function() {
        it("decreases temperature by 1 when called", function() {
          t.decreaseTemperature();
          // debugger;
          expect(t.temperature).toEqual(19);
        });

        it("never goes below minimumTemperature", function() {
          t.temperature = 10;
          // debugger;
          expect(function(){ t.decreaseTemperature(); }).toThrowError("temperature is already at minimum!");
        });
      });



  });
