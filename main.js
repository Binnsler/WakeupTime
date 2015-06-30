$(document).on('ready', function(){
	var outerShell = $('<div class="outerShell"></div>');
	var innerShell = $('<div class="innerShell"></div>');
	var leftAmPm = $('<div class="leftAmPm"></div>')
	var pmText = $('<p class="pmText">PM</p>');
	var autoText = $('<p class="autoText">Auto</p>');
	var amLabelFreq = $('<p class="amLabelFreq">AM 0 70 90 110 140 170</p>');
	var pmLabelFreq = $('<p class="pmLabelFreq">PM 83 92 94 102 106 109</p>');
	var clockScreen = $('<div class="clockScreen"></div>');
	var amPmIndic = $('<p class="amPmIndic">*</p>');
	var clockText = $('<h1 class="clockText">12:17</h1>');

	$('.container').append(outerShell);
	outerShell.append(innerShell);
	innerShell.append(leftAmPm)
	leftAmPm.append(pmText);
	leftAmPm.append(autoText);
	innerShell.append(clockScreen);
	innerShell.append(amLabelFreq);
	innerShell.append(pmLabelFreq);
	clockScreen.append(amPmIndic);
	clockScreen.append(clockText);


});

setInterval(function(){
	var now = new Date();
	
	console.log(now.toLocaleTimeString());
}, 1000);