const messages = [
    "Believe you can and you're halfway there",
    "Do your best and let God do the rest",
    "Life is like the discriminant of a quadratic equation. Stay positive and there will always be solutions.",
    "Stop scrolling, start winning",
    "To be strong is to be kind and optimistic even when the world does nothing but punch you in the face",
    "no matter what you think, youre doing well. youre making progress. im proud of you, friend :) keep on going!!! you got this <3",
    "Self-love is like a cheat code. Once you do, you're all set to win.",
    "We don’t only live once, we live everyday until we die once",
    "Don't be sad that it's over, be happy that it happened :)",
    "Believe, really believe, you can succeed, and you will",
    "Be hearty in your approbation and lavish in your praise"
]

let length = messages.length

function myFunction() {
    number = Math.floor(Math.random() * length);

    message = document.getElementById("message").innerHTML = '"' + messages[length - 1] + '"'; document.getElementById("message").style.color = "white"; document.getElementById("message").style.fontSize = "4em";
              document.getElementById("message").style.animationName = "quote"; document.getElementById("message").style.animationDuration = "1s"; document.getElementById("message").style.fontWeight = "800";
              document.getElementById("message").style.fontFamily = "Indie Flower"; document.getElementById("message").style.fontStyle = "italic"

    start = document.getElementById("start").style.animationName = "smaller"; document.getElementById("start").style.animationDuration = "1s";     document.getElementById("start").style.fontSize = "2em"

    button = document.getElementById("button").style.animationName = "fadeAway"; document.getElementById("button").style.animationDuration = "1s"; document.getElementById("button").style.opacity = "0"
}
