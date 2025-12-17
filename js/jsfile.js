//console.log("hello");
const sunInfo = [
    "yellow dwarf", // star class
    "4.6 billion years", // age
    "109 x Earth radius", // radius
    "white", // color
    "5527 C", // temperature
    "1 AU" //distance from earth
]

const mercuryInfo = {
    planetType: "rocky planet",
    radius: "0.3 Earths",
    temperature: "average 67 C",
    satelites: "0",
    atmosphericPressure: "less than 0.5 nPa"
};

const venusInfo = {
    planetType: "rocky planet",
    radius: "0.9 Earths",
    temperature: "average 464 C",
    satelites: "0",
    atmosphericPressure: "9.3 MPA"
};

const earthInfo = {
    planetType: "ocean world",
    radius: "6371 km",
    temperature: "average 15 C",
    satelites: [1, "moon"],
    atmosphericPressure: "101 kPa (at sea level)"
};

const marsInfo = {
    planetType: "rocky planet",
    radius: "3389 km",
    temperature: "average -60 C",
    satelites: [2, "Deimos", "Phobos"],
    atmosphericPressure: "0.6 kPa"
};

const jupiterInfo = {
    planetType: "gas giant",
    radius: "11 Earths",
    temperature: "165 K",
    satelites: "97 (as of 2025)",
    atmosphericPressure: "200-600 kPa"
};

const saturnInfo = {
    planetType: "gas giant",
    radius: "9.1 Earths",
    temperature: "134 K",
    satelites: "274 and innumerable additional moonlets",
    atmosphericPressure: ">>1000 bars"
};

const uranusInfo = {
    planetType: "ice giant",
    radius: "4 Earths",
    temperature: "76 K",
    satelites: "29 known",
    atmosphericPressure: "100 to 0.1 bar"
};

const neptuneInfo = {
    planetType: "ice giant",
    radius: "3.8 Earths",
    temperature: "72 K",
    satelites: "16 known",
    atmosphericPressure: "10 GPa"
};

function mainPage() {
    window.location.href = "solarSystem.html"
}
function openPage(planet) {
    switch (planet) {
        case "sun":
            window.location.href = "sun.html";
            break;
        case "mercury":
            window.location.href = "mercury.html";
            break;
        case "venus":
            window.location.href = "venus.html";
            break;
        case "earth":
            window.location.href = "earth.html";
            break;
        case "mars":
            window.location.href = "mars.html";
            break;
        case "jupiter":
            window.location.href = "jupiter.html";
            break;
        case "saturn":
            window.location.href = "saturn.html";
            break;
        case "uranus":
            window.location.href = "uranus.html";
            break;
        case "neptune":
            window.location.href = "neptune.html";
            break;
        default:
            break;
    }
}
// funkcija su ciklu kad imestu informacija is sunInfo masyvo i lentele
function addData() {
    const tds = document.querySelectorAll("#sunRow td");
    for (const [i, value] of sunInfo.entries()){
        if(tds[i]){
            tds[i].textContent = value;
        }
    }
}



