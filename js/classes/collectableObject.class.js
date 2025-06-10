class CollectableObject extends MoveableObject {
    y = 120;
    height = 400 / 9;
    width = 128 / 9;
    x = 50 + Math.random() * 1500;
    rotationAngle = 0;

    constructor(img) {
        super();
        this.loadImage(img);
        this.setHeight(img);
        this.collected_SOUND = GLOBAL_SOUNDS.collected;
    }

    /**
     * Sets the height, width, and position of the collectable object based on its image.
     * @param {string} img - The image source used to determine the size and position of the collectable.
     */
    setHeight(img) {
        if (img == 'img/craftpix-990161-free-candy-match-3-game-items/PNG/ico/16.png') {
            this.x = 50 + Math.pow(Math.random(), 2) * 1500 + 150;
            this.y = 40;
            this.height = 130 / 9;
            this.width = 130 / 9;
        }
    }

    /**
     * Rotates the collectable object and draws it on the canvas.
     * @param {CanvasRenderingContext2D} ctx - The rendering context of the canvas.
     */
    rotateAndDraw(ctx) {
        this.rotationAngle += 2;
        const centerX = this.x + this.width / 2;
        const centerY = this.y + this.height / 2;

        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate((this.rotationAngle * Math.PI) / 180);
        ctx.translate(-centerX, -centerY);
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        ctx.restore();
    }
}
