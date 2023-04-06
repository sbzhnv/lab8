$(document).ready(function(){
    var questions = [
        {
            question: "Who was the first woman to win a Nobel Prize?",
            choices: 0 
        },
        {
            question: "Which character of Friends famous pickup line is How you doing?",
            choices: 1 
        },
        {
            question: "What is the name of the gem in the movie Titanic?",
            choices: 2 
        },
        {
            question: "What is the national animal of England?",
            choices: 3 
        },
        {
            question: "What is the capital of New Zealand?",
            choices: 4 
        },
    ];

    var choice_options = [
        ["Alva Myrdal","Mother Teresa","Marie Curie","Jane Adams"],
        ["Joey","Ross","Chandler","Mike"],
        ["Call of the Ocean", "Heart of Love", "Heart of the Ocean", "Call of Love"],
        ["Puffin", "Dog", "Lion", "Fox"],
        ["Christchurch", "Wellington", "Auckland", "Dunedin"]
    ];
    
    var answers = [2, 0, 2, 2, 1];
    
    var currentQuestion = 0;
    
    $.each(questions, function(index, question) {
        var questionHTML = "<li>" + question.question + "<ul>";
        $.each(choice_options[question.choices], function(index, choice) {
            questionHTML += "<li><label><input type='radio' name='question-" + currentQuestion + "' value='" + index + "'> " + choice + "</label></li>";
        });
        questionHTML += "</ul></li>";
        $("#questions").append(questionHTML);
        currentQuestion++;
    });
    
    $("#quiz-form").submit(function(event) {
        event.preventDefault();
        var score = 0;
        $.each(questions, function(index, question) {
            var selectedChoice = $("input[name='question-" + index + "']:checked").val();
            if (selectedChoice == answers[index]) {
                score++;
            }
        });
        var resultsHTML = "<div class='text-center'><h2>Quiz Complete</h2><p>You answered " + score + " out of " + questions.length + " questions correctly.</p></div>";
        $("#quiz-container").html(resultsHTML);
    });
});    