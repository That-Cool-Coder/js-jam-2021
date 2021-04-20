class LevelSelectScene extends wrk.GameEngine.Scene {
    maxLevelsPerRow = 5;
    levelButtonSize = wrk.v(50, 50);
    levelButtonVerticalSeperation = 75;

    constructor(backgroundEntity=null) {
        super('LevelSelectScene');

        if (backgroundEntity != null) this.addChild(backgroundEntity);

        var heading = new wrk.GameEngine.Label('heading', 'Select a level',
            wrk.v(wrk.GameEngine.canvasSize.x / 2, 50), wrk.PI, config.headingTextStyle);
        this.addChild(heading);

        var backButton = new wrk.GameEngine.Button('backButton', wrk.v(100, 50),
            wrk.PI, wrk.v(80, 40), config.buttonTexture1x2, 'Back', config.normalTextStyle);
        backButton.mouseUpCallbacks.add(() => {
            SceneTransitionFade.fade('in', () => {
                wrk.GameEngine.selectScene(titleScreen);
                SceneTransitionFade.fade('out');
            });
        });
        this.addChild(backButton);
        
        this.levelButtonHolder = new wrk.GameEngine.Entity('levelButtonHolder', wrk.v(0, 0), 0);
        this.addChild(this.levelButtonHolder);
    }

    onSelected() {
        // Make sure that the levels are reset
        this.levelButtonHolder.removeChildren();
        this.createLevelButtons();
    }

    createLevelButtons() {
        var crntRow = 0;
        var crntCol = 0;
        var buttonSeperation = wrk.GameEngine.canvasSize.x / this.maxLevelsPerRow;
        levelList.forEach(level => {
            var pos = wrk.v(buttonSeperation * crntCol + buttonSeperation / 2,
                this.levelButtonVerticalSeperation * crntRow + 150);

            if (ProgressManagement.hasUnlockedLevel(level.levelNum)) {
                var texture = config.buttonTexture1x1;
                var text = level.levelNum;
            }
            else {
                var texture = config.lockedButtonTexture1x1;
                var text = '';
            }

            var button = new wrk.GameEngine.Button(`levelbutton${level.levelNum}`, pos,
                wrk.PI, this.levelButtonSize, texture, text,
                config.normalTextStyle);

            // Only bind the start level to unlocked buttons
            if (ProgressManagement.hasUnlockedLevel(level.levelNum)) {
                button.mouseUpCallbacks.add(() => {
                    mainScene.loadLevel(level);
                    SceneTransitionFade.fade('in', () => {
                        wrk.GameEngine.selectScene(mainScene);
                        SceneTransitionFade.fade('out');
                    });
                })
            }

            this.levelButtonHolder.addChild(button);

            crntCol += 1;
            if (crntCol >= this.maxLevelsPerRow)  {
                crntCol = 0;
                crntRow += 1;
            }
        })
    }
}