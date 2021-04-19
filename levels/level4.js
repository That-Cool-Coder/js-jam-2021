const level4 = {
    levelNum : 4,
    normalPlayerStartPos : wrk.v(100, 350),
    mirroredPlayerStartPos : wrk.v(700, 100),

    world : [
        // These four are the basic border
        {type : 'Wall', position : wrk.v(0, 400), size : wrk.v(800, 50)},
        {type : 'Wall', position : wrk.v(0, 0), size : wrk.v(20, 400)},
        {type : 'Wall', position : wrk.v(780, 0), size : wrk.v(20, 400)},
        {type : 'Wall', position : wrk.v(0, 0), size : wrk.v(800, 20)},

        {type : 'Wall', position : wrk.v(300, 0), size : wrk.v(20, 400)},
        {type : 'Wall', position : wrk.v(480, 0), size : wrk.v(20, 400)},

        {type : 'Wall', position : wrk.v(0, 100), size : wrk.v(200, 20)},
        {type : 'Wall', position : wrk.v(600, 100), size : wrk.v(200, 20)},

        {type : 'Wall', position : wrk.v(100, 200), size : wrk.v(200, 20)},
        {type : 'Wall', position : wrk.v(500, 200), size : wrk.v(200, 20)},

        {type : 'Wall', position : wrk.v(0, 300), size : wrk.v(200, 20)},
        {type : 'Wall', position : wrk.v(580, 300), size : wrk.v(220, 20)},

        {type : 'Finish', position : wrk.v(75, 100), forMirroredPlayer : false},
        {type : 'Finish', position : wrk.v(675, 400), forMirroredPlayer : true},

        {type : 'Hint', text : 'If you get stuck,\n click pause then restart', position : wrk.v(config.targetSize.x / 2, 50)}
    ]
}