/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';

(function($) {
  $.isCharDigit = function(n) {
    return !!n.trim() && n > -1;
  }

  $.fn.getCursorPosition = function() {
    var input = this.get(0);
    if (!input) return; // No (input) element found
    if ('selectionStart' in input) {
      // Standard-compliant browsers
      return input.selectionStart;
    } else if (document.selection) {
      // IE
      input.focus();
      var sel = document.selection.createRange();
      var selLen = document.selection.createRange().text.length;
      sel.moveStart('character', -input.value.length);
      return sel.text.length - selLen;
    }
  };

  $.fn.setCursorPosition = function(pos1, pos2) {
    var input = this.get(0);
    var strLength = input.value.length;
    return function() {
      if (input.setSelectionRange !== undefined) {
        input.setSelectionRange(pos1, pos2);
      } else {
        $(input).val(input.value);
      }
    };
  };

  $.fn.tabLeftInpTime = function(inp) {
    return $(inp).setCursorPosition(0, 2);
  };

  $.fn.tabRightInpTime = function(inp) {
    return $(inp).setCursorPosition(3, 5);
  };

  $.fn.incHours = function(strTime) {
    var hours = getHours(strTime);
    if (hours === '23') {
      hours = '00';
    } else {
      hours++;
    }
    return dopZero(hours, colPosHours) + ':' + dopZero(getMinutes(strTime),
      colPosMinutes);
  };

  $.fn.decHours = function(strTime) {
    var hours = getHours(strTime);
    if (hours === '00') {
      hours = '23';
    } else {
      hours--;
    }
    return dopZero(hours, colPosHours) + ':' + dopZero(getMinutes(strTime),
      colPosMinutes);
  };

  $.fn.decMinutes = function(strTime) {
    var minutes = getMinutes(strTime);
    if (getMinutes(strTime) === '00') {
      minutes = 59;
      strTime = decHours(strTime);
    } else {
      minutes--;
    }
    return dopZero(getHours(strTime), colPosHours) + ':' + dopZero(minutes,
      colPosMinutes);
  };

  $.fn.incMinutes = function(strTime) {
    var minutes = getMinutes(strTime);
    if (minutes === '59') {
      minutes = 0;
      strTime = incHours(strTime);
    } else {
      minutes++;
    }
    return dopZero(getHours(strTime), colPosHours) + ':' + dopZero(minutes,
      colPosMinutes);
  };

  $.fn.dopZero = function(str, colPos) {
    var strDopZero = str;
    var maxCount = 0;
    maxCount = colPos - String(str).length;
    for (var count = 0; count < maxCount; count++) {
      strDopZero = String(0) + String(strDopZero);
    }
    console.log('Dop Zero:' + strDopZero);

    return strDopZero;
  }

  $.fn.setHours = function(inpTime, hours) {
    setTime(inpTime, hours, getMinutes($(inpTime).val()));
  };

  $.fn.setMinutes = function(inpTime, minutes) {
    setTime(inpTime, getHours($(inpTime).val()), minutes);
  };

  $.fn.setTime = function(inpTime, hours, minutes) {
    $(inpTime).val(dopZero(hours, colPosHours) + ':' + dopZero(minutes,
      colPosMinutes));
    console.log('setTime(): ------------------------------------------');
    console.log(dopZero(hours, colPosHours) + ':' + dopZero(minutes,
      colPosMinutes));
  }



  $.fn.getHours = function(strTime) {
    var pat = /^\d*/;
    var hours = String(strTime).match(pat);
    return dopZero(hours[0], colPosHours);
  };

  $.fn.getMinutes = function(strTime) {
    var pat = /\d*$/;
    var minutes = String(strTime).match(pat);
    return dopZero(minutes[0], colPosMinutes);
  };

  $.fn.checkHours = function(inpTime) {
    var hours = getHours($(inpTime).val());
    if (hours > 23) {
      setHours(inpTime, '23');
    } else {
      setHours(inpTime, hours);
    }
    //setTimeout(tabRightInpTime(inpTime), 5);
  };
  /*
  $.fn.checkMinutes = function(strTime) {
    var pattern = new RegExp(":\d{0,2}$");
    if (strTime.search(pattern) !== -1) {

    }
  };
  */

})(jQuery);


function Test() {
  /*
  console.log('----------------- Test -----------------');

  console.log(dopZero('0', 2));
  console.log(dopZero('1', 2));
  console.log(dopZero('2', 2));
  console.log(dopZero('3', 2));
  console.log(dopZero('4', 2));
  console.log(dopZero('5', 2));
  console.log(dopZero('6', 2));
  console.log(dopZero('7', 2));
  console.log(dopZero('8', 2));
  console.log(dopZero('9', 2));
  console.log(dopZero('10', 2));
  console.log(dopZero('11', 2));
  */
  /*
  console.log(incHours('00:00'));
  console.log(incHours('01:00'));
  console.log(incHours('23:00'));
*/
  /*
    var inpTime = $('#inpTime');
    setHours(inpTime, 0);
    console.log($(inpTime).val());
    setHours(inpTime, 1);
    console.log($(inpTime).val());
    setHours(inpTime, 2);
    console.log($(inpTime).val());
    setHours(inpTime, 3);
    console.log($(inpTime).val());
    setHours(inpTime, 4);
    console.log($(inpTime).val());
    setHours(inpTime, 5);
    console.log($(inpTime).val());
    setHours(inpTime, 6);
    console.log($(inpTime).val());
    setHours(inpTime, 7);
    console.log($(inpTime).val());
    setHours(inpTime, 8);
    console.log($(inpTime).val());
    setHours(inpTime, 9);
    console.log($(inpTime).val());
    setHours(inpTime, 10);
    console.log($(inpTime).val());
    setMinutes(inpTime, 11);
    console.log($(inpTime).val());
    setMinutes(inpTime, 12);
    console.log($(inpTime).val());
    console.log();

  console.log(dopZero(0, 2));

  console.log('================= Test =================');
*/
}
