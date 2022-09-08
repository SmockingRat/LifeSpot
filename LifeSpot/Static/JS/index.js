function checkAge() {
    let age = prompt('Приветствую на LifeSpot! Сайт предназначен для лиц старше 18 лет! Сколько вам лет?');

    if (age >= 18) {
        alert('Добро пожаловать на наш сайт! Наслаждайтесь!');
    }
    else {
        alert('К сожалению вы слишком молоды для нашего сайта!');
        window.location.href = "http://www.google.com";
    }
}

const handleSession = function() {
    session.set("startDate", new Date().toLocaleString())
    session.set("userAgent", window.navigator.userAgent)
}

let sessionLog = function logSession() {
    for (let result of session) {
        console.log(result)
    }
}

function filterContent() {
    let elements = document.getElementsByClassName('video-container');

    for (let i = 0; i <= elements.length; i++) {
        let videoText = elements[i].querySelector(".video-title").innerText;
        if (!videoText.toLowerCase().includes(inputParseFunction()/* Захват переменной теперь происходит с помощью замыкания */.toLowerCase())) {
            elements[i].style.display = 'none';
        } else {
            elements[i].style.display = 'inline-block';
        }
    }
}