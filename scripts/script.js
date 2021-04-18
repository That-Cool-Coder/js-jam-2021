document.title = config.gameName;

wrk.GameEngine.init(config.targetSize, 1, config.bgColor);

// Resize stuff
function resizeCanvas() {
    var targetAspectRatio = config.targetSize.x / config.targetSize.y;
    var availableArea = wrk.v.copySub(wrk.dom.viewportSize(), config.padding);
    var availableAspectRatio = availableArea.x / availableArea.y;


    // If the target is 'wider' than the window
    if (targetAspectRatio > availableAspectRatio) {
        var sizeMult = availableArea.x / config.targetSize.x;
    }
    // If the target is 'taller' than the window
    else {
        var sizeMult = availableArea.y / config.targetSize.y;
    }
    wrk.GameEngine.setGlobalScale(sizeMult);
}

window.addEventListener('resize', resizeCanvas);

resizeCanvas();

// Setup scenes
var mainScene = new MainScene();
var levelSelectScene = new LevelSelectScene();
var titleScreen = new TitleScreen();
var pauseMenu = new PauseMenu();

// Wait for a user interaction before starting music
var mainThemePlaying = false;
wrk.GameEngine.mouse.onPointerDown.add(() => {
    if (! mainThemePlaying) {
        config.mainThemeSong.loop();
        mainThemePlaying = true;
    }
})

wrk.GameEngine.selectScene(titleScreen);