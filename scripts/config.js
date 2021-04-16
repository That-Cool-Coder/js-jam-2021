// It's like json but I can use vectors and I don't need to load with AJAX

const config = {
    gameName : 'Grey Mirrors',
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
        fontSize: 18,
        stroke: "black"
    },

    headingTextStyle : {
        fill: "white",
        fontFamily: "\"Courier New\", Courier, monospace",
        fontSize: 26,
        stroke: "black"
    },

    titleTextStyle : {
        fill: "white",
        fontFamily: "\"Courier New\", Courier, monospace",
        fontSize: 50,
        stroke: "black"
    },

    buttonTexture1x1 : wrk.GameEngine.Texture.fromUrl('images/button1x1.png'),
    buttonTexture1x2 : wrk.GameEngine.Texture.fromUrl('images/button1x2.png')
}