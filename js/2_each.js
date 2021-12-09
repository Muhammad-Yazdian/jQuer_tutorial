// Part 1
var arrayNumbers = ['01', '02', '03', '04', '05'];
var outputText = "";
$.each(arrayNumbers, function (index, value) {
  $('#text-' + value).text("Chapter " + value + " ...");
});

// Part 2
var arr = [ "one", "two", "three", "four", "five" ];
var obj = { one: 1, two: 2, three: 3, four: 4, five: 5 };
 
jQuery.each( arr, function( i, val ) {
  $( "#" + val ).text( "Mine is " + val + "." );
  return ( val !== "three" );
});

jQuery.each( obj, function( i, val ) {
  $( "#" + i ).append( document.createTextNode( " - " + val ) );
});