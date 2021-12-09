var arrayNumbers = ['01', '02', '03', '04', '05'];
var outputText = "";
$.each(arrayNumbers, function (index, value) {
  outputText += value + " | ";
});
$('#output').text(outputText);
var outputText2 = "";
$.each(arrayNumbers, function (index, value) {
  outputText2 += value + " | ";
  return (value !== '04');
});
$('#output2').text(outputText2);