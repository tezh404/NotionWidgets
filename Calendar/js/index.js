$(document).ready(function() {

  $(".datepicker").datepicker({
    prevText: '<i class="fa fa-fw fa-angle-left"></i>',
    nextText: '<i class="fa fa-fw fa-angle-right"></i>'
  });

// Getter
var firstDay = $( ".datepicker" ).datepicker( "option", "firstDay" );
 
// Setter
$( ".datepicker" ).datepicker( "option", "firstDay", 1 );


});