class Finish extends WalkableObject {
    static size = wrk.v(50, 10);

    constructor(topLeftCorner, forMirroredPlayer) {
        var color = forMirroredPlayer ? config.mirroredPlayerColor :
            config.normalPlayerColor;
        super('Finish', topLeftCorner, Finish.size, color);
        this.forMirroredPlayer = forMirroredPlayer;

        this.particleTemplate = {
            texture : PIXI.Texture.WHITE,
            tint : color,
            minSize : wrk.v(3, 3),
            maxSize : wrk.v(5, 5),
            minSpeed : 50,
            maxSpeed : 100,
            minTimeToLive : 0.6,
            maxTimeToLive : 0.8,
            effectorStrengths : {
                airFriction : 10
            }
        }

        this.emitterData = {
            particleTemplate : this.particleTemplate,
            shape : 'arc',
            amount : 50,
            delay : 0,
            interval : 0.1,
            minAngle : wrk.radians(135),
            maxAngle : wrk.radians(225)
        }

        this.particleEffect = new wrk.GameEngine.ParticleEffect('particleEffect',
            wrk.v.copyDiv(this.size, 2), 0, this.emitterData, true);
        this.particleEffect.addTag('FinishParticleEffect');
        this.addChild(this.particleEffect);
    }
}