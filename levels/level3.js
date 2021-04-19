const level3 = {
    levelNum : 3,
    normalPlayerStartPos : wrk.v(200, 350),
    mirroredPlayerStartPos : wrk.v(240, 350),

    world : [
        // These four are the basic border
        {type : 'Wall', position : wrk.v(0, 400), size : wrk.v(800, 50)},
        {type : 'Wall', position : wrk.v(0, 0), size : wrk.v(20, 400)},
        {type : 'Wall', position : wrk.v(780, 0), size : wrk.v(20, 400)},
        {type : 'Wall', position : wrk.v(0, 0), size : wrk.v(800, 20)},

        {type : 'Wall', position : wrk.v(475, 300), size : wrk.v(20, 100)},

        {type : 'Finish', position : wrk.v(225, 400), forMirroredPlayer : false},
        {type : 'Finish', position : wrk.v(625, 400), forMirroredPlayer : true},

        {type : 'Hint', text : '...Or when the level isn\'t symmetrical', position : wrk.v(config.targetSize.x / 2, 50)}
    ]
}