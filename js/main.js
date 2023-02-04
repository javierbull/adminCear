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

$("#show-resumen").click(function() {
  $("#content-sorteo").hide();
  $("#content-resumen").show();
});

$("#show-sorteo").click(function() {
  $("#content-sorteo").show();
  $("#content-resumen").hide();
});

// Admin Dashboard  active item sidebar
$(".sidebar-admin button").click(function(){
  $(".active").removeClass("active-item-sidebar");
});
// Admin Dashboard  active item sidebar

// Admin panel
$("#toggle-btn-sidebar").click(function(){
     $("#admin-panel").toggleClass("ml-panel ml-panel-0");
 });
// End admin panel

// SHOW HIDE PANELS
$(".showProfesionales").click(function() {
  $("#profesionales-panel").show();
  $("#agregarProfesional-panel").hide();
  $("#designacion-panel").hide();
  $("#agregarDesignacion-panel").hide();
  $("#especialidades-panel").hide();
  $("#agregarEspecialidad-panel").hide();
  $("#profesiones-panel").hide();
  $("#agregarProfesion-panel").hide();
  $("#casos-panel").hide();
  $("#editar-caso-panel").hide();
  $("#usuarios-panel").hide();
  $("#editar-usuario-panel").hide();
  $("#solicitud-fisico-panel").hide();
  $("#solicitud-electronico-panel").hide();
});

$(".showAgregarProfesional").click(function() {
  $("#profesionales-panel").hide();
  $("#agregarProfesional-panel").show();
  $("#designacion-panel").hide();
  $("#agregarDesignacion-panel").hide();
  $("#especialidades-panel").hide();
  $("#agregarEspecialidad-panel").hide();
  $("#profesiones-panel").hide();
  $("#agregarProfesion-panel").hide();
  $("#casos-panel").hide();
  $("#editar-caso-panel").hide();
  $("#usuarios-panel").hide();
  $("#editar-usuario-panel").hide();
  $("#solicitud-fisico-panel").hide();
  $("#solicitud-electronico-panel").hide();
});

$(".showDesignacion").click(function() {
  $("#profesionales-panel").hide();
  $("#agregarProfesional-panel").hide();
  $("#designacion-panel").show();
  $("#agregarDesignacion-panel").hide();
  $("#especialidades-panel").hide();
  $("#agregarEspecialidad-panel").hide();
  $("#profesiones-panel").hide();
  $("#agregarProfesion-panel").hide();
  $("#casos-panel").hide();
  $("#editar-caso-panel").hide();
  $("#usuarios-panel").hide();
  $("#editar-usuario-panel").hide();
  $("#solicitud-fisico-panel").hide();
  $("#solicitud-electronico-panel").hide();
});

$(".showAgregarDesignacion").click(function() {
  $("#profesionales-panel").hide();
  $("#agregarProfesional-panel").hide();
  $("#designacion-panel").hide();
  $("#agregarDesignacion-panel").show();
  $("#especialidades-panel").hide();
  $("#agregarEspecialidad-panel").hide();
  $("#profesiones-panel").hide();
  $("#agregarProfesion-panel").hide();
  $("#casos-panel").hide();
  $("#editar-caso-panel").hide();
  $("#usuarios-panel").hide();
  $("#editar-usuario-panel").hide();
  $("#solicitud-fisico-panel").hide();
  $("#solicitud-electronico-panel").hide();
});

$(".showEspecialidad").click(function() {
  $("#profesionales-panel").hide();
  $("#agregarProfesional-panel").hide();
  $("#designacion-panel").hide();
  $("#agregarDesignacion-panel").hide();
  $("#especialidades-panel").show();
  $("#agregarEspecialidad-panel").hide();
  $("#profesiones-panel").hide();
  $("#agregarProfesion-panel").hide();
  $("#casos-panel").hide();
  $("#editar-caso-panel").hide();
  $("#usuarios-panel").hide();
  $("#editar-usuario-panel").hide();
  $("#solicitud-fisico-panel").hide();
  $("#solicitud-electronico-panel").hide();
});

$(".showAgregarEspecialidad").click(function() {
  $("#profesionales-panel").hide();
  $("#agregarProfesional-panel").hide();
  $("#designacion-panel").hide();
  $("#agregarDesignacion-panel").hide();
  $("#especialidades-panel").hide();
  $("#agregarEspecialidad-panel").show();
  $("#profesiones-panel").hide();
  $("#agregarProfesion-panel").hide();
  $("#casos-panel").hide();
  $("#editar-caso-panel").hide();
  $("#usuarios-panel").hide();
  $("#editar-usuario-panel").hide();
  $("#solicitud-fisico-panel").hide();
  $("#solicitud-electronico-panel").hide();
});

