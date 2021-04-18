class TitleScreen extends wrk.GameEngine.Scene {
    constructor() {
        super('TitleScreen');

        var center = wrk.v.copyDiv(wrk.GameEngine.canvasSize, 2);

        var title = new wrk.GameEngine.Label('title', config.gameName,
            wrk.v(center.x, center.y - 30), wrk.PI, config.headingTextStyle);
        this.addChild(title);

        var button = new wrk.GameEngine.Button('Play button',
            wrk.v(center.x, center.y + 50), wrk.PI, wrk.v(75, 40), config.buttonTexture1x2, 
            'Play', config.normalTextStyle);
        button.mouseUpCallbacks.add(() => {
            SceneTransitionFade.fade('in', () => {
                wrk.GameEngine.selectScene(levelSelectScene);
                SceneTransitionFade.fade('out');
            });
        });
        this.addChild(button);
    }
}