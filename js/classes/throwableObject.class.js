class ThrowableObject extends MoveableObject {
    y = 200
    speedY = 15;
    speedX = 20;
    height = 400 / 9
    width = 128 / 9
    x = 50 + Math.random() * 1000
    img;
    throw_SOUND;

    constructor(x, y, direction, img) {
        super();
        this.throw_SOUND = GLOBAL_SOUNDS.throw
        this.img = img;
        this.loadImage(this.img);
        this.x = x;
        this.y = y;
        this.throw(direction);
    }

    /**
     * Throws the object in a specified direction with gravity applied if the image is related to 'Golem_2'.
     * The object's position is updated periodically based on the direction.
     *
     * @param {boolean} direction - The direction in which to throw the object. 
     *                              `true` for left, `false` for right.
     */
    throw(direction) {
        if (this.img && this.img.src) {
            if (this.img.src.includes('Golem_2')) {
                this.applyGravity();
            }
        }
        this.throw_SOUND.play();
        let speed = 10;
        setInterval(() => {
            this.x += direction ? -speed : speed;
        }, 35);
    }

}