class Hint extends wrk.GameEngine.Label {
    constructor(text, position, angle=wrk.PI) {
        super(text, text, position, angle, config.hintTextStyle, wrk.v(0.5, 0));
        this.addTag('Hint');
    }
}