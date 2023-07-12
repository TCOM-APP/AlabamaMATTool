const questions = [

    {

      question: "Is the youth between 16 and 19 years of age?",

      options: ["Yes", "No"],

      criteria: []

    },

    {

      question: "Does the youth have any ratings of '3' on any needs items?",

      options: ["Yes", "No"],

      criteria: []

    },

    {

      question: "Does the youth have more than two ratings of '2' on needs items?",

      options: ["Yes", "No"],

      criteria: []

    },

    {

      question: "Does the youth have at least one rating of '3' on any need item?",

      options: ["Yes", "No"],

      criteria: []

    },

    {

      question: "Does the youth have between three and six ratings of '2' or '3' on needs items?",

      options: ["Yes", "No"],

      criteria: []

    },

    {

      question: "Does the youth have at least one rating of 2 or 3 on any of the following: Physical/Medical, Intellectual, Developmental, Psychosis, Atten Def/Impulse, Depression, Anxiety, Anger Control, Oppositional, Antisocial, Adj to Trauma, Attachment, Substance Use?",

      options: ["Yes", "No"],

      criteria: []

    },

    {

      question: "Does the youth have two or more ratings of '2' or '3' on the following needs items: Self-Care, Sleep, School Attendance, School Behavior, Sexual Development?",

      options: ["Yes", "No"],

      criteria: []

    },

    {

      question: "Does the youth have at least one rating of '2' or '3' on any of the following risk behaviors: Suicide, Self-Mutilation, Fire Setting, Runaway, Social Behavior, Delinquency, Danger to Others?",

      options: ["Yes", "No"],

      criteria: []

    },

    {

      question: "Does the youth have no rating of '2' or '3' on Sexually Reactive Behavior or Sexual Aggression?",

      options: ["Yes", "No"],

      criteria: []

    },

    {

      question: "Does the youth have at least one rating of '3' or two or more ratings of '2' or '3' on any of the following: Physical/Medical, Developmental, Intellectual, Psychosis, Atten Def/Impulse, Depression, Anxiety, Anger Control, Oppositional, Antisocial, Adj to Trauma, Attachment, Substance Use?",

      options: ["Yes", "No"],

      criteria: []

    },

    {

      question: "Does the youth have at least one rating of '3' or two or more ratings of '2' or '3' on any of the following functioning needs: Self-Care, Family, Sleep, School Attendance, School Behavior, Sexual Development?",

      options: ["Yes", "No"],

      criteria: []

    },

    {

      question: "Does the youth have at least one rating of '2' or '3' on any of the following risk behaviors: Suicide, Self-Mutilation, Fire Setting, Runaway, Delinquency, Danger to Others, Sexually Reactive Behavior?",

      options: ["Yes", "No"],

      criteria: []

    },

    {

      question: "Does the youth have one rating of '3' or both items rated '2' on Care Management needs: Monitoring, Treatment Intensity?",

      options: ["Yes", "No"],

      criteria: []

    },

    {

      question: "Does the youth have at least two ratings of '3', or three or more ratings of '2' or '3' on any of the following: Psychosis, Atten Def/Impulse, Depression, Anxiety, Anger Control, Oppositional, Antisocial, Adj to Trauma, Attachment, Substance Use?",

      options: ["Yes", "No"],

      criteria: []

    },

    {

      question: "Does the youth have at least one rating of '3' or two or more ratings of '2' or '3' on any of the following risk behaviors: Suicide, Self-Mutilation, Fire Setting, Runaway, Social Behavior, Delinquency, Danger to Others?",

      options: ["Yes", "No"],

      criteria: []

    },

    {

      question: "Does the youth have at least one rating of '3' on the Care Management needs: Monitoring, Treatment Intensity?",

      options: ["Yes", "No"],

      criteria: []

    },

    {

      question: "Does the youth have at least one rating of '3' or two or more ratings of '2' or '3' on any of the following: Psychosis, Atten Def/Impulse, Depression, Anxiety, Anger Control, Oppositional, Antisocial, Adj to Trauma, Attachment, Substance Use?",

      options: ["Yes", "No"],

      criteria: []

    },

    {

      question: "Does the youth have at least two ratings of '3', or three or more ratings of '2' or '3' on any of the following risk behaviors: Suicide, Self-Mutilation, Fire Setting, Runaway",

    }

];

      // Create Vue instance

new Vue({

  el: '#app',

  data: {

    currentQuestion: {

      text: questions[0].question,

      type: 'radio',

      options: questions[0].options,

      response: null

    },

    isLastQuestion: false

  },

  methods: {

    nextQuestion() {

      if (this.currentQuestion.response) {

        const currentQuestionIndex = questions.findIndex(q => q.question === this.currentQuestion.text);

        if (currentQuestionIndex < questions.length - 1) {

          this.currentQuestion = {

            text: questions[currentQuestionIndex + 1].question,

            type: 'radio',

            options: questions[currentQuestionIndex + 1].options,

            response: null

          };

          this.isLastQuestion = currentQuestionIndex === questions.length - 2;

        } else {

          this.submitSurvey();

        }

      }

    },

    submitSurvey() {

      // Perform actions when the survey is submitted

      // This function will be called when the last question is answered

    }

  }

})