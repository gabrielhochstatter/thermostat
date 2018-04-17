describe("Thermostat", function() {
    it("temperature is set to 20 when created", function() {
      var t = new Thermostat();
      expect(t._temperature).toEqual(20);
    });

    describe("togglePowerSaving", function() {
        it("changes _powerSavingMode to false", function() {
          var t = new Thermostat();
          t.togglePowerSaving();
          expect(t._powerSavingMode).not.toBe(true);
        });

      });

    describe("resetTemperature", function() {
        it("resets temperature back to 20", function() {
          var t = new Thermostat();
          t._temperature = 30;
          t.resetTemperature();
          expect(t._temperature).toEqual(t.DEFAULT_TEMPERATURE);
        });

      });

    describe("_currentEnergyUsage", function() {
        it("returns low-usage when temp is under 18", function() {
          var t = new Thermostat();
          t._temperature = 17;
          expect(t._currentEnergyUsage()).toEqual('low-usage');
        });

        it("returns medium-usage when temp is between 18 and 25", function() {
          var t = new Thermostat();
          t._temperature = 22;
          expect(t._currentEnergyUsage()).toEqual('medium-usage');
        });

        it("returns high-usage when temp is over 25", function() {
          var t = new Thermostat();
          t._temperature = 31;
          expect(t._currentEnergyUsage()).toEqual('high-usage');
        });

      });

    describe("increaseTemperature", function() {
        it("inceases temperature by 1 when called", function() {
          var t = new Thermostat();
          t.increaseTemperature();
          // debugger;
          expect(t._temperature).toEqual(21);
        });

        it("never goes above maximumTemperature", function() {
          var t = new Thermostat();
          t.togglePowerSaving();
          t._temperature = 32;
          // debugger;
          expect(function(){ t.increaseTemperature(); }).toThrowError("temperature is already at maximum!");
        });

        it("never goes above 25 in _powerSavingMode", function() {
          var t = new Thermostat();
          t._temperature = 25;
          // debugger;
          expect(function(){ t.increaseTemperature(); }).toThrowError("temperature is at maximum for power saving mode!");
        });
      });

    describe("decreaseTemperature", function() {
        it("decreases temperature by 1 when called", function() {
          var t = new Thermostat();
          t.decreaseTemperature();
          // debugger;
          expect(t._temperature).toEqual(19);
        });

        it("never goes below minimumTemperature", function() {
          var t = new Thermostat();
          t._temperature = 10;
          // debugger;
          expect(function(){ t.decreaseTemperature(); }).toThrowError("temperature is already at minimum!");
        });
      });



  });