$(".showProfesiones").click(function() {
  $("#profesionales-panel").hide();
  $("#agregarProfesional-panel").hide();
  $("#designacion-panel").hide();
  $("#agregarDesignacion-panel").hide();
  $("#especialidades-panel").hide();
  $("#agregarEspecialidad-panel").hide();
  $("#profesiones-panel").show();
  $("#agregarProfesion-panel").hide();
  $("#casos-panel").hide();
  $("#editar-caso-panel").hide();
  $("#usuarios-panel").hide();
  $("#editar-usuario-panel").hide();
  $("#solicitud-fisico-panel").hide();
  $("#solicitud-electronico-panel").hide();
});

$(".showAgregarProfesion").click(function() {
  $("#profesionales-panel").hide();
  $("#agregarProfesional-panel").hide();
  $("#designacion-panel").hide();
  $("#agregarDesignacion-panel").hide();
  $("#especialidades-panel").hide();
  $("#agregarEspecialidad-panel").hide();
  $("#profesiones-panel").hide();
  $("#agregarProfesion-panel").show();
  $("#casos-panel").hide();
  $("#editar-caso-panel").hide();
  $("#usuarios-panel").hide();
  $("#editar-usuario-panel").hide();
  $("#solicitud-fisico-panel").hide();
  $("#solicitud-electronico-panel").hide();
});

$(".showCasos").click(function() {
  $("#profesionales-panel").hide();
  $("#agregarProfesional-panel").hide();
  $("#designacion-panel").hide();
  $("#agregarDesignacion-panel").hide();
  $("#especialidades-panel").hide();
  $("#agregarEspecialidad-panel").hide();
  $("#profesiones-panel").hide();
  $("#agregarProfesion-panel").hide();
  $("#casos-panel").show();
  $("#editar-caso-panel").hide();
  $("#usuarios-panel").hide();
  $("#editar-usuario-panel").hide();
  $("#solicitud-fisico-panel").hide();
  $("#solicitud-electronico-panel").hide();
});

$(".showEditarCaso").click(function() {
  $("#profesionales-panel").hide();
  $("#agregarProfesional-panel").hide();
  $("#designacion-panel").hide();
  $("#agregarDesignacion-panel").hide();
  $("#especialidades-panel").hide();
  $("#agregarEspecialidad-panel").hide();
  $("#profesiones-panel").hide();
  $("#agregarProfesion-panel").hide();
  $("#casos-panel").hide();
  $("#editar-caso-panel").show();
  $("#usuarios-panel").hide();
  $("#editar-usuario-panel").hide();
  $("#solicitud-fisico-panel").hide();
  $("#solicitud-electronico-panel").hide();
});

$(".showUsuarios").click(function() {
  $("#profesionales-panel").hide();
  $("#agregarProfesional-panel").hide();
  $("#designacion-panel").hide();
  $("#agregarDesignacion-panel").hide();
  $("#especialidades-panel").hide();
  $("#agregarEspecialidad-panel").hide();
  $("#profesiones-panel").hide();
  $("#agregarProfesion-panel").hide();
  $("#casos-panel").hide();
  $("#editar-caso-panel").hide();
  $("#usuarios-panel").show();
  $("#editar-usuario-panel").hide();
  $("#solicitud-fisico-panel").hide();
  $("#solicitud-electronico-panel").hide();
});

$(".showEditarUsuario").click(function() {
  $("#profesionales-panel").hide();
  $("#agregarProfesional-panel").hide();
  $("#designacion-panel").hide();
  $("#agregarDesignacion-panel").hide();
  $("#especialidades-panel").hide();
  $("#agregarEspecialidad-panel").hide();
  $("#profesiones-panel").hide();
  $("#agregarProfesion-panel").hide();
  $("#casos-panel").hide();
  $("#editar-caso-panel").hide();
  $("#usuarios-panel").hide();
  $("#editar-usuario-panel").show();
  $("#solicitud-fisico-panel").hide();
  $("#solicitud-electronico-panel").hide();
});

$(".showSolicitudFisico").click(function() {
  $("#profesionales-panel").hide();
  $("#agregarProfesional-panel").hide();
  $("#designacion-panel").hide();
  $("#agregarDesignacion-panel").hide();
  $("#especialidades-panel").hide();
  $("#agregarEspecialidad-panel").hide();
  $("#profesiones-panel").hide();
  $("#agregarProfesion-panel").hide();
  $("#casos-panel").hide();
  $("#editar-caso-panel").hide();
  $("#usuarios-panel").hide();
  $("#editar-usuario-panel").hide();
  $("#solicitud-fisico-panel").show();

  $("#solicitud-electronico-panel").hide();
});

