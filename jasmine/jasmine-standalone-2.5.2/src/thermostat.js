function Thermostat() {
  this.temperature = 20
  this.powerSave = true
  // this.maxTemp = 25
  // this.minTemp = 10
};
  //
  // Thermostat.prototype.up = function(number) {
  //   if((this.temperature + number) > this.maxTemp)
  //     { this.temperature = this.maxTemp
  //     throw("maximum temperature is" + this.maxTemp + " in power save mode")
  //     };
  //  else this.temperature += number
  // };
  //
  Thermostat.prototype.down = function(number) {
    if((this.temperature - number) < 10)
      {this.temperature = 10 ;
      throw("minimum temperature is 10")
    };
    else this.temperature -= number
  };

  Thermostat.prototype.powerSaveOn = function() {
    this.powerSave = true
    // this.maxTemp = 25
  };

  Thermostat.prototype.powerSaveOff = function() {
    this.powerSave = false
    // this.maxTemp = 32
  };
