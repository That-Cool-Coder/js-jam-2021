class MuteButton extends wrk.GameEngine.DrawableEntity {
    // These are static because they are used in super
    static mutedTexture = wrk.GameEngine.Texture.fromUrl('images/speakerMuted.png');
    static unmutedTexture = wrk.GameEngine.Texture.fromUrl('images/speakerPlaying.png');
    static size = wrk.v(20, 20);

    constructor(localPosition) {
        var texture = settings.muted ? MuteButton.mutedTexture : MuteButton.unmutedTexture;
        super('muteButton', localPosition, wrk.PI, texture, MuteButton.size);
        
        if (settings.muted) {
            config.mainThemeSong.stop();
        }
        else if (settings.muted) {
            config.mainThemeSong.loop();
        }

        this.mouseUpCallbacks.add(() => {
            if (! settings.muted) {
                settings.muted = true;
                config.mainThemeSong.stop();
            }
            else {
                settings.muted = false;
                config.mainThemeSong.loop();
            }
        });

        this.frameCount = 0;
    }

    update() {
        this.setTexture(settings.muted ? MuteButton.mutedTexture : MuteButton.unmutedTexture);
    }
}