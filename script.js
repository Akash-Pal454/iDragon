score = 0;
cross = true;

audio = new Audio('music.mp3');
audiogo = new Audio('gameover.mp3');
setTimeout(() => {
    audio.play();
}, 1000);

document.onkeydown = function (e) {
    console.log(e.keyCode)
    if (e.keyCode == 38) {
        dino = document.querySelector('.dino');
        dino.classList.add('AnimateDino');
        setTimeout(() => {
            dino.classList.remove('AnimateDino');
        }, 600);
    }
    if (e.keyCode == 39) {
        dino = document.querySelector('.dino')
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX + 100 + "px";
    }
    if (e.keyCode == 37) {
        dino = document.querySelector('.dino')
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = (dinoX - 100) + "px";
    }
}

setInterval(() => {
    dino = document.querySelector('.dino');
    obstacle = document.querySelector('.obstacle');
    gameover = document.querySelector('.gameover');

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offSetX = Math.abs(dx - ox);
    offSetY = Math.abs(dy - oy);
    console.log(offSetX, offSetY)
    if (offSetX < 85 && offSetY < 52) {
        gameover.innerHTML = "Game Over- Reload To Play Again"
        obstacle.classList.remove('Animate-obstacle')
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audio.pause()
        }, 1000);
    } else if (offSetX < 130 && cross) {
        score += 1;
        scoreUpdate(score)
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);

        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            obstacle.style.animationDuration = newDur + 's';

        }, 400);

    }
}, 300);

function scoreUpdate(score) {
    scoreview.innerHTML = "Your Score: " + score

}