

// Example quiz object might look like:

var QUIZ = [
    {
        title: "Question 1",
        questionText: "What is the 1st letter in the alphabet?",
        answers: [
            { text: "a", correct: true },
            { text: "b", correct: false },
            { text: "c", correct: false },
            { text: "d", correct: false }
        ],
        userAnswer: ""
    },
    {
        title: "Question 2",
        questionText: "How to increment by 1 in JavaScript?",
        answers: [
            { text: "+++", correct: false },
            { text: "+", correct: false },
            { text: "++", correct: true },
            { text: "bigify", correct: false },
        ],
        userAnswer: ""
    },
    {
        title: "Question 3",
        questionText: "Who is the best teacher in Code School?",
        answers: [
            { text: "Jace", correct: false },
            { text: "Derek", correct: false },
            { text: "DJ", correct: false },
            { text: "All of the above", correct: true },
        ],
        userAnswer: ""
    },
    {
        title: "Question 4",
        questionText: "Who is the best sponsor of code school?",
        answers: [
            { text: "TCN", correct: false },
            { text: "Stephen Wade", correct: false },
            { text: "Zonos", correct: true },
            { text: "SciTools", correct: false },
        ],
        userAnswer: ""
    },
    {
        title: "Question 5",
        questionText: "What is my favorite color?",
        answers: [
            { text: "green", correct: true },
            { text: "red", correct: false },
            { text: "orange", correct: false },
            { text: "blue", correct: false },
        ],
        userAnswer: ""
    }
]



var app = new Vue({
    el: "#app",
    data: {
        // to attach your global quiz variable to a data variable:
        myQuiz: QUIZ,
        currentPage: "title-page",
        questionIndex: 0,
        score: 0,
    },
    methods: {
        // used for showing questions individually
        nextQuestion: function () {
            this.questionIndex++;
        },

        // used for showing questions individually
        previousQuestion: function () {
            this.questionIndex--;
        },

        setPage: function (page) {
            this.currentPage = page
        },

        calculateScore: function () {
            this.myQuiz.forEach(question => {
                question.answers.forEach(answer => {
                    if (answer.correct) {
                        if (question.userAnswer == answer.text) {
                            this.score++
                        }
                    }
                })
            })
        }
    },
    computed: {
        // a function that returns true if 0 userAnswer fields are blank ("")
        // IF there is still 1 or more blank ("") userAnswer field, return false
        areAllQuestionsAnswered: function () {
            let unanswered = 0;
            this.myQuiz.forEach(question => {
                if (question.userAnswer == "" || !question.userAnswer) {
                    unanswered++
                }
            });

            return unanswered == 0;
        }
    }
});