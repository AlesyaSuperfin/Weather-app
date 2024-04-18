const api = {
    endpoint:"https://api.openweathermap.org/data/2.5/",
    key: "b6fd9131bf9ae31286a480831f207146"
}


const input = document.querySelector('#input');
input.addEventListener('keydown', enter);

function enter (e) {
    if (e.keyCode === 13) {
        getInfo(input.value);
    }
}

async function getInfo (data) {
    const res = await fetch (`${api.endpoint}weather?q=${data}&units=metric&appID=${api.key}`);
    const result = await res.json();
    displayResult(result);
}

function displayResult (result) {
    let city = document.querySelector("#city");
    city.textContent = `${result.name}, ${result.sys.country}`;

    getCurrentDate();

    let temperature = document.querySelector("#temperature");
    temperature.textContent = `${Math.round(result.main.temp)}°`;

    let conditions = document.querySelector("#conditions");
    conditions.textContent = `${result.weather[0].main}`;

    let feelslike = document.querySelector("#feelslike");
    feelslike.textContent = `Feels like: ${Math.round(result.main.feels_like)}°`;

    let variation = document.querySelector("#variation");
    variation.textContent = `Min: ${Math.round(result.main.temp_min)}° Max: ${Math.round(result.main.temp_max)}°`
}

function getCurrentDate () {
    const myDate = new Date;
    const date = document.querySelector("#date");
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let month = months[myDate.getMonth()];
    let day = days[myDate.getDay()];
    let year = myDate.getFullYear();
    let numberDate = myDate.getDate();

    date.textContent = day + ", " + numberDate + " " + month + " " + year;
}


input.addEventListener('keypress', function (e) {
    key=e.keyCode;
    if (key === 13) {
        gsap.from("#weatherNow", {
            opacity: 0,
            duration: 5,
        })    
    }
})