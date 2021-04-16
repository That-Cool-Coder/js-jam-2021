class TitleScreen extends wrk.GameEngine.Scene {
    constructor() {
        super('TitleScreen');

        var center = wrk.v.copyDiv(wrk.GameEngine.canvasSize, 2);

        var title = new wrk.GameEngine.Label('title', config.gameName,
            center, wrk.PI, config.titleTextStyle);
        this.addChild(title);

        var button = new wrk.GameEngine.Button('Play button',
            wrk.v(center.x, center.y + 100), wrk.PI, wrk.v(80, 35), config.buttonTexture1x2, 
            'Play', config.headingTextStyle);
        button.mouseUpCallbacks.add(() => {
            SceneTransitionFade.fade('in', () => {
                wrk.GameEngine.selectScene(levelSelectScene);
                SceneTransitionFade.fade('out');
            });
        });
        this.addChild(button);
    }
}