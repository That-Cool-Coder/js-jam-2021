const level1 = {
    levelNum : 1,
    normalPlayerStartPos : wrk.v(200, 350),
    mirroredPlayerStartPos : wrk.v(600, 350),

    world : [
        // These four are the basic border
        {type : 'Wall', position : wrk.v(0, 400), size : wrk.v(800, 50)},
        {type : 'Wall', position : wrk.v(0, 0), size : wrk.v(20, 400)},
        {type : 'Wall', position : wrk.v(780, 0), size : wrk.v(20, 400)},
        {type : 'Wall', position : wrk.v(0, 0), size : wrk.v(800, 20)},

        {type : 'Wall', position : wrk.v(300, 300), size : wrk.v(200, 20)},

        {type : 'Wall', position : wrk.v(200, 200), size : wrk.v(100, 20)},
        {type : 'Wall', position : wrk.v(500, 200), size : wrk.v(100, 20)},

        {type : 'Finish', position : wrk.v(225, 200), forMirroredPlayer : true},
        {type : 'Finish', position : wrk.v(525, 200), forMirroredPlayer : false},

        {type : 'Hint', text : 'Control the white player using the arrow keys or WASD.\n\nThe black player will mirror your movements.\n\nGet both players to their finish points to complete the level.', position : wrk.v(config.targetSize.x / 2, 50)}
    ]
}