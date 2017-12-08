// pseudo code

// 4 crystals and random result between 19-120
// every crystal names a random number 1-12
// number should change every time we win or lose
// when clicking any crystal it should be adding with previous result until it equals the total score
// if its not equal we start over
// if it is equal then we increment a win


var random_result;
var lose = 0;
var win = 0;
var previous = 0;
var image;


// $(".crystal").attr('class', 'red');

var resetAndStart = function () {

	$(".crystals").empty();

	var images = [
				'https://www.skullis.com/ProductImage/4806111/African-Green-Stone-Verdite-Crystal-Skull-01.jpg',
				'https://i.pinimg.com/736x/8f/53/0a/8f530a23e1f601d2d7f0ab0e0f300d59--crystal-skull-blue-crystals.jpg',
				'https://i.pinimg.com/736x/26/cc/e9/26cce95603c29ca9008e8663edcb6bf3--crystal-skull-skull-art.jpg',
				'https://www.skullis.com/ProductImage/4200623/Yellow-Crazy-Lace-Agate-Crystal-Skull-01.jpg'];

random_result = Math.floor((Math.random() * 120) + 19);


$("#result").html('RANDOM NUMBER: ' + random_result);

for(var i = 0; i < 4; i++){

	var random = Math.floor((Math.random() * 12) + 1);

  
	var crystal = $("<div>");
		crystal.attr({
			"class": 'crystal',
			"data-random": random
		});

		crystal.css({
			"background-image":"url('" + (images[i]) + "')",
			"background-size":"cover"
		});

	$(".crystals").append(crystal);

	}

$("#previous").html("", + previous);

}

resetAndStart();

var reset = function () {

}


$(document).on('click', ".crystal", function () {

	var num = parseInt($(this).attr('data-random'));

	previous += num;

	$("#previous").html(previous);

	if(previous > random_result) {
		
		lose++;

		$("#lose").html("LOSSES: " + lose);

		previous = 0;

		resetAndStart();



	}

	else if(previous === random_result){
		
		win++;

		$("#win").html("WINS: " + win);

		previous = 0;

		resetAndStart();

	}


});





