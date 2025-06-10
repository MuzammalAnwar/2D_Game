class DrawableObject {
    x = 0;
    y = 20;
    height = 95;
    width = 95;
    img;
    imageCache = {};

    /**
     * Loads an image from the specified path and assigns it to the `img` property.
     * @param {string} path - The path of the image to load.
     */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    /**
     * Loads multiple images from the provided array of image paths and stores them in the `imageCache` object.
     * @param {string[]} arr - An array of image paths to load.
     */
    loadImages(arr) {
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    /**
     * Draws a red rectangle on the canvas at the specified position and size.
     * @param {CanvasRenderingContext2D} ctx - The rendering context of the canvas to draw on.
     */
    drawRectangle(ctx) {
        ctx.beginPath();
        ctx.lineWidth = "1";
        ctx.strokeStyle = "red";
        ctx.rect(this.x + 20, this.y + 15, this.width / 2, this.height / 1.5);
        ctx.stroke();
    }
}
