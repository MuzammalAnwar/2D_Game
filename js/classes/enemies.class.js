class Enemy extends MoveableObject {
    x = 200 + Math.random() * 2000
    y = 85
    height = 55;
    width = 55;
    world;
    currentImage = 0;
    speed = 0.5 + Math.random() * 0.5;
    otherDirection = true
    slashingInterval;
    isSlashing = false;
    isDead = false;
    enemyType;

    imagesWalking = [
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Goblin/PNG/PNG Sequences/Walking/iloveimg-resized/0_Goblin_Walking_000.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Goblin/PNG/PNG Sequences/Walking/iloveimg-resized/0_Goblin_Walking_001.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Goblin/PNG/PNG Sequences/Walking/iloveimg-resized/0_Goblin_Walking_002.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Goblin/PNG/PNG Sequences/Walking/iloveimg-resized/0_Goblin_Walking_003.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Goblin/PNG/PNG Sequences/Walking/iloveimg-resized/0_Goblin_Walking_004.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Goblin/PNG/PNG Sequences/Walking/iloveimg-resized/0_Goblin_Walking_005.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Goblin/PNG/PNG Sequences/Walking/iloveimg-resized/0_Goblin_Walking_006.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Goblin/PNG/PNG Sequences/Walking/iloveimg-resized/0_Goblin_Walking_007.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Goblin/PNG/PNG Sequences/Walking/iloveimg-resized/0_Goblin_Walking_008.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Goblin/PNG/PNG Sequences/Walking/iloveimg-resized/0_Goblin_Walking_009.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Goblin/PNG/PNG Sequences/Walking/iloveimg-resized/0_Goblin_Walking_010.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Goblin/PNG/PNG Sequences/Walking/iloveimg-resized/0_Goblin_Walking_011.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Goblin/PNG/PNG Sequences/Walking/iloveimg-resized/0_Goblin_Walking_012.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Goblin/PNG/PNG Sequences/Walking/iloveimg-resized/0_Goblin_Walking_013.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Goblin/PNG/PNG Sequences/Walking/iloveimg-resized/0_Goblin_Walking_014.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Goblin/PNG/PNG Sequences/Walking/iloveimg-resized/0_Goblin_Walking_015.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Goblin/PNG/PNG Sequences/Walking/iloveimg-resized/0_Goblin_Walking_016.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Goblin/PNG/PNG Sequences/Walking/iloveimg-resized/0_Goblin_Walking_017.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Goblin/PNG/PNG Sequences/Walking/iloveimg-resized/0_Goblin_Walking_018.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Goblin/PNG/PNG Sequences/Walking/iloveimg-resized/0_Goblin_Walking_019.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Goblin/PNG/PNG Sequences/Walking/iloveimg-resized/0_Goblin_Walking_020.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Goblin/PNG/PNG Sequences/Walking/iloveimg-resized/0_Goblin_Walking_021.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Goblin/PNG/PNG Sequences/Walking/iloveimg-resized/0_Goblin_Walking_022.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Goblin/PNG/PNG Sequences/Walking/iloveimg-resized/0_Goblin_Walking_023.png',
    ]

    imagesSlashingAttack = [
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Goblin/PNG/PNG Sequences/Slashing/iloveimg-resized/0_Goblin_Slashing_000.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Goblin/PNG/PNG Sequences/Slashing/iloveimg-resized/0_Goblin_Slashing_001.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Goblin/PNG/PNG Sequences/Slashing/iloveimg-resized/0_Goblin_Slashing_002.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Goblin/PNG/PNG Sequences/Slashing/iloveimg-resized/0_Goblin_Slashing_003.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Goblin/PNG/PNG Sequences/Slashing/iloveimg-resized/0_Goblin_Slashing_004.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Goblin/PNG/PNG Sequences/Slashing/iloveimg-resized/0_Goblin_Slashing_005.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Goblin/PNG/PNG Sequences/Slashing/iloveimg-resized/0_Goblin_Slashing_006.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Goblin/PNG/PNG Sequences/Slashing/iloveimg-resized/0_Goblin_Slashing_007.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Goblin/PNG/PNG Sequences/Slashing/iloveimg-resized/0_Goblin_Slashing_008.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Goblin/PNG/PNG Sequences/Slashing/iloveimg-resized/0_Goblin_Slashing_009.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Goblin/PNG/PNG Sequences/Slashing/iloveimg-resized/0_Goblin_Slashing_010.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Goblin/PNG/PNG Sequences/Slashing/iloveimg-resized/0_Goblin_Slashing_011.png',
    ]

    imagesDead = [
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Goblin/PNG/PNG Sequences/Dying/iloveimg-resized/0_Goblin_Dying_000.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Goblin/PNG/PNG Sequences/Dying/iloveimg-resized/0_Goblin_Dying_001.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Goblin/PNG/PNG Sequences/Dying/iloveimg-resized/0_Goblin_Dying_002.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Goblin/PNG/PNG Sequences/Dying/iloveimg-resized/0_Goblin_Dying_003.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Goblin/PNG/PNG Sequences/Dying/iloveimg-resized/0_Goblin_Dying_004.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Goblin/PNG/PNG Sequences/Dying/iloveimg-resized/0_Goblin_Dying_005.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Goblin/PNG/PNG Sequences/Dying/iloveimg-resized/0_Goblin_Dying_006.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Goblin/PNG/PNG Sequences/Dying/iloveimg-resized/0_Goblin_Dying_007.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Goblin/PNG/PNG Sequences/Dying/iloveimg-resized/0_Goblin_Dying_008.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Goblin/PNG/PNG Sequences/Dying/iloveimg-resized/0_Goblin_Dying_009.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Goblin/PNG/PNG Sequences/Dying/iloveimg-resized/0_Goblin_Dying_010.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Goblin/PNG/PNG Sequences/Dying/iloveimg-resized/0_Goblin_Dying_011.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Goblin/PNG/PNG Sequences/Dying/iloveimg-resized/0_Goblin_Dying_012.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Goblin/PNG/PNG Sequences/Dying/iloveimg-resized/0_Goblin_Dying_013.png',
    ]

    imagesWalking2 = [
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Orc/PNG/PNG Sequences/Walking/iloveimg-resized/0_Orc_Walking_000.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Orc/PNG/PNG Sequences/Walking/iloveimg-resized/0_Orc_Walking_001.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Orc/PNG/PNG Sequences/Walking/iloveimg-resized/0_Orc_Walking_002.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Orc/PNG/PNG Sequences/Walking/iloveimg-resized/0_Orc_Walking_003.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Orc/PNG/PNG Sequences/Walking/iloveimg-resized/0_Orc_Walking_004.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Orc/PNG/PNG Sequences/Walking/iloveimg-resized/0_Orc_Walking_005.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Orc/PNG/PNG Sequences/Walking/iloveimg-resized/0_Orc_Walking_006.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Orc/PNG/PNG Sequences/Walking/iloveimg-resized/0_Orc_Walking_007.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Orc/PNG/PNG Sequences/Walking/iloveimg-resized/0_Orc_Walking_008.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Orc/PNG/PNG Sequences/Walking/iloveimg-resized/0_Orc_Walking_009.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Orc/PNG/PNG Sequences/Walking/iloveimg-resized/0_Orc_Walking_010.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Orc/PNG/PNG Sequences/Walking/iloveimg-resized/0_Orc_Walking_011.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Orc/PNG/PNG Sequences/Walking/iloveimg-resized/0_Orc_Walking_012.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Orc/PNG/PNG Sequences/Walking/iloveimg-resized/0_Orc_Walking_013.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Orc/PNG/PNG Sequences/Walking/iloveimg-resized/0_Orc_Walking_014.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Orc/PNG/PNG Sequences/Walking/iloveimg-resized/0_Orc_Walking_015.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Orc/PNG/PNG Sequences/Walking/iloveimg-resized/0_Orc_Walking_016.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Orc/PNG/PNG Sequences/Walking/iloveimg-resized/0_Orc_Walking_017.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Orc/PNG/PNG Sequences/Walking/iloveimg-resized/0_Orc_Walking_018.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Orc/PNG/PNG Sequences/Walking/iloveimg-resized/0_Orc_Walking_019.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Orc/PNG/PNG Sequences/Walking/iloveimg-resized/0_Orc_Walking_020.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Orc/PNG/PNG Sequences/Walking/iloveimg-resized/0_Orc_Walking_021.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Orc/PNG/PNG Sequences/Walking/iloveimg-resized/0_Orc_Walking_022.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Orc/PNG/PNG Sequences/Walking/iloveimg-resized/0_Orc_Walking_023.png',
    ]

    imagesSlashingAttack2 = [
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Orc/PNG/PNG Sequences/Slashing/iloveimg-resized/0_Orc_Slashing_000.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Orc/PNG/PNG Sequences/Slashing/iloveimg-resized/0_Orc_Slashing_001.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Orc/PNG/PNG Sequences/Slashing/iloveimg-resized/0_Orc_Slashing_002.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Orc/PNG/PNG Sequences/Slashing/iloveimg-resized/0_Orc_Slashing_003.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Orc/PNG/PNG Sequences/Slashing/iloveimg-resized/0_Orc_Slashing_004.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Orc/PNG/PNG Sequences/Slashing/iloveimg-resized/0_Orc_Slashing_005.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Orc/PNG/PNG Sequences/Slashing/iloveimg-resized/0_Orc_Slashing_006.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Orc/PNG/PNG Sequences/Slashing/iloveimg-resized/0_Orc_Slashing_007.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Orc/PNG/PNG Sequences/Slashing/iloveimg-resized/0_Orc_Slashing_008.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Orc/PNG/PNG Sequences/Slashing/iloveimg-resized/0_Orc_Slashing_009.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Orc/PNG/PNG Sequences/Slashing/iloveimg-resized/0_Orc_Slashing_010.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Orc/PNG/PNG Sequences/Slashing/iloveimg-resized/0_Orc_Slashing_011.png',
    ]

    imagesDead2 = [
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Orc/PNG/PNG Sequences/Dying/iloveimg-resized/0_Orc_Dying_000.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Orc/PNG/PNG Sequences/Dying/iloveimg-resized/0_Orc_Dying_001.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Orc/PNG/PNG Sequences/Dying/iloveimg-resized/0_Orc_Dying_002.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Orc/PNG/PNG Sequences/Dying/iloveimg-resized/0_Orc_Dying_003.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Orc/PNG/PNG Sequences/Dying/iloveimg-resized/0_Orc_Dying_004.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Orc/PNG/PNG Sequences/Dying/iloveimg-resized/0_Orc_Dying_005.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Orc/PNG/PNG Sequences/Dying/iloveimg-resized/0_Orc_Dying_006.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Orc/PNG/PNG Sequences/Dying/iloveimg-resized/0_Orc_Dying_007.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Orc/PNG/PNG Sequences/Dying/iloveimg-resized/0_Orc_Dying_008.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Orc/PNG/PNG Sequences/Dying/iloveimg-resized/0_Orc_Dying_009.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Orc/PNG/PNG Sequences/Dying/iloveimg-resized/0_Orc_Dying_010.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Orc/PNG/PNG Sequences/Dying/iloveimg-resized/0_Orc_Dying_011.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Orc/PNG/PNG Sequences/Dying/iloveimg-resized/0_Orc_Dying_012.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Orc/PNG/PNG Sequences/Dying/iloveimg-resized/0_Orc_Dying_013.png',
        'img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Orc/PNG/PNG Sequences/Dying/iloveimg-resized/0_Orc_Dying_014.png'
    ]

    ouch_SOUND;

    constructor() {
        super('img/craftpix-064112-free-orc-ogre-and-goblin-chibi-2d-game-sprites/Goblin/PNG/PNG Sequences/Walking/iloveimg-resized/0_Goblin_Walking_000.png');
        this.ouch_SOUND = GLOBAL_SOUNDS.takingDamage;
        this.enemyType = Math.random() < 0.5 ? 1 : 2;
        this.loadEnemyImages();
    }

    /**
     * Loads enemy images and initiates animation sequences based on enemy type.
     */
    loadEnemyImages() {
        if (this.enemyType === 1) {
            this.loadImages(this.imagesWalking);
            this.animateWalking();
            this.loadImages(this.imagesSlashingAttack);
            this.animateSlashingAttack();
            this.loadImages(this.imagesDead);
            this.animateDeath();
        } else {
            this.loadImages(this.imagesWalking2);
            this.animateWalking();
            this.loadImages(this.imagesSlashingAttack2);
            this.animateSlashingAttack();
            this.loadImages(this.imagesDead2);
            this.animateDeath();
        }
    }

    /**
     * Animates the walking of the enemy by setting a movement interval.
     */
    animateWalking() {
        setInterval(() => {
            this.loadAnimationImages(this.enemyType === 1 ? this.imagesWalking : this.imagesWalking2);
            this.moveLeft();
        }, 60);
    }

    /**
     * Starts or stops the slashing attack based on status.
     * @param {boolean} status - Whether to start or stop the attack.
     * @returns {boolean} - Returns true if attack starts, false if stopped.
     */
    animateSlashingAttack(status) {
        if (status) {
            this.startSlashing();
            return true;
        } else {
            this.stopSlashing();
            return false;
        }
    }

    /**
     * Starts the slashing attack, loads images, and sets timeout for reset.
     */
    startSlashing() {
        if (!this.isSlashing) {
            this.isSlashing = true;
            this.loadAnimationImages(this.enemyType === 1 ? this.imagesSlashingAttack : this.imagesSlashingAttack2);
            this.slashingTimeout = setTimeout(() => this.resetSlashing(), 40);
            this.stopMoving();
            setTimeout(() => this.attackCooldown = false, 1000);
        }
    }

    /**
     * Stops the slashing attack and resumes movement.
     */
    stopSlashing() {
        if (this.slashingTimeout) {
            clearTimeout(this.slashingTimeout);
            this.slashingTimeout = null;
            this.isSlashing = false;
            this.attackCooldown = false;
            this.resumeMovement(0.5 + Math.random() * 0.5);
        }
    }

    /**
     * Resets the slashing state after the attack timeout.
     */
    resetSlashing() {
        this.isSlashing = false;
    }

    /**
     * Animates the death sequence by playing frames from the dead image set.
     */
    animateDeath() {
        if (this.isDead) return;
        let currentFrame = 0;
        let imagesDeadSet = this.enemyType === 1 ? this.imagesDead : this.imagesDead2;
        let totalFrames = imagesDeadSet.length;
        let playAnimation = () => {
            if (currentFrame < totalFrames) {
                this.loadAnimationImages([imagesDeadSet[currentFrame]]);
                currentFrame++;
                if (currentFrame < totalFrames) {
                    setTimeout(playAnimation, 1000 / 55);
                } else {
                    this.isDead = true;
                }
            }
        };
        playAnimation();
    }
}