window.onload = () => {
    const audio = document.getElementById('background-audio');
    const audioToggle = document.getElementById('audio-toggle');

    // Toggle Play/Pause
    audioToggle.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            audioToggle.innerHTML = "<i class='bx bx-pause'></i>";
            audioToggle.classList.add('playing'); // Add class for playing state
        } else {
            audio.pause();
            audioToggle.innerHTML = "<i class='bx bx-play'></i>";
            audioToggle.classList.remove('playing'); // Remove class for playing state
        }
    });
};
