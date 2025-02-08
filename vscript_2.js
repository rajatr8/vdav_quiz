const questions = [
    { 
        question: `Upon a flower of white, my name thou dost bear,
A nickname I gave thee, with love to share.
What be the name of this bloom so fair?`, 
        answer: "cauliflower" 
    },
    { 
        question: `Arrr, ye be wonderin’ what car I dream to own,
A mighty beast, with power well known.
It’s swift and sleek, with a name well known,
What be the car that makes me feel like a king o’ the throne?`, 
        answer: "bmw m4" 
    },
    { 
        question: `In a tavern so bright, with laughter and cheer,
We shared a drink, with no worry nor fear.
A magic concoction, of colors so bold,
What be the name of this drink, our story told?`, 
        answer: "liit" 
    },
    { 
        question: `-.. .- -.-- / --- ..-. / - .... . / .-- . . -.- / .-- . / .... .- -.. / --- ..- .-. / ..-. .. .-. ... - / -.- .. ... ... / .. -. / - .... . / .--. .- .-. -.-`, 
        answer: "saturday" 
    },
    { 
        question: `In a land where ruins whisper of days long past,
Through ancient cities, with towers so vast.
Where wine flows freely, and art fills the air,
And the mafia’s shadows still linger there.
The city of canals, where gondolas glide,
And lovers' whispers are heard far and wide.
Together, my love, we’ll walk hand in hand,
In this dream-like place, so ancient and grand.
What be this land, where passion’s the key,
Where we’ll travel together, just you and me?`, 
        answer: "italy" 
    },
    { 
        question: `Detective, here's the case, with clues to unfold,
On our first call, a topic we did hold.
A dark force, whispered in secretive tones,
A magic so ancient, it chills to the bones.
‘Vashikaran’ was mentioned, a name from the past,
A spell to control, to make hearts steadfast.
‘Tona Totka,’ too, was part of the lore,
Dark rituals and chants, legends of yore.
In Hindi, it’s known, this art of the night,
A force that can curse or make spirits take flight.
What be the name, in Hindi it’s said,
This dark magic we spoke of, that fills hearts with dread?
Yes, detective, the answer lies within,
The very topic we discussed, from the start, on that first call's spin.`, 
        answer: "kala jadu" 
    },
    { 
        question: `In the garden of fate, where our paths first did meet,
At her home, where time seemed to skip a beat.
She spoke of a creature, both gentle and pure,
A companion so loyal, of that I am sure.
With fur black and white, like night meeting day,
His eyes, two colors, like stars far away.
A spirit so soft, with a heart full of grace,
This little creature, who once took his place.
What name did she give, in that sacred embrace,
When our souls aligned, and time slowed its pace?`, 
        answer: "mikku" 
    },
];


let currentQuestionIndex = 0;

const questionText = document.getElementById('question-text');
const answerInput = document.getElementById('answer');
const submitButton = document.getElementById('submit-answer');
const feedback = document.getElementById('feedback');
const nextButton = document.getElementById('next-question');

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    answerInput.value = '';  // Reset input field
    feedback.textContent = '';  // Reset feedback
    nextButton.style.display = 'none';  // Hide Next button
}

function checkAnswer() {
    const userAnswer = answerInput.value.trim();
    const correctAnswer = questions[currentQuestionIndex].answer;

    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        feedback.textContent = "✅ Correct!";
        feedback.classList.add('correct');
        feedback.classList.remove('wrong');
        nextButton.style.display = 'inline'; // Show next button
    } else {
        feedback.textContent = "❌ Wrong Answer!";
        feedback.classList.add('wrong');
        feedback.classList.remove('correct');
    }
}

submitButton.addEventListener('click', () => {
    checkAnswer();
});

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        feedback.textContent = "🎉 Congratulations! You've completed the quiz!";
        feedback.classList.remove('correct');
        feedback.classList.remove('wrong');
        nextButton.style.display = 'none'; // Hide Next button when quiz is done

        // Redirect to proposal page after 2 seconds
        setTimeout(() => {
            window.location.href = "success.html"; // Replace with the actual proposal page URL
        }, 2000); // 2 seconds delay before redirect
    }
});

loadQuestion();
