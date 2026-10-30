function playGame(){
    var btn = document.querySelector('#playButton');
    if (!btn) return;
    var url = btn.dataset.src;
    var html = `<iframe src="${url}" style="width:100%;height:100%" frameborder="0" id="gameframe" allow="fullscreen" allowfullscreen></iframe>`;
    var container = document.querySelector('.game-play');
    if (container) {
        container.innerHTML = html;
    }
}

function open_fullscreen(){
    let game = document.getElementById("gameframe") || document.getElementById("heroGameFrame");
    if (!game) return;
    if (game.requestFullscreen) {
        game.requestFullscreen();
    } else if (game.mozRequestFullScreen) { /* Firefox */
        game.mozRequestFullScreen();
    } else if (game.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        game.webkitRequestFullscreen();
    } else if (game.msRequestFullscreen) { /* IE/Edge */
        game.msRequestFullscreen();
    }
}

function startHeroRooftopSnipers() {
    var screen = document.getElementById('heroScreen');
    var cover = document.getElementById('heroCover');
    if (!screen) return;
    var gameUrl = "https://vex-3-xmas.github.io/game-vex-3-xmas/vex-3-xmas/";
    screen.innerHTML = `<iframe src="${gameUrl}" id="heroGameFrame" style="width:100%;height:100%;border:none;" allow="fullscreen; autoplay" allowfullscreen></iframe>`;
}

function reloadHeroGame() {
    var frame = document.getElementById('heroGameFrame');
    if (frame) {
        frame.src = frame.src;
    } else {
        startHeroRooftopSnipers();
    }
}