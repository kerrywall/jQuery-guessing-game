// some standard initializations; don't mess with these

var counter = 0,
    score = 0;

// your quiz data should go into this variable in object form -- one object per item. sample format below:

/* 

{
  "name": "Nomad's Dream",
  "type": "trek"
}

*/

var content = [{"name":"Nomad's Dream","answer":"polish"},{"name":"Obsession","answer":"trek"},{"name":"Meet Me On The Star Ferry","answer":"polish"},{"name":"Dangerous Liasion","answer":"polish"},{"name":"What Are Little Girls Made Of?","answer":"trek"},{"name":"In My Back Pocket","answer":"polish"},{"name":"Tomorrow Is Yesterday","answer":"trek"},{"name":"Black Onyx","answer":"polish"},{"name":"Lights of Emerald City","answer":"polish"},{"name":"The Man Trap","answer":"trek"},{"name":"The Naked Time","answer":"trek"},{"name":"What Wizardry Is This?","answer":"polish"},{"name":"This Side Of Paradise","answer":"trek"},{"name":"Eternal Flame","answer":"polish"},{"name":"I Feel The Earth Move","answer":"polish"},{"name":"Day Of The Dove","answer":"trek"},{"name":"The Way To Eden","answer":"trek"},{"name":"Garden of Eden","answer":"polish"},{"name":"Friday's Child","answer":"trek"},{"name":"Days of Wine and Roses","answer":"polish"},{"name":"The Apple","answer":"trek"},{"name":"Thunder Road","answer":"polish"},{"name":"All Our Yesterdays","answer":"trek"},{"name":"Is There No Truth In Beauty?","answer":"trek"}];

// assigning the commonly accessed dom elements to variables

var $name = $('.name'),
    $generate = $('.generate'),
    $result = $('.results'),
    $score = $('.score'),
    $thanks = $('.thanks'),
    $options = $('.options');

var trekApp = {};

// the initial state of the quiz:
// starts off by showing the "name" value in the first item in the data object
// hides the 'next' button, results, score and 'thanks for playing' html as a default

trekApp.init = function() {
  var selection = content[counter];
  type = selection["answer"];
  $name.html(selection["name"]);
  $generate.hide();
  $result.hide();
  $score.hide();
  $thanks.hide();
}

// the function for moving through the quiz

trekApp.generate = function() {

  // if there are still questions remaining, show the next one
  
  if (counter < content.length) {
    var selection = content[counter];
    $name.html(selection["name"]);
    type = selection["answer"];  

    $result.hide();
    $score.hide();
    $name.show();
    $options.show();

  // if there are no more questions, thank the user for playing and give the option to tweet the score
  
  } else {
    $thanks.show().append(" <a href='http://twitter.com/home?status=Take the Star Trek Episode vs. Nail Polish Colour quiz! I scored " + score + " out of " + counter + " http://kerrywall.com/trek-polish' target='_blank'>tweet your score</a>");
  }

  $generate.hide();
}

// the event handler that determines whether the user's selection was right

$('.choice').click(function(e) {
  var chosenAnswer = e.target.id;  
  $result.show();
  $score.show();
  $name.hide();
  $options.hide();

  // setting up "full sentence" values for each type -- add else if statements if you have more than two possibilities
  
  if (type == "trek") {
    fullAnswer = "Star Trek episode";
  } else {
    fullAnswer = "nail polish shade";
  }
   
  // tell the user whether they're right or wrong, and add a point to the score if they're right

  if (chosenAnswer == type) {
    $result.html("<span class='right'>Affirmative, captain!</span> It's a " + fullAnswer + ".");
    score++;
  } else {
    $result.html("<span class='wrong'>Dammit, Jim!</span> It's a " + fullAnswer + ".");
  }
  counter++;
  $score.html("You're " + score + " for " + counter + ".");
  $generate.show();
  
});

$(document).ready(function() {
  trekApp.init();
});

$generate.on('click', function() {
  trekApp.generate();
});