const level5 = {
    levelNum : 5,
    normalPlayerStartPos : wrk.v(150, 350),
    mirroredPlayerStartPos : wrk.v(650, 350),

    world : [
        // These four are the basic border
        {type : 'Wall', position : wrk.v(0, 400), size : wrk.v(800, 50)},
        {type : 'Wall', position : wrk.v(0, 0), size : wrk.v(20, 400)},
        {type : 'Wall', position : wrk.v(780, 0), size : wrk.v(20, 400)},
        {type : 'Wall', position : wrk.v(0, 0), size : wrk.v(800, 20)},

        {type : 'Wall', position : wrk.v(250, 350), size : wrk.v(40, 50)},
        {type : 'Wall', position : wrk.v(290, 300), size : wrk.v(40, 100)},
        {type : 'Wall', position : wrk.v(330, 250), size : wrk.v(40, 150)},
        {type : 'Wall', position : wrk.v(370, 300), size : wrk.v(40, 100)},
        {type : 'Wall', position : wrk.v(410, 350), size : wrk.v(40, 50)},
        
        {type : 'Wall', position : wrk.v(100, 160), size : wrk.v(200, 20)},

        {type : 'Finish', position : wrk.v(75, 400), forMirroredPlayer : false},
        {type : 'Finish', position : wrk.v(125, 400), forMirroredPlayer : true},

        {type : 'Hint', text : 'Simple-looking levels like this\nare often more difficult than they appear', position : wrk.v(config.targetSize.x / 2, 50)}
    ]
}