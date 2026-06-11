const emotions = [
    "Joy",
    "Fear",
    "Anger",
    "Love",
    "Sorrow",
    "Pride",
    "Hope",
    "Wonder"
];

// const letters = [
//     "S",
//     "M",
//     "I",
//     "L",
//     "H",
//     "A",
//     "R",
//     "I"
// ];

const letters = [
    "S",
    "L",
    "I",
    "M",
    " ",
    "H",
    "A",
    "R",
    "I"
];

const tarotImages = [
  "assets/images/tarot1.jpeg",
  "assets/images/tarot2.jpeg",
  "assets/images/tarot3.jpeg",
  "assets/images/tarot4.jpeg",
  "assets/images/tarot5.jpeg",
  "assets/images/tarot6.jpeg",
  "assets/images/tarot7.jpeg",
  "assets/images/tarot8.jpeg"
];

function getRandomCards() {

    const shuffled = [...tarotImages]
        .sort(() => Math.random() - 0.5);

    return shuffled.slice(0, 3);
}

let trial = 0;

const trialTitle = document.getElementById("trialTitle");
const emotionText = document.getElementById("emotion");
const instruction = document.getElementById("instruction");

const revealSection = document.getElementById("revealSection");
const letterReveal = document.getElementById("letterReveal");

const cards = document.querySelectorAll(".tarot-card");

const draws = [
    "The First Echo",
    "The Veil of Fear",
    "The Burning Ember",
    "The Heart's Reflection",
    "The Chamber of Sorrow",
    "The Crown of Pride",
    "The Beacon of Hope",
    "The Final Wonder"
];

loadTrial();

// function loadTrial() {

//     revealSection.classList.add("hidden");

//     trialTitle.textContent =
//         `The ${trial + 1}${getSuffix(trial + 1)} Draw`;

//     emotionText.textContent =
//         emotions[trial];

//     instruction.textContent =
//         `Recall a moment when ${emotions[trial]} was felt with unusual intensity. Hold the memory, then choose a card.`;
// }

// function loadTrial() {

//     revealSection.classList.add("hidden");

//     trialTitle.textContent = draws[trial];

//     emotionText.textContent = emotions[trial];

//     instruction.textContent =
//         `Soul, recall a moment when ${emotions[trial]} consumed your thoughts. Hold the memory for a few breaths, then choose a card to continue the reading.`;
// }

function loadTrial() {

    revealSection.classList.add("hidden");

    trialTitle.textContent = draws[trial];

    emotionText.textContent = emotions[trial];

    instruction.textContent =
        `Soul, recall a moment when ${emotions[trial]} consumed your thoughts. Hold the memory for a few breaths, then choose a card.`;

    // const selectedCards = getRandomCards();

    // cards.forEach((card, index) => {

    //     card.style.backgroundImage =
    //         `url('${selectedCards[index]}')`;

    //     card.style.backgroundSize = "cover";
    //     card.style.backgroundPosition = "center";
    // });
    const selectedCards = getRandomCards();

cards.forEach((card, index) => {

    card.classList.remove("flipped");

    const back =
        card.querySelector(".tarot-back");

    back.style.backgroundImage =
        `url('${selectedCards[index]}')`;
});

}

// cards.forEach(card => {

//     card.addEventListener("click", () => {

//         cards.forEach(c => c.style.pointerEvents = "none");

//         revealSection.classList.remove("hidden");

//         letterReveal.textContent =
//             letters.slice(0, trial + 1).join("");

//         setTimeout(() => {

//             trial++;

//             if(trial >= letters.length){

//                 localStorage.setItem(
//                     "cipher",
//                     "SMIL HARI"
//                 );

//                 window.location.href =
//                     "index.html";

//                 return;
//             }

//             cards.forEach(
//                 c => c.style.pointerEvents = "auto"
//             );

//             loadTrial();

//         }, 5000);
//     });

// });


cards.forEach(card => {

    card.addEventListener("click", () => {

        cards.forEach(
            c => c.style.pointerEvents = "none"
        );

        card.classList.add("flipped");

        setTimeout(() => {

            revealSection.classList.remove("hidden");

            letterReveal.textContent =
                letters.slice(0, trial + 1).join("");

        }, 1000);

        setTimeout(() => {

            trial++;

            if(trial >= letters.length){

                window.location.href =
                    "index.html";

                return;
            }

            cards.forEach(c => {
                c.style.pointerEvents = "auto";
            });

            loadTrial();

        }, 2500);

    });

});


function getSuffix(num){

    if(num === 1) return "st";
    if(num === 2) return "nd";
    if(num === 3) return "rd";

    return "th";
}