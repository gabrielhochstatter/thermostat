describe("Thermostat", function() {
    it("temperature is set to 20 when created", function() {
      var t = new Thermostat();
      expect(t._temperature).toEqual(20);
    });

    describe("togglePowerSaving", function() {
        it("changes _powerSavingMode to false", function() {
          var t = new Thermostat();
          t.togglePowerSaving();
          // debugger;
          expect(t._powerSavingMode).not.toBe(true);
        });

      });

    describe("increaseTemperature", function() {
        it("inceases temperature by 1 when called", function() {
          var t = new Thermostat();
          t.increaseTemperature();
          // debugger;
          expect(t._temperature).toEqual(21);
        });

        it("never goes above maximTemperature", function() {
          var t = new Thermostat();
          t._temperature = 32;
          // debugger;
          expect(function(){ t.increaseTemperature(); }).toThrowError("temperature is already at maximum!");
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
