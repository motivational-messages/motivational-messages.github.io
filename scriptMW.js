const messages = [
    "Believe you can and you're halfway there",
    "Do your best and let God do the rest",
]

function myFunction() {
    number = Math.floor(Math.random()*2);

    message = document.getElementById("message").innerHTML = '"' + messages[number] + '"'; document.getElementById("message").style.color = "white"; document.getElementById("message").style.fontSize = "4em";
              document.getElementById("message").style.animationName = "quote"; document.getElementById("message").style.animationDuration = "1s"; document.getElementById("message").style.fontWeight = "800";
              document.getElementById("message").style.fontFamily = "Indie Flower"; document.getElementById("message").style.fontStyle = "italic"

    start = document.getElementById("start").style.animationName = "smaller"; document.getElementById("start").style.animationDuration = "1s";     document.getElementById("start").style.fontSize = "2em"

    button = document.getElementById("button").style.animationName = "fadeAway"; document.getElementById("button").style.animationDuration = "1s"; document.getElementById("button").style.opacity = "0"
}