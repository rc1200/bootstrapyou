// alert('hello');
// console.log('hello');

// Challenge 1: your age in days

function ageInDays() {
	var birthYear = prompt('what year were you born ... Good friend?');
	var ageInDayss = (2019- birthYear) * 365;

	// Create H1 element and store that into variable, as well set the attribute
	var h1 = document.createElement('h1');
	h1.setAttribute('id', 'ageInDayss');

	// create the text, concatenate the text, then make the H1 tag have this text
	var textAnswer = document.createTextNode('You are ' + ageInDayss + ' days old')
	h1.appendChild(textAnswer);

	// add the H1 element to the div where the ID = flex-box-result
	document.getElementById('flex-box-result').appendChild(h1);
}


function reset() {
	// document.getElementById('flex-box-result').remove();
	document.getElementById('ageInDayss').remove();
	// var h1 = document.getElementById('ageInDayss')
	// document.getElementById('flex-box-result').removeChild(h1);

}

// challenge #2 Cat generator
function generateCat() {
	var image = document.createElement('img');
	var div = document.getElementById('flex-cat-gen');
	image.src = 'http://thecatapi.com/api/images/get?format=src&type=gif&size=small';
	image.setAttribute('class', 'classCatImages');
	div.appendChild(image);
}


function clearSingleCat() {
	document.querySelectorAll('.classCatImages')[0].remove();
}


function clearAllByClass(className) {
    var elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}
 

function rpsGame(yourChoice) {
	console.log(yourChoice)
	var humanChoice, botChoice;
	humanChoice = yourChoice.id

	botChoice = numberToChoice(randToRpsInt());
	console.log('computer choice',botChoice)

	results = decideWinner(humanChoice, botChoice); // [1, 0 or .5, .5 or 0, 1]
	console.log(results)

	message =finalMessage(results); // {'message': 'You won!', 'color': 'green'}
	console.log(message)
	rpsFrontEnd(yourChoice.id, botChoice, message);

}

function randToRpsInt() {
	return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
	return ['rock', 'paper', 'scissors'][number]
}

function decideWinner(yourChoice, computerChoice) {
	var rpsDatabase = {
		'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
		'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
		'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0}
	}

	var yourScore = rpsDatabase[yourChoice][computerChoice];
	var computerScore = rpsDatabase[computerChoice][yourChoice];

	return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
	if (yourScore === 0) {
		return {'message': 'You Lost!', 'color': 'red'};
	} else if (yourScore === 0.5) {
		return {'message': 'You Tied!', 'color': 'yellow'};
	} else {
		return {'message': 'You Won!', 'color': 'green'};
	}

}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
	var imagesDatabase = {
		'rock': document.getElementById('rock').src,
		'paper': document.getElementById('paper').src,
		'scissors': document.getElementById('scissors').src
	}

	document.getElementById('rock').remove();
	document.getElementById('paper').remove();
	document.getElementById('scissors').remove();

	var humanDiv = document.createElement('div');
	var botDiv = document.createElement('div');
	var messageDiv = document.createElement('div');

	humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "'>";
	setAttributes(humanDiv, {'class':'rpsresults', 'style': 'box-shadow: 0px 10px 50px rgba(37, 50, 233, 1)'});

	var botimg = document.createElement('img');
	botimg.setAttribute('src', imagesDatabase[botImageChoice]);
	setAttributes(botDiv, {'class':'rpsresults', 'style': 'box-shadow: 0px 10px 50px rgba(243, 38, 24, 1)'});

	messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"
	messageDiv.setAttribute('class','rpsresults');

	document.getElementById('flex-box-rps-div').appendChild(humanDiv);
	document.getElementById('flex-box-rps-div').appendChild(messageDiv);
	document.getElementById('flex-box-rps-div').appendChild(botDiv).appendChild(botimg);

}

function resetRpsGame() {

	clearAllByClass('rpsresults');

	var list = [
		{'id': 'rock', 'class':'rpsImages', 'src': '../static/funWithJavaScript/images/rock.jpg', 'onclick' : 'rpsGame(this)'},
		{'id': 'paper', 'class':'rpsImages', 'src': '../static/funWithJavaScript/images/paper.jpg', 'onclick' : 'rpsGame(this)'},
		{'id': 'scissors', 'class':'rpsImages', 'src': '../static/funWithJavaScript/images/scissor.jpg', 'onclick' : 'rpsGame(this)'}
	]
	
	var img;
	for (var i=0; i < list.length; i++) {
		 img = document.createElement('img');
		setAttributes(img, list[i]);
		document.getElementById('flex-box-rps-div').appendChild(img);		
	}
}


