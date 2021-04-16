class SceneTransitionFade {
    static duration = 300; // milliseconds
    static updateInterval = 20; // milliseconds
    static fadeDirection = null; // null, in, or out
    static color = 0x000000;
    static onCompleteCallback = () => {};

    static fade(direction='in', onCompleteCallback=()=>{}) {
        // Direction = in or out

        if (this.fadeSprite == undefined) {
            this.fadeSprite = new wrk.GameEngine.DrawableEntity('fadeSprite',
                wrk.v(0, 0), wrk.PI, PIXI.Texture.WHITE, wrk.GameEngine.canvasSize, wrk.v(0, 0));
            this.fadeSprite.setTint(this.color);

        }

        if (this.fadeSprite.isInScene) {
            this.fadeSprite.containingScene.removeChild(this.fadeSprite);
        }

        wrk.GameEngine.crntScene.addChild(this.fadeSprite);

        this.fadeDirection = direction;
        this.onCompleteCallback = onCompleteCallback;

        if (this.fadeDirection == 'in') this.fadeSprite.setAlpha(0);
        else this.fadeSprite.setAlpha(1);

        setTimeout(() => this.continueFade(), this.duration / this.updateInterval);
    }

    static continueFade() {
        if (this.fadeDirection == 'in') {
            this.fadeSprite.setAlpha(this.fadeSprite.alpha + 1 / (this.duration / this.updateInterval));
        }
        else {
            this.fadeSprite.setAlpha(this.fadeSprite.alpha - 1 / (this.duration / this.updateInterval));
        }

        this.fadeSprite.setAlpha(wrk.constrain(this.fadeSprite.alpha, 0, 1));

        var hasFinishedFade = false;
        if (this.fadeDirection == 'in' && this.fadeSprite.alpha == 1) {
            hasFinishedFade = true;
        }
        if (this.fadeDirection == 'out' && this.fadeSprite.alpha == 0) {
            hasFinishedFade = true;
        }

        if (! hasFinishedFade) {
            setTimeout(() => this.continueFade(), this.duration / this.updateInterval);
        }
        else {
            this.onCompleteCallback();
        }
    }
}