const level8 = {
    levelNum : 8,
    normalPlayerStartPos : wrk.v(300, 350),
    mirroredPlayerStartPos : wrk.v(500, 350),

    world : [
        // These four are the basic border
        {type : 'Wall', position : wrk.v(0, 400), size : wrk.v(800, 50)},
        {type : 'Wall', position : wrk.v(0, 0), size : wrk.v(20, 400)},
        {type : 'Wall', position : wrk.v(780, 0), size : wrk.v(20, 400)},
        {type : 'Wall', position : wrk.v(0, 0), size : wrk.v(800, 20)},

        {type : 'Wall', position : wrk.v(20, 300), size : wrk.v(20, 20)},
        {type : 'Wall', position : wrk.v(20, 200), size : wrk.v(20, 20)},
        {type : 'Wall', position : wrk.v(20, 100), size : wrk.v(20, 20)},

        {type : 'Wall', position : wrk.v(760, 300), size : wrk.v(20, 20)},
        {type : 'Wall', position : wrk.v(760, 200), size : wrk.v(20, 20)},
        {type : 'Wall', position : wrk.v(760, 100), size : wrk.v(20, 20)},

        {type : 'Wall', position : wrk.v(100, 80), size : wrk.v(20, 70)},
        {type : 'Wall', position : wrk.v(100, 150), size : wrk.v(100, 20)},
        {type : 'Wall', position : wrk.v(300, 150), size : wrk.v(90, 20)},
        {type : 'Wall', position : wrk.v(390, 50), size : wrk.v(20, 20)},
        {type : 'Wall', position : wrk.v(410, 150), size : wrk.v(90, 20)},
        {type : 'Wall', position : wrk.v(600, 150), size : wrk.v(100, 20)},
        {type : 'Wall', position : wrk.v(680, 80), size : wrk.v(20, 70)},

        {type : 'Laser', position : wrk.v(400, 400), angle : wrk.radians(-90)},
        {type : 'Laser', position : wrk.v(185, 160), angle : wrk.radians(0)},
        {type : 'Laser', position : wrk.v(615, 160), angle : wrk.radians(180)},

        {type : 'Finish', position : wrk.v(475, 400), forMirroredPlayer : false},
        {type : 'Finish', position : wrk.v(275, 400), forMirroredPlayer : true},

        {type : 'Hint', text : 'This level would be\nridiculously easy...', position : wrk.v(200, 230)},
        {type : 'Hint', text : '...if it wasn\'t for those\nlasers in the middle.', position : wrk.v(600, 300)}
    ]
}