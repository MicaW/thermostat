function Thermostat () {
  this.temperature = 20
  this.minTemp = 10
  this.maxTemp = 25
  this._isPowerSave = true
};

Thermostat.prototype.up = function(number = 1){
  if (this.maxTempExceeded(number)){
    this.temperature = this.maxTemp;
      throw("maximum temperature is " + this.maxTemp + " in power save mode")
    }
  else
  this.temperature += number;
};

Thermostat.prototype.down = function(number = 1){
  if ((this.temperature - number) < this.minTemp)
    {this.temperature = this.minTemp;
      throw("minimum temperature is 10")
    }
  else this.temperature -= number
};

Thermostat.prototype.powerSaveOn = function(){
    this.maxTemp = 25;
    this._isPowerSave = true
};

Thermostat.prototype.powerSaveOff = function(){
    this.maxTemp = 32;
    this._isPowerSave = false
};

Thermostat.prototype.maxTempExceeded = function(number){
  return ((this.temperature + number) > this.maxTemp)
};

Thermostat.prototype.reset = function() {
  this.temperature = 20
};

Thermostat.prototype.usage = function() {
  if (this.temperature >= 25){
    return "High"
  } else if (this.temperature < 18) {
    return "Low"
  } else {
    return "Medium"
  };
};
