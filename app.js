// app.js
const app = new Vue({
    el: '#app',
    data: {
        questions: [
            {
                id: 1,
                text: 'Does the child meet any criteria at any level?',
                type: 'radio',
                options: [
                    { id: 1, text: 'Yes' },
                    { id: 2, text: 'No' },
                ],
                response: null,
            },
            {
                id: 2,
                text: 'Is the child between 16 and 19?',
                type: 'checkbox',
                options: [
                    { id: 4, text: 'Yes' },
                    { id: 5, text: 'No' },
                ],
                response: [],
            },
            {
                id: 3,
                text: 'Does the child have a rating of 3 on any of these? Physical/Medical, Intellectual, Developmental, Self-Care/ Daily Living, Family, Sleep, School Achievement, School Behavior, School Attendance,Sexual Development, Psychosis, Attention Deficit/ Impulse Control, Depression/Anxiety, Anger Control, Oppositional Behavior, Antisocial Behavior, Adjustment to Trauma, Attachment, Sit consist of problems, Temp Consist of Probs, Abuse History, Family History of Mental Illness, Suicide Rise, Self-Mutilation, Social Behavior, Substance Use, Delinquency, Danger to Others/ Violence, Sexual Reactive Behavior, Sexual Aggression',
                type: 'checkbox',
                options: [
                    { id: 6, text: 'Yes' },
                    { id: 7, text: 'No' },
                ],
                response: [],
            },
        ],
        currentQuestionIndex: 0,
    },
    computed: {
        currentQuestion() {  
            return this.questions[this.currentQuestionIndex];
        },
        isLastQuestion() {
            return this.currentQuestionIndex === this.questions.length - 1;
        },
    },
    methods: {
        nextQuestion() {
            this.currentQuestionIndex++;
        },
        submitSurvey() {
            // Process the survey data
            console.log(this.questions);
            // You can send the data to a server, perform validations, etc.
        },
    },
});
