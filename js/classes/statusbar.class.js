class Statusbar extends DrawableObject {
    barX = 2; barY = 2; barWidth = 100; barHeight = 10;
    fillWidth; text; textWidth; textX; textY;

    constructor(ctx) {
        super();
        this.ctx = ctx;
    }

    /**
         * Draws the status bar with the specified current and maximum values, color, and position.
         *
         * @param {number} current - The current value to display on the status bar.
         * @param {number} max - The maximum value to display on the status bar.
         * @param {string} color - The color of the fill section of the status bar.
         * @param {number} positionX - The X-coordinate for the position of the status bar.
         * @param {number} positionY - The Y-coordinate for the position of the status bar.
         */
    drawStatusBar(current, max, color, positionX, positionY) {
        this.fillWidth = this.calculateFillWidth(current, max);
        this.drawBackground(positionX, positionY);
        this.drawFill(positionX, positionY, color);
        this.drawText(current, max, positionX, positionY);
    }

    /**
     * Calculates the width of the fill section of the status bar based on the current and maximum values.
     *
     * @param {number} current - The current value to base the fill width on.
     * @param {number} max - The maximum value to base the fill width on.
     * @returns {number} - The calculated width for the fill section.
     */
    calculateFillWidth(current, max) {
        return (current / max) * this.barWidth;
    }

    /**
     * Draws the background of the status bar.
     *
     * @param {number} positionX - The X-coordinate for the position of the background.
     * @param {number} positionY - The Y-coordinate for the position of the background.
     */
    drawBackground(positionX, positionY) {
        let radius = 5;
        this.ctx.beginPath();
        this.ctx.roundRect(positionX, positionY, this.barWidth, this.barHeight, radius);
        this.ctx.fillStyle = 'white';
        this.ctx.fill();
    }

    /**
     * Draws the filled section of the status bar.
     *
     * @param {number} positionX - The X-coordinate for the position of the fill.
     * @param {number} positionY - The Y-coordinate for the position of the fill.
     * @param {string} color - The color of the fill section.
     */
    drawFill(positionX, positionY, color) {
        let radius = 5;
        this.ctx.beginPath();
        this.ctx.roundRect(positionX, positionY, this.fillWidth, this.barHeight, radius);
        this.ctx.fillStyle = color;
        this.ctx.fill();
    }

    /**
     * Draws the text (current/max) on the status bar.
     *
     * @param {number} current - The current value to display.
     * @param {number} max - The maximum value to display.
     * @param {number} positionX - The X-coordinate for the position of the text.
     * @param {number} positionY - The Y-coordinate for the position of the text.
     */
    drawText(current, max, positionX, positionY) {
        this.ctx.fillStyle = 'black';
        this.ctx.font = '8px Arial';
        let text = `${current}/${max}`;
        let textWidth = this.ctx.measureText(text).width;
        let textX = positionX + (this.barWidth - textWidth) / 2;
        let textY = positionY + this.barHeight / 2 + 3;
        this.ctx.fillText(text, textX, textY);
    }
}
