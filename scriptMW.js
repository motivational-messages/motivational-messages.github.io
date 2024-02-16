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
    "Be hearty in your approbation and lavish in your praise",
    "LET HIM COOK 🗣️🗣️🗣️🗣️🗣️🗣️",
    "Failure is success, success is failure, the electron does not stay put. Good luck lol.",

    // incoming 14 quotes not taken from the google form
    
    "Learn as if you will live forever, live like you will die tomorrow",
    "When you change your thoughts, remember to also change your world",
    "It is only when we take chances that our lives improve",
    "Success is not final; failure is not fatal: It is the courage to continue that counts",
    "It is better to fail in originality than to succeed in imitation",
    "The road to success and the road to failure are almost exactly the same",
    "Success usually comes to those who are too busy to be looking for it",
    "Don’t let yesterday take up too much of today",
    "You learn more from failure than from success. Don’t let it stop you. Failure builds character.",
    "Experience is a hard teacher because she gives the test first, the lesson afterward",
    "Either you run the day or the day runs you",
    "When we strive to become better than we are, everything around us becomes better too",
    "He who conquers himself is the mightiest warrior",
    "One man with courage makes a majority",
    "You’ve got to get up every morning with determination if you’re going to go to bed with satisfaction",
]

function myFunction() {
    number = Math.floor(Math.random() * messages.length);

    message = document.getElementById("message").innerHTML = '"' + messages[number] + '"'; document.getElementById("message").style.color = "white"; document.getElementById("message").style.fontSize = "4em";
              document.getElementById("message").style.animationName = "quote"; document.getElementById("message").style.animationDuration = "1s"; document.getElementById("message").style.fontWeight = "800";
              document.getElementById("message").style.fontFamily = "Indie Flower"; document.getElementById("message").style.fontStyle = "italic"

    start = document.getElementById("start").style.animationName = "smaller"; document.getElementById("start").style.animationDuration = "1s";     document.getElementById("start").style.fontSize = "2em"

    button = document.getElementById("button").style.animationName = "fadeAway"; document.getElementById("button").style.animationDuration = "1s"; document.getElementById("button").style.opacity = "0"
}
