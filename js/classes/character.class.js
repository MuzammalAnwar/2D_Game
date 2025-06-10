class Character extends MoveableObject {
    y = 0;
    world;
    speed = 2
    imagesWalking = [
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Running/iloveimg-resized/0_Golem_Running_000.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Running/iloveimg-resized/0_Golem_Running_001.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Running/iloveimg-resized/0_Golem_Running_002.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Running/iloveimg-resized/0_Golem_Running_003.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Running/iloveimg-resized/0_Golem_Running_004.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Running/iloveimg-resized/0_Golem_Running_005.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Running/iloveimg-resized/0_Golem_Running_006.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Running/iloveimg-resized/0_Golem_Running_007.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Running/iloveimg-resized/0_Golem_Running_008.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Running/iloveimg-resized/0_Golem_Running_009.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Running/iloveimg-resized/0_Golem_Running_010.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Running/iloveimg-resized/0_Golem_Running_011.png',
    ]

    imagesStanding = [
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Idle/iloveimg-resized/0_Golem_Idle_000.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Idle/iloveimg-resized/0_Golem_Idle_001.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Idle/iloveimg-resized/0_Golem_Idle_002.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Idle/iloveimg-resized/0_Golem_Idle_003.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Idle/iloveimg-resized/0_Golem_Idle_004.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Idle/iloveimg-resized/0_Golem_Idle_005.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Idle/iloveimg-resized/0_Golem_Idle_006.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Idle/iloveimg-resized/0_Golem_Idle_007.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Idle/iloveimg-resized/0_Golem_Idle_008.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Idle/iloveimg-resized/0_Golem_Idle_009.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Idle/iloveimg-resized/0_Golem_Idle_010.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Idle/iloveimg-resized/0_Golem_Idle_011.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Idle/iloveimg-resized/0_Golem_Idle_012.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Idle/iloveimg-resized/0_Golem_Idle_013.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Idle/iloveimg-resized/0_Golem_Idle_014.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Idle/iloveimg-resized/0_Golem_Idle_015.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Idle/iloveimg-resized/0_Golem_Idle_016.png',

    ]

    imagesJumping = [
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Jump Start/iloveimg-resized/0_Golem_Jump Start_000.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Jump Start/iloveimg-resized/0_Golem_Jump Start_001.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Jump Start/iloveimg-resized/0_Golem_Jump Start_002.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Jump Start/iloveimg-resized/0_Golem_Jump Start_003.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Jump Start/iloveimg-resized/0_Golem_Jump Start_004.png',
    ]

    imagesDying = [
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Dying/iloveimg-resized/0_Golem_Dying_000.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Dying/iloveimg-resized/0_Golem_Dying_001.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Dying/iloveimg-resized/0_Golem_Dying_002.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Dying/iloveimg-resized/0_Golem_Dying_003.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Dying/iloveimg-resized/0_Golem_Dying_004.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Dying/iloveimg-resized/0_Golem_Dying_005.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Dying/iloveimg-resized/0_Golem_Dying_006.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Dying/iloveimg-resized/0_Golem_Dying_007.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Dying/iloveimg-resized/0_Golem_Dying_008.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Dying/iloveimg-resized/0_Golem_Dying_009.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Dying/iloveimg-resized/0_Golem_Dying_010.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Dying/iloveimg-resized/0_Golem_Dying_011.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Dying/iloveimg-resized/0_Golem_Dying_012.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Dying/iloveimg-resized/0_Golem_Dying_013.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Dying/iloveimg-resized/0_Golem_Dying_014.png',
    ]

    imagesHurt = [
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Hurt/iloveimg-resized/0_Golem_Hurt_000.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Hurt/iloveimg-resized/0_Golem_Hurt_001.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Hurt/iloveimg-resized/0_Golem_Hurt_002.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Hurt/iloveimg-resized/0_Golem_Hurt_003.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Hurt/iloveimg-resized/0_Golem_Hurt_004.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Hurt/iloveimg-resized/0_Golem_Hurt_005.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Hurt/iloveimg-resized/0_Golem_Hurt_006.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Hurt/iloveimg-resized/0_Golem_Hurt_007.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Hurt/iloveimg-resized/0_Golem_Hurt_008.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Hurt/iloveimg-resized/0_Golem_Hurt_010.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Hurt/iloveimg-resized/0_Golem_Hurt_011.png',
    ]

    imagesAttacking = [
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Run Slashing/iloveimg-resized/0_Golem_Run Slashing_000.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Run Slashing/iloveimg-resized/0_Golem_Run Slashing_001.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Run Slashing/iloveimg-resized/0_Golem_Run Slashing_002.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Run Slashing/iloveimg-resized/0_Golem_Run Slashing_003.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Run Slashing/iloveimg-resized/0_Golem_Run Slashing_004.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Run Slashing/iloveimg-resized/0_Golem_Run Slashing_005.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Run Slashing/iloveimg-resized/0_Golem_Run Slashing_006.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Run Slashing/iloveimg-resized/0_Golem_Run Slashing_007.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Run Slashing/iloveimg-resized/0_Golem_Run Slashing_008.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Run Slashing/iloveimg-resized/0_Golem_Run Slashing_009.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Run Slashing/iloveimg-resized/0_Golem_Run Slashing_010.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Run Slashing/iloveimg-resized/0_Golem_Run Slashing_011.png',
    ]

    imagesThrowing = [
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Throwing in The Air/iloveimg-resized/0_Golem_Throwing in The Air_000.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Throwing in The Air/iloveimg-resized/0_Golem_Throwing in The Air_001.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Throwing in The Air/iloveimg-resized/0_Golem_Throwing in The Air_002.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Throwing in The Air/iloveimg-resized/0_Golem_Throwing in The Air_003.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Throwing in The Air/iloveimg-resized/0_Golem_Throwing in The Air_004.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Throwing in The Air/iloveimg-resized/0_Golem_Throwing in The Air_005.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Throwing in The Air/iloveimg-resized/0_Golem_Throwing in The Air_006.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Throwing in The Air/iloveimg-resized/0_Golem_Throwing in The Air_007.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Throwing in The Air/iloveimg-resized/0_Golem_Throwing in The Air_008.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Throwing in The Air/iloveimg-resized/0_Golem_Throwing in The Air_009.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Throwing in The Air/iloveimg-resized/0_Golem_Throwing in The Air_010.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Throwing in The Air/iloveimg-resized/0_Golem_Throwing in The Air_011.png',
    ]
    currentImage = 0;
    running_SOUND
    attack_SOUND
    jump_SOUND
    takingDamage_SOUND

    constructor() {
        super().loadImage('img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_2/PNG/PNG Sequences/Idle/iloveimg-resized/0_Golem_Idle_000.png')
        this.running_SOUND = GLOBAL_SOUNDS.running
        this.attack_SOUND = GLOBAL_SOUNDS.attack
        this.jump_SOUND = GLOBAL_SOUNDS.jump
        this.takingDamage_SOUND = GLOBAL_SOUNDS.hurt
        this.loadImages(this.imagesStanding)
        this.animateStanding()
        this.loadImages(this.imagesWalking)
        this.animateMovement()
        this.loadImages(this.imagesJumping)
        this.animateJumping()
        this.applyGravity()
        this.loadImages(this.imagesHurt)
        this.loadImages(this.imagesDying)
        this.loadImages(this.imagesAttacking)
        this.loadImages(this.imagesThrowing)
    }

    /**
     * Animates the standing state by repeatedly loading standing images.
     */
    animateStanding() {
        setInterval(() => {
            this.loadAnimationImages(this.imagesStanding);
        }, 60);
    }

    /**
     * Starts the running sound if the character is not already running.
     */
    startRunningSound() {
        if (!this.isRunning) {
            this.running_SOUND.play();
            this.isRunning = true;
        }
    }

    /**
     * Stops the running sound and resets the sound playback time.
     */
    stopRunningSound() {
        if (this.isRunning) {
            this.running_SOUND.pause();
            this.running_SOUND.currentTime = 0;
            this.isRunning = false;
        }
    }

    /**
     * Updates the movement based on keyboard input for right, left, or stop commands.
     * Plays running sound while moving and updates the camera position.
     */
    updateMovement() {
        if (this.world.keyboard.RIGHT) {
            this.moveRight();
            this.startRunningSound();
        } else if (this.world.keyboard.LEFT) {
            this.moveLeft();
            this.startRunningSound();
        } else {
            this.stopRunningSound();
        }
        this.world.cameraX = -this.x;
    }

    /**
     * Animates the movement by repeatedly updating the character's position and loading walking images.
     * Also triggers a jump if the space bar is pressed and the character is on the ground.
     */
    animateMovement() {
        setInterval(() => this.updateMovement(), 1000 / 55);
        setInterval(() => {
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                this.loadAnimationImages(this.imagesWalking);
            }
            if (this.world.keyboard.SPACE && !this.isAboveGround()) {
                this.jump();
            }
        }, 60);
    }

    /**
     * Animates the jumping state by loading jumping images when the space bar is pressed.
     * Also plays the jump sound and updates the camera position.
     */
    animateJumping() {
        setInterval(() => {
            if (this.world.keyboard.SPACE) {
                this.loadAnimationImages(this.imagesJumping);
                this.jump_SOUND.play();
            }
            this.world.cameraX = -this.x;
        }, 1);
    }

    /**
     * Animates the death state by repeatedly loading dying images and stops the animation after a set time.
     */
    animateDeath() {
        let hurtInterval = setInterval(() => {
            this.loadAnimationImages(this.imagesDying);
        }, 1000 / 25);
        setTimeout(() => {
            clearInterval(hurtInterval);
        }, (1000 / 15) + 25);
    }

    /**
     * Animates the hurt state by repeatedly loading hurt images and playing the damage sound.
     * Stops the animation after a short period.
     */
    isHurt() {
        let hurtInterval = setInterval(() => {
            this.loadAnimationImages(this.imagesHurt);
            this.takingDamage_SOUND.play();
        }, 1000 / 28);
        setTimeout(() => {
            clearInterval(hurtInterval);
        }, 250);
    }

    /**
     * Animates the throwing action by calling the one-time throw animation.
     */
    animateThrow() {
        this.animateOneTimeMove(this.imagesThrowing, 55, 100);
    }
}