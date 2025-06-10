let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let keyboard = new KeyboardKey();
let startButton = document.getElementById('gameStart');
let retryButton = document.getElementById("retryButton")
let startButtonResponsive = document.getElementById('start');
let actionPanel = document.getElementById('action-panel');
let mainMenuButton = document.createElement('button');
let muteButtonResponsive = document.getElementById('mute');
let topPanel = document.getElementById('top-panel')
let retryButtonResponsive = document.getElementById("retry")
let backgroundMusic = new Audio('audio/backgroundMusic.mp3')
let volumeControl = document.getElementById('volumeControl');
let soundMuted = false;
let soundsArray = []
let world = null;
let gameRunning = false;
let keyMap = {
    37: 'LEFT',
    38: 'UP',
    39: 'RIGHT',
    40: 'DOWN',
    32: 'SPACE',
    68: 'D',
    65: 'A',
    77: 'M'
};

/**
 * Loads an image and draws it to the canvas, then displays "Press Start to Play".
 */
function loadAndDrawImage() {
    let img = new Image();
    img.src = "img/craftpix-net-823949-free-nature-backgrounds-pixel-art/nature_1/origbig.png";
    img.onload = function () {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        drawCenteredText("Press Start to Play");
    };
}

/**
 * Draws centered text on the canvas.
 * @param {string} text - The text to display.
 */
function drawCenteredText(text) {
    ctx.font = "18px Arial";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);
}

/**
 * Initializes the world and the keyboard.
 */
function init() {
    world = new World(canvas, keyboard);
    world.ctx.textAlign = "start";
    world.ctx.textBaseline = "alphabetic";
}

/**
 * Restarts the game, terminating the current world and initializing a new one.
 */
function retry() {
    if (world) world.terminate();
    world = new World(canvas, keyboard);
    world.ctx.textAlign = "start";
    world.ctx.textBaseline = "alphabetic";
    gameRunning = true;
}


document.addEventListener('DOMContentLoaded', () => {
    let controlsPopup = document.getElementById('controlsPopup');
    let showControlsButton = document.getElementById('showControls');
    let closePopupButton = document.getElementById('closePopup');

    showControlsButton.addEventListener('click', () => {
        controlsPopup.classList.remove('hidden');
    });

    closePopupButton.addEventListener('click', () => {
        controlsPopup.classList.add('hidden');
    });
});

document.getElementById('showControls').addEventListener('click', () => {
    document.getElementById('controlsPopup').classList.remove('hidden');
});

document.getElementById('closePopup').addEventListener('click', () => {
    document.getElementById('controlsPopup').classList.add('hidden');
});

document.getElementById('showImpressum').addEventListener('click', () => {
    document.getElementById('impressumPopup').classList.remove('hidden');
});

document.getElementById('closeImpressum').addEventListener('click', () => {
    document.getElementById('impressumPopup').classList.add('hidden');
});

startButton.addEventListener('click', () => {
    startButton.disabled = true;
    startButton.style.opacity = '0.5';
    startButton.style.cursor = 'not-allowed';
    init();
    backgroundMusic.play();
    backgroundMusic.volume = localStorage.getItem("volumeLevel")
    startButton.classList.add('d-none')
    retryButton.classList.remove('d-none')
    retryButton.disabled = true;

});

retryButton.addEventListener("click", () => {
    retry();
    retryButton.disabled = true;
    mainMenuButton.classList.add('d-none')
});

startButtonResponsive.addEventListener('click', () => {
    startButtonResponsive.disabled = true;
    startButtonResponsive.style.opacity = '0.5';
    startButtonResponsive.style.cursor = 'not-allowed';
    init();
    backgroundMusic.play();
    startButtonResponsive.classList.add('d-none')
    retryButtonResponsive.classList.remove('d-none')
    retryButtonResponsive.disabled = true;
});

retryButtonResponsive.addEventListener("click", () => {
    retry();
    retryButtonResponsive.disabled = true;
    mainMenuButton.classList.add('d-none')
});

document.addEventListener("DOMContentLoaded", () => {
    let isMuted = localStorage.getItem("muteStatus") === "true";
    let savedVolume = localStorage.getItem("volumeLevel") || 1;

    volumeControl.value = savedVolume;
    let adjustedVolume = Math.pow(savedVolume, 2);
    backgroundMusic.volume = isMuted ? 0 : adjustedVolume;

    let toggleSoundElement = document.getElementById('toggleSound');

    if (isMuted) {
        muteAllSounds();
        muteButtonResponsive.textContent = '🔇';
        if (toggleSoundElement) {
            toggleSoundElement.innerText = 'Press M to unmute sounds!';
            toggleSoundElement.classList.remove('sound-on');
            toggleSoundElement.classList.add('sound-off');
        }
    } else {
        unmuteAllSounds();
        muteButtonResponsive.textContent = '🔈';
        if (toggleSoundElement) {
            toggleSoundElement.innerText = 'Press M to mute sounds!';
            toggleSoundElement.classList.remove('sound-off');
            toggleSoundElement.classList.add('sound-on');
        }
    }
});


muteButtonResponsive.addEventListener("click", () => {
    let areSoundsMuted = Object.values(GLOBAL_SOUNDS).every(sound => sound.muted);
    if (areSoundsMuted) {
        unmuteAllSounds();
        muteButtonResponsive.textContent = '🔈';
        let adjustedVolume = Math.pow(volumeControl.value, 2);
        backgroundMusic.volume = adjustedVolume;
        localStorage.setItem("muteStatus", "false");
    } else {
        muteAllSounds();
        muteButtonResponsive.textContent = '🔇';
        backgroundMusic.volume = 0;
        localStorage.setItem("muteStatus", "true");
    }
});


window.addEventListener("keydown", (e) => {
    let key = keyMap[e.keyCode];
    if (key === 'M') {
        let isMuted = localStorage.getItem("muteStatus") === "true";
        if (isMuted) {
            unmuteAllSounds();
            document.getElementById('toggleSound').innerText = 'Press M to mute sounds!';
            document.getElementById('toggleSound').classList.remove('sound-off');
            document.getElementById('toggleSound').classList.add('sound-on');
            let adjustedVolume = Math.pow(volumeControl.value, 2);
            backgroundMusic.volume = adjustedVolume;
            localStorage.setItem("muteStatus", "false");
        } else {
            muteAllSounds();
            document.getElementById('toggleSound').innerText = 'Press M to unmute sounds!';
            document.getElementById('toggleSound').classList.remove('sound-on');
            document.getElementById('toggleSound').classList.add('sound-off');
            // backgroundMusic.volume = 0;
            localStorage.setItem("muteStatus", "true");
        }
    }
});

window.addEventListener("keyup", (e) => {
    let key = keyMap[e.keyCode];
    if (key) {
        keyboard[key] = false;
    }
});

volumeControl.addEventListener('input', () => {
    let adjustedVolume = Math.pow(volumeControl.value, 2);
    backgroundMusic.volume = adjustedVolume;
    localStorage.setItem("volumeLevel", volumeControl.value);
});


backgroundMusic.volume = volumeControl.value;

/**
 * Mutes all sounds in the GLOBAL_SOUNDS object and saves the mute status.
 */
function muteAllSounds() {
    for (let soundKey in GLOBAL_SOUNDS) {
        if (GLOBAL_SOUNDS.hasOwnProperty(soundKey)) GLOBAL_SOUNDS[soundKey].muted = true;
    }
    localStorage.setItem("muteStatus", "true"); // Save mute state
}

/**
 * Unmutes all sounds in the GLOBAL_SOUNDS object and saves the mute status.
 */
function unmuteAllSounds() {
    for (let soundKey in GLOBAL_SOUNDS) {
        if (GLOBAL_SOUNDS.hasOwnProperty(soundKey)) GLOBAL_SOUNDS[soundKey].muted = false;
    }
    localStorage.setItem("muteStatus", "false"); // Save unmute state
}

/**
 * Checks the screen orientation and adjusts the visibility of elements.
 * - Shows or hides the warning element and canvas based on orientation.
 * - Displays the action panel only on small screens in landscape mode.
 */
function checkScreenOrientation() {
    let warningElement = document.getElementById('screen-warning');
    let canvasElement = document.getElementById('canvas');
    if (!warningElement || !canvasElement || !actionPanel) return;

    let isPortrait = window.innerHeight > window.innerWidth;
    let isSmallScreen = window.innerWidth < 720;

    if (isSmallScreen && isPortrait) {
        warningElement.classList.add('visible');
        warningElement.style.display = 'flex';
        canvasElement.style.visibility = 'hidden';
        canvasElement.style.opacity = '0';
        actionPanel.style.display = 'none';
        topPanel.style.opacity = '0'
    } else {
        warningElement.classList.remove('visible');
        warningElement.style.display = 'none';
        topPanel.style.opacity = '1'
        canvasElement.style.visibility = 'visible';
        canvasElement.style.opacity = '1';
        actionPanel.style.display = isSmallScreen && !isPortrait ? 'flex' : 'none';
    }
}

document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
});

/**
     * Creates and styles the main menu button, then appends it to the document body.
     */
function createMainMenuButton() {
    mainMenuButton.classList.remove('d-none')
    mainMenuButton.classList.add('gameStart'); // Add the provided CSS class
    mainMenuButton.textContent = 'Main Menu';
    mainMenuButton.style.position = 'absolute';
    mainMenuButton.style.top = '50%';
    mainMenuButton.style.left = '50%';
    mainMenuButton.style.transform = 'translateX(-50%)';
    mainMenuButton.addEventListener('click', () => handleMainMenuClick(mainMenuButton));
    document.body.appendChild(mainMenuButton);
}

/**
* Makes the start buttons visible again.
*/
function showStartButtons() {
    startButtonResponsive.disabled = false;
    startButtonResponsive.classList.remove('d-none');
    retryButtonResponsive.classList.add('d-none');
    retryButtonResponsive.disabled = false;
    startButton.disabled = false;
    startButton.classList.remove('d-none');
    retryButton.classList.add('d-none');
    retryButton.disabled = false;
    startButton.style.opacity = '1';
    startButton.style.cursor = 'pointer';
    backgroundMusic.pause();
}

/**
   * Enables the retry button and makes it visible.
   */
function enableRetryButton() {
    document.getElementById('retryButton').disabled = false;
    document.getElementById('retry').disabled = false;
}

/**
    * Handles the main menu button click event.
    * @param {HTMLElement} mainMenuButton - The main menu button element.
    */
function handleMainMenuClick(mainMenuButton) {
    loadAndDrawImage(); // Call the loadAndDrawImage function
    showStartButtons();
    mainMenuButton.classList.add('d-none'); // Hide the main menu button
    startButtonResponsive.style.opacity = '1';
    startButtonResponsive.style.cursor = 'pointer';
}

/**
    * Displays the game over or victory screen with the appropriate message.
    */
function displayGameOverScreen() {
    world.ctx.clearRect(0, 0, world.canvas.width, world.canvas.height);
    world.ctx.fillStyle = 'black';
    world.ctx.fillRect(0, 0, world.canvas.width, world.canvas.height);
    world.ctx.fillStyle = 'white';
    world.ctx.font = '48px Arial';
    world.ctx.textAlign = 'center';
    world.ctx.fillText(
        world.saveCharacterEnergy <= 0 ? 'Game Over' : 'Victory!',
        world.canvas.width / 2,
        world.canvas.height / 2
    );
}

window.addEventListener('resize', checkScreenOrientation);
window.addEventListener('load', checkScreenOrientation);
