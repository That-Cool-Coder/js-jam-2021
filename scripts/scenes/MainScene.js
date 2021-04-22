class MainScene extends wrk.GameEngine.Scene {
    finishSequenceLength = 2000;

    constructor() {
        super('MainScene');

        this.worldHolder = new wrk.GameEngine.Entity('worldHolder', wrk.v(0, 0), 0);
        this.addChild(this.worldHolder);

        this.ui = new wrk.GameEngine.Entity('ui', wrk.v(0, 0), 0);
        this.addChild(this.ui);

        this.normalPlayer = new Player('normalPlayer', wrk.v(0, 0));
        this.mirroredPlayer = new Player('mirroredPlayer', wrk.v(0, 0), true);

        var frameRateShower = new FrameRateShower(wrk.v(50, 50), wrk.PI, {fill:0xffffff});
        this.ui.addChild(frameRateShower);

        if (config.showFrameRate) {
            var pos = wrk.v(110, wrk.GameEngine.canvasSize.y - 25);
            var muteButton = new MuteButton(pos);
            this.ui.addChild(muteButton);
        }

        var pos = wrk.v(50, wrk.GameEngine.canvasSize.y - 25);
        var pauseButton = new wrk.GameEngine.Button('pauseButton', pos, wrk.PI,
            wrk.v(90, 40), config.buttonTexture1x2, 'Pause', config.normalTextStyle);
        pauseButton.mouseUpCallbacks.add(() => {
            SceneTransitionFade.fade('in', () => {
                wrk.GameEngine.selectScene(pauseMenu);
                SceneTransitionFade.fade('out');
            });
        });
        this.ui.addChild(pauseButton);

        this.showingFinishSequence = false;

        this.cachedLevelData = {};
    }

    loadLevel(levelData) {
        this.worldHolder.removeChildren();
        this.cachedLevelData = levelData;

        levelData.world.forEach(datum => {
            switch(datum.type) {
                case 'Wall':
                    var item = new Wall(datum.position, datum.size);
                    break;
                case 'Finish':
                    var item = new Finish(datum.position, datum.forMirroredPlayer);
                    break;
                case 'Laser':
                    var item = new Laser(datum.position, datum.angle, datum.spinRate);
                    break;
                case 'Mirror':
                    var item = new Mirror(datum.position, datum.angle, datum.width);
                    break;
                case 'Hint':
                    var item = new Hint(datum.text, datum.position, datum.angle);
                    break;
            }
            if (item) this.worldHolder.addChild(item);
        });
        this.normalPlayer.setLocalPosition(levelData.normalPlayerStartPos);
        this.mirroredPlayer.setLocalPosition(levelData.mirroredPlayerStartPos);
        this.normalPlayer.setFrozen(false);
        this.mirroredPlayer.setFrozen(false);
        wrk.v.makeZero(this.normalPlayer.velocity);
        wrk.v.makeZero(this.mirroredPlayer.velocity);
        this.worldHolder.addChild(this.normalPlayer);
        this.worldHolder.addChild(this.mirroredPlayer);

        // Move ui to front
        this.removeChild(this.ui);
        if (config.showMainUi) this.addChild(this.ui);

        this.showingFinishSequence = false;
    }

    finishLevel() {
        this.normalPlayer.setFrozen(true);
        this.mirroredPlayer.setFrozen(true);
        wrk.GameEngine.getEntitiesWithTag('FinishParticleEffect').forEach(effect => {
            effect.play();
        });
        this.showingFinishSequence = true;
        ProgressManagement.unlockNextLevel();

        setTimeout(() => {
            SceneTransitionFade.fade('in', () => {
                wrk.GameEngine.selectScene(levelSelectScene);
                SceneTransitionFade.fade('out');
            });
        }, this.finishSequenceLength);
    }

    restartCrntLevel() {
        this.loadLevel(this.cachedLevelData);
    }

    onPlayerDie() {
        this.normalPlayer.setFrozen(true);
        this.mirroredPlayer.setFrozen(true);
        SceneTransitionFade.fade('in', () => {
            this.restartCrntLevel();
            SceneTransitionFade.fade('out');
        });
    }

    update() {
        if (! this.showingFinishSequence) {
            if (this.normalPlayer.isTouchingFinish && this.normalPlayer.velocity.x == 0 &&
                this.mirroredPlayer.isTouchingFinish && this.mirroredPlayer.velocity.x == 0) {
                this.finishLevel();  
            }
        }
    }
}