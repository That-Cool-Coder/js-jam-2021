document.title = config.gameName;

wrk.GameEngine.init(config.targetSize, 1, config.bgColor);

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

var scene = new wrk.GameEngine.Scene('s');
var blob = new wrk.GameEngine.DrawableEntity('n', wrk.v.copyDiv(wrk.GameEngine.canvasSize, 2),
    0, wrk.GameEngine.Texture.fromUrl('images/blobfish.jpg'), wrk.v(100, 100));
scene.addChild(blob);

blob.update = function() {
    this.localAngle += 0.07;
}

var square = new wrk.GameEngine.DrawableEntity('n', wrk.v(150, 0),
0, PIXI.Texture.WHITE, wrk.v(50, 50));
blob.addChild(square);

square.update = function() {
    this.localAngle += 0.2;
}

wrk.GameEngine.selectScene(scene);

window.addEventListener('resize', resizeCanvas);

resizeCanvas();