$(".showSolicitudElectronico").click(function() {
  $("#profesionales-panel").hide();
  $("#agregarProfesional-panel").hide();
  $("#designacion-panel").hide();
  $("#agregarDesignacion-panel").hide();
  $("#especialidades-panel").hide();
  $("#agregarEspecialidad-panel").hide();
  $("#profesiones-panel").hide();
  $("#agregarProfesion-panel").hide();
  $("#casos-panel").hide();
  $("#editar-caso-panel").hide();
  $("#usuarios-panel").hide();
  $("#editar-usuario-panel").hide();
  $("#solicitud-fisico-panel").hide();
  $("#solicitud-electronico-panel").show();
});
  // END SHOW HIDE PANELS

  $('#imgFileLogoEmpresa').change(function(){
   var curElement = $('#photoProfile');
   console.log(curElement);
   var reader = new FileReader();

   reader.onload = function (e) {
       // get loaded data and render thumbnail.
       curElement.attr('src', e.target.result);
   };

   // read the image file as a data URL.
   reader.readAsDataURL(this.files[0]);
  });
     // END UPLOAD PICTURE PROFILE

     // Show hide Tag
     $('#checkContratacionPublicaNp').click(function() {
       $("#tag-arbitro").toggleClass("flex hide");
     });
     // End Show hide Tag
// End admin dashboard

// SHOW HIDE CHECKBOX
$("#checkDatosRepresentanteLegalSf").click(function() {
  if ($(this).is(":checked")) {
    $("#fieldset-DatosRepresntanteLegal").show();
  } else {
    $("#fieldset-DatosRepresntanteLegal").hide();
  }
});

$("#checkDatosRepresentanteLegalSfPj").click(function() {
  if ($(this).is(":checked")) {
    $("#fieldset-DatosRepresntanteLegalSfPj").show();
  } else {
    $("#fieldset-DatosRepresntanteLegalSfPj").hide();
  }
});

$("#checkShowInputEnlaceSf").click(function() {
  if ($(this).is(":checked")) {
    $("#fieldset-enlaceArchivoPesado").show();
  } else {
    $("#fieldset-enlaceArchivoPesado").hide();
  }
});

$("#checkDatosRepresentanteLegalSe").click(function() {
  if ($(this).is(":checked")) {
    $("#fieldset-DatosRepresntanteLegalSe").show();
  } else {
    $("#fieldset-DatosRepresntanteLegalSe").hide();
  }
});

$("#cuantiaDeterminado").click(function() {
  $("#fieldset-cuantia-determinada").show();
});

$("#cuantiaIndeterminado").click(function() {
  $("#fieldset-cuantia-determinada").hide();
});

$("#datosDemandanteSfPj").click(function() {
  $("#fieldset-se-demandante-pn").hide();
  $("#fieldset-se-demandante-pj").show();
});

$("#datosDemandanteSfPn").click(function() {
  $("#fieldset-se-demandante-pn").show();
  $("#fieldset-se-demandante-pj").hide();
});

// END SHOW HIDE CHECKBOX

// SHOW HIDE SELECT
$('#comprobanteSelectorSe').change(function(){
    var myID = $(this).val();
    $('.comprobanteSe').each(function(){
        myID === $(this).attr('id') ? $(this).show() : $(this).hide();
    });
});
// END SHOW HIDE SELECT

// ACTIVAR SELECT 2
$('.select2').select2({
  theme: "bootstrap-5",
  width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
  placeholder: $(this).data('placeholder')
});

$('.select2modal').each(function() {
  $(this).select2({
    theme: "bootstrap-5",
    width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
    placeholder: $(this).data('placeholder'),
    dropdownParent: $(this).parent()
  });
});

$( '.select2-multiple' ).select2( {
    theme: "bootstrap-5",
    width: $( this ).data( 'width' ) ? $( this ).data( 'width' ) : $( this ).hasClass( 'w-100' ) ? '100%' : 'style',
    placeholder: $( this ).data( 'placeholder' ),
    closeOnSelect: false,
    allowClear: true,
} );

// END ACTIVAR SELECT2


});

// admin btn sidebar togle menu
const btnToggle = document.querySelector('#toggle-btn-sidebar');

btnToggle.addEventListener('click', function () {
  console.log('clik')
  document.getElementById('sidebar-admin').classList.toggle('active');
  console.log(document.getElementById('sidebar-admin'))
});

// End admin btn sidebar togle menu

// Drag & Drop
const $inputFile = document.getElementById("file");
const $iconFile = document.getElementById("iconFile");
const $textFile = document.getElementById("textFile");

$inputFile.addEventListener("change", (e) => {
  if (e.target.files.length) {
    $iconFile.className = "fas fa-folder";
    $textFile.innerText = `Has agregado este documento: ${e.target.files[0].name}`;
  }
});

// End Drag & Drop
