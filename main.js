const countries = [{
        country: "Україна",
        capital: "Київ"
    },
    {
        country: "Франція",
        capital: "Париж"
    },
    {
        country: "Італія",
        capital: "Рим"
    },
    {
        country: "Іспанія",
        capital: "Мадрид"
    },
    {
        country: "Німеччина",
        capital: "Берлін"
    },
    {
        country: "Велика Британія",
        capital: "Лондон"
    },
    {
        country: "Польща",
        capital: "Варшава"
    },
    {
        country: "Румунія",
        capital: "Бухарест"
    },
    {
        country: "Нідерланди",
        capital: "Амстердам"
    },
    {
        country: "Бельгія",
        capital: "Брюссель"
    },
    {
        country: "Греція",
        capital: "Афіни"
    },
    {
        country: "Чехія",
        capital: "Прага"
    },
    {
        country: "Португалія",
        capital: "Лісабон"
    },
    {
        country: "Швеція",
        capital: "Стокгольм"
    },
    {
        country: "Угорщина",
        capital: "Будапешт"
    },
    {
        country: "Австрія",
        capital: "Відень"
    },
    {
        country: "Швейцарія",
        capital: "Берн"
    },
    {
        country: "Білорусь",
        capital: "Мінськ"
    },
    {
        country: "Данія",
        capital: "Копенгаген"
    },
    {
        country: "Фінляндія",
        capital: "Гельсінкі"
    },
    {
        country: "Словаччина",
        capital: "Братислава"
    },
    {
        country: "Норвегія",
        capital: "Осло"
    },
    {
        country: "Хорватія",
        capital: "Загреб"
    },
    {
        country: "Молдова",
        capital: "Кишинів"
    },
    {
        country: "Боснія і Герцеговина",
        capital: "Сараєво"
    },
    {
        country: "Сербія",
        capital: "Белград"
    },
    {
        country: "Північна Македонія",
        capital: "Скоп'є"
    },
    {
        country: "Албанія",
        capital: "Тирана"
    },
    {
        country: "Литва",
        capital: "Вільнюс"
    },
    {
        country: "Латвія",
        capital: "Рига"
    },
    {
        country: "Естонія",
        capital: "Таллінн"
    },
    {
        country: "Словенія",
        capital: "Любляна"
    },
    {
        country: "Мальта",
        capital: "Валлетта"
    },
    {
        country: "Люксембург",
        capital: "Люксембург"
    },
    {
        country: "Кіпр",
        capital: "Нікосія"
    },
    {
        country: "Андорра",
        capital: "Андорра-ла-Велья"
    },
    {
        country: "Сан-Марино",
        capital: "Сан-Марино"
    },
    {
        country: "Ватикан",
        capital: "Ватикан"
    }
];

const correctMessages = ['Правильно!', 'Молодець, так тримати!', 'Чудово, так продовжуй далі!', 'Та тут грає найрозумніша людина у світі!', 'Все правильно, не зупиняйся!'];
const incorrectMessages = ['Думай краще!', 'От халепа, неправильно!', 'Йой, та це не та столиця', 'Мабуть, тобі потрібно грати з атласом', 'От дідько, відповідь неправильна']
const level = ['Школяр', 'Студент коледжу', 'Ерудит', 'Інтелектуал', 'Всезнайко з географії', ]

let wrapper = document.querySelector('.wrapper')
let nameCountry = document.querySelector('.name__country');
let nameCapital = document.querySelectorAll('.answer');
let message = document.querySelector('.result');
let userName = document.querySelector('.userName');
let totalQuestion = document.querySelector('.resultsQuestions__number');
let totalCorrectAnswers = document.querySelector('.resultCorrect__number');
let totalIncorrectAnswers = document.querySelector('.resultIncorrect__number');
let userLevel = document.querySelector('.results__level');
let popup = document.querySelector('.popup');

let user;
let randomIndex;
let checkComputerCountry;
let checkComputerCapital;
let answersArray = [];

let total = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;

// let write = setTimeout(() => {
//     user = prompt('Як тебе звати?');
//     writeUserName();
// }, 300);

// let writeUserName = () => {
//     if (user == null || user == undefined || user == '') {
//         userName.innerHTML = 'Незнайомець';
//     } else {
//         userName.innerHTML = user;
//         console.log(userName);
//     }
// };

let findRandomIndex = (item) => {
    randomIndex = Math.floor(Math.random() * item.length);
};

let showRandomCountry = (country) => {
    nameCountry.innerHTML = country;
    checkComputerCountry = country;
};

let addAnswers = (randomIndex) => {
    for (let i = 0; i < countries.length; i++) {
        if (i === randomIndex) {
            answersArray.push(countries[i].capital);
            checkComputerCapital = countries[i].capital;
        }
    };
    for (let i = 0; i < 3; i++) {
        randomIndex = Math.floor(Math.random() * countries.length);
        answersArray.push(countries[randomIndex].capital);
    }
};

let repeatCreateAnswers = (randomIndex, answersArray) => {
    cleanArray(answersArray)
    addAnswers(randomIndex);
    hasDublicateCapital(answersArray);
    mixArray(answersArray);
    showCapitalInAnswers(answersArray);
}

let hasDublicateCapital = (array) => {
    if (new Set(array).size !== array.length) {
        console.log('repeat');
        repeatCreateAnswers(randomIndex, answersArray);
    };
}

let mixArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    };
};

let showCapitalInAnswers = (array) => {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < nameCapital.length; j++) {
            if (i === j) {
                nameCapital[j].innerHTML = array[i];
            }
        }
    }
};

let cleanArray = (array) => {
    array.length = 0;
};

let showResult = (player, score) => {
    player.innerHTML = score;
}

let showPopUp = () => {
    console.log(total);
    if (total === 2) {
        wrapper.classList.add('hidden');
        popup.classList.remove('hidden')
        popup.classList.add('popup__visible');
        (correctAnswers < 10) ? popup.innerHTML = `Ти відповів правильно на ${correctAnswers} з ${total} питань.<br>Тобі потрібно краще вивчити столиці країн Європи.<br><br>Хочеш зіграти ще раз?<br><br>`:
            (correctAnswers >= 10 && correctAnswers < 20) ? popup.innerHTML = `Ти відповів правильно на ${correctAnswers} з ${total} питань.<br>Хороший результат, але я думаю ти зможеш краще.<br><br>Хочеш зіграти ще раз?<br><br>` :
            (correctAnswers >= 15 && correctAnswers < 25) ? popup.innerHTML = `Ти відповів правильно на ${correctAnswers} з ${total} питань.<br>Чудово! Ще трішки практики і ти будеш знати всі столиці Європи.<br><br>Хочеш зіграти ще раз?<br><br>` : popup.innerHTML = `Ти відповів правильно на ${correctAnswers} з ${total} питань.<br>Ти бездоганно знаєш всі столиці Європи!<br><br>Хочеш зіграти ще раз?<br><br>`;
        const button = document.createElement('button');
        button.textContent = 'Так!';
        button.className = 'button';
        popup.appendChild(button);
    }

}

let startGame = () => {
    showPopUp();
    nameCapital.forEach((element) => {
        element.style.pointerEvents = 'auto';
        element.style.opacity = '1';
    })

    findRandomIndex(countries);

    showRandomCountry(countries[randomIndex].country);

    addAnswers(randomIndex);
    console.log(answersArray);

    hasDublicateCapital(answersArray);

    mixArray(answersArray);

    showCapitalInAnswers(answersArray);
};

let disabledButtons = (array) => {
    array.forEach((element) => {
        element.style.pointerEvents = 'none';
        element.style.opacity = '0.7';
    })
}

let chooseAnswer = () => {
    nameCapital.forEach((answer) => {
        answer.addEventListener('click', () => {
            if (checkComputerCapital === answer.textContent) {
                mixArray(correctMessages);
                message.innerText = correctMessages[0];
                message.className = "correct";
                correctAnswers++;
                showResult(totalCorrectAnswers, correctAnswers);
            } else {
                mixArray(incorrectMessages);
                message.innerText = incorrectMessages[0];
                message.className = "incorrect";
                incorrectAnswers++;
                showResult(totalIncorrectAnswers, incorrectAnswers);
            };

            disabledButtons(nameCapital);

            cleanArray(answersArray);

            total++;
            showResult(totalQuestion, total);

            (correctAnswers < 5) ? showResult(userLevel, level[0]):
                (correctAnswers >= 5 && correctAnswers < 10) ? showResult(userLevel, level[1]) :
                (correctAnswers >= 10 && correctAnswers < 15) ? showResult(userLevel, level[2]) :
                (correctAnswers >= 15 && correctAnswers < 25) ? showResult(userLevel, level[3]) : showResult(userLevel, level[4]);

            let newRound = setTimeout(() => {
                startGame();
                message.innerText = '';
                message.classList.remove("correct");
                message.classList.remove("incorrect");
            }, 1800);
        });
    })
};

chooseAnswer();

window.onload = startGame();