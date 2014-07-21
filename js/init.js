var counter = 0;

var content = [

  {
    "name": "Nomad's Dream",
    "answer": "polish",
	"fullAnswer": "nail polish shade"
  },
  
  {
    "name": "Meet Me On The Star Ferry",
    "answer": "polish",
	"fullAnswer": "nail polish shade"
  },
  
  {
    "name": "Dangerous Liasion",
    "answer": "polish",
	"fullAnswer": "nail polish shade"
  },
  
  {
    "name": "In My Back Pocket",
    "answer": "polish",
	"fullAnswer": "nail polish shade"
  },
  
  {
    "name": "Black Onyx",
    "answer": "polish",
	"fullAnswer": "nail polish shade"
  },
  
  {
    "name": "Lights of Emerald City",
    "answer": "polish",
	"fullAnswer": "nail polish shade"
  },
  
  {
    "name": "What Wizardry Is This?",
    "answer": "polish",
	"fullAnswer": "nail polish shade"
  },
  
  {
    "name": "Eternal Flame",
    "answer": "polish",
	"fullAnswer": "nail polish shade"
  },
  
  {
    "name": "I Feel The Earth Move",
    "answer": "polish",
	"fullAnswer": "nail polish shade"
  },
  
  {
    "name": "Garden of Eden",
    "answer": "polish",
	"fullAnswer": "nail polish shade"
  },
  
  {
    "name": "Thunder Road",
    "answer": "polish",
	"fullAnswer": "nail polish shade"
  },
  
  {
    "name": "Days of Wine and Roses",
    "answer": "polish",
	"fullAnswer": "nail polish shade"
  },
  
  {
    "name": "The Man Trap",
    "answer": "trek",
	"fullAnswer":"Star Trek episode"
  },
  
  {
    "name": "The Naked Time",
    "answer": "trek",
	"fullAnswer":"Star Trek episode"
  },
  
  {
    "name": "What Are Little Girls Made Of?",
    "answer": "trek",
	"fullAnswer":"Star Trek episode"
  },
  
  {
    "name": "Tomorrow Is Yesterday",
    "answer": "trek",
	"fullAnswer":"Star Trek episode"
  },
  
  {
    "name": "This Side Of Paradise",
    "answer": "trek","fullAnswer":"Star Trek episode"
  },
  
  {
    "name": "The Apple",
    "answer": "trek",
	"fullAnswer":"Star Trek episode"
  },
  
  {
    "name": "Day Of The Dove",
    "answer": "trek",
	"fullAnswer":"Star Trek episode"
  },
  
  {
    "name": "The Way To Eden",
    "answer": "trek",
	"fullAnswer":"Star Trek episode"
  },
  
  {
    "name": "Friday's Child",
    "answer": "trek",
	"fullAnswer":"Star Trek episode"
  },
  
  {
    "name": "All Our Yesterdays",
    "answer": "trek",
	"fullAnswer":"Star Trek episode"
  },
  
  {
    "name": "Is There No Truth In Beauty?",
    "answer": "trek",
	"fullAnswer":"Star Trek episode"
  },
  
  {
    "name": "Obsession",
    "answer": "trek",
	"fullAnswer":"Star Trek episode"
  }
  
]
$(document).ready(function() {
	var selection = content[Math.floor(Math.random()*24)];
	type = selection["answer"];
	fullAnswer = selection["fullAnswer"];
	$('#name').html(selection["name"]);
  $('#generate').hide();
  $('#result').hide();

});

 $('#generate').click(function() {
	
	var selection = content[Math.floor(Math.random()*24)];
	$('#name').html(selection["name"]);
	type = selection["answer"];
	fullAnswer = selection["fullAnswer"];
	
	$('#result').hide();
  $('#name').show();
	$('#options').show();
  $('#generate').hide();
});

$('.choice').click(function(e) {
	var chosenAnswer = e.target.id;
	
	$('#result').show();
  $('#name').hide();
	$('#options').hide();
		
	if (chosenAnswer == type) {
		$('#result').html("<span class='right'>Affirmative, captain!</span> It's a " + fullAnswer + ".");
	} else {
		$('#result').html("<span class='wrong'>Dammit, Jim!</span> It's a " + fullAnswer + ".");
	}

  $('#generate').show();
	
});