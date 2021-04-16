class Wall extends WalkableObject {
    // This is a class for anything that the player can touch
    
    // This is static because it is used in super()
    static color = 0x444444;

    constructor(topLeftCorner, size) {
        super('Wall', topLeftCorner, size, Wall.color);
    }
}