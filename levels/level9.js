const level9 = {
    levelNum : 9,
    normalPlayerStartPos : wrk.v(300, 250),
    mirroredPlayerStartPos : wrk.v(500, 250),

    world : [
        // These four are the basic border
        {type : 'Wall', position : wrk.v(0, 400), size : wrk.v(800, 50)},
        {type : 'Wall', position : wrk.v(0, 0), size : wrk.v(20, 400)},
        {type : 'Wall', position : wrk.v(780, 0), size : wrk.v(20, 400)},
        {type : 'Wall', position : wrk.v(0, 0), size : wrk.v(800, 20)},

        {type : 'Wall', position : wrk.v(0, 300), size : wrk.v(220, 20)},
        {type : 'Wall', position : wrk.v(260, 300), size : wrk.v(80, 20)},
        {type : 'Wall', position : wrk.v(380, 300), size : wrk.v(420, 20)},
  
        {type : 'Wall', position : wrk.v(760, 190), size : wrk.v(20, 110)},
        {type : 'Laser', position : wrk.v(750, 190), angle : wrk.radians(90)},
        {type : 'Wall', position : wrk.v(650, 85), size : wrk.v(40, 20)},
        {type : 'Laser', position : wrk.v(670, 110), angle : wrk.radians(180)},
        {type : 'Wall', position : wrk.v(570, 85), size : wrk.v(40, 20)},
        {type : 'Wall', position : wrk.v(490, 85), size : wrk.v(40, 20)},
        {type : 'Wall', position : wrk.v(410, 85), size : wrk.v(40, 20)},
        {type : 'Wall', position : wrk.v(330, 85), size : wrk.v(40, 20)},
        {type : 'Wall', position : wrk.v(250, 85), size : wrk.v(40, 20)},
        {type : 'Wall', position : wrk.v(190, 85), size : wrk.v(20, 30)},
        {type : 'Wall', position : wrk.v(170, 95), size : wrk.v(20, 20)},

        {type : 'Laser', position : wrk.v(30, 410), angle : wrk.radians(-90)},
        {type : 'Laser', position : wrk.v(261, 410), angle : wrk.radians(-90)},
        {type : 'Laser', position : wrk.v(339, 410), angle : wrk.radians(-90)},

        {type : 'Finish', position : wrk.v(75, 400), forMirroredPlayer : false},
        {type : 'Finish', position : wrk.v(475, 400), forMirroredPlayer : true},

        {type : 'Hint', text : 'Lasers make it "fun"', position : wrk.v(config.targetSize.x / 2, 50)}
    ]
}