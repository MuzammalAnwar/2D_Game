class Endboss extends MoveableObject {
    height = 130
    width = 130
    otherDirection = true
    energy = 200
    speed = 0.5
    throwableObject = []
    y = 23
    x = 2500
    imagesWalking = [
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_3/PNG/PNG Sequences/Walking/iloveimg-resized/0_Golem_Walking_000.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_3/PNG/PNG Sequences/Walking/iloveimg-resized/0_Golem_Walking_001.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_3/PNG/PNG Sequences/Walking/iloveimg-resized/0_Golem_Walking_002.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_3/PNG/PNG Sequences/Walking/iloveimg-resized/0_Golem_Walking_003.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_3/PNG/PNG Sequences/Walking/iloveimg-resized/0_Golem_Walking_004.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_3/PNG/PNG Sequences/Walking/iloveimg-resized/0_Golem_Walking_005.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_3/PNG/PNG Sequences/Walking/iloveimg-resized/0_Golem_Walking_006.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_3/PNG/PNG Sequences/Walking/iloveimg-resized/0_Golem_Walking_007.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_3/PNG/PNG Sequences/Walking/iloveimg-resized/0_Golem_Walking_008.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_3/PNG/PNG Sequences/Walking/iloveimg-resized/0_Golem_Walking_009.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_3/PNG/PNG Sequences/Walking/iloveimg-resized/0_Golem_Walking_010.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_3/PNG/PNG Sequences/Walking/iloveimg-resized/0_Golem_Walking_011.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_3/PNG/PNG Sequences/Walking/iloveimg-resized/0_Golem_Walking_012.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_3/PNG/PNG Sequences/Walking/iloveimg-resized/0_Golem_Walking_013.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_3/PNG/PNG Sequences/Walking/iloveimg-resized/0_Golem_Walking_014.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_3/PNG/PNG Sequences/Walking/iloveimg-resized/0_Golem_Walking_015.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_3/PNG/PNG Sequences/Walking/iloveimg-resized/0_Golem_Walking_016.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_3/PNG/PNG Sequences/Walking/iloveimg-resized/0_Golem_Walking_017.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_3/PNG/PNG Sequences/Walking/iloveimg-resized/0_Golem_Walking_018.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_3/PNG/PNG Sequences/Walking/iloveimg-resized/0_Golem_Walking_019.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_3/PNG/PNG Sequences/Walking/iloveimg-resized/0_Golem_Walking_020.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_3/PNG/PNG Sequences/Walking/iloveimg-resized/0_Golem_Walking_021.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_3/PNG/PNG Sequences/Walking/iloveimg-resized/0_Golem_Walking_022.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_3/PNG/PNG Sequences/Walking/iloveimg-resized/0_Golem_Walking_023.png',
    ]

    imagesKicking = [
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_3/PNG/PNG Sequences/Kicking/iloveimg-resized/0_Golem_Kicking_000.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_3/PNG/PNG Sequences/Kicking/iloveimg-resized/0_Golem_Kicking_001.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_3/PNG/PNG Sequences/Kicking/iloveimg-resized/0_Golem_Kicking_002.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_3/PNG/PNG Sequences/Kicking/iloveimg-resized/0_Golem_Kicking_003.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_3/PNG/PNG Sequences/Kicking/iloveimg-resized/0_Golem_Kicking_004.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_3/PNG/PNG Sequences/Kicking/iloveimg-resized/0_Golem_Kicking_005.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_3/PNG/PNG Sequences/Kicking/iloveimg-resized/0_Golem_Kicking_006.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_3/PNG/PNG Sequences/Kicking/iloveimg-resized/0_Golem_Kicking_007.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_3/PNG/PNG Sequences/Kicking/iloveimg-resized/0_Golem_Kicking_008.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_3/PNG/PNG Sequences/Kicking/iloveimg-resized/0_Golem_Kicking_009.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_3/PNG/PNG Sequences/Kicking/iloveimg-resized/0_Golem_Kicking_010.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_3/PNG/PNG Sequences/Kicking/iloveimg-resized/0_Golem_Kicking_011.png',
    ]

    imagesThrowing = [
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_3/PNG/PNG Sequences/Throwing/iloveimg-resized/0_Golem_Throwing_000.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_3/PNG/PNG Sequences/Throwing/iloveimg-resized/0_Golem_Throwing_001.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_3/PNG/PNG Sequences/Throwing/iloveimg-resized/0_Golem_Throwing_002.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_3/PNG/PNG Sequences/Throwing/iloveimg-resized/0_Golem_Throwing_003.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_3/PNG/PNG Sequences/Throwing/iloveimg-resized/0_Golem_Throwing_004.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_3/PNG/PNG Sequences/Throwing/iloveimg-resized/0_Golem_Throwing_005.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_3/PNG/PNG Sequences/Throwing/iloveimg-resized/0_Golem_Throwing_006.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_3/PNG/PNG Sequences/Throwing/iloveimg-resized/0_Golem_Throwing_007.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_3/PNG/PNG Sequences/Throwing/iloveimg-resized/0_Golem_Throwing_008.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_3/PNG/PNG Sequences/Throwing/iloveimg-resized/0_Golem_Throwing_009.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_3/PNG/PNG Sequences/Throwing/iloveimg-resized/0_Golem_Throwing_010.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_3/PNG/PNG Sequences/Throwing/iloveimg-resized/0_Golem_Throwing_011.png',
    ]

    imagesHurt = [
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_3/PNG/PNG Sequences/Hurt/iloveimg-resized/0_Golem_Hurt_000.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_3/PNG/PNG Sequences/Hurt/iloveimg-resized/0_Golem_Hurt_001.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_3/PNG/PNG Sequences/Hurt/iloveimg-resized/0_Golem_Hurt_002.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_3/PNG/PNG Sequences/Hurt/iloveimg-resized/0_Golem_Hurt_003.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_3/PNG/PNG Sequences/Hurt/iloveimg-resized/0_Golem_Hurt_004.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_3/PNG/PNG Sequences/Hurt/iloveimg-resized/0_Golem_Hurt_005.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_3/PNG/PNG Sequences/Hurt/iloveimg-resized/0_Golem_Hurt_006.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_3/PNG/PNG Sequences/Hurt/iloveimg-resized/0_Golem_Hurt_007.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_3/PNG/PNG Sequences/Hurt/iloveimg-resized/0_Golem_Hurt_008.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_3/PNG/PNG Sequences/Hurt/iloveimg-resized/0_Golem_Hurt_009.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_3/PNG/PNG Sequences/Hurt/iloveimg-resized/0_Golem_Hurt_010.png',
        'img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_3/PNG/PNG Sequences/Hurt/iloveimg-resized/0_Golem_Hurt_011.png',
    ]
    constructor() {
        super().loadImage('img/craftpix-891123-free-golems-chibi-2d-game-sprites/Golem_3/PNG/PNG Sequences/Walking/iloveimg-resized/0_Golem_Walking_000.png')
        this.loadImages(this.imagesWalking);
        this.loadImages(this.imagesKicking);
        this.loadImages(this.imagesThrowing);
        this.loadImages(this.imagesHurt);
    }

    /**
     * Animates the walking movement of the object, alternating between moving left and right
     * based on the `otherDirection` flag. It loads the walking animation images and triggers movement.
     */
    animateWalking() {
        setInterval(() => {
            this.loadAnimationImages(this.imagesWalking);
            if (this.otherDirection == false) {
                this.moveLeft();
            } else {
                this.moveRight();
            }
        }, 60);
    }

    /**
     * Animates a one-time kick movement by loading the kicking animation images.
     */
    animateKicking() {
        this.animateOneTimeMove(this.imagesKicking, 150, 55);
    }

    /**
     * Animates a one-time throwing movement by loading the throwing animation images.
     */
    animateThrowing() {
        this.animateOneTimeMove(this.imagesThrowing, 70, 100);
    }

    /**
     * Animates a one-time hurt movement by loading the hurt animation images.
     */
    animateHurt() {
        this.animateOneTimeMove(this.imagesHurt, 70, 100);
    }
}