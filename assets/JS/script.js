const Questions = [
	{
		questions: "The content of the page (such as your pictures, text, links) will show up where?",
		choices: [
			'a: Head',
			'b: Body',
			'c: Style',
            'd: Folder'
        ],
		Answer: 'b: Body'
	},

    {
		questions: "What is the default link color for hyperlinks?",
		choices: [
			'a: blue',
			'b: green',
			'c: purple',
            'd: red'
        ],
		Answer: 'a: blue',
	},

    {
		questions: "Which tag is used to underline text?",
		choices: [
			'a: <a>',
			'b: <u>',
			'c: <b>',
            'd: <l>'
        ],
		Answer: 'b: <u>',
	},

    {
		questions: "Defines a division or a section in an HTML document. Used to group block-elements to format them with CSS",
		choices: [
			'a: <span>',
			'b: <caption>',
			'c: <group>',
            'd: <div>'
        ],
		Answer: 'd: <div>'
	},

    {
		questions: "What does CSS stand for?",
		choices: [
			'a: Colorful Style Sheets',
			'b: Creative Style Sheets',
			'c: Cascading Style Sheets',
            'd: Computer Style Sheets'
        ],
		Answer: 'c: Cascading Style Sheets'
	},

    {
		questions: "Where in an HTML document is the correct place to refer to an external style sheet (such as style.css)?",
		choices: [
			'a: In the <head> section',
			'b: In the <body> section',
			'c: At the end of the document',
            'd: In the <css> section'
        ],
		Answer: 'a: In the <head> section'
	},

    {
		questions: "Which is the correct CSS syntax?",
		choices: [
			'a: body:color=black;',
			'b: {body;color:black;}',
			'c: body {color: black;}',
            'd: {body:color=black;}'
        ],
		Answer: 'c: body {color: black;}'
	},

    {
		questions: "Which of the following operators are not used for making comparisons?",
		choices: [
			'a: ==',
			'b: >',
			'c: +',
            'd: !='
        ],
		Answer: 'd: !='
	},

    {
		questions: "Which data type is returned when using the `confirm()` function?",
		choices: [
			'a: Number',
			'b: Boolean',
			'c: String',
            'd: Undefined'
        ],
		Answer: 'b: Boolean',
	},

    {
		questions: "JavaScript files have the file extension (the bit after the name)?",
		choices: [
			'a: .js',
			'b: .css',
			'c: .html',
            'd: .java'
        ],
		Answer: 'a: .js'
	}
];

var  startbutton = document.getElementById("start-button");
var  Restartbutton = document.getElementById("restart_quiz");
var  Clearscores = document.getElementById("clear_scores");
var  time = document.getElementById("Timer");
var  results = document.getElementById("answer-result");
var  scores = document.getElementById("view-scores");
var  Highscoresub = document.getElementById("Submit_score");
var  FScore = document.getElementById("final-score");
var  table = document.getElementById("Scores_table");
var  highscorelist = document.getElementById("list");
var  GamestartEL = document.getElementsByClassName("intro_container");
var  QuestionsEL = document.getElementsByClassName("question-container");
var  GameoverEL = document.getElementsByClassName("GameOver_container");
var  ScoresEL = document.getElementsByClassName("score_container");
var  username = document.getElementById("user_initials");

 var timeLeft = 120;
 var index = 0;

startbutton.onclick = () =>{
    QuestionsEL[0].classList.add("activeInfo");
    GamestartEL[0].classList.add("activeInfo");
    showquestions(index);
    countdown();
}

function countdown() {
var timeInterval = setInterval(function () {
 if (timeLeft > 1) {
time.textContent = timeLeft;
timeLeft--;
} else if (timeLeft == 0) {
gameover()
} else {
time.textContent = '0';
clearInterval(timeInterval);
}
}, 1000);}

let que_count = 0;

function showquestions(index){
    const question = document.querySelector(".question");
    const Choices = document.querySelector(".Choices_list");
    let que_tag = '<h2>'+Questions[index].questions+'</h2>';
    let choices_tag = '<button class="choices" id="a1">'+Questions[index].choices[0]+'</button><br>'+
                      '<button class="choices" id="a2">'+Questions[index].choices[1]+'</button><br>'+
                      '<button class="choices" id="a3">'+Questions[index].choices[2]+'</button><br>'+
                      '<button class="choices" id="a4">'+Questions[index].choices[3]+'</button><br>'
    question.innerHTML = que_tag;
    Choices.innerHTML = choices_tag;
    const option = Choices.querySelectorAll(".choices")
    Choices.addEventListener("click", function(event) {
    for(let i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(answer)")
    }
    if(index<Questions.length){
        index++;
    }else {
        gameover()
    }
})
}

function optionSelected(answer){
    let Userans= answer.textContent;
    let Correctans =  Questions[index].Answer; 
    if (Userans == Correctans ) {
        FScore = FScore + 10;
    } else {
        timeLeft = timeLeft - 10;
    }
}

function gameover(){
    QuestionsEL[0].classList.add("activeInfos");
    GameoverEL[0].classList.add("activeInfo");
    Highscoresub.addEventListener("click",function() {
        var finalscorsave = localStorage.getItem("finalscorsave");
        var highScores = JSON.parse(localStorage.getItem('highScores')) || [];
        FScore.innerText = finalscorsave;
        const score = {
            score: finalscorsave,
            name: username.value,
        };
        highScores.push(score);
        highScores.sort((a, b) => b.score - a.score);
    
        localStorage.setItem('highScores', JSON.stringify(highScores));
        window.location.assign('/');
    })
    GameoverEL[0].classList.add("activeInfos");
    ScoresEL[0].classList.add("activeInfo");
}

Restartbutton.onclick = () =>{
    startbutton.onclick = () =>{
        QuestionsEL[0].classList.add("activeInfo");
        GamestartEL[0].classList.add("activeInfo");
        showquestions(index);
        countdown();
    }
}

Clearscores.onclick = () =>{

}


