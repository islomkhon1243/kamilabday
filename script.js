window.onload = function() {
    const music = document.getElementById('background-music');
    document.body.addEventListener('click', function() {
        music.play();
    }, { once: true });
};
