class MoveableObject extends DrawableObject {
    speed;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    energy = 100
    imageCache = {};
    currentImage = 0;
    currentImg = null;
    boundaryLeft = -200;
    boundaryRight = 3500;

    /**
     * Moves the object to the left if it is within the left boundary.
     */
    moveLeft() {
        if (this.x > this.boundaryLeft) {
            this.x -= this.speed;
            this.otherDirection = true;
        }
    }

    /**
     * Moves the object to the right if it is within the right boundary.
     */
    moveRight() {
        if (this.x < this.boundaryRight) {
            this.otherDirection = false;
            this.x += this.speed;
        }
    }

    /**
     * Makes the object jump by setting the vertical speed to a positive value.
     */
    jump() {
        this.speedY = 20;
    }

    /**
     * Stops the object's movement by setting its speed to zero.
     */
    stopMoving() {
        this.speed = 0;
    }

    /**
     * Resumes movement at the specified speed, moving the object to the left.
     *
     * @param {number} speed - The speed at which the object should resume movement.
     */
    resumeMovement(speed) {
        this.speed = speed;
        this.moveLeft();
    }

    /**
     * Applies gravity to the object, adjusting its vertical position and speed.
     * Runs in an interval to continuously apply gravity.
     */
    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    /**
     * Checks if the object is above the ground.
     * Returns true if the object is a throwable object or if its vertical position is above ground.
     *
     * @returns {boolean} - Whether the object is above the ground.
     */
    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true;
        } else {
            return this.y < 48;
        }
    }

    /**
     * Loads the next image in the animation sequence from the provided image array.
     *
     * @param {Array} imageArray - The array of image paths to animate through.
     */
    loadAnimationImages(imageArray) {
        let i = this.currentImage % imageArray.length;
        let path = imageArray[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    /**
     * Checks if the object is colliding with another object.
     *
     * @param {Object} obj - The object to check for collision with.
     * @returns {boolean} - Whether the object is colliding with the provided object.
     */
    isColliding(obj) {
        return this.x + 20 < obj.x + obj.width &&
            this.x + 10 + this.width / 2 > obj.x &&
            this.y + 15 < obj.y + obj.height &&
            this.y + 15 + this.height / 1.5 > obj.y;
    }

    /**
     * Checks if the object is jumping on top of an enemy, based on vertical movement and position.
     *
     * @param {Object} obj - The enemy object to check for a jump collision with.
     * @param {number} previousY - The previous vertical position of the object before jumping.
     * @returns {boolean} - Whether the object is jumping on the enemy.
     */
    isJumpingOnEnemy(obj, previousY) {
        let middleThreshold = 0.25;
        let enemyCenterX = obj.x + obj.width / 2;
        let characterCenterX = this.x + this.width / 2;
        return this.x < obj.x + obj.width &&
            this.x + this.width > obj.x &&
            Math.abs(characterCenterX - enemyCenterX) <= obj.width * middleThreshold &&
            previousY + this.height < obj.y &&
            this.y + this.height >= obj.y;
    }

    /**
     * Checks if the object is jumping on top of the endboss. (Not implemented yet)
     *
     * @param {Object} obj - The endboss object to check for a jump collision with.
     * @param {number} previousY - The previous vertical position of the object before jumping.
     * @returns {boolean} - Whether the object is jumping on the endboss.
     */
    isJumpingOnEndboss(obj, previousY) {
        // Not implemented
    }

    /**
     * Checks if the object is dead (energy is zero).
     *
     * @returns {boolean} - Whether the object is dead.
     */
    isDead() {
        return this.energy == 0;
    }

    /**
     * Decreases the object's energy by the specified amount, and stops the object if energy reaches zero.
     *
     * @param {number} amount - The amount to decrease the energy by.
     */
    hit(amount) {
        this.energy -= amount;
        if (this.energy < 0) {
            this.energy = 0;
            // this.gameOver_SOUND.play();
        }
    }

    /**
     * Animates a one-time move for the object using the provided image array.
     * The animation will run for a specified number of frames and intervals.
     *
     * @param {Array} imageArray - The array of images to animate through.
     * @param {number} timeoutParameter - The timeout between frames in milliseconds.
     * @param {number} setIntervalParameter - The interval for the setInterval function in milliseconds.
     */
    animateOneTimeMove(imageArray, timeoutParameter, setIntervalParameter) {
        let Interval = setInterval(() => {
            let currentFrame = 0;
            let totalFrames = imageArray.length;
            let playAnimation = () => {
                if (currentFrame < totalFrames) {
                    this.loadAnimationImages([imageArray[currentFrame]]);
                    currentFrame++;
                    if (currentFrame < totalFrames) {
                        setTimeout(playAnimation, 1000 / timeoutParameter);
                    }
                }
            };
            playAnimation();
            clearInterval(Interval);
        }, 1000 / setIntervalParameter);
    }
}