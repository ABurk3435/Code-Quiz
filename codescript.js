var questions = [
    {
        prompt: "Who won the SuperBowl in 1998?\n(a) The Patriots \n\
                    (b) The Broncos\n (c) The Cowboys",
        answer: "b" 
    },
    {
        prompt: "What year did the movie Jaws come out?\n(a) 1972 \n\
        (b) 1976\n (c) 1975",
        answer: "c" 
    },  
    {     prompt: "Where is the largest desert in the world?\n(a) Antarctica \n\
        (b) Africa\n (c) Asia",
        answer: "a" 
    }
]

var score = 0;

for (var i=0; i < questions.length; i++) {
    var response = window.prompt (questions[i].prompt);
    if(response == questions [i].answer){
        score++;
        alert("CORRECT!");
    } else {
        alert ("Wrong!");
    }
   }
    alert ("you got" + score + "/" + questions.length);

    
    