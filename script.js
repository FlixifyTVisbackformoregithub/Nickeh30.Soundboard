document.querySelectorAll('.sound-button').forEach(button => {
    button.addEventListener('click', function() {
        const soundFile = this.getAttribute('data-sound');
        playSound(soundFile);
    });
});

function playSound(soundFile) {
    const audio = new Audio(`sounds/${soundFile}`);
    audio.play();
    console.log(`Playing sound: ${soundFile}`); // Feedback in console
}
