class LoadingScene extends wrk.GameEngine.Scene {

    constructor() {
        super('loaderScene');
        // This is a scene that is shown at the start very briefly...
        // ...to make sure all images are in cache
        // There is a blank entity at the end to cover everything up..
        // ..and some text to make it a bit less weird

        var defaultPos = wrk.v(-500, -500)

        var player = new Player('testPlayer', defaultPos);
        player.setFrozen(true);
        this.addChild(player);
        this.addChild(new wrk.GameEngine.DrawableEntity('testButton', defaultPos, 0,
            config.buttonTexture1x1, wrk.v(100, 100)));
        this.addChild(new wrk.GameEngine.DrawableEntity('testButton', defaultPos, 0,
            config.lockedButtonTexture1x1, wrk.v(100, 100)));
        this.addChild(new wrk.GameEngine.DrawableEntity('testButton', defaultPos, 0,
            config.buttonTexture1x2, wrk.v(100, 100)));
        this.addChild(new MuteButton(wrk.v(0, 0)));

        this.addChild(new Laser(wrk.v(0, -300), 0, 0));
        this.addChild(new Mirror(wrk.v(100, -300), -0.1, 2));
        this.addChild(new Wall(defaultPos, wrk.v(10, 10)));
        this.addChild(new Finish(defaultPos));

        var foreground = new wrk.GameEngine.DrawableEntity('foreground', wrk.v(0, 0), 0,
            PIXI.Texture.WHITE, wrk.GameEngine.canvasSize, wrk.v(1, 1));
        foreground.setTint(config.bgColor);
        this.addChild(foreground);

        var loadingText = new wrk.GameEngine.Label('loadingText', 'Loading...',
            wrk.v.copyDiv(wrk.GameEngine.canvasSize, 2), wrk.PI, config.headingTextStyle);
        this.addChild(loadingText);
    }
}