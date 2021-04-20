class Laser extends wrk.GameEngine.DrawableEntity {
    // This is static because it is used in super
    static size = wrk.v(30, 15);

    color = 0x999999;
    beamWidth = 5;
    maxBeamLength = 1000;
    maxBeamReflections = 2;

    constructor(centerPos, angle) {

        super('Laser', centerPos, angle, PIXI.Texture.WHITE, Laser.size);
        this.addTag('Laser');

        this.setTint(this.color)

        this.beamBouncePositions = [];

        setInterval(() => this.removeChildren(), 100);
    }

    projectBeam() {
        wrk.dom.clearLogPara();
        this.beamBouncePositions = [this.globalPosition];
        var prevAngle = this.globalAngle;

        for (var i = 0; i < this.maxBeamReflections; i ++) {
            var lastBouncePosition =
                this.beamBouncePositions[this.beamBouncePositions.length - 1];
            // Setup the current beam pos
            var beamEndPostion = wrk.v(this.maxBeamLength, 0);
            wrk.v.rotate(beamEndPostion, prevAngle);
            wrk.v.add(beamEndPostion, lastBouncePosition);

            // Set up some vars to hold the results
            var closestContactDist = Infinity;
            var closestContactPosition = beamEndPostion;
            var closestContactEntity = null;

            // These are all of the entities which we can interact with
            var targetEntities = wrk.GameEngine.getEntitiesWithTags(['Player', 'Wall', 'Mirror']);
            
            // Use a for..of to allow continue if entity = this
            for (var entity of targetEntities) {
                // Get the bounding lines of the entity
                // Check if the current beam segment intersects any
                // If it does, and the intersection is closer than any other,
                // save it

                var corners = entity.getGlobalCornerPositions();
                corners[4] = corners[0]; // Make the corners appear to wrap around
                for (var cornerIdx = 0; cornerIdx < 4; cornerIdx ++) {
                    var intersectPos = lineLineIntersectPos(
                        corners[cornerIdx], corners[cornerIdx + 1],
                        lastBouncePosition, beamEndPostion);
                    if (intersectPos != null) {
                        var dist = wrk.v.dist(intersectPos, lastBouncePosition);
                        if (dist < closestContactDist) {
                            closestContactDist = dist;
                            closestContactEntity = entity;
                            closestContactPosition = intersectPos;
                        }
                    }
                }
            };

            // Add the contact position
            // (if no contact occured then this will just be the end of the beam)
            this.beamBouncePositions.push(closestContactPosition);

            // If we did get a collision, then either reflect or terminate
            if (closestContactEntity != null) {

                if (closestContactEntity.onHitByLaser != undefined) {
                    closestContactEntity.onHitByLaser(closestContactPosition);
                }

                if (closestContactEntity.tags.includes('Mirror')) {
                    var mirror = closestContactEntity;
                    var beamDisplacement = wrk.v.copySub(
                        this.beamBouncePositions[this.beamBouncePositions.length - 1],
                        this.beamBouncePositions[this.beamBouncePositions.length - 2]);
                    var beamAngle = wrk.v.heading(beamDisplacement);
                    var angleOfIncidence = beamAngle - mirror.globalAngle;
                    angleOfIncidence %= (wrk.PI * 2);
                    var angleOfReflection = mirror.localAngle + wrk.PI / 2 - angleOfIncidence;
                    prevAngle = angleOfReflection - this.globalAngle - wrk.PI / 2;

                    // Just move the hit position a little out of the mirror
                    var normalizedDisplacement = wrk.v.copy(beamDisplacement);
                    wrk.v.normalize(normalizedDisplacement);
                    wrk.v.sub(closestContactPosition, normalizedDisplacement);
                }
                else {
                    break;
                }
            }
            // If no collision, terminate
            else {
                break;
            }
        } // end for
    }

    drawBeam() {
        // Presumes that all beam segments from last frame have been removed
        wrk.v.sub(this.beamBouncePositions[0], this.globalPosition);
        for (var i = 0; i < this.beamBouncePositions.length - 1; i ++) {
            var crntBouncePosition = this.beamBouncePositions[i];
            var nextBouncePosition = this.beamBouncePositions[i + 1];
            wrk.v.sub(nextBouncePosition, this.globalPosition);

            var middle = wrk.v.mean(crntBouncePosition, nextBouncePosition);
            var angle = wrk.v.heading(wrk.v.copySub(crntBouncePosition, nextBouncePosition));
            var length = wrk.v.dist(crntBouncePosition, nextBouncePosition);
            
            var beamSprite = new wrk.GameEngine.DrawableEntity('Beam segment',
                middle, angle, PIXI.Texture.WHITE, wrk.v(length, this.beamWidth));
            this.addChild(beamSprite);
            beamSprite.updateSpritePosition(); // make it not flicker - will be fixed in future wrk
        }
    }

    update() {
        this.projectBeam();
        this.drawBeam();
    }
}