// helper function to set multiple attributes
 function setAttributes(el, attrs) {
  for(var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}


// Change the color of all Buttons
var all_buttons = document.getElementsByTagName('Button');
const copyAllButtons = [];  // store original values

	for (let i=0; i < all_buttons.length; i++) {
		copyAllButtons.push(all_buttons[i].className);
	}


function buttonColorChange(buttonThingy) {

	color_list = {'red' : 'btn btn-danger',
		'green' : 'btn btn-success'};

	random_list = ['btn btn-danger', 'btn btn-success', 
					'btn btn-primary', 'btn btn-warning'];

	let color_value  = color_list[buttonThingy.value];
	if (buttonThingy.value === 'reset') {
		for (let i=0; i < all_buttons.length; i++) {
			setAttributes(all_buttons[i], {'class': copyAllButtons[i]});
		}
	} else if (buttonThingy.value === 'random') {
		for (let i=0; i < all_buttons.length ; i++) {
			color_value = random_list[Math.floor(Math.random() * 4)];
			setAttributes(all_buttons[i], {'class': color_value});
		}
	} else	{
		for (let i=0; i < all_buttons.length ; i++) {
			setAttributes(all_buttons[i], {'class': color_value});
		}
	}
}

//   Black Jack

let blackjackGame = {
	'you': {'scoreSpan': '#your-blackjack-result', 'div': '#your-box', 'score':0},
	'dealer': {'scoreSpan': '#dealer-blackjack-result', 'div': '#dealer-box', 'score':0},
	'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'Q', 'J', 'A'],
	// 'cards': ['J', 'A'],  // Testing for Black Jack
	'cardsMap': {'2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'K': 10, 'Q': 10, 'J': 10, 'A': [1, 11]},
	'wins': 0,
	'losses': 0,
	'draws': 0,
	'turnsOver': true
}

const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer']

const hitSound = new Audio('../static/funWithJavaScript/sounds/swish.m4a');
const lossSound = new Audio('../static/funWithJavaScript/sounds/aww.mp3');
const winSound = new Audio('../static/funWithJavaScript/sounds/cash.mp3');

document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);
document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal);
document.querySelector('#blackjack-stand-button').addEventListener('click',dealerLogic);


function blackjackHit() {
	let card = randomCard();
	showCard(YOU, card);
	updateScore(YOU, card);
	checkForBustOrBlackjack();

	blackjackGame['turnsOver'] = false;  // testing promise functions

}


function checkForBustOrBlackjack() {
	YouCardCount = document.querySelector('#your-box').querySelectorAll('img').length;
	if (YOU['score'] > 21) {
		showResult(computeWinner());
		document.querySelector('#blackjack-hit-button').disabled = true;
		document.querySelector('#blackjack-stand-button').disabled = true;
	} else if (YOU['score'] === 21 && YouCardCount === 2) {
		showResult(computeWinner());
		document.querySelector('#blackjack-hit-button').disabled = true;
		document.querySelector('#blackjack-stand-button').disabled = true;
	} 
}

function showCard(activePlayer, card) {
	if (activePlayer['score'] <= 21) {
		let cardImage = document.createElement('img');
		cardImage.src = `../static/funWithJavaScript/images/blackJack/${card}.png`;
		document.querySelector(activePlayer['div']).appendChild(cardImage);
		hitSound.play();			
	}
}

function blackjackDeal() {

	let yourImages = document.querySelector('#your-box').querySelectorAll('img');
	let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');


	document.querySelector('#blackjack-hit-button').disabled = false;
	document.querySelector('#blackjack-stand-button').disabled = false;


	for (i=0; i < yourImages.length; i++) {
		yourImages[i].remove();		
	}

	for (i=0; i < dealerImages.length; i++) {
		dealerImages[i].remove();		
	}

	YOU['score']=0;
	DEALER['score']=0;

	document.querySelector('#your-blackjack-result').textContent = YOU['score'];
	document.querySelector('#your-blackjack-result').style.color = '#ffffff';
	document.querySelector('#dealer-blackjack-result').textContent = DEALER['score'];
	document.querySelector('#dealer-blackjack-result').style.color = '#ffffff';

	document.querySelector('#blackjack-result').textContent = "let's play";
	document.querySelector('#blackjack-result').style.color = 'black';
	blackjackGame['turnsOver'] = true;


}

function randomCard() {
	let randomIndex = Math.floor(Math.random() * blackjackGame['cards'].length);
	return blackjackGame['cards'][randomIndex];
}

