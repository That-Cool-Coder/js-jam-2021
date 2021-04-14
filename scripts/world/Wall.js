class Wall extends WorldComponent {
    static color = 0x444444;

    constructor(topLeftCorner, size) {
        super('Wall', topLeftCorner, size, Wall.color);
    }
}