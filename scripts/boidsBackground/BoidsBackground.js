class BoidsBackground extends Flock {
    static size = 100;
    static boidHeightRange = new Range(50, 100);
    static boidSpeedRange = new Range(2, 3);
    static boidColor = 0xaaaaaa;
    static boidBehaviour = {
        cohesionDist : 100,
        cohesionStrength : 0.001,
        avoidanceDist : 20,
        avoidanceStrength : 0.025,
        alignmentDist : 100,
        alignmentStrength : 0.05
    }

    // Update this many times before first frame to get boids moving
    static preRenderUpdates = 100;

    constructor() {
        super(BoidsBackground.size, BoidsBackground.boidHeightRange,
            BoidsBackground.boidSpeedRange, BoidsBackground.boidBehaviour, false,
            BoidsBackground.boidColor);
        wrk.doNTimes(BoidsBackground.preRenderUpdates, () => this.update());
    }
}