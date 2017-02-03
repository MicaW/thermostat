describe('Thermostat', function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  describe('is expected to', function(){
    it("start at 20 degrees", function() {
      expect(thermostat.temperature).toBe(20)
    });

    it("be in power save mode by default", function() {
      expect(thermostat._isPowerSave).toBe(true)
    })

    it("increase the temperature with an up function", function() {
      thermostat.up(5);
      expect(thermostat.temperature).toBe(25);
    });

    it("decrease the temperature with an down function", function() {
      thermostat.down(5);
      expect(thermostat.temperature).toBe(15);
    });

    it("have a minimum temperature of 10 degrees", function() {
      expect(function() {thermostat.down(20)}).toThrow("minimum temperature is 10");
      expect(thermostat.temperature).toBe(10);
    });

    it("limit the temperature at 25 when power saving mode is on", function() {
      thermostat.powerSaveOn();
      expect(function() {thermostat.up(6)}).toThrow("maximum temperature is 25 in power save mode");
      expect(thermostat.temperature).toBe(25);
    });

    it("have a power save function that can be turned on", function () {
      thermostat.powerSaveOn()
      expect(thermostat._isPowerSave).toBe(true)
    });

    it("have a power save function that can be turned off", function () {
      thermostat.powerSaveOff()
      expect(thermostat._isPowerSave).toBe(false)
      expect(thermostat.maxTemp).toBe(32)
    });

    it("reset temperature to 20 degrees", function() {
      thermostat.reset()
      expect(thermostat.temperature).toBe(20)
    });

    describe("#usage", function(){
  it("above 25 is high", function(){
    thermostat.temperature = 25
    expect(thermostat.usage()).toEqual('High')
  });

  it("between 18 and 25", function(){
    thermostat.temperature = 20
    expect(thermostat.usage()).toEqual('Medium')
  });

  it("below 18 is low", function(){
    thermostat.temperature = 17
    expect(thermostat.usage()).toEqual('Low')
  });
});

  });




});
