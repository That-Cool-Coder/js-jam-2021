class Mirror extends wrk.GameEngine.DrawableEntity {
    // This is static because they are used in super
    static thickness = 3;

    color = 0xdddddd;

    constructor(centerPos, angle, width) {
        var size = wrk.v(width, Mirror.thickness);
        super('Mirror', centerPos, angle, PIXI.Texture.WHITE, size);
        this.addTag('Mirror');
        this.setTint(this.color);
    }
}