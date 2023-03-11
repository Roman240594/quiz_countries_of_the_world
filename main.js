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
        country: "Великобританія",
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
        capital: "Мінск"
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

const nameCountry = document.querySelector('.name__country');
const nameCapital = document.querySelectorAll('.answer');

let userName;
let randomIndex;
let answersArray = [];

let write = setTimeout(() => {
    userName = prompt('Як тебе звати?');
    writeUserName();
}, 300);

let writeUserName = () => {
    if (userName == null || userName == undefined || userName == '') {
        userName = 'Всезнайка';
        console.log(userName);
    } else {
        userName = userName;
        console.log(userName);
    }
};

let findRandomIndex = (item) => {
    randomIndex = Math.floor(Math.random() * item.length);
}

findRandomIndex(countries);

let showRandomCountry = (country) => {
    nameCountry.innerHTML = country;
};

showRandomCountry(countries[randomIndex].country);

for (let i = 0; i < countries.length; i++) {
    if (i === randomIndex) {
        answersArray.push(countries[i].capital);
    };
};

let getRandomCapital = () => {
    for (let i = 0; i < 3; i++) {
        randomIndex = Math.floor(Math.random() * countries.length);
        answersArray.push(countries[randomIndex].capital);
    }
};

getRandomCapital();

let mixArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    };
}

mixArray(answersArray);

let showCapitalInAnswers = () => {
    for (i = 0; i < answersArray.length; i++) {
        nameCapital[i].innerHTML = answersArray[i];
    }
};

showCapitalInAnswers()