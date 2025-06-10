class KeyboardKey {
    constructor() {
        this.RIGHT = false;
        this.LEFT = false;
        this.SPACE = false;
        this.UP = false;
        this.DOWN = false;
        this.D = false;
        this.A = false;
        this.keyDownHandler = this.keyDownHandler.bind(this);
        this.keyUpHandler = this.keyUpHandler.bind(this);
        this.touchStartHandler = this.touchStartHandler.bind(this);
        this.touchEndHandler = this.touchEndHandler.bind(this);
        window.addEventListener('keydown', this.keyDownHandler);
        window.addEventListener('keyup', this.keyUpHandler);
        this.addTouchListeners();
    }

    keyDownHandler(event) {
        if (event.key === 'ArrowRight') this.RIGHT = true;
        if (event.key === 'ArrowLeft') this.LEFT = true;
        if (event.key === ' ') this.SPACE = true;
        if (event.key === 'ArrowUp') this.UP = true;
        if (event.key === 'ArrowDown') this.DOWN = true;
        if (event.key.toLowerCase() === 'd') this.D = true;
        if (event.key.toLowerCase() === 'a') this.A = true;
    }

    keyUpHandler(event) {
        if (event.key === 'ArrowRight') this.RIGHT = false;
        if (event.key === 'ArrowLeft') this.LEFT = false;
        if (event.key === ' ') this.SPACE = false;
        if (event.key === 'ArrowUp') this.UP = false;
        if (event.key === 'ArrowDown') this.DOWN = false;
        if (event.key.toLowerCase() === 'd') this.D = false;
        if (event.key.toLowerCase() === 'a') this.A = false;
    }

    touchStartHandler(event) {
        const target = event.target;

        if (target.id === 'move-right') this.RIGHT = true;
        if (target.id === 'move-left') this.LEFT = true;
        if (target.id === 'jump') this.SPACE = true;
        if (target.id === 'throw') this.D = true;
    }

    touchEndHandler(event) {
        const target = event.target;

        if (target.id === 'move-right') this.RIGHT = false;
        if (target.id === 'move-left') this.LEFT = false;
        if (target.id === 'jump') this.SPACE = false;
        if (target.id === 'throw') this.D = false;
    }

    addTouchListeners() {
        const moveLeftButton = document.getElementById('move-left');
        const moveRightButton = document.getElementById('move-right');
        const jumpButton = document.getElementById('jump');
        const throwButton = document.getElementById('throw');

        if (moveLeftButton) {
            moveLeftButton.addEventListener('touchstart', this.touchStartHandler);
            moveLeftButton.addEventListener('touchend', this.touchEndHandler);
        }
        if (moveRightButton) {
            moveRightButton.addEventListener('touchstart', this.touchStartHandler);
            moveRightButton.addEventListener('touchend', this.touchEndHandler);
        }
        if (jumpButton) {
            jumpButton.addEventListener('touchstart', this.touchStartHandler);
            jumpButton.addEventListener('touchend', this.touchEndHandler);
        }
        if (throwButton) {
            throwButton.addEventListener('touchstart', this.touchStartHandler);
            throwButton.addEventListener('touchend', this.touchEndHandler);
        }
    }

    removeEventListeners() {
        window.removeEventListener('keydown', this.keyDownHandler);
        window.removeEventListener('keyup', this.keyUpHandler);

        const moveLeftButton = document.getElementById('move-left');
        const moveRightButton = document.getElementById('move-right');
        const jumpButton = document.getElementById('jump');
        const throwButton = document.getElementById('throw');

        if (moveLeftButton) {
            moveLeftButton.removeEventListener('touchstart', this.touchStartHandler);
            moveLeftButton.removeEventListener('touchend', this.touchEndHandler);
        }
        if (moveRightButton) {
            moveRightButton.removeEventListener('touchstart', this.touchStartHandler);
            moveRightButton.removeEventListener('touchend', this.touchEndHandler);
        }
        if (jumpButton) {
            jumpButton.removeEventListener('touchstart', this.touchStartHandler);
            jumpButton.removeEventListener('touchend', this.touchEndHandler);
        }
        if (throwButton) {
            throwButton.removeEventListener('touchstart', this.touchStartHandler);
            throwButton.removeEventListener('touchend', this.touchEndHandler);
        }
    }
}
