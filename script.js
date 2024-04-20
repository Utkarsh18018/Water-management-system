
document.getElementById("BookSlot").addEventListener("click", function() {
    document.getElementById("myForm").style.display = "block"; // Show the form
});

// Function to read text aloud
function speakText() {
    // Get the text to be read
    var textToSpeak = document.getElementsById('text-container').textContent;

    // Create a new speech synthesis object
    var speechSynthesis = window.speechSynthesis;

    // Create a new speech synthesis utterance
    var utterance = new SpeechSynthesisUtterance(textToSpeak);

    // Speak the text
    speechSynthesis.speak(utterance);
}

// Event listener for the speak button
document.getElementsById('speak-button').addEventListener('click', speakText);