class SingleGroundObject extends GroundObject {
    width = GroundObject.width;
    height = GroundObject.height;

    constructor(path, x, y) {
        super()
        this.loadImage(path);
        this.x = x;
        this.y = y;
    }
}