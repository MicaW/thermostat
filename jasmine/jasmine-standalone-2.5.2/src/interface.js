$(document).ready(function() {
  var thermo = new Thermostat();
$('#currenttemperature').text(thermo.temperature);
$('#increase').click(function() {alert("alert message")});
});

//
//   $('#increase').click(function() {
//     alert("message");
//   });
// });

//
// $(document).ready(function() {
//   var thermostat = new Thermostat();
//   $('#currenttemperature').text(thermostat.temperature);
// })


// $(document).ready(function() {
//    console.log('ready!');
// });
