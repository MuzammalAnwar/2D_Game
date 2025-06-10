class GroundObject extends MoveableObject {
    static width = 21.3;
    static height = 21.3;
    tilePaths = [
        'img/free-market-cartoon-2d-game-tileset/PNG/Platformer/Ground_10.png',
        'img/free-market-cartoon-2d-game-tileset/PNG/Platformer/Ground_11.png',
        'img/free-market-cartoon-2d-game-tileset/PNG/Platformer/Ground_12.png'
    ];
    groundObjects = [];

    constructor(startX, y, increment, totalGroups) {
        super();
        this.groundObjects = this.createGroundObjects(startX, y, increment, totalGroups);
    }

    /**
     * Creates ground objects based on a series of tile paths, starting from a specified position
     * and adding them in groups with an increment between each object. It randomly selects a starting 
     * tile path for each group.
     *
     * @param {number} startX - The starting horizontal position for the first ground object.
     * @param {number} y - The vertical position for all ground objects.
     * @param {number} increment - The horizontal distance between each consecutive ground object.
     * @param {number} totalGroups - The total number of groups of ground objects to create.
     * @returns {Array} - An array of created ground objects.
     */
    createGroundObjects(startX, y, increment, totalGroups) {
        for (let i = 0; i < totalGroups; i++) {
            let randomIndex = Math.floor(Math.random() * this.tilePaths.length);
            for (let j = 0; j < this.tilePaths.length; j++) {
                let xPos = startX + ((i * this.tilePaths.length + j) * increment);
                this.groundObjects.push(new SingleGroundObject(this.tilePaths[(randomIndex + j) % this.tilePaths.length], xPos, y));
            }
        }
        return this.groundObjects;
    }

}