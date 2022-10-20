const Questions = [
	{
		Questions: "The content of the page (such as your pictures, text, links) will show up where?",
		choices: {
			a: 'Head',
			b: 'Body',
			c: 'Style',
            d: 'Folder'
		},
		Answer: 'b'
	},

    {
		question: "What is the default link color for hyperlinks?",
		choices: {
			a: 'blue',
			b: 'green',
			c: 'purple',
            d: 'red'
		},
		Answer: 'a'
	},

    {
		question: "Which tag is used to underline text?",
		choices: {
			a: '<a>',
			b: '<u>',
			c: '<b>',
            d: '<l>'
		},
		Answer: 'b'
	},

    {
		question: "Defines a division or a section in an HTML document. Used to group block-elements to format them with CSS",
		choices: {
			a: '<span>',
			b: '<caption>',
			c: '<group>',
            d: '<div>'
		},
		Answer: 'd'
	},

    {
		question: "What does CSS stand for?",
		choices: {
			a: 'Colorful Style Sheets',
			b: 'Creative Style Sheets',
			c: 'Cascading Style Sheets',
            d: 'Computer Style Sheets'
		},
		Answer: 'c'
	},

    {
		question: "Where in an HTML document is the correct place to refer to an external style sheet (such as style.css)?",
		choices: {
			a: 'In the <head> section',
			b: 'In the <body> section',
			c: 'At the end of the document',
            d: 'In the <css> section'
		},
		Answer: 'a'
	},

    {
		question: "Which is the correct CSS syntax?",
		choices: {
			a: 'body:color=black;',
			b: '{body;color:black;}',
			c: 'body {color: black;}',
            d: '{body:color=black;}'
		},
		Answer: 'c'
	},

    {
		question: "Which of the following operators are not used for making comparisons?",
		choices: {
			a: '==',
			b: '>',
			c: '+',
            d: '!='
		},
		Answer: 'd'
	},

    {
		question: "Which data type is returned when using the `confirm()` function?",
		choices: {
			a: 'Number',
			b: 'Boolean',
			c: 'String',
            d: 'Undefined'
		},
		Answer: 'b'
	},

    {
		question: "JavaScript files have the file extension (the bit after the name)?",
		choices: {
			a: '.js',
			b: '.css',
			c: '.html',
            d: '.java'
		},
		Answer: 'a'
	}
];

var startbutton = document.getElementById("start-button");
var  Restartbutton = document.getElementById("restart_quiz");
var  Clearscores = document.getElementById("clear_scores");
var  time = document.getElementById("Timer");
var  results = document.getElementById("answer-result");
var  scores = document.getElementById("view-scores");
var  Highscoresub = document.getElementById("Submit_score");
var  FScore = document.getElementById("final-score");
var  table = document.getElementById("Scores_table");
var  highscorelist = document.getElementById("list");
var  choicesEL = [
    document.getElementById("a1"),
    document.getElementById("a2"),
    document.getElementById("a3"),
    document.getElementById("a4")
];


startbutton.addEventListener("click", function() {

    function countdown() {
    var timeLeft = 120;
    var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
    time.textContent = timeLeft;
    timeLeft--;
    } else if (timeLeft === 1) {
    time.textContent = timeLeft;
    timeLeft--;
    } else {
    time.textContent = '';
    clearInterval(timeInterval);
    }
    }, 1000);
    }
    countdown();  


    
});