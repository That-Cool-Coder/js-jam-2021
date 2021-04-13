class MainScene extends wrk.GameEngine.Scene {
    constructor() {
        super('MainScene');

        this.worldHolder = new wrk.GameEngine.Entity('worldHolder', wrk.v(0, 0), 0);
        this.addChild(this.worldHolder);

        this.player = new Player('player', wrk.v(200, 200));
        this.mirrorPlayer = new Player('mirrorPlayer', wrk.v(600, 200), true);

        var frameRateShower = new FrameRateShower(wrk.v(50, 50), wrk.PI, {fill:0xffffff});
        this.addChild(frameRateShower);
    }

    loadLevel(levelData) {
        this.worldHolder.removeChildren();
        levelData.forEach(datum => {
            switch(datum.type) {
                case 'Wall':
                    var item = new Wall(datum.position, datum.size);
                    break;
            }
            if (item) this.worldHolder.addChild(item);
        });
        this.worldHolder.addChild(this.player);
        this.worldHolder.addChild(this.mirrorPlayer);
    }
}