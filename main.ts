scene.setTileMap(img`
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    ....................
    22222...............
    .....2222222222.....
    ...............22222
    ....................
    ....................
    ....9...............
    ....9........2222222
    fc..9.2222222.......
    222222..............
    ....................
    `, TileScale.Eight)
scene.setTile(2, img`
    2 2 2 2 2 2 2 2 
    . . . 2 2 . . . 
    . . . 2 2 . . . 
    . . 2 . . 2 . . 
    . 2 . . . . 2 . 
    . 2 . . . . 2 . 
    2 . . . . . . 2 
    2 2 2 2 2 2 2 2 
    `, true)
scene.setTile(9, img`
    9 9 9 9 9 9 9 9 
    9 . . . . . . 9 
    9 9 9 9 9 9 9 9 
    9 . . . . . . 9 
    9 9 9 9 9 9 9 9 
    9 . . . . . . 9 
    9 9 9 9 9 9 9 9 
    9 . . . . . . 9 
    `, false)
scene.setTile(12, img`
    c c c c c c c c 
    b c c c c c c b 
    c b b b b b b c 
    c c c c c c c c 
    b c c c c c c b 
    c b b b b b b c 
    c c c c c c c c 
    c c c c c c c c 
    `, false)
