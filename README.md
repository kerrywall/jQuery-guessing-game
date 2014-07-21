jQuery-guessing-game
====================

#The basics

This is a script that presents the user with something and makes him/her guess whether it belongs to one category or another. (Think Mental Floss quizzes).

##Components

* index.html: Structure + any content outside of the actual quiz (intro, footer, what have you).
* style.css: All the pretty goes in here.
* init.js: Main quiz content + interactivity.

### index.html

The HTML relating to the actual quiz begins on line 22 here. Change only the IDs for the two buttons and the text within them.

The rest of the document can be formatted however you like.

### style.css

Go ape.

### init.js

Store the name (the thing you want people to guess about), the answer ID (which should line up with one of the two button IDs in index.html) and a fuller description of the answer in a string that will appear in the result h2.

Change the number in the Math function in both $(document).ready() and $('#generate').click() so that it reflects the number of objects in the content array.

Adjust the strings that feed into the #results h2 when a button is clicked to reflect whatever you want your right/wrong text to be.

Done.
