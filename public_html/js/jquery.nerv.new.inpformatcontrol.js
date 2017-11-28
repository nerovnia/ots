/*
   "use strict";
(function ($) {


 })(jQuery);

*/
$(function() {
  var availableTags = [
    "ActionScript",
    "AppleScript",
    "Asp",
    "BASIC",
    "C",
    "C++",
    "Clojure",
    "COBOL",
    "ColdFusion",
    "Erlang",
    "Fortran",
    "Groovy",
    "Haskell",
    "Java",
    "JavaScript",
    "Lisp",
    "Perl",
    "PHP",
    "Python",
    "Ruby",
    "Scala",
    "Scheme"
  ];
  $("#tags").autocomplete({
    source: availableTags
  });
});


/*
   function modifier( fn ) {
   	return function() {
   		var previous = this.element.val();
   		fn.apply( this, arguments );
   		this._refresh();
   		if ( previous !== this.element.val() ) {
   			this._trigger( "change" );
   		}
   	};
   }
*/
/*
   $.widget('nerv.timepicker', {

      version: "0.0.1",

      widgetEventPrefix: 'timepicker',

      options: {
         format: 'hh:mm'
      },

      _create: function() {
        // handle string values that need to be parsed
        this._setOption( "max", this.options.max );
        this._setOption( "min", this.options.min );
        this._setOption( "step", this.options.step );

        // format the value, but don't constrain
        this._value( this.element.val(), true );

        this._draw();
        this._on( this._events );
        this._refresh();

        // turning off autocomplete prevents the browser from remembering the
        // value when navigating through history, so we re-enable autocomplete
        // if the page is unloaded before the widget is destroyed. #7790
        this._on( this.window, {
          beforeunload: function() {
            this.element.removeAttr( "autocomplete" );
          }
        });
      },

      _init: function () {

         var self = this,
             html = '<input class="ui-timepicker"/>    <input class="ui-timepicker-hour"/><span style="font-size: 1.4em">:</span><input class="ui-timepicker-minute"/>';

         this.element.empty().html( html );
       };
       _keydown: function( event ) {
     		var options = this.options,
     			keyCode = $.ui.keyCode;

     		switch ( event.keyCode ) {
     		case keyCode.UP:
     			this._repeat( null, 1, event );
     			return true;
     		case keyCode.DOWN:
     			this._repeat( null, -1, event );
     			return true;
     		case keyCode.PAGE_UP:
     			this._repeat( null, options.page, event );
     			return true;
     		case keyCode.PAGE_DOWN:
     			this._repeat( null, -options.page, event );
     			return true;
     		}

     		return false;
     	},

      _draw: function() {
        var uiSpinner = this.uiSpinner = this.element
          .addClass( "ui-spinner-input" )
          .attr( "autocomplete", "off" )
          .wrap( this._uiSpinnerHtml() )
          .parent()
            .addClass( "ui-spinner-" + this.options.alignment )
            // add buttons
            .append( this._buttonHtml() );

        this.element.attr( "role", "spinbutton" );

        // button bindings
        this.buttons = uiSpinner.find( ".ui-spinner-button" )
          .attr( "tabIndex", -1 )
          .button()
          .removeClass( "ui-corner-all" );

        // IE 6 doesn't understand height: 50% for the buttons
        // unless the wrapper has an explicit height
        if ( this.buttons.height() > Math.ceil( uiSpinner.height() * 0.5 ) &&
            uiSpinner.height() > 0 ) {
          uiSpinner.height( uiSpinner.height() );
        }

        // disable spinner if element was already disabled
        if ( this.options.disabled ) {
          this.disable();
        }
      },

       _uiSpinnerHtml: function() {
         return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>";
       },
       _destroy: function() {
         this.element
           .removeClass( "ui-timepicker" )
         this.uiSpinner.replaceWith( this.element );
       },

       widget: function() {
         return this.uiSpinner;
       }
      //});
*/
/*
         this.$hour = this.element.children( '.ui-timepicker-hour' ).paddedspinner({
            alignment: 'vertical',
            min: this.hour24 ? -1 : 0,
            max: this.hour24 ? 24 : 13,
            spin: function( e, ui ) {

               var ampm,
                   val = +ui.value,
                   min = self.hour24 ? -1 : 0,
                   max = self.hour24 ? 24 : 13;

               if ( val <= min || val >= max ) {

                  if ( val <= min ) self.$hour.paddedspinner( 'value', max - 1 );
                  if ( val >= max ) self.$hour.paddedspinner( 'value', min + 1 );

                  if ( !self.hour24 ) {
                     ampm = self.$ampm.ampmspinner( 'value' );
                     self.$ampm.ampmspinner( 'value', ampm == 0 ? 1 : 0 );
                  }

                  self._trigger( 'change', self._value() );

                  return false;
               }

               self._trigger( 'change', self._value() );
            },
            stop: function() {

               var val = +self.$hour.val(),
                   min = self.hour24 ? -1 : 0,
                   max = self.hour24 ? 24 : 13;

               if ( val <= min || val >= max ) {
                  self.$hour.val('')
               }

               self._ensureValue();
            }
         });

         this.$minute = this.element.children( '.ui-timepicker-minute' ).paddedspinner({
            alignment: 'vertical',
            min: -1,
            max: 60,
            spin: function( e, ui ) {

               var hour, val = +ui.value;

               if ( val <= -1 || val >= 60 ) {

                  if ( val <= -1 ) self.$minute.paddedspinner( 'value', 59 );
                  if ( val >= 60 ) self.$minute.paddedspinner( 'value', 0 );

                  hour = self.$hour.paddedspinner( 'value' );
                  hour = val == -1 ? hour -1 : hour + 1;
                  self.$hour
                     .paddedspinner( 'value', hour )
                     .data( 'ui-paddedspinner' )._trigger( 'spin', e, { value: hour } );

                  self._trigger( 'change', self._value() );

                  return false;
               }

               self._trigger( 'change', self._value() );
            },
            stop: function() {

               var val = +self.$minute.val();

               if ( val == -1 || val == 60 ) {
                  self.$hour.val('');
               }

               self._ensureValue();

            }
         });

         if ( !this.hour24 ) {

            this.$ampm = this.element.children( '.ui-timepicker-ampm' ).ampmspinner({
               spin: function() {

                  self._trigger( 'change', self._value() );
                  self._ensureValue();
               }
            });

         }

         this._on( this._events );
      },

      _events: {

         'click input': function( e ) {

            var $target = $( e.currentTarget );

            $target.select();
         }
      },

      _destroy: function () {
         this.element.empty();
      },

      _value: function() {
         var hour = +this.$hour.val(),
             min = +this.$minute.val(),
             ampm = this.hour24 ? '' : this.$ampm.val(),
             val;

         if ( window.moment ) {

            hour = ( ampm == 'PM' && hour < 12 ? hour + 12 : hour );
            val = moment({ hour: hour, minute: min });

         } else {

            val = hour + ':' + min;
            if ( !this.hour24 )
               val += ' ' + ampm;
         }

         return val;
      },

      _parse: function( val ) {

         var tm, parts,
             hour, min, ampm;

         if ( window.moment ) {

            if ( val instanceof Date )
               tm = moment( val );
            else
               tm = moment( val, this.options.format );

            if ( !tm.isValid() ) return;

            hour = tm.hour();
            min = tm.minute();

            if ( !this.hour24 ) {
               ampm = hour >= 12 ? 'PM' : 'AM';
               hour = hour > 12 ? hour - 12 : hour
            }

         } else {

            parts = val.split( /[: ]/ );
            if ( parts.length < 2 ) return;

            hour = parts[0];
            min = parts[1];

            if ( !this.hour24 ) {
               ampm = parts[2] || 'AM';
            }
         }

         this.$hour.paddedspinner( 'value', +hour );
         this.$minute.paddedspinner( 'value', +min );

         if ( !this.hour24 ) {
            this.$ampm.ampmspinner( 'value', ampm == 'AM' ? 0 : 1 );
         }
      },

      _ensureValue: function() {
         var dt = new Date(),
             hour = this.$hour.val(),
             min = this.$minute.val(),
             ampm = this.hour24 ? '' : this.$ampm.val();

         if ( !hour ) this.$hour.paddedspinner( 'value', ( hour = dt.getHours() ) > 12 ? hour - 12 : hour );
         if ( !min ) this.$minute.paddedspinner( 'value',  dt.getMinutes() );

         if ( !this.hour24 ) {
            if ( !ampm ) this.$ampm.ampmspinner( 'value',  dt.getHours() > 12 ? 'PM' : 'AM' );
         }
      },

      value: function( val ) {

         if ( typeof( val ) == 'undefined' )
            return this._value();
         else
            this._parse( val );

      }

   });
*/
//})(jQuery);