function updateScore(activePlayer, card) {
	if (activePlayer['score'] > 10 && card == 'A') {
		activePlayer['score'] += blackjackGame['cardsMap'][card][0];
	} else if (activePlayer['score'] < 11 && card == 'A') {
		activePlayer['score'] += blackjackGame['cardsMap'][card][1];
	} else {
		activePlayer['score'] += blackjackGame['cardsMap'][card];
	}
	showScore(activePlayer);
}

function showScore(activePlayer) {

	if (activePlayer['score'] > 21) {
		document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST!';
		document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
	} else {
		// console.log(activePlayer['score'], "---",blackjackGame['cardsMap'][card]);
		// innerHTML and textContent seems to work the same however innerHTML can parse content
			// see https://stackoverflow.com/questions/21311299/nodevalue-vs-innerhtml-and-textcontent-how-to-choose
		// document.querySelector(activePlayer['scoreSpan']).innerHTML = activePlayer['score'];
		document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];		
	}

}


async function dealerLogic() {
// function dealerLogic() {	
	// alert('dealer turn');
	let card;
	YouCardCount = document.querySelector('#your-box').querySelectorAll('img').length;

	document.querySelector('#blackjack-hit-button').disabled = true;
	document.querySelector('#blackjack-deal-button').disabled = true;
	document.querySelector('#blackjack-stand-button').disabled = true;

	while (DEALER['score'] < 15) {

		if ( 	
				(YOU['score'] > 21 && DEALER['score'] > 0) || // get 1 card then strop if bust
				(YOU['score'] === 21 && YouCardCount === 2) || // Don't do anything if BlackJack
				DEALER['score'] > 15 || // keep going till > 15
				DEALER['score'] === 21 || 
				(DEALER['score'] > YOU['score']) 
			) {
			break;
		}

		card = randomCard();
		showCard(DEALER, card);
		updateScore(DEALER, card);
		showScore(DEALER, card);
		// ronSleep(3000);  // very bad way if you don't use async stuff
		await sleep(1000);

	}

	blackjackGame['turnsOver'] = true;   // tesitng promise functions
	// console.log(blackjackGame['turnsOver']);
	showResult(computeWinner());

	document.querySelector('#blackjack-deal-button').disabled = false;

}



var mypromise = new Promise (function(resolve, reject) {
	let status = blackjackGame['turnsOver'];

    if (status) {
    	resolve('can deal now')
    } else 	{
		reject('Need to wait')
    }
});

mypromise.then(function(fromResolve) {
		// alert(blackjackGame['turnsOver']);

	console.log(fromResolve);
});





function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


function showResult(winner) {

	let message, messageColor;
	soundType = hitSound;


	if (winner === YOU && YOU['score'] === 21 && YouCardCount === 2) {
		mesage = 'BLACK JACK!';
		messageColor = 'green';
		soundType = winSound;

	} else if (winner === YOU) {
		mesage = 'You WIN!';
		messageColor = 'green';
		soundType = winSound;

	} else if (winner === DEALER) {
		mesage = 'You LOSE!';
		messageColor = 'red';
		soundType = lossSound;

	} else {
		mesage = 'Draw';
		messageColor = 'black';
	}

	soundType.play();
	document.querySelector('#blackjack-result').textContent = mesage;
	document.querySelector('#blackjack-result').style.color = messageColor;
	document.querySelector('#wins').textContent = blackjackGame['wins'];
	document.querySelector('#losses').textContent = blackjackGame['losses'];
	document.querySelector('#draws').textContent = blackjackGame['draws'];

}

function computeWinner() {

	let winner = 'draw';

	if ( (YOU['score'] > 21 && DEALER['score'] > 21) || (YOU['score'] === DEALER['score'] )) {
		blackjackGame['draws']+= 1;

	// Bust logic, previous logic catches bust on both players
	} 	else if  (YOU['score'] > 21) {
		blackjackGame['losses']+= 1;
		winner = DEALER;
	} else if  (DEALER['score'] > 21) {
		blackjackGame['wins']+= 1;
		winner = YOU;

	} else if  (YOU['score'] > DEALER['score']) {
		blackjackGame['wins']+= 1;
		winner = YOU;
	} else if (YOU['score'] < DEALER['score']) {
		blackjackGame['losses']+= 1;
		winner = DEALER;
	}

	return winner;

}



// global variable?


function test1() {
	YouCardCount = 12;  // if we don't put let or Constant, is that a Globlal variable?
}

function readTest1Variable() {
	test1();
	console.log('This variable is defined in the test1() function, why am I able to access the value set of: ==>',YouCardCount);
}

readTest1Variable();



function ronSleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}