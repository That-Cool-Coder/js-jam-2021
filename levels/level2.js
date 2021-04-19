const level2 = {
    levelNum : 2,
    normalPlayerStartPos : wrk.v(100, 200),
    mirroredPlayerStartPos : wrk.v(50, 200),

    world : [
        // These four are the basic border
        {type : 'Wall', position : wrk.v(0, 400), size : wrk.v(800, 50)},
        {type : 'Wall', position : wrk.v(0, 0), size : wrk.v(20, 400)},
        {type : 'Wall', position : wrk.v(780, 0), size : wrk.v(20, 400)},
        {type : 'Wall', position : wrk.v(0, 0), size : wrk.v(800, 20)},

        {type : 'Finish', position : wrk.v(350, 400), forMirroredPlayer : false},
        {type : 'Finish', position : wrk.v(400, 400), forMirroredPlayer : true},

        {type : 'Hint', text : 'Things get more interesting\nwhen both players start next to each other...', position : wrk.v(config.targetSize.x / 2, 50)}
    ]
}