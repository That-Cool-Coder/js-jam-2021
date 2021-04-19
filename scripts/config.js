// It's like json but I can use vectors and I don't need to load with AJAX

const config = {
    gameName : 'Grey Mirrors',
    aboutPageUrl : 'https://thatcoolcoder.itch.io/js-jam-2021',
    bgColor : 0x757575,
    targetSize : wrk.v(800, 450), // 16:9
    padding : wrk.v(10, 10),
    version : 0,

    // If delta time is greater than this then pause
    // (stops things falling through other things)
    maxAllowableDeltaTime : 0.1,

    normalPlayerColor : 0xffffff,
    mirroredPlayerColor : 0x000000,

    hintTextStyle : {
        fill: "white",
        fontFamily: "\"Courier New\", Courier, monospace",
        fontSize: 18,
        align : "center",
        stroke: "black"
    },

    normalTextStyle : {
        fill: "white",
        fontFamily: "\"Courier New\", Courier, monospace",
        fontSize: 26,
        stroke: "black"
    },

    headingTextStyle : {
        fill: "white",
        fontFamily: "\"Courier New\", Courier, monospace",
        fontSize: 38,
        stroke: "black"
    },

    titleTextStyle : {
        fill: "white",
        fontFamily: "\"Courier New\", Courier, monospace",
        fontSize: 50,
        stroke: "black"
    },

    mainThemeSong : new wrk.Sound('sounds/mainTheme.mp3'),

    buttonTexture1x1 : wrk.GameEngine.Texture.fromUrl('images/button1x1.png'),
    lockedButtonTexture1x1 : wrk.GameEngine.Texture.fromUrl('images/button1x1locked.png'),
    buttonTexture1x2 : wrk.GameEngine.Texture.fromUrl('images/button1x2.png'),
}