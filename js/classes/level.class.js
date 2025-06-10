class Level {
    enemies;
    background;
    collectableCandies;
    collectableSword;

    constructor(collectableSword, collectableCandies, background, enemies) {
        this.collectableSword = collectableSword
        this.collectableCandies = collectableCandies
        this.background = background
        this.enemies = enemies
    }
}