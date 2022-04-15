"use strict";

$(document).ready(function(){

  // SHOW-HIDE PASSWORD
  $(".toggle-password").click(function() {

  $(this).toggleClass("fa-eye fa-eye-slash");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});
// END SHOW-HIDE PASSWORD

// Select2

// $(".select2").select2({
//   theme: 'bootstrap4',
// });
//
// $(".select2-multiple").select2({
//   theme: 'bootstrap4',
// });

// End select2

$("#show-resumen").click(function() {
  $("#content-sorteo").hide();
  $("#content-resumen").show();
});

$("#show-sorteo").click(function() {
  $("#content-sorteo").show();
  $("#content-resumen").hide();
});

// Admin Dashboard  $("button").click(function(){
$(".sidebar-admin button").click(function(){
  $("#active").removeClass("active-item-sidebar");
});

// End admin dashboard

});

// admin btn sidebar togle menu
const btnToggle = document.querySelector('#toggle-btn-sidebar');

btnToggle.addEventListener('click', function () {
  console.log('clik')
  document.getElementById('sidebar-admin').classList.toggle('active');
  console.log(document.getElementById('sidebar-admin'))
});

// End admin btn sidebar togle menu
