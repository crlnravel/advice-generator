// adding divider img

const dividerImg = document.createElement("img")
const dividerCont = document.getElementById("divider")

if (window.matchMedia("(max-width: 375px)").matches) {
    dividerImg.src ="./images/pattern-divider-mobile.svg"
} else {
    dividerImg.src = "./images/pattern-divider-desktop.svg"
}

dividerCont.appendChild(dividerImg)

// fetch advice api

const adviceId = document.getElementById("advice-id")
const adviceText = document.getElementById("advice")

async function advicesAPI() {
    let advice = await fetch("https://api.adviceslip.com/advice")
                    .then(response => {
                        if (response.ok) return response.json()
                    })
                    .then(response => response.slip)

    adviceId.innerHTML = `ADVICE #${advice.id}`
    adviceText.innerHTML = `"${advice.advice}"`
}

advicesAPI()

// control dice button

const dice = document.querySelector(".dice-cont")

function onMouseEnter() {
    dice.style.animation = "boxanimationopen .5s"
    dice.style["animation-fill-mode"] = "forwards"
    dice.style.cursor = "pointer"
}

function onMouseLeave() {
    dice.style.animation = "boxanimationclose .5s"
}

function onMouseClick() {
    advicesAPI()
}