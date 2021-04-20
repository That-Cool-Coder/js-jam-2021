class TitleScreen extends wrk.GameEngine.Scene {
    constructor(backgroundEntity=null) {
        super('TitleScreen');

        if (backgroundEntity != null) this.addChild(backgroundEntity);

        var center = wrk.v.copyDiv(wrk.GameEngine.canvasSize, 2);

        var title = new wrk.GameEngine.Label('title', config.gameName,
            wrk.v(center.x, center.y - 50), wrk.PI, config.titleTextStyle);
        this.addChild(title);

        var playButton = new wrk.GameEngine.Button('playButton',
            wrk.v(center.x, center.y + 25), wrk.PI, wrk.v(95, 40), config.buttonTexture1x2, 
            'Play', config.normalTextStyle);
        playButton.mouseUpCallbacks.add(() => {
            SceneTransitionFade.fade('in', () => {
                wrk.GameEngine.selectScene(levelSelectScene);
                SceneTransitionFade.fade('out');
            });
        });
        this.addChild(playButton);

        var aboutButton = new wrk.GameEngine.Button('aboutButton',
            wrk.v(center.x, center.y + 90), wrk.PI, wrk.v(95, 40), config.buttonTexture1x2, 
            'About', config.normalTextStyle);
        aboutButton.mouseUpCallbacks.add(() => {
            window.open(config.aboutPageUrl, '_blank');
        });
        this.addChild(aboutButton);

        var creditsText = new wrk.GameEngine.Label('credits', config.creditsText,
            wrk.v(center.x, wrk.GameEngine.canvasSize.y - 50), wrk.PI, config.hintTextStyle);
        this.addChild(creditsText);
    }
}