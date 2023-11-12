$(document).ready(function() {
    var audio = document.getElementById("audio");
    var initialMessages = [
        "Dear Friend, On this special day, I want to wish you all the joy, happiness, and success in the world.",
        "May your birthday be filled with love, laughter, and unforgettable moments.",
        "Here's to another year of amazing adventures!"
    ];
    var newMessages = [
        "Wishing you a year filled with new opportunities and achievements.",
        "May your days ahead be even brighter and more exciting.",
        "Happy Birthday! Keep shining and inspiring us all."
    ];
    var currentMessageIndex = 0;

    function displayNextMessage() {
        if (currentMessageIndex < initialMessages.length) {
            $(".message p").eq(currentMessageIndex).text(initialMessages[currentMessageIndex]);
        } else if (currentMessageIndex < initialMessages.length + newMessages.length) {
            var newIndex = currentMessageIndex - initialMessages.length;
            $(".message p").eq(newIndex).text(newMessages[newIndex]);
        }
        currentMessageIndex++;

        if (currentMessageIndex === initialMessages.length + newMessages.length) {
            changeBackgroundAndPlayAudio();
        }
    }

    $(".message").click(function() {
        if (currentMessageIndex < initialMessages.length + newMessages.length) {
            displayNextMessage();
        }
    });

    function changeBackgroundAndPlayAudio() {
        $("body").css("background-image", 'url("new_background.jpeg")');
        audio.play();
    }

    // Initial display of messages
    displayNextMessage();
});
