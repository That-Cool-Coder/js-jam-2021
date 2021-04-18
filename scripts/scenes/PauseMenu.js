class PauseMenu extends wrk.GameEngine.Scene {
    constructor() {
        super('PauseMenu');

        var centerX = wrk.GameEngine.canvasSize.x / 2;

        var heading = new wrk.GameEngine.Label('pauseMenuHeading', 'Paused',
            wrk.v(centerX, 100), wrk.PI, config.titleTextStyle);
        this.addChild(heading);

        var quitButton = new wrk.GameEngine.Button('quitButton', wrk.v(centerX, 200),
            wrk.PI, wrk.v(120, 50), config.buttonTexture1x2, 'Quit', config.normalTextStyle);
        quitButton.mouseUpCallbacks.add(() => {
            SceneTransitionFade.fade('in', () => {
                wrk.GameEngine.selectScene(levelSelectScene);
                SceneTransitionFade.fade('out');
            });
        });
        this.addChild(quitButton);

        var resumeButton = new wrk.GameEngine.Button('resumeButton', wrk.v(centerX, 300),
            wrk.PI, wrk.v(120, 50), config.buttonTexture1x2, 'Resume', config.normalTextStyle);
        this.addChild(resumeButton);
        resumeButton.mouseUpCallbacks.add(() => {
            SceneTransitionFade.fade('in', () => {
                wrk.GameEngine.selectScene(mainScene);
                SceneTransitionFade.fade('out');
            });
        });
    }
}