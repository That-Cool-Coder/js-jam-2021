const level6 = {
    levelNum : 6,
    normalPlayerStartPos : wrk.v(100, 100),
    mirroredPlayerStartPos : wrk.v(700, 300),

    world : [
        // Starting platform
        {type : 'Wall', position : wrk.v(0, 170), size : wrk.v(150, 20)},
        // Mid air platforms
        {type : 'Wall', position : wrk.v(300, 170), size : wrk.v(10, 20)},
        {type : 'Wall', position : wrk.v(500, 170), size : wrk.v(10, 20)},
        // Far right platform
        {type : 'Wall', position : wrk.v(650, 250), size : wrk.v(150, 20)},
        // Second-last platform
        {type : 'Wall', position : wrk.v(650, 150), size : wrk.v(100, 20)},
        // Finishing platform
        {type : 'Wall', position : wrk.v(700, 70), size : wrk.v(100, 20)},
        {type : 'Finish', position : wrk.v(725, 70), forMirroredPlayer : false},
        // Blocker
        {type : 'Wall', position : wrk.v(650, 0), size : wrk.v(20, 150)},
        // Thing to stop player going over top
        {type : 'Wall', position : wrk.v(650, 0), size : wrk.v(150, 20)},

        // Overhang
        {type : 'Wall', position : wrk.v(650, 250), size : wrk.v(20, 40)},
        // Starting platform
        {type : 'Wall', position : wrk.v(650, 350), size : wrk.v(150, 20)},
        // Mid air platforms
        {type : 'Wall', position : wrk.v(490, 350), size : wrk.v(10, 20)},
        {type : 'Wall', position : wrk.v(290, 350), size : wrk.v(10, 20)},
        // Far left platform
        {type : 'Wall', position : wrk.v(0, 430), size : wrk.v(150, 20)},
        // Second-last platform
        {type : 'Wall', position : wrk.v(50, 330), size : wrk.v(100, 20)},
        // Finishing platform
        {type : 'Wall', position : wrk.v(0, 250), size : wrk.v(100, 20)},
        {type : 'Finish', position : wrk.v(25, 250), forMirroredPlayer : true},
        // Blocker
        {type : 'Wall', position : wrk.v(130, 180), size : wrk.v(20, 150)},

        {type : 'Hint', text : 'This level is hard due to the platformer aspect', position : wrk.v(config.targetSize.x / 2, 50)}
    ]
}