class BackgroundImage extends MoveableObject {
    height = 600;
    width = 160
    constructor(path, x, y) {
        super().loadImage(path)
        this.x = x;
        this.y = y;
    }
}