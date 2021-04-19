const level5 = {
    levelNum : 5,
    normalPlayerStartPos : wrk.v(350, 100),
    mirroredPlayerStartPos : wrk.v(450, 100),

    world : [
        // These four are the basic border
        {type : 'Wall', position : wrk.v(0, 400), size : wrk.v(800, 50)},
        {type : 'Wall', position : wrk.v(0, 0), size : wrk.v(20, 400)},
        {type : 'Wall', position : wrk.v(780, 0), size : wrk.v(20, 400)},
        {type : 'Wall', position : wrk.v(0, 0), size : wrk.v(800, 20)},

        {type : 'Wall', position : wrk.v(0, 200), size : wrk.v(280, 20)},
        {type : 'Wall', position : wrk.v(320, 200), size : wrk.v(310, 20)},
        {type : 'Wall', position : wrk.v(670, 200), size : wrk.v(130, 20)},

        {type : 'Finish', position : wrk.v(75, 100), forMirroredPlayer : false},
        {type : 'Finish', position : wrk.v(675, 400), forMirroredPlayer : true},

        {type : 'Hint', text : 'If you get stuck,\n click pause then restart', position : wrk.v(config.targetSize.x / 2, 50)}
    ]
}