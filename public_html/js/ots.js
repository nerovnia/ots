/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';

var colPosHours = 2;
var colPosMinutes = 2;
var keyCodeLeft = 37;
var keyCodeRight = 39;
var keyCodeUp = 38;
var keyCodeDown = 40;
var keyCodeEnter = 13;
var keyCodeTab = 9;

window.onload = function() {
  //alert($.isCharDigit('3'));
  //$('#inpTime').timepicker();
  //$('#inpTime').timepicker();

  //Test();
  /*
    var btnAddEps = $('#btn-add-eps');

    btnAddEps.click(function() {
      var inpTime = $('#inpTime');
      var spTime = $('#s-p-time');
      $('#s-p-time').val($('#inpTime').val());
      $('#s-p-eps').val($('#sel-mark-eps').val());
      $('#s-n-time').val($('#inpTime').val());
      $('#s-n-eps').text($('#sel-mark-eps').val());
      $('#s-zauv').text($('#zauv').val());
      $('#s-prim').text($('#prim').val());

      //alert($('#inpTime').val());
    });


    var inpTime = $('#inpTime');
    if (inpTime.val() === '') {
      inpTime.val('00:00');
      //    inpTime.select();
      setTimeout(tabLeftInpTime(inpTime), 5);
      inpTime.attr('maxlength', 5);
      inpTime.attr('size', 3);
    }

    inpTime.click(function() {
      console.log(getHours(inpTime.val()) + '\t\t' + getMinutes(inpTime.val()));
      var pos = inpTime.getCursorPosition();
      if (pos > 2) {
        setTimeout(tabRightInpTime(this), 5);
      } else {
        setTimeout(tabLeftInpTime(this), 5);
      }
    });

    inpTime.focus(function() {
      setTimeout(tabRightInpTime(this), 5);
    });

    inpTime.on('keydown', function(e) {
      //        console.log();
      var pos = inpTime.getCursorPosition();
      if (!isCharDigit(String.fromCharCode(e.keyCode))) {
        switch (e.keyCode) {
          case keyCodeRight:
            setTimeout(tabRightInpTime(this), 5);
            break;
          case keyCodeLeft:
            setTimeout(tabLeftInpTime(this), 5);
            break;
          case keyCodeUp:
            if (pos < 2) {
              $(this).val(incHours($(this).val()));
              setTimeout(tabLeftInpTime(this), 5);
              //console.log('incHours');
            } else {
              $(this).val(incMinutes($(this).val()));
              setTimeout(tabRightInpTime(this), 5);
              //console.log('incMinutes');
            }
            //                  setTimeout(tabLeftInpTime(this), 5);
            break;
          case keyCodeDown:
            if (pos < 2) {
              $(this).val(decHours($(this).val()));
              setTimeout(tabLeftInpTime(this), 5);
            } else {
              $(this).val(decMinutes($(this).val()));
              setTimeout(tabRightInpTime(this), 5);
            }
            //                  setTimeout(tabLeftInpTime(this), 5);
            break;
          case keyCodeTab:
            break;
          case keyCodeEnter:
            break;
          default:
            e.preventDefault();
            return false;
        }
      } else {
        if ((pos === 0) && (String.fromCharCode(e.keyCode) > 2)) {
          console.log('before change time:' + $(this).val());
          setHours(this, String.fromCharCode(e.keyCode));
          console.log('after change time:' + $(this).val());
          setTimeout(tabRightInpTime(this), 5);
          e.preventDefault();
        }
        if ((pos === 4) && (String.fromCharCode(e.keyCode) > 5)) {

        }
      }
      if (pos === 2) {
        checkHours(this);
        //setTimeout(tabRightInpTime(this), 5);
      }

    });
    */
};
