class LevelSelectScene extends wrk.GameEngine.Scene {
    maxLevelsPerRow = 5;
    levelButtonSize = wrk.v(50, 50);
    levelButtonTexture = config.buttonTexture1x1;
    levelButtonVerticalSeperation = 75;

    constructor() {
        super('LevelSelectScene');

        var heading = new wrk.GameEngine.Label('heading', 'Select a level',
            wrk.v(wrk.GameEngine.canvasSize.x / 2, 50), wrk.PI, config.headingTextStyle);
        this.addChild(heading);
        this.createLevelButtons();
    }

    createLevelButtons() {
        var crntRow = 0;
        var crntCol = 0;
        var buttonSeperation = wrk.GameEngine.canvasSize.x / this.maxLevelsPerRow;
        levelList.forEach((level, idx) => {
            var pos = wrk.v(buttonSeperation * crntCol + buttonSeperation / 2,
                this.levelButtonVerticalSeperation * crntRow + 150);
            var button = new wrk.GameEngine.Button(`levelbutton${idx + 1}`, pos,
                wrk.PI, this.levelButtonSize, this.levelButtonTexture, idx + 1,
                config.normalTextStyle);
            this.addChild(button);
            button.mouseUpCallbacks.add(() => {
                mainScene.loadLevel(level);
                wrk.GameEngine.selectScene(mainScene);
            })

            crntCol += 1;
            if (crntCol >= this.maxLevelsPerRow)  {
                crntCol = 0;
                crntRow += 1;
            }
        })
    }
}