class MainScene extends wrk.GameEngine.Scene {
    constructor() {
        super('MainScene');

        this.worldHolder = new wrk.GameEngine.Entity('worldHolder', wrk.v(0, 0), 0);
        this.addChild(this.worldHolder);

        this.player = new Player('player', wrk.v(200, 200));
        this.mirrorPlayer = new Player('mirrorPlayer', wrk.v(600, 200), true);

        var frameRateShower = new FrameRateShower(wrk.v(50, 50), wrk.PI, {fill:0xffffff});
        this.addChild(frameRateShower);

        this.showingFinishSequence = false;

        this.cachedLevelData = {};
    }

    loadLevel(levelData) {
        this.cachedLevelData = levelData;
        this.worldHolder.removeChildren();
        levelData.forEach(datum => {
            switch(datum.type) {
                case 'Wall':
                    var item = new Wall(datum.position, datum.size);
                    break;
                case 'Finish':
                    var item = new Finish(datum.position, datum.forMirroredPlayer);
                    break;
            }
            if (item) this.worldHolder.addChild(item);
        });
        this.worldHolder.addChild(this.player);
        this.worldHolder.addChild(this.mirrorPlayer);
    }

    finishLevel() {
        this.player.setFrozen(true);
        this.mirrorPlayer.setFrozen(true);
        wrk.GameEngine.getEntitiesWithTag('FinishParticleEffect').forEach(effect => {
            effect.play();
        });
        this.showingFinishSequence = true;
    }

    restartCrntLevel() {
        this.loadLevel(this.cachedLevelData);
    }

    update() {
        if (! this.showingFinishSequence) {
            if (this.player.isTouchingFinish && this.player.velocity.x == 0 &&
                this.mirrorPlayer.isTouchingFinish && this.mirrorPlayer.velocity.x == 0) {
                this.finishLevel();  
            }
        }
    }
}