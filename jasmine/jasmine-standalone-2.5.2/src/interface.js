$(document).ready(function() {
  var thermo = new Thermostat();
    $('#current-temperature').text(thermo.temperature);
    $('#power-save').text(thermo._isPowerSave);
    $('#power-usage').text(thermo.usage());


    function updateTemperature() {
      $('#current-temperature').text(thermo.temperature);
      $('#power-usage').text(thermo.usage());
      $('#power-usage').attr('class', thermo.usage());
    };

    $('#increase-button').click(function() {
      thermo.up(1)
      updateTemperature()
    });

    $('#decrease-button').click(function() {
      thermo.down(1)
      updateTemperature()
    });

    $('#powerSaveOn-button').click(function() {
      thermo.powerSaveOn()
      updateTemperature()
      $('#power-save').text(thermo._isPowerSave);
    });

    $('#powerSaveOff-button').click(function() {
      thermo.powerSaveOff()
      $('#power-save').text(thermo._isPowerSave);
    });

    $('#reset').click(function() {
      thermo.reset()
      updateTemperature()
    });

});
