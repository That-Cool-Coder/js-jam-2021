const level10 = {
    levelNum : 10,
    normalPlayerStartPos : wrk.v(300, 350),
    mirroredPlayerStartPos : wrk.v(500, 350),

    world : [
        // These four are the basic border
        {type : 'Wall', position : wrk.v(0, 400), size : wrk.v(800, 50)},
        {type : 'Wall', position : wrk.v(0, 0), size : wrk.v(20, 400)},
        {type : 'Wall', position : wrk.v(780, 0), size : wrk.v(20, 400)},
        {type : 'Wall', position : wrk.v(0, 0), size : wrk.v(800, 20)},

        {type : 'Wall', position : wrk.v(250, 280), size : wrk.v(40, 40)},
        {type : 'Wall', position : wrk.v(520, 250), size : wrk.v(40, 40)},

        {type : 'Laser', position : wrk.v(400, 225), angle : wrk.radians(-90), spinRate : wrk.radians(45)},

        {type : 'Finish', position : wrk.v(75, 400), forMirroredPlayer : false},
        {type : 'Finish', position : wrk.v(475, 400), forMirroredPlayer : true},

        {type : 'Hint', text : 'Did I mention that lasers can spin?', position : wrk.v(config.targetSize.x / 2, 50)}
    ]
}