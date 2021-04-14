const testLevel = [
    {type : 'Wall', position : wrk.v(0, 400), size : wrk.v(800, 50)},
    {type : 'Wall', position : wrk.v(0, 0), size : wrk.v(20, 450)},
    {type : 'Wall', position : wrk.v(780, 0), size : wrk.v(20, 450)},

    {type : 'Wall', position : wrk.v(300, 300), size : wrk.v(200, 20)},

    {type : 'Wall', position : wrk.v(200, 200), size : wrk.v(100, 20)},
    {type : 'Wall', position : wrk.v(500, 200), size : wrk.v(100, 20)},

    {type : 'Finish', position : wrk.v(225, 190), forMirroredPlayer : true},
    {type : 'Finish', position : wrk.v(525, 190), forMirroredPlayer : false},
]