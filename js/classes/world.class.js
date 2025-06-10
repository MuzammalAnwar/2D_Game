class World {
    ctx; canvas; keyboard; animationFrameId; saveCharacterEnergy;
    character = new Character(); endboss = new Endboss();
    allIntervals = []; throwableObjects = [];
    cameraX = 0; amountOfThrowableSwords = 5; maxThrowableSwords = 10; amountOfStars = 0;
    collidingStatus = false; ground = [...new GroundObject(-2000, 130, 21, 100).groundObjects];
    swordStatusBar; characterHealthStatusBar; endbossStatusBar; starsStatusBar; swordStatusImg = new Image();
    throwError_SOUND; gameStart_SOUND; takingDamage_SOUND;
    collectableSword = level1.collectableSword; collectableCandies = level1.collectableCandies; background = level1.background; enemies = level1.enemies;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.throwError_SOUND = GLOBAL_SOUNDS.throwError
        this.gameStart_SOUND = GLOBAL_SOUNDS.gameStart
        this.takingDamage_SOUND = GLOBAL_SOUNDS.takingDamage
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.createStatusBars();
        this.draw()
        this.run();
        this.setWorld()
        this.checkThrowableObject();
        this.endbossRandomThrows()
        this.spawnEndboss()
        this.regenerateSwords()
        this.gameOverCheck()
    }

    /**
     * Sets the world for the character, ground, and enemies.
     */
    setWorld() {
        this.character.world = this;
        this.ground.world = this;
        this.enemies.forEach(enemy => {enemy.world = this; enemy.keyboard = this.keyboard; enemy.animateSlashingAttack();});
    }

    /**
     * Creates the status bars for the game.
     */
    createStatusBars() {
        this.swordStatusBar = new Statusbar(this.ctx);
        this.characterHealthStatusBar = new Statusbar(this.ctx);
        this.endbossStatusBar = new Statusbar(this.ctx);
        this.starsStatusBar = new Statusbar(this.ctx);
    }

    /**
     * Draws the game world onto the canvas.
     */
    draw() {
        const drawObjects = (objects) => { objects.forEach(object => { this.ctx.drawImage(object.img, object.x, object.y, object.height, object.width); }); };
        this.ctx.clearRect(0, 0, this.canvas.height, this.canvas.width);
        this.ctx.translate(this.cameraX, 0);
        drawObjects(this.background);
        drawObjects(this.ground);
        drawObjects(this.throwableObjects);
        drawObjects(this.collectableSword);
        this.collectableCandies.forEach(object => object.rotateAndDraw(this.ctx));
        [this.character, this.endboss].forEach(this.addToMap.bind(this));
        this.addEnemies();
        this.ctx.translate(-this.cameraX, 0);
        this.swordStatusBar.drawStatusBar(this.amountOfThrowableSwords, this.maxThrowableSwords, 'green', 5, 15);
        this.characterHealthStatusBar.drawStatusBar(this.character.energy, 100, 'red', 5, 2);
        this.characterHealthStatusBar.drawStatusBar(this.amountOfStars, 10, '#FDDA0D', 195, 2);
        this.drawEndbossStatusBar();
        this.animationFrameId = requestAnimationFrame(() => this.draw());
    }

    /**
     * Adds an object to the map (canvas).
     * @param {Object} object - The object to be drawn on the map.
     */
    addToMap(object) {
        if (object.otherDirection) {
            this.ctx.save();
            this.ctx.translate(object.width, 0);
            this.ctx.scale(-1, 1);
            object.x = object.x * -1;
        }
        this.ctx.drawImage(object.img, object.x, object.y, object.width, object.height);
        if (object.otherDirection) {
            object.x = object.x * -1;
            this.ctx.restore();
        }
    }

    /**
     * Adds enemies to the game world by drawing them on the canvas.
     */
    addEnemies() {
        this.enemies.forEach(object => {
            if (object.otherDirection) {
                this.flipImage(object);
            }
            this.ctx.drawImage(object.img, object.x, object.y, object.height, object.width);
            if (object.otherDirection) {
                this.flipImageBack(object);
            }
        });
    }

    /**
     * Flips the image horizontally for the given object.
     * @param {Object} object - The object whose image will be flipped.
     */
    flipImage(object) {
        this.ctx.save();
        this.ctx.translate(object.width, 0);
        this.ctx.scale(-1, 1);
        object.x = object.x * -1;
    }

    /**
     * Reverts the horizontal flip applied to the given object.
     * @param {Object} object - The object whose image will be restored.
     */
    flipImageBack(object) {
        object.x = object.x * -1;
        this.ctx.restore();
    }

    /**
     * Runs the game by setting up periodic checks for collisions and throwable objects.
     */
    run() {
        let intervalId = setInterval(() => { this.checkCollisions(); this.checkThrowableObject(); }, 200);
        this.allIntervals.push(intervalId);
    }

    /**
     * Checks for various types of collisions in the game.
     */
    checkCollisions() {
        this.characterAndEnemiesCollisions();
        this.swordAndCharacterCollisions();
        this.checkCharacterJumpingOnEnemy();
        this.starsAndCharacterCollisions();
        this.characterAndEndbossCollisions();
    }

    /**
     * Checks for collisions between the character and collectible swords.
     */
    swordAndCharacterCollisions() {
        for (let i = this.collectableSword.length - 1; i >= 0; i--) {
            let sword = this.collectableSword[i];
            if (this.character.isColliding(sword) && this.amountOfThrowableSwords < 10) {
                this.collectableSword[i].collected_SOUND.play();
                this.collectableSword.splice(i, 1);
                this.amountOfThrowableSwords++;
            }
        }
    }

    /**
    * Checks for collisions between the character and collectable candies.
    */
    starsAndCharacterCollisions() {
        for (let i = this.collectableCandies.length - 1; i >= 0; i--) {
            let candy = this.collectableCandies[i];
            if (this.character.isColliding(candy)) {
                this.collectableCandies[i].collected_SOUND.play();
                this.collectableCandies.splice(i, 1);
                this.amountOfStars++;
            }
        }
    }

    /**
     * Checks for collisions between the character and enemies.
     */
    characterAndEnemiesCollisions() {
        this.enemies.forEach(enemy => {
            let isColliding = this.character.isColliding(enemy);
            if (enemy.animateSlashingAttack(isColliding) == true) {
                this.character.hit(2);
                this.character.isHurt();
            }
        });
    }

    /**
     * Checks for collisions between the character and the Endboss.
     */
    characterAndEndbossCollisions() {
        let isColliding = this.character.isColliding(this.endboss);
        if (isColliding) {this.character.hit(5); this.character.isHurt();}
    }

    /**
     * Checks for collisions between a throwable sword and the enemies.
     * @param {Object} throwableSword - The throwable sword object to check for collisions with the enemies.
     */
    throwableSwordAndEnemyCollisions(throwableSword) {
        let intervalId = setInterval(() => {
            for (let i = this.enemies.length - 1; i >= 0; i--) {
                const enemy = this.enemies[i];
                if (enemy.isColliding(throwableSword)) {
                    throwableSword = false;
                    enemy.animateDeath();
                    setTimeout(() => {
                        this.enemies.splice(i, 1);
                    }, 250);
                }
            }
        }, 30);
        this.allIntervals.push(intervalId);
    }

    /**
     * Checks if the character can throw a throwable sword based on keyboard input.
     */
    checkThrowableObject() {
        let intervalId = setInterval(() => {
            if (this.keyboard.D) {
                if (this.amountOfThrowableSwords > 0) {
                    let throwableSword = new ThrowableObject(this.character.x, this.character.y, this.character.otherDirection, 'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/Vector Parts/SwordSmall.png');
                    this.throwableObjects.push(throwableSword);
                    this.throwableSwordAndEnemyCollisions(throwableSword); this.checkCharacterThrowAtEndboss(throwableSword);
                    this.amountOfThrowableSwords--;
                    this.character.animateThrow();
                    this.keyboard.D = false;
                } else {
                    this.throwError_SOUND.play();
                }
            }
        }, 60);
        this.allIntervals.push(intervalId);
    }

    /**
     * Makes the Endboss randomly throw throwable swords at regular intervals.
     */
    endbossRandomThrows() {
        let throwIntervals = [4000, 8000];
        let throwSword = () => {
            if (this.endboss) {
                let throwableSword = new ThrowableObject(this.endboss.x, this.endboss.y + 75, this.endboss.otherDirection, 'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_3/PNG/Vector Parts/SwordSmall.png');
                this.throwableObjects.push(throwableSword);
                this.endboss.animateThrowing();
                this.checkCharacterCollisionWithEnemySword(throwableSword);
                let nextInterval = throwIntervals[Math.floor(Math.random() * throwIntervals.length)];
                setTimeout(throwSword, nextInterval);
            }
        };
        throwSword();
    }

    /**
     * Checks for collisions between the throwable sword and the character.
     * @param {Object} throwableSword - The throwable sword object to check for collisions with the character.
     */
    checkCharacterCollisionWithEnemySword(throwableSword) {
        let collisionHandled = false;
        let intervalId = setInterval(() => {
            if (!this.character || !throwableSword) {
                clearInterval(intervalId);
                return;
            }
            if (this.character.isColliding(throwableSword)) {
                if (!collisionHandled) {
                    this.character.isHurt();
                    this.character.hit(10);
                    collisionHandled = true;
                }
            } else {
                collisionHandled = false;
            }
        }, 30);
        this.allIntervals.push(intervalId);
    }

    /**
     * Checks if the throwable sword collides with the Endboss.
     * @param {Object} throwableSword - The throwable sword object to check for collisions with the Endboss.
     */
    checkCharacterThrowAtEndboss(throwableSword) {
        let collisionHandled = false;
        let intervalId = setInterval(() => {
            if (this.endboss.isColliding(throwableSword)) {
                if (!collisionHandled) {
                    if (!this.endboss.isDead()) {
                        this.endboss.energy -= 20;
                        this.endboss.animateHurt();
                        this.takingDamage_SOUND.play();
                    }
                    collisionHandled = true;
                }
            } else {
                collisionHandled = false;
            }
        }, 30);
        this.allIntervals.push(intervalId);
    }

    /**
     * Monitors the direction in which the Endboss is walking relative to the character.
     */
    checkEndbossWalkingDirection() {
        let intervalId = setInterval(() => {
            if (this.character.x > this.endboss.x) {
                this.endboss.otherDirection = true;
            } else {
                this.endboss.otherDirection = false;
            }
        }, 60);
        this.allIntervals.push(intervalId);
    }

    /**
     * Spawns the Endboss by checking the Endboss's walking direction,
     */
    spawnEndboss() {
        this.checkEndbossWalkingDirection();
        this.endbossRandomThrows();
        this.endboss.animateWalking();
    }

    /**
     * Checks if the character is jumping on an enemy.
     */
    checkCharacterJumpingOnEnemy() {
        let previousY = this.character.y;
        let intervalId = setInterval(() => {
            for (let i = 0; i < this.enemies.length; i++) {
                let enemy = this.enemies[i];
                let isColliding = this.character.isJumpingOnEnemy(enemy, previousY);
                if (isColliding) {
                    enemy.animateDeath();
                    this.enemies.splice(i, 1);
                    this.takingDamage_SOUND.play();
                }
            }
            previousY = this.character.y;
        }, 60);
        this.allIntervals.push(intervalId);
    }

    /**
     * Draws the status bar for the Endboss if the character is close enough.
     */
    drawEndbossStatusBar() {
        if (Math.abs(this.character.x - this.endboss.x) <= 350) {
            this.endbossStatusBar.drawStatusBar(this.endboss.energy, 200, '#FF5733', 195, 15);
        }
    }

    /**
     * Checks if the throwable sword collides with the Endboss and applies damage.
     * @param {Object} throwableSword - The throwable sword object to check for collisions.
     */
    checkCharacterThrowAtEndboss(throwableSword) {
        let collisionHandled = false;
        let intervalId = setInterval(() => {
            if (this.endboss.isColliding(throwableSword)) {
                if (!collisionHandled && !this.endboss.isDead()) {
                    this.endboss.energy -= 20;
                    this.endboss.animateHurt();
                    this.takingDamage_SOUND.play();
                    collisionHandled = true;
                }
            } else {collisionHandled = false;}
        }, 30);
        this.allIntervals.push(intervalId);
    }

    /**
     * Regenerates throwable swords at regular intervals.
     */
    regenerateSwords() {
        const regenerationInterval = 15000;
        const regenerationAmount = 1;
        let intervalId = setInterval(() => {
            if (this.amountOfThrowableSwords < this.maxThrowableSwords) {
                this.amountOfThrowableSwords = Math.min(this.amountOfThrowableSwords + regenerationAmount, this.maxThrowableSwords);
            }
        }, regenerationInterval);
        this.allIntervals.push(intervalId);
    }

    /**
     * Starts the game over check and displays the game over screen with retry and main menu buttons.
     */
    gameOverCheck() {
        this.gameOverIntervalId = setInterval(() => {
            if (this.character.energy < 1 || this.endboss.energy < 1) {
                this.saveCharacterEnergy = this.character.energy;
                this.terminate();
                clearInterval(this.gameOverIntervalId);
                displayGameOverScreen();
                enableRetryButton();
                createMainMenuButton();}}, 100);
    }

    /**
     * Terminates the game by stopping all active intervals, clearing the game state, and stopping all sounds.
     */
    terminate() {
        cancelAnimationFrame(this.animationFrameId);
        clearInterval(this.gameOverIntervalId);
        this.allIntervals.forEach(intervalId => clearInterval(intervalId));
        this.enemies = this.throwableObjects = this.collectableSword = this.collectableCandies = [];
        this.character = this.endboss = null;
        Object.values(GLOBAL_SOUNDS).forEach(sound => sound.pause() && (sound.currentTime = 0));
    }
}
