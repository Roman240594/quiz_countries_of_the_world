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


let userName;

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