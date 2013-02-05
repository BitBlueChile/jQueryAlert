/*!
* jQuery JavaScript 
* http://jquery.com/
*
* Requiere Twitter BootStrap
* http://twitter.github.com/bootstrap/
* 
* Copyright 2013 bitBlue Informática EIRL
* 
* Date: Febrero 05 del 2013
* Autor: Rubén Toro L.
*
* Usos
* 
* $().jQueryAlert('message');
* $().jQueryAlert('title', 'message');
* $().jQueryAlert('title', 'message', 'acciones del boton aceptar OnClick');
*/

(function ($) {

    $.fn.jQueryAlert = function () {

        var capa = '<div id="alert_message" class="alert alert-block alert-info modal hide fade in" role="dialog" data-keyboard="false" data-backdrop="static">';
        capa += '<div class="modal-body"><p><strong id="message" style="font-size:15px">Alert</strong></p></div>';
        capa += '<div style="float: right;margin-left: 25px;">';
        capa += '<button id="actionMesage" type="button" class="btn" data-dismiss="modal" aria-hidden="true">Aceptar</button></div></div>';

        switch ($().jQueryAlert.arguments.length) {
            case 0:
                break;
            case 1:
                jQuery('body').append(capa);
                jQuery('#message').empty();
                jQuery('#message').append($().jQueryAlert.arguments[0]);
                jQuery('#alert_message').modal('show');
                break;
            case 2:
                var titulo = $().jQueryAlert.arguments[0].length > 0 ? '<div class="alert alert-info">' + $().jQueryAlert.arguments[0] + '</div>' : '<div></div>';
                var mesaje = '<div class="alert-block" style="padding-right:10px;padding-left:10px;">' + $().jQueryAlert.arguments[1] + '</div>';
                jQuery('body').append(capa);
                jQuery('#message').empty();
                jQuery('#message').append(titulo + mesaje);
                jQuery('#alert_message').modal('show');
                break;
            case 3:
                var titulo = $().jQueryAlert.arguments[0].length > 0 ? '<div class="alert alert-info">' + $().jQueryAlert.arguments[0] + '</div>' : '<div></div>';
                var mesaje = '<div class="alert-block" style="padding-right:10px;padding-left:10px;">' + $().jQueryAlert.arguments[1] + '</div>';
                jQuery('body').append(capa);
                jQuery('#actionMesage').attr('onclick', $().jQueryAlert.arguments[2]);
                jQuery('#message').empty();
                jQuery('#message').append(titulo + mesaje);
                jQuery('#alert_message').modal('show');
                break;
            default:
                break;
        }

    }

})(jQuery);