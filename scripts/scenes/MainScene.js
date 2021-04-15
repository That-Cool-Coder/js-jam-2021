class MainScene extends wrk.GameEngine.Scene {
    finishSequenceLength = 3000;

    constructor() {
        super('MainScene');

        this.worldHolder = new wrk.GameEngine.Entity('worldHolder', wrk.v(0, 0), 0);
        this.addChild(this.worldHolder);

        this.normalPlayer = new Player('normalPlayer', wrk.v(0, 0));
        this.mirroredPlayer = new Player('mirroredPlayer', wrk.v(0, 0), true);

        var frameRateShower = new FrameRateShower(wrk.v(50, 50), wrk.PI, {fill:0xffffff});
        this.addChild(frameRateShower);

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
                    var item = new Laser(datum.position, datum.angle);
                    break;
                case 'Mirror':
                    var item = new Mirror(datum.position, datum.angle, datum.width);
                    break;
            }
            if (item) this.worldHolder.addChild(item);
        });
        this.normalPlayer.setLocalPosition(levelData.normalPlayerStartPos);
        this.mirroredPlayer.setLocalPosition(levelData.mirroredPlayerStartPos);
        this.normalPlayer.setFrozen(false);
        this.mirroredPlayer.setFrozen(false);
        this.worldHolder.addChild(this.normalPlayer);
        this.worldHolder.addChild(this.mirroredPlayer);

        this.showingFinishSequence = false;
    }

    finishLevel() {
        this.normalPlayer.setFrozen(true);
        this.mirroredPlayer.setFrozen(true);
        wrk.GameEngine.getEntitiesWithTag('FinishParticleEffect').forEach(effect => {
            effect.play();
        });
        this.showingFinishSequence = true;

        setTimeout(() => this.restartCrntLevel(), this.finishSequenceLength);
    }

    restartCrntLevel() {
        this.loadLevel(this.cachedLevelData);
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