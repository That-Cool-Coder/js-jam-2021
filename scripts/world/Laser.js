class Laser extends WorldComponent {
    // These two are static because they are used in super()
    static size = wrk.v(50, 25);
    static color = 0x999999;

    maxBeamLength = 1000;

    constructor(centerPos, angle) {
        var topLeftOffset = wrk.v.copyDiv(Laser.size, 2);
        wrk.v.rotate(topLeftOffset, angle);
        var topLeftPos = wrk.v.copySub(centerPos, topLeftOffset);
        super('Laser', topLeftPos, Laser.size, Laser.color);
        this.setLocalAngle(angle);
    }

    projectBeam() {
        var closestContactPos = Infinity;
        var closestContactEntity = null;
        var targetEntities = wrk.GameEngine.getEntitesWithTags('Player', 'Wall');
        targetEntities.forEach(entity => {

        });
    }

    update() {
        this.removeChildren();
        this.projectBeam();
    }
}