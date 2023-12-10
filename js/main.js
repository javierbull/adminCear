"use strict";

$(document).ready(function () {

  // SHOW-HIDE PASSWORD
  $(".toggle-password").click(function () {

    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });
  // END SHOW-HIDE PASSWORD

  $("#show-resumen").click(function () {
    $("#content-sorteo").hide();
    $("#content-resumen").show();
  });

  $("#show-sorteo").click(function () {
    $("#content-sorteo").show();
    $("#content-resumen").hide();
  });

  // Admin Dashboard  active item sidebar
  $(".sidebar-admin button").click(function () {
    $(".active").removeClass("active-item-sidebar");
  });
  // Admin Dashboard  active item sidebar

  // Admin panel
  $("#toggle-btn-sidebar").click(function () {
    $("#admin-panel").toggleClass("ml-panel ml-panel-0");
  });
  // End admin panel

  // SHOW HIDE PANELS
  $(".showHome").click(function () {
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
    $("#solicitud-electronico-panel").hide();
    $("#mpv-expedientes-panel").hide();
    $("#detalle-solicitud-ingresada-panel").hide();
    $("#detalle-solicitud-ingresada-electronico-panel").hide();
    $("#costo-arbitroUnico-panel").hide();
    $("#costo-tribunalArbitral-panel").hide();
    $("#costo-secretariaArbitral-panel").hide();
    $("#costo-cuantiaIndeterminada-panel").hide();
    $("#costo-arbitroEmergencia-panel").hide();
    $("#costo-centroArbitral-panel").hide();
    $("#mpv-nuevaSolicitud-panel").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-general").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-contratacionPublica").hide();
    $("#solicitud-fisico-panel-arbitrajeGeneral").hide();
    $("#solicitud-electronico-panel-arbitrajeGeneral").hide();
    $("#solicitud-fisico-panel-arbitrajeContratacionPublica").hide();
    $("#solicitud-electronico-panel-arbitrajeContratacionPublica").hide();
    $("#home-panel").show();
    $("#solicitud-MPV-panel").hide();
    $("#gestionDocumentos-panel").hide();
    $("#casillaElectronica-panel").hide();
    $("#votaciones-panel").hide();
    $("#votacion-panel").hide();
  });

  $(".showProfesionales").click(function () {
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
    $("#mpv-expedientes-panel").hide();
    $("#detalle-solicitud-ingresada-panel").hide();
    $("#detalle-solicitud-ingresada-electronico-panel").hide();
    $("#costo-arbitroUnico-panel").hide();
    $("#costo-tribunalArbitral-panel").hide();
    $("#costo-secretariaArbitral-panel").hide();
    $("#costo-cuantiaIndeterminada-panel").hide();
    $("#costo-arbitroEmergencia-panel").hide();
    $("#costo-centroArbitral-panel").hide();
    $("#mpv-nuevaSolicitud-panel").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-general").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-contratacionPublica").hide();
    $("#solicitud-fisico-panel-arbitrajeGeneral").hide();
    $("#solicitud-electronico-panel-arbitrajeGeneral").hide();
    $("#solicitud-fisico-panel-arbitrajeContratacionPublica").hide();
    $("#solicitud-electronico-panel-arbitrajeContratacionPublica").hide();
    $("#home-panel").hide();
    $("#solicitud-MPV-panel").hide();
    $("#gestionDocumentos-panel").hide();
    $("#casillaElectronica-panel").hide();
    $("#votaciones-panel").hide();
    $("#votacion-panel").hide();
  });

  $(".showAgregarProfesional").click(function () {
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
    $("#mpv-expedientes-panel").hide();
    $("#detalle-solicitud-ingresada-panel").hide();
    $("#detalle-solicitud-ingresada-electronico-panel").hide();
    $("#costo-arbitroUnico-panel").hide();
    $("#costo-tribunalArbitral-panel").hide();
    $("#costo-secretariaArbitral-panel").hide();
    $("#costo-cuantiaIndeterminada-panel").hide();
    $("#costo-arbitroEmergencia-panel").hide();
    $("#costo-centroArbitral-panel").hide();
    $("#mpv-nuevaSolicitud-panel").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-general").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-contratacionPublica").hide();
    $("#solicitud-fisico-panel-arbitrajeGeneral").hide();
    $("#solicitud-electronico-panel-arbitrajeGeneral").hide();
    $("#solicitud-fisico-panel-arbitrajeContratacionPublica").hide();
    $("#solicitud-electronico-panel-arbitrajeContratacionPublica").hide();
    $("#home-panel").hide();
    $("#solicitud-MPV-panel").hide();
    $("#gestionDocumentos-panel").hide();
    $("#casillaElectronica-panel").hide();
    $("#votaciones-panel").hide();
    $("#votacion-panel").hide();
  });

  $(".showDesignacion").click(function () {
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
    $("#mpv-expedientes-panel").hide();
    $("#detalle-solicitud-ingresada-panel").hide();
    $("#detalle-solicitud-ingresada-electronico-panel").hide();
    $("#costo-arbitroUnico-panel").hide();
    $("#costo-tribunalArbitral-panel").hide();
    $("#costo-secretariaArbitral-panel").hide();
    $("#costo-cuantiaIndeterminada-panel").hide();
    $("#costo-arbitroEmergencia-panel").hide();
    $("#costo-centroArbitral-panel").hide();
    $("#mpv-nuevaSolicitud-panel").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-general").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-contratacionPublica").hide();
    $("#solicitud-fisico-panel-arbitrajeGeneral").hide();
    $("#solicitud-electronico-panel-arbitrajeGeneral").hide();
    $("#solicitud-fisico-panel-arbitrajeContratacionPublica").hide();
    $("#solicitud-electronico-panel-arbitrajeContratacionPublica").hide();
    $("#home-panel").hide();
    $("#solicitud-MPV-panel").hide();
    $("#gestionDocumentos-panel").hide();
    $("#casillaElectronica-panel").hide();
    $("#votaciones-panel").hide();
    $("#votacion-panel").hide();
  });

  $(".showAgregarDesignacion").click(function () {
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
    $("#mpv-expedientes-panel").hide();
    $("#detalle-solicitud-ingresada-panel").hide();
    $("#detalle-solicitud-ingresada-electronico-panel").hide();
    $("#costo-arbitroUnico-panel").hide();
    $("#costo-tribunalArbitral-panel").hide();
    $("#costo-secretariaArbitral-panel").hide();
    $("#costo-cuantiaIndeterminada-panel").hide();
    $("#costo-arbitroEmergencia-panel").hide();
    $("#costo-centroArbitral-panel").hide();
    $("#mpv-nuevaSolicitud-panel").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-general").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-contratacionPublica").hide();
    $("#solicitud-fisico-panel-arbitrajeGeneral").hide();
    $("#solicitud-electronico-panel-arbitrajeGeneral").hide();
    $("#solicitud-fisico-panel-arbitrajeContratacionPublica").hide();
    $("#solicitud-electronico-panel-arbitrajeContratacionPublica").hide();
    $("#home-panel").hide();
    $("#solicitud-MPV-panel").hide();
    $("#gestionDocumentos-panel").hide();
    $("#casillaElectronica-panel").hide();
    $("#votaciones-panel").hide();
    $("#votacion-panel").hide();
  });

  $(".showEspecialidad").click(function () {
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
    $("#mpv-expedientes-panel").hide();
    $("#detalle-solicitud-ingresada-panel").hide();
    $("#detalle-solicitud-ingresada-electronico-panel").hide();
    $("#costo-arbitroUnico-panel").hide();
    $("#costo-tribunalArbitral-panel").hide();
    $("#costo-secretariaArbitral-panel").hide();
    $("#costo-cuantiaIndeterminada-panel").hide();
    $("#costo-arbitroEmergencia-panel").hide();
    $("#costo-centroArbitral-panel").hide();
    $("#mpv-nuevaSolicitud-panel").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-general").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-contratacionPublica").hide();
    $("#solicitud-fisico-panel-arbitrajeGeneral").hide();
    $("#solicitud-electronico-panel-arbitrajeGeneral").hide();
    $("#solicitud-fisico-panel-arbitrajeContratacionPublica").hide();
    $("#solicitud-electronico-panel-arbitrajeContratacionPublica").hide();
    $("#home-panel").hide();
    $("#solicitud-MPV-panel").hide();
    $("#gestionDocumentos-panel").hide();
    $("#casillaElectronica-panel").hide();
    $("#votaciones-panel").hide();
    $("#votacion-panel").hide();
  });

  $(".showAgregarEspecialidad").click(function () {
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
    $("#mpv-expedientes-panel").hide();
    $("#detalle-solicitud-ingresada-panel").hide();
    $("#detalle-solicitud-ingresada-electronico-panel").hide();
    $("#costo-arbitroUnico-panel").hide();
    $("#costo-tribunalArbitral-panel").hide();
    $("#costo-secretariaArbitral-panel").hide();
    $("#costo-cuantiaIndeterminada-panel").hide();
    $("#costo-arbitroEmergencia-panel").hide();
    $("#costo-centroArbitral-panel").hide();
    $("#mpv-nuevaSolicitud-panel").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-general").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-contratacionPublica").hide();
    $("#solicitud-fisico-panel-arbitrajeGeneral").hide();
    $("#solicitud-electronico-panel-arbitrajeGeneral").hide();
    $("#solicitud-fisico-panel-arbitrajeContratacionPublica").hide();
    $("#solicitud-electronico-panel-arbitrajeContratacionPublica").hide();
    $("#home-panel").hide();
    $("#solicitud-MPV-panel").hide();
    $("#gestionDocumentos-panel").hide();
    $("#casillaElectronica-panel").hide();
    $("#votaciones-panel").hide();
    $("#votacion-panel").hide();
  });

  $(".showProfesiones").click(function () {
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
    $("#mpv-expedientes-panel").hide();
    $("#detalle-solicitud-ingresada-panel").hide();
    $("#detalle-solicitud-ingresada-electronico-panel").hide();
    $("#costo-arbitroUnico-panel").hide();
    $("#costo-tribunalArbitral-panel").hide();
    $("#costo-secretariaArbitral-panel").hide();
    $("#costo-cuantiaIndeterminada-panel").hide();
    $("#costo-arbitroEmergencia-panel").hide();
    $("#costo-centroArbitral-panel").hide();
    $("#mpv-nuevaSolicitud-panel").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-general").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-contratacionPublica").hide();
    $("#solicitud-fisico-panel-arbitrajeGeneral").hide();
    $("#solicitud-electronico-panel-arbitrajeGeneral").hide();
    $("#solicitud-fisico-panel-arbitrajeContratacionPublica").hide();
    $("#solicitud-electronico-panel-arbitrajeContratacionPublica").hide();
    $("#home-panel").hide();
    $("#solicitud-MPV-panel").hide();
    $("#gestionDocumentos-panel").hide();
    $("#casillaElectronica-panel").hide();
    $("#votaciones-panel").hide();
    $("#votacion-panel").hide();
  });

  $(".showAgregarProfesion").click(function () {
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
    $("#mpv-expedientes-panel").hide();
    $("#detalle-solicitud-ingresada-panel").hide();
    $("#detalle-solicitud-ingresada-electronico-panel").hide();
    $("#costo-arbitroUnico-panel").hide();
    $("#costo-tribunalArbitral-panel").hide();
    $("#costo-secretariaArbitral-panel").hide();
    $("#costo-cuantiaIndeterminada-panel").hide();
    $("#costo-arbitroEmergencia-panel").hide();
    $("#costo-centroArbitral-panel").hide();
    $("#mpv-nuevaSolicitud-panel").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-general").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-contratacionPublica").hide();
    $("#solicitud-fisico-panel-arbitrajeGeneral").hide();
    $("#solicitud-electronico-panel-arbitrajeGeneral").hide();
    $("#solicitud-fisico-panel-arbitrajeContratacionPublica").hide();
    $("#solicitud-electronico-panel-arbitrajeContratacionPublica").hide();
    $("#home-panel").hide();
    $("#solicitud-MPV-panel").hide();
    $("#gestionDocumentos-panel").hide();
    $("#casillaElectronica-panel").hide();
    $("#votaciones-panel").hide();
    $("#votacion-panel").hide();
  });

  $(".showCasos").click(function () {
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
    $("#mpv-expedientes-panel").hide();
    $("#detalle-solicitud-ingresada-panel").hide();
    $("#detalle-solicitud-ingresada-electronico-panel").hide();
    $("#costo-arbitroUnico-panel").hide();
    $("#costo-tribunalArbitral-panel").hide();
    $("#costo-secretariaArbitral-panel").hide();
    $("#costo-cuantiaIndeterminada-panel").hide();
    $("#costo-arbitroEmergencia-panel").hide();
    $("#costo-centroArbitral-panel").hide();
    $("#mpv-nuevaSolicitud-panel").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-general").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-contratacionPublica").hide();
    $("#solicitud-fisico-panel-arbitrajeGeneral").hide();
    $("#solicitud-electronico-panel-arbitrajeGeneral").hide();
    $("#solicitud-fisico-panel-arbitrajeContratacionPublica").hide();
    $("#solicitud-electronico-panel-arbitrajeContratacionPublica").hide();
    $("#home-panel").hide();
    $("#solicitud-MPV-panel").hide();
    $("#gestionDocumentos-panel").hide();
    $("#casillaElectronica-panel").hide();
    $("#votaciones-panel").hide();
    $("#votacion-panel").hide();
  });

  $(".showEditarCaso").click(function () {
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
    $("#mpv-expedientes-panel").hide();
    $("#detalle-solicitud-ingresada-panel").hide();
    $("#detalle-solicitud-ingresada-electronico-panel").hide();
    $("#costo-arbitroUnico-panel").hide();
    $("#costo-tribunalArbitral-panel").hide();
    $("#costo-secretariaArbitral-panel").hide();
    $("#costo-cuantiaIndeterminada-panel").hide();
    $("#costo-arbitroEmergencia-panel").hide();
    $("#costo-centroArbitral-panel").hide();
    $("#mpv-nuevaSolicitud-panel").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-general").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-contratacionPublica").hide();
    $("#solicitud-fisico-panel-arbitrajeGeneral").hide();
    $("#solicitud-electronico-panel-arbitrajeGeneral").hide();
    $("#solicitud-fisico-panel-arbitrajeContratacionPublica").hide();
    $("#solicitud-electronico-panel-arbitrajeContratacionPublica").hide();
    $("#home-panel").hide();
    $("#solicitud-MPV-panel").hide();
    $("#gestionDocumentos-panel").hide();
    $("#casillaElectronica-panel").hide();
    $("#votaciones-panel").hide();
    $("#votacion-panel").hide();
  });

  $(".showUsuarios").click(function () {
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
    $("#mpv-expedientes-panel").hide();
    $("#detalle-solicitud-ingresada-panel").hide();
    $("#detalle-solicitud-ingresada-electronico-panel").hide();
    $("#costo-arbitroUnico-panel").hide();
    $("#costo-tribunalArbitral-panel").hide();
    $("#costo-secretariaArbitral-panel").hide();
    $("#costo-cuantiaIndeterminada-panel").hide();
    $("#costo-arbitroEmergencia-panel").hide();
    $("#costo-centroArbitral-panel").hide();
    $("#mpv-nuevaSolicitud-panel").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-general").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-contratacionPublica").hide();
    $("#solicitud-fisico-panel-arbitrajeGeneral").hide();
    $("#solicitud-electronico-panel-arbitrajeGeneral").hide();
    $("#solicitud-fisico-panel-arbitrajeContratacionPublica").hide();
    $("#solicitud-electronico-panel-arbitrajeContratacionPublica").hide();
    $("#home-panel").hide();
    $("#solicitud-MPV-panel").hide();
    $("#gestionDocumentos-panel").hide();
    $("#casillaElectronica-panel").hide();
    $("#votaciones-panel").hide();
    $("#votacion-panel").hide();
  });

  $(".showEditarUsuario").click(function () {
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
    $("#mpv-expedientes-panel").hide();
    $("#detalle-solicitud-ingresada-panel").hide();
    $("#detalle-solicitud-ingresada-electronico-panel").hide();
    $("#costo-arbitroUnico-panel").hide();
    $("#costo-tribunalArbitral-panel").hide();
    $("#costo-secretariaArbitral-panel").hide();
    $("#costo-cuantiaIndeterminada-panel").hide();
    $("#costo-arbitroEmergencia-panel").hide();
    $("#costo-centroArbitral-panel").hide();
    $("#mpv-nuevaSolicitud-panel").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-general").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-contratacionPublica").hide();
    $("#solicitud-fisico-panel-arbitrajeGeneral").hide();
    $("#solicitud-electronico-panel-arbitrajeGeneral").hide();
    $("#solicitud-fisico-panel-arbitrajeContratacionPublica").hide();
    $("#solicitud-electronico-panel-arbitrajeContratacionPublica").hide();
    $("#home-panel").hide();
    $("#solicitud-MPV-panel").hide();
    $("#gestionDocumentos-panel").hide();
    $("#casillaElectronica-panel").hide();
    $("#votaciones-panel").hide();
    $("#votacion-panel").hide();
  });

  $(".showSolicitudFisico").click(function () {
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
    $("#mpv-expedientes-panel").hide();
    $("#detalle-solicitud-ingresada-panel").hide();
    $("#detalle-solicitud-ingresada-electronico-panel").hide();
    $("#costo-arbitroUnico-panel").hide();
    $("#costo-tribunalArbitral-panel").hide();
    $("#costo-secretariaArbitral-panel").hide();
    $("#costo-cuantiaIndeterminada-panel").hide();
    $("#costo-arbitroEmergencia-panel").hide();
    $("#costo-centroArbitral-panel").hide();
    $("#mpv-nuevaSolicitud-panel").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-general").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-contratacionPublica").hide();
    $("#solicitud-fisico-panel-arbitrajeGeneral").hide();
    $("#solicitud-electronico-panel-arbitrajeGeneral").hide();
    $("#solicitud-fisico-panel-arbitrajeContratacionPublica").hide();
    $("#solicitud-electronico-panel-arbitrajeContratacionPublica").hide();
    $("#home-panel").hide();
    $("#solicitud-MPV-panel").hide();
    $("#gestionDocumentos-panel").hide();
    $("#casillaElectronica-panel").hide();
    $("#votaciones-panel").hide();
    $("#votacion-panel").hide();
  });

  $(".showSolicitudElectronico").click(function () {
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
    $("#mpv-expedientes-panel").hide();
    $("#detalle-solicitud-ingresada-panel").hide();
    $("#detalle-solicitud-ingresada-electronico-panel").hide();
    $("#costo-arbitroUnico-panel").hide();
    $("#costo-tribunalArbitral-panel").hide();
    $("#costo-secretariaArbitral-panel").hide();
    $("#costo-cuantiaIndeterminada-panel").hide();
    $("#costo-arbitroEmergencia-panel").hide();
    $("#costo-centroArbitral-panel").hide();
    $("#mpv-nuevaSolicitud-panel").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-general").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-contratacionPublica").hide();
    $("#solicitud-fisico-panel-arbitrajeGeneral").hide();
    $("#solicitud-electronico-panel-arbitrajeGeneral").hide();
    $("#solicitud-fisico-panel-arbitrajeContratacionPublica").hide();
    $("#solicitud-electronico-panel-arbitrajeContratacionPublica").hide();
    $("#home-panel").hide();
    $("#solicitud-MPV-panel").hide();
    $("#gestionDocumentos-panel").hide();
    $("#casillaElectronica-panel").hide();
    $("#votaciones-panel").hide();
    $("#votacion-panel").hide();
  });

  $(".showSolicitudesIngresadas").click(function () {
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
    $("#solicitud-electronico-panel").hide();
    $("#mpv-expedientes-panel").show();
    $("#detalle-solicitud-ingresada-panel").hide();
    $("#detalle-solicitud-ingresada-electronico-panel").hide();
    $("#costo-arbitroUnico-panel").hide();
    $("#costo-tribunalArbitral-panel").hide();
    $("#costo-secretariaArbitral-panel").hide();
    $("#costo-cuantiaIndeterminada-panel").hide();
    $("#costo-arbitroEmergencia-panel").hide();
    $("#costo-centroArbitral-panel").hide();
    $("#mpv-nuevaSolicitud-panel").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-general").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-contratacionPublica").hide();
    $("#solicitud-fisico-panel-arbitrajeGeneral").hide();
    $("#solicitud-electronico-panel-arbitrajeGeneral").hide();
    $("#solicitud-fisico-panel-arbitrajeContratacionPublica").hide();
    $("#solicitud-electronico-panel-arbitrajeContratacionPublica").hide();
    $("#home-panel").hide();
    $("#solicitud-MPV-panel").hide();
    $("#gestionDocumentos-panel").hide();
    $("#casillaElectronica-panel").hide();
    $("#votaciones-panel").hide();
    $("#votacion-panel").hide();
  });

  $(".showDetalleSolicitudIngresada").click(function () {
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
    $("#solicitud-electronico-panel").hide();
    $("#mpv-expedientes-panel").hide();
    $("#detalle-solicitud-ingresada-panel").show();
    $("#detalle-solicitud-ingresada-electronico-panel").hide();
    $("#costo-arbitroUnico-panel").hide();
    $("#costo-tribunalArbitral-panel").hide();
    $("#costo-secretariaArbitral-panel").hide();
    $("#costo-cuantiaIndeterminada-panel").hide();
    $("#costo-arbitroEmergencia-panel").hide();
    $("#costo-centroArbitral-panel").hide();
    $("#mpv-nuevaSolicitud-panel").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-general").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-contratacionPublica").hide();
    $("#solicitud-fisico-panel-arbitrajeGeneral").hide();
    $("#solicitud-electronico-panel-arbitrajeGeneral").hide();
    $("#solicitud-fisico-panel-arbitrajeContratacionPublica").hide();
    $("#solicitud-electronico-panel-arbitrajeContratacionPublica").hide();
    $("#home-panel").hide();
    $("#solicitud-MPV-panel").hide();
    $("#gestionDocumentos-panel").hide();
    $("#casillaElectronica-panel").hide();
    $("#votaciones-panel").hide();
    $("#votacion-panel").hide();
  });

  $(".showDetalleSolicitudIngresadaElectronico").click(function () {
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
    $("#solicitud-electronico-panel").hide();
    $("#mpv-expedientes-panel").hide();
    $("#detalle-solicitud-ingresada-panel").hide();
    $("#detalle-solicitud-ingresada-electronico-panel").show();
    $("#costo-arbitroUnico-panel").hide();
    $("#costo-tribunalArbitral-panel").hide();
    $("#costo-secretariaArbitral-panel").hide();
    $("#costo-cuantiaIndeterminada-panel").hide();
    $("#costo-arbitroEmergencia-panel").hide();
    $("#costo-centroArbitral-panel").hide();
    $("#mpv-nuevaSolicitud-panel").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-general").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-contratacionPublica").hide();
    $("#solicitud-fisico-panel-arbitrajeGeneral").hide();
    $("#solicitud-electronico-panel-arbitrajeGeneral").hide();
    $("#solicitud-fisico-panel-arbitrajeContratacionPublica").hide();
    $("#solicitud-electronico-panel-arbitrajeContratacionPublica").hide();
    $("#home-panel").hide();
    $("#solicitud-MPV-panel").hide();
    $("#gestionDocumentos-panel").hide();
    $("#casillaElectronica-panel").hide();
    $("#votaciones-panel").hide();
    $("#votacion-panel").hide();
  });

  $(".showCostoArbitroUnico").click(function () {
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
    $("#solicitud-electronico-panel").hide();
    $("#mpv-expedientes-panel").hide();
    $("#detalle-solicitud-ingresada-panel").hide();
    $("#detalle-solicitud-ingresada-electronico-panel").hide();
    $("#costo-arbitroUnico-panel").show();
    $("#costo-tribunalArbitral-panel").hide();
    $("#costo-secretariaArbitral-panel").hide();
    $("#costo-cuantiaIndeterminada-panel").hide();
    $("#costo-arbitroEmergencia-panel").hide();
    $("#costo-centroArbitral-panel").hide();
    $("#mpv-nuevaSolicitud-panel").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-general").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-contratacionPublica").hide();
    $("#solicitud-fisico-panel-arbitrajeGeneral").hide();
    $("#solicitud-electronico-panel-arbitrajeGeneral").hide();
    $("#solicitud-fisico-panel-arbitrajeContratacionPublica").hide();
    $("#solicitud-electronico-panel-arbitrajeContratacionPublica").hide();
    $("#home-panel").hide();
    $("#solicitud-MPV-panel").hide();
    $("#gestionDocumentos-panel").hide();
    $("#casillaElectronica-panel").hide();
    $("#votaciones-panel").hide();
    $("#votacion-panel").hide();
  });

  $(".showCostoTribunalArbitral").click(function () {
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
    $("#solicitud-electronico-panel").hide();
    $("#mpv-expedientes-panel").hide();
    $("#detalle-solicitud-ingresada-panel").hide();
    $("#detalle-solicitud-ingresada-electronico-panel").hide();
    $("#costo-arbitroUnico-panel").hide();
    $("#costo-tribunalArbitral-panel").show();
    $("#costo-secretariaArbitral-panel").hide();
    $("#costo-cuantiaIndeterminada-panel").hide();
    $("#costo-arbitroEmergencia-panel").hide();
    $("#costo-centroArbitral-panel").hide();
    $("#mpv-nuevaSolicitud-panel").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-general").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-contratacionPublica").hide();
    $("#solicitud-fisico-panel-arbitrajeGeneral").hide();
    $("#solicitud-electronico-panel-arbitrajeGeneral").hide();
    $("#solicitud-fisico-panel-arbitrajeContratacionPublica").hide();
    $("#solicitud-electronico-panel-arbitrajeContratacionPublica").hide();
    $("#home-panel").hide();
    $("#solicitud-MPV-panel").hide();
    $("#gestionDocumentos-panel").hide();
    $("#casillaElectronica-panel").hide();
    $("#votaciones-panel").hide();
    $("#votacion-panel").hide();
  });

  $(".showCostoSecretariaArbitral").click(function () {
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
    $("#solicitud-electronico-panel").hide();
    $("#mpv-expedientes-panel").hide();
    $("#detalle-solicitud-ingresada-panel").hide();
    $("#detalle-solicitud-ingresada-electronico-panel").hide();
    $("#costo-arbitroUnico-panel").hide();
    $("#costo-tribunalArbitral-panel").hide();
    $("#costo-secretariaArbitral-panel").show();
    $("#costo-cuantiaIndeterminada-panel").hide();
    $("#costo-arbitroEmergencia-panel").hide();
    $("#costo-centroArbitral-panel").hide();
    $("#mpv-nuevaSolicitud-panel").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-general").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-contratacionPublica").hide();
    $("#solicitud-fisico-panel-arbitrajeGeneral").hide();
    $("#solicitud-electronico-panel-arbitrajeGeneral").hide();
    $("#solicitud-fisico-panel-arbitrajeContratacionPublica").hide();
    $("#solicitud-electronico-panel-arbitrajeContratacionPublica").hide();
    $("#home-panel").hide();
    $("#solicitud-MPV-panel").hide();
    $("#gestionDocumentos-panel").hide();
    $("#casillaElectronica-panel").hide();
    $("#votaciones-panel").hide();
    $("#votacion-panel").hide();
  });

  $(".showCostoCuantiaIndeterminada").click(function () {
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
    $("#solicitud-electronico-panel").hide();
    $("#mpv-expedientes-panel").hide();
    $("#detalle-solicitud-ingresada-panel").hide();
    $("#detalle-solicitud-ingresada-electronico-panel").hide();
    $("#costo-arbitroUnico-panel").hide();
    $("#costo-tribunalArbitral-panel").hide();
    $("#costo-secretariaArbitral-panel").hide();
    $("#costo-cuantiaIndeterminada-panel").show();
    $("#costo-arbitroEmergencia-panel").hide();
    $("#costo-centroArbitral-panel").hide();
    $("#mpv-nuevaSolicitud-panel").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-general").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-contratacionPublica").hide();
    $("#solicitud-fisico-panel-arbitrajeGeneral").hide();
    $("#solicitud-electronico-panel-arbitrajeGeneral").hide();
    $("#solicitud-fisico-panel-arbitrajeContratacionPublica").hide();
    $("#solicitud-electronico-panel-arbitrajeContratacionPublica").hide();
    $("#home-panel").hide();
    $("#solicitud-MPV-panel").hide();
    $("#gestionDocumentos-panel").hide();
    $("#casillaElectronica-panel").hide();
    $("#votaciones-panel").hide();
    $("#votacion-panel").hide();
  });

  $(".showCostoArbitroEmergencia").click(function () {
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
    $("#solicitud-electronico-panel").hide();
    $("#mpv-expedientes-panel").hide();
    $("#detalle-solicitud-ingresada-panel").hide();
    $("#detalle-solicitud-ingresada-electronico-panel").hide();
    $("#costo-arbitroUnico-panel").hide();
    $("#costo-tribunalArbitral-panel").hide();
    $("#costo-secretariaArbitral-panel").hide();
    $("#costo-cuantiaIndeterminada-panel").hide();
    $("#costo-arbitroEmergencia-panel").show();
    $("#costo-centroArbitral-panel").hide();
    $("#mpv-nuevaSolicitud-panel").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-general").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-contratacionPublica").hide();
    $("#solicitud-fisico-panel-arbitrajeGeneral").hide();
    $("#solicitud-electronico-panel-arbitrajeGeneral").hide();
    $("#solicitud-fisico-panel-arbitrajeContratacionPublica").hide();
    $("#solicitud-electronico-panel-arbitrajeContratacionPublica").hide();
    $("#home-panel").hide();
    $("#solicitud-MPV-panel").hide();
    $("#gestionDocumentos-panel").hide();
    $("#casillaElectronica-panel").hide();
    $("#votaciones-panel").hide();
    $("#votacion-panel").hide();
  });

  $(".showCostoCentroArbitral").click(function () {
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
    $("#solicitud-electronico-panel").hide();
    $("#mpv-expedientes-panel").hide();
    $("#detalle-solicitud-ingresada-panel").hide();
    $("#detalle-solicitud-ingresada-electronico-panel").hide();
    $("#costo-arbitroUnico-panel").hide();
    $("#costo-tribunalArbitral-panel").hide();
    $("#costo-secretariaArbitral-panel").hide();
    $("#costo-cuantiaIndeterminada-panel").hide();
    $("#costo-arbitroEmergencia-panel").hide();
    $("#costo-centroArbitral-panel").show();
    $("#mpv-nuevaSolicitud-panel").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-general").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-contratacionPublica").hide();
    $("#solicitud-fisico-panel-arbitrajeGeneral").hide();
    $("#solicitud-electronico-panel-arbitrajeGeneral").hide();
    $("#solicitud-fisico-panel-arbitrajeContratacionPublica").hide();
    $("#solicitud-electronico-panel-arbitrajeContratacionPublica").hide();
    $("#home-panel").hide();
    $("#solicitud-MPV-panel").hide();
    $("#gestionDocumentos-panel").hide();
    $("#casillaElectronica-panel").hide();
    $("#votaciones-panel").hide();
    $("#votacion-panel").hide();
  });

  $(".showNuevaSolicitud").click(function () {
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
    $("#solicitud-electronico-panel").hide();
    $("#mpv-expedientes-panel").hide();
    $("#detalle-solicitud-ingresada-panel").hide();
    $("#detalle-solicitud-ingresada-electronico-panel").hide();
    $("#costo-arbitroUnico-panel").hide();
    $("#costo-tribunalArbitral-panel").hide();
    $("#costo-secretariaArbitral-panel").hide();
    $("#costo-cuantiaIndeterminada-panel").hide();
    $("#costo-arbitroEmergencia-panel").hide();
    $("#costo-centroArbitral-panel").hide();
    $("#mpv-nuevaSolicitud-panel").show();
    $("#mpv-tipoSolicitud-panel-arbitraje-general").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-contratacionPublica").hide();
    $("#solicitud-fisico-panel-arbitrajeGeneral").hide();
    $("#solicitud-electronico-panel-arbitrajeGeneral").hide();
    $("#solicitud-fisico-panel-arbitrajeContratacionPublica").hide();
    $("#solicitud-electronico-panel-arbitrajeContratacionPublica").hide();
    $("#home-panel").hide();
    $("#solicitud-MPV-panel").hide();
    $("#gestionDocumentos-panel").hide();
    $("#casillaElectronica-panel").hide();
    $("#votaciones-panel").hide();
    $("#votacion-panel").hide();
  });

  $(".showTipoSolicitud-arbitrajeGeneral").click(function () {
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
    $("#solicitud-electronico-panel").hide();
    $("#mpv-expedientes-panel").hide();
    $("#detalle-solicitud-ingresada-panel").hide();
    $("#detalle-solicitud-ingresada-electronico-panel").hide();
    $("#costo-arbitroUnico-panel").hide();
    $("#costo-tribunalArbitral-panel").hide();
    $("#costo-secretariaArbitral-panel").hide();
    $("#costo-cuantiaIndeterminada-panel").hide();
    $("#costo-arbitroEmergencia-panel").hide();
    $("#costo-centroArbitral-panel").hide();
    $("#mpv-nuevaSolicitud-panel").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-general").show();
    $("#mpv-tipoSolicitud-panel-arbitraje-contratacionPublica").hide();
    $("#solicitud-fisico-panel-arbitrajeGeneral").hide();
    $("#solicitud-electronico-panel-arbitrajeGeneral").hide();
    $("#solicitud-fisico-panel-arbitrajeContratacionPublica").hide();
    $("#solicitud-electronico-panel-arbitrajeContratacionPublica").hide();
    $("#home-panel").hide();
    $("#solicitud-MPV-panel").hide();
    $("#gestionDocumentos-panel").hide();
    $("#casillaElectronica-panel").hide();
    $("#votaciones-panel").hide();
    $("#votacion-panel").hide();
  });

  $(".showTipoSolicitud-ContratacionPublica").click(function () {
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
    $("#solicitud-electronico-panel").hide();
    $("#mpv-expedientes-panel").hide();
    $("#detalle-solicitud-ingresada-panel").hide();
    $("#detalle-solicitud-ingresada-electronico-panel").hide();
    $("#costo-arbitroUnico-panel").hide();
    $("#costo-tribunalArbitral-panel").hide();
    $("#costo-secretariaArbitral-panel").hide();
    $("#costo-cuantiaIndeterminada-panel").hide();
    $("#costo-arbitroEmergencia-panel").hide();
    $("#costo-centroArbitral-panel").hide();
    $("#mpv-nuevaSolicitud-panel").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-general").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-contratacionPublica").show();
    $("#solicitud-fisico-panel-arbitrajeGeneral").hide();
    $("#solicitud-electronico-panel-arbitrajeGeneral").hide();
    $("#solicitud-fisico-panel-arbitrajeContratacionPublica").hide();
    $("#solicitud-electronico-panel-arbitrajeContratacionPublica").hide();
    $("#home-panel").hide();
    $("#solicitud-MPV-panel").hide();
    $("#gestionDocumentos-panel").hide();
    $("#casillaElectronica-panel").hide();
    $("#votaciones-panel").hide();
    $("#votacion-panel").hide();
  });
  
  $(".showSolicitudArbitrajeGeneralFisico").click(function () {
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
    $("#solicitud-electronico-panel").hide();
    $("#mpv-expedientes-panel").hide();
    $("#detalle-solicitud-ingresada-panel").hide();
    $("#detalle-solicitud-ingresada-electronico-panel").hide();
    $("#costo-arbitroUnico-panel").hide();
    $("#costo-tribunalArbitral-panel").hide();
    $("#costo-secretariaArbitral-panel").hide();
    $("#costo-cuantiaIndeterminada-panel").hide();
    $("#costo-arbitroEmergencia-panel").hide();
    $("#costo-centroArbitral-panel").hide();
    $("#mpv-nuevaSolicitud-panel").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-general").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-contratacionPublica").hide();
    $("#solicitud-fisico-panel-arbitrajeGeneral").show();
    $("#solicitud-electronico-panel-arbitrajeGeneral").hide();
    $("#solicitud-fisico-panel-arbitrajeContratacionPublica").hide();
    $("#solicitud-electronico-panel-arbitrajeContratacionPublica").hide();
    $("#home-panel").hide();
    $("#solicitud-MPV-panel").hide();
    $("#gestionDocumentos-panel").hide();
    $("#casillaElectronica-panel").hide();
    $("#votaciones-panel").hide();
    $("#votacion-panel").hide();
  });

  $(".showSolicitudArbitrajeGeneralElectronico").click(function () {
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
    $("#solicitud-electronico-panel").hide();
    $("#mpv-expedientes-panel").hide();
    $("#detalle-solicitud-ingresada-panel").hide();
    $("#detalle-solicitud-ingresada-electronico-panel").hide();
    $("#costo-arbitroUnico-panel").hide();
    $("#costo-tribunalArbitral-panel").hide();
    $("#costo-secretariaArbitral-panel").hide();
    $("#costo-cuantiaIndeterminada-panel").hide();
    $("#costo-arbitroEmergencia-panel").hide();
    $("#costo-centroArbitral-panel").hide();
    $("#mpv-nuevaSolicitud-panel").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-general").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-contratacionPublica").hide();
    $("#solicitud-fisico-panel-arbitrajeGeneral").hide();
    $("#solicitud-electronico-panel-arbitrajeGeneral").show();
    $("#solicitud-fisico-panel-arbitrajeContratacionPublica").hide();
    $("#solicitud-electronico-panel-arbitrajeContratacionPublica").hide();
    $("#home-panel").hide();
    $("#solicitud-MPV-panel").hide();
    $("#gestionDocumentos-panel").hide();
    $("#casillaElectronica-panel").hide();
    $("#votaciones-panel").hide();
    $("#votacion-panel").hide();
  });

  $(".showSolicitudArbitrajeContratacionPublicaFisico").click(function () {
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
    $("#solicitud-electronico-panel").hide();
    $("#mpv-expedientes-panel").hide();
    $("#detalle-solicitud-ingresada-panel").hide();
    $("#detalle-solicitud-ingresada-electronico-panel").hide();
    $("#costo-arbitroUnico-panel").hide();
    $("#costo-tribunalArbitral-panel").hide();
    $("#costo-secretariaArbitral-panel").hide();
    $("#costo-cuantiaIndeterminada-panel").hide();
    $("#costo-arbitroEmergencia-panel").hide();
    $("#costo-centroArbitral-panel").hide();
    $("#mpv-nuevaSolicitud-panel").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-general").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-contratacionPublica").hide();
    $("#solicitud-fisico-panel-arbitrajeGeneral").hide();
    $("#solicitud-electronico-panel-arbitrajeGeneral").hide();
    $("#solicitud-fisico-panel-arbitrajeContratacionPublica").show();
    $("#solicitud-electronico-panel-arbitrajeContratacionPublica").hide();
    $("#home-panel").hide();
    $("#solicitud-MPV-panel").hide();
    $("#gestionDocumentos-panel").hide();
    $("#casillaElectronica-panel").hide();
    $("#votaciones-panel").hide();
    $("#votacion-panel").hide();
  });

  $(".showSolicitudArbitrajeContratacionPublicaElectronico").click(function () {
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
    $("#solicitud-electronico-panel").hide();
    $("#mpv-expedientes-panel").hide();
    $("#detalle-solicitud-ingresada-panel").hide();
    $("#detalle-solicitud-ingresada-electronico-panel").hide();
    $("#costo-arbitroUnico-panel").hide();
    $("#costo-tribunalArbitral-panel").hide();
    $("#costo-secretariaArbitral-panel").hide();
    $("#costo-cuantiaIndeterminada-panel").hide();
    $("#costo-arbitroEmergencia-panel").hide();
    $("#costo-centroArbitral-panel").hide();
    $("#mpv-nuevaSolicitud-panel").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-general").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-contratacionPublica").hide();
    $("#solicitud-fisico-panel-arbitrajeGeneral").hide();
    $("#solicitud-electronico-panel-arbitrajeGeneral").hide();
    $("#solicitud-fisico-panel-arbitrajeContratacionPublica").hide();
    $("#solicitud-electronico-panel-arbitrajeContratacionPublica").show();
    $("#home-panel").hide();
    $("#solicitud-MPV-panel").hide();
    $("#gestionDocumentos-panel").hide();
    $("#casillaElectronica-panel").hide();
    $("#votaciones-panel").hide();
    $("#votacion-panel").hide();
  });

  $(".showMPV").click(function () {
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
    $("#solicitud-electronico-panel").hide();
    $("#mpv-expedientes-panel").hide();
    $("#detalle-solicitud-ingresada-panel").hide();
    $("#detalle-solicitud-ingresada-electronico-panel").hide();
    $("#costo-arbitroUnico-panel").hide();
    $("#costo-tribunalArbitral-panel").hide();
    $("#costo-secretariaArbitral-panel").hide();
    $("#costo-cuantiaIndeterminada-panel").hide();
    $("#costo-arbitroEmergencia-panel").hide();
    $("#costo-centroArbitral-panel").hide();
    $("#mpv-nuevaSolicitud-panel").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-general").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-contratacionPublica").hide();
    $("#solicitud-fisico-panel-arbitrajeGeneral").hide();
    $("#solicitud-electronico-panel-arbitrajeGeneral").hide();
    $("#solicitud-fisico-panel-arbitrajeContratacionPublica").hide();
    $("#solicitud-electronico-panel-arbitrajeContratacionPublica").hide();
    $("#home-panel").hide();
    $("#solicitud-MPV-panel").show();
    $("#gestionDocumentos-panel").hide();
    $("#casillaElectronica-panel").hide();
    $("#votaciones-panel").hide();
    $("#votacion-panel").hide();
  });

  $(".showGestionDocumentos").click(function () {
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
    $("#solicitud-electronico-panel").hide();
    $("#mpv-expedientes-panel").hide();
    $("#detalle-solicitud-ingresada-panel").hide();
    $("#detalle-solicitud-ingresada-electronico-panel").hide();
    $("#costo-arbitroUnico-panel").hide();
    $("#costo-tribunalArbitral-panel").hide();
    $("#costo-secretariaArbitral-panel").hide();
    $("#costo-cuantiaIndeterminada-panel").hide();
    $("#costo-arbitroEmergencia-panel").hide();
    $("#costo-centroArbitral-panel").hide();
    $("#mpv-nuevaSolicitud-panel").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-general").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-contratacionPublica").hide();
    $("#solicitud-fisico-panel-arbitrajeGeneral").hide();
    $("#solicitud-electronico-panel-arbitrajeGeneral").hide();
    $("#solicitud-fisico-panel-arbitrajeContratacionPublica").hide();
    $("#solicitud-electronico-panel-arbitrajeContratacionPublica").hide();
    $("#home-panel").hide();
    $("#solicitud-MPV-panel").hide();
    $("#gestionDocumentos-panel").show();
    $("#casillaElectronica-panel").hide();
    $("#votaciones-panel").hide();
    $("#votacion-panel").hide();
  });

  $(".showCasillaElectronica").click(function () {
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
    $("#solicitud-electronico-panel").hide();
    $("#mpv-expedientes-panel").hide();
    $("#detalle-solicitud-ingresada-panel").hide();
    $("#detalle-solicitud-ingresada-electronico-panel").hide();
    $("#costo-arbitroUnico-panel").hide();
    $("#costo-tribunalArbitral-panel").hide();
    $("#costo-secretariaArbitral-panel").hide();
    $("#costo-cuantiaIndeterminada-panel").hide();
    $("#costo-arbitroEmergencia-panel").hide();
    $("#costo-centroArbitral-panel").hide();
    $("#mpv-nuevaSolicitud-panel").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-general").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-contratacionPublica").hide();
    $("#solicitud-fisico-panel-arbitrajeGeneral").hide();
    $("#solicitud-electronico-panel-arbitrajeGeneral").hide();
    $("#solicitud-fisico-panel-arbitrajeContratacionPublica").hide();
    $("#solicitud-electronico-panel-arbitrajeContratacionPublica").hide();
    $("#home-panel").hide();
    $("#solicitud-MPV-panel").hide();
    $("#gestionDocumentos-panel").hide();
    $("#casillaElectronica-panel").show();
    $("#votaciones-panel").hide();
    $("#votacion-panel").hide();
  });

  $(".showVotaciones").click(function () {
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
    $("#solicitud-electronico-panel").hide();
    $("#mpv-expedientes-panel").hide();
    $("#detalle-solicitud-ingresada-panel").hide();
    $("#detalle-solicitud-ingresada-electronico-panel").hide();
    $("#costo-arbitroUnico-panel").hide();
    $("#costo-tribunalArbitral-panel").hide();
    $("#costo-secretariaArbitral-panel").hide();
    $("#costo-cuantiaIndeterminada-panel").hide();
    $("#costo-arbitroEmergencia-panel").hide();
    $("#costo-centroArbitral-panel").hide();
    $("#mpv-nuevaSolicitud-panel").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-general").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-contratacionPublica").hide();
    $("#solicitud-fisico-panel-arbitrajeGeneral").hide();
    $("#solicitud-electronico-panel-arbitrajeGeneral").hide();
    $("#solicitud-fisico-panel-arbitrajeContratacionPublica").hide();
    $("#solicitud-electronico-panel-arbitrajeContratacionPublica").hide();
    $("#home-panel").hide();
    $("#solicitud-MPV-panel").hide();
    $("#gestionDocumentos-panel").hide();
    $("#casillaElectronica-panel").hide();
    $("#votaciones-panel").show();
    $("#votacion-panel").hide();
  });

  $(".showVotacionPanel").click(function () {
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
    $("#solicitud-electronico-panel").hide();
    $("#mpv-expedientes-panel").hide();
    $("#detalle-solicitud-ingresada-panel").hide();
    $("#detalle-solicitud-ingresada-electronico-panel").hide();
    $("#costo-arbitroUnico-panel").hide();
    $("#costo-tribunalArbitral-panel").hide();
    $("#costo-secretariaArbitral-panel").hide();
    $("#costo-cuantiaIndeterminada-panel").hide();
    $("#costo-arbitroEmergencia-panel").hide();
    $("#costo-centroArbitral-panel").hide();
    $("#mpv-nuevaSolicitud-panel").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-general").hide();
    $("#mpv-tipoSolicitud-panel-arbitraje-contratacionPublica").hide();
    $("#solicitud-fisico-panel-arbitrajeGeneral").hide();
    $("#solicitud-electronico-panel-arbitrajeGeneral").hide();
    $("#solicitud-fisico-panel-arbitrajeContratacionPublica").hide();
    $("#solicitud-electronico-panel-arbitrajeContratacionPublica").hide();
    $("#home-panel").hide();
    $("#solicitud-MPV-panel").hide();
    $("#gestionDocumentos-panel").hide();
    $("#casillaElectronica-panel").hide();
    $("#votaciones-panel").hide();
    $("#votacion-panel").show();
  });

  // END SHOW HIDE PANELS

  $('#imgFileLogoEmpresa').change(function () {
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
  $('#checkContratacionPublicaNp').click(function () {
    $("#tag-arbitro").toggleClass("flex hide");
  });
  // End Show hide Tag
  // End admin dashboard

  // SHOW HIDE CHECKBOX
  $("#checkDatosDemandanteRepLegalSfPn-ag").click(function () {
    if ($(this).is(":checked")) {
      $("#fieldset-datosDemandanteRepLegalSfPn-ag").show();
    } else {
      $("#fieldset-datosDemandanteRepLegalSfPn-ag").hide();
    }
  });

  $("#checkDatosDemandanteRepLegalSfPn-acp").click(function () {
    if ($(this).is(":checked")) {
      $("#fieldset-datosDemandanteRepLegalSfPn-acp").show();
    } else {
      $("#fieldset-datosDemandanteRepLegalSfPn-acp").hide();
    }
  });

  $("#checkDatosDemandanteRepLegalSfPj-ag").click(function () {
    if ($(this).is(":checked")) {
      $("#fieldset-datosDemandanteRepLegalSfPj-ag").show();
    } else {
      $("#fieldset-datosDemandanteRepLegalSfPj-ag").hide();
    }
  });



  $("#checkDatosDemandanteRepLegalSePn-ag").click(function () {
    if ($(this).is(":checked")) {
      $("#fieldset-datosDemandanteRepLegalSePn-ag").show();
    } else {
      $("#fieldset-datosDemandanteRepLegalSePn-ag").hide();
    }
  });

  $("#checkDatosDemandanteRepLegalSePn-acp").click(function () {
    if ($(this).is(":checked")) {
      $("#fieldset-datosDemandanteRepLegalSePn-acp").show();
    } else {
      $("#fieldset-datosDemandanteRepLegalSePn-acp").hide();
    }
  });

  $("#checkDatosDemandanteRepLegalSePj-ag").click(function () {
    if ($(this).is(":checked")) {
      $("#fieldset-datosDemandanteRepLegalSePj-ag").show();
    } else {
      $("#fieldset-datosDemandanteRepLegalSePj").hide();
    }
  });

  $("#checkShowInputEnlaceSf-ag").click(function () {
    if ($(this).is(":checked")) {
      $("#fieldset-enlaceArchivoPesado-ag").show();
    } else {
      $("#fieldset-enlaceArchivoPesado-ag").hide();
    }
  });

  $("#checkShowInputEnlaceSf-acp").click(function () {
    if ($(this).is(":checked")) {
      $("#fieldset-enlaceArchivoPesado-acp").show();
    } else {
      $("#fieldset-enlaceArchivoPesado-acp").hide();
    }
  });

  $("#checkShowInputEnlaceSe-ag").click(function () {
    if ($(this).is(":checked")) {
      $("#fieldset-enlaceArchivoPesado-se-ag").show();
    } else {
      $("#fieldset-enlaceArchivoPesado-se-ag").hide();
    }
  });

  $("#checkShowInputEnlaceSe-acp").click(function () {
    if ($(this).is(":checked")) {
      $("#fieldset-enlaceArchivoPesado-se-acp").show();
    } else {
      $("#fieldset-enlaceArchivoPesado-se-acp").hide();
    }
  });

  $("#checkShowInputEnlaceSeSi-ag").click(function () {
    if ($(this).is(":checked")) {
      $("#fieldset-enlaceArchivoPesado-se-si-ag").show();
    } else {
      $("#fieldset-enlaceArchivoPesado-se-si-ag").hide();
    }
  });

  $("#checkDatosRepresentanteLegalSe-ag").click(function () {
    if ($(this).is(":checked")) {
      $("#fieldset-DatosRepresntanteLegalSe-ag").show();
    } else {
      $("#fieldset-DatosRepresntanteLegalSe-ag").hide();
    }
  });

  $("#cuantiaDeterminado-ag").click(function () {
    $("#fieldset-cuantia-determinada-ag").show();
  });

  $("#cuantiaDeterminado-acp").click(function () {
    $("#fieldset-cuantia-determinada-acp").show();
  });

  $("#cuantiaIndeterminado-ag").click(function () {
    $("#fieldset-cuantia-determinada-ag").hide();
  });

  $("#cuantiaIndeterminado-acp").click(function () {
    $("#fieldset-cuantia-determinada-acp").hide();
  });

  $("#cuantiaDeterminadoSi-ag").click(function () {
    $("#fieldset-cuantia-determinada-Si-ag").show();
  });

  $("#cuantiaIndeterminadoSi-ag").click(function () {
    $("#fieldset-cuantia-determinada-Si-ag").hide();
  });

  $("#datosDemandanteSfPj-ag").click(function () {
    $("#fieldset-demandante-sf-pn-ag").hide();
    $("#fieldset-demandante-sf-pj-ag").show();
  });

  $("#datosDemandanteSfPn-ag").click(function () {
    $("#fieldset-demandante-sf-pn-ag").show();
    $("#fieldset-demandante-sf-pj-ag").hide();
  });

  $("#datosDemandanteSfPj-acp").click(function () {
    $("#fieldset-demandante-sf-pn-acp").hide();
    $("#fieldset-demandante-sf-pj-acp").show();
  });

  $("#datosDemandanteSfPn-acp").click(function () {
    $("#fieldset-demandante-sf-pn-acp").show();
    $("#fieldset-demandante-sf-pj-acp").hide();
  });

  $("#datosDemandadoSfPj-ag").click(function () {
    $("#fieldset-demandado-sf-pn-ag").hide();
    $("#fieldset-demandado-sf-pj-ag").show();
  });

  $("#datosDemandadoSfPj-acp").click(function () {
    $("#fieldset-demandado-sf-pn-acp").hide();
    $("#fieldset-demandado-sf-pj-acp").show();
  });

  $("#datosDemandadoSfPn-ag").click(function () {
    $("#fieldset-demandado-sf-pn-ag").show();
    $("#fieldset-demandado-sf-pj-ag").hide();
  });

  $("#datosDemandadoSfPn-acp").click(function () {
    $("#fieldset-demandado-sf-pn-acp").show();
    $("#fieldset-demandado-sf-pj-acp").hide();
  });

  $("#datosDemandanteSePj-ag").click(function () {
    $("#fieldset-demandante-se-pn-ag").hide();
    $("#fieldset-demandante-se-pj-ag").show();
  });

  $("#datosDemandanteSePn-ag").click(function () {
    $("#fieldset-demandante-se-pn-ag").show();
    $("#fieldset-demandante-se-pj-ag").hide();
  });

  $("#datosDemandadoSePj-ag").click(function () {
    $("#fieldset-demandado-se-pn-ag").hide();
    $("#fieldset-demandado-se-pj-ag").show();
  });

  $("#datosDemandadoSePj-acp").click(function () {
    $("#fieldset-demandado-se-pn-acp").hide();
    $("#fieldset-demandado-se-pj-acp").show();
  });

  $("#datosDemandadoSePn-ag").click(function () {
    $("#fieldset-demandado-se-pn-ag").show();
    $("#fieldset-demandado-se-pj-ag").hide();
  });

  $("#datosDemandadoSePn-acp").click(function () {
    $("#fieldset-demandado-se-pn-acp").show();
    $("#fieldset-demandado-se-pj-acp").hide();
  });

  $("#datosDemandanteSiPj-ag").click(function () {
    $("#fieldset-demandante-si-pn-ag").hide();
    $("#fieldset-demandante-si-pj-ag").show();
  });

  $("#datosDemandanteSiPn-ag").click(function () {
    $("#fieldset-demandante-si-pn-ag").show();
    $("#fieldset-demandante-si-pj-ag").hide();
  });

  $("#datosDemandadoSiPj-ag").click(function () {
    $("#fieldset-demandado-si-pn-ag").hide();
    $("#fieldset-demandado-si-pj-ag").show();
  });

  $("#datosDemandadoSiPn-ag").click(function () {
    $("#fieldset-demandado-si-pn-ag").show();
    $("#fieldset-demandado-si-pj-ag").hide();
  });

  $("#radioDatosRemitenteMPV-pn").click(function () {
    $("#fieldset-remitente-mpv-pn").show();
    $("#fieldset-remitente-mpv-pj").hide();
  });

  $("#radioDatosRemitenteMPV-pj").click(function () {
    $("#fieldset-remitente-mpv-pn").hide();
    $("#fieldset-remitente-mpv-pj").show();
  });

  $("#checkDatosDemandanteRepLegalSiPn-ag").click(function () {
    if ($(this).is(":checked")) {
      $("#fieldset-datosDemandanteRepLegalSiPn-ag").show();
    } else {
      $("#fieldset-datosDemandanteRepLegalSiPn-ag").hide();
    }
  });

  // END SHOW HIDE CHECKBOX

  // SHOW HIDE SELECT
  $('#comprobanteSelectorSe').change(function () {
    var myID = $(this).val();
    $('.comprobanteSe').each(function () {
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

  // $('.select2modal').each(function () {
  //   $(this).select2({
  //     theme: "bootstrap-5",
  //     width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
  //     placeholder: $(this).data('placeholder'),
  //     dropdownParent: $(this).parent()
  //   });
  // });

  $(".select2modal").select2({
    theme: "bootstrap-5",
    width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
    dropdownParent: $(".modal")
   });

  $('.select2-multiple').select2({
    theme: "bootstrap-5",
    width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
    placeholder: $(this).data('placeholder'),
    closeOnSelect: false,
    allowClear: true,
  });

  // END ACTIVAR SELECT2

  // TOOLTIP
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })
  // END TOOLTIP

  $("#optionVotoModificar").click(function () {
    $("#modificarVotacionFile").show();
  });

  $("#optionVotoRechazar").click(function () {
    $("#modificarVotacionFile").hide();
  });

  $("#optionVotoAceptar").click(function () {
    $("#modificarVotacionFile").hide();
  });

  var textarea = document.querySelector('textarea');




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

autosize();
function autosize(){
    var text = $('.input-chat');

    text.each(function(){
        $(this).attr('rows',1);
        resize($(this));
    });

    text.on('input', function(){
        resize($(this));
    });
    
    function resize ($text) {
        $text.css('height', 'auto');
        $text.css('height', $text[0].scrollHeight+'px');
    }
}


