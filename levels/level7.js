const level7 = {
    levelNum : 7,
    normalPlayerStartPos : wrk.v(50, 350),
    mirroredPlayerStartPos : wrk.v(750, 350),

    world : [

        {type : 'Wall', position : wrk.v(0, 420), size : wrk.v(800, 30)},
        {type : 'Wall', position : wrk.v(0, 400), size : wrk.v(690, 20)},
        {type : 'Wall', position : wrk.v(710, 400), size : wrk.v(90, 20)},
        
        {type : 'Wall', position : wrk.v(0, 310), size : wrk.v(560, 20)},
        {type : 'Wall', position : wrk.v(600, 310), size : wrk.v(80, 20)},
        {type : 'Wall', position : wrk.v(720, 310), size : wrk.v(80, 20)},

        {type : 'Finish', position : wrk.v(350, 310), forMirroredPlayer : false},
        {type : 'Finish', position : wrk.v(400, 310), forMirroredPlayer : true},

        {type : 'Hint', text : '*Enter hint here*', position : wrk.v(config.targetSize.x / 2, 50)}
    ]
}