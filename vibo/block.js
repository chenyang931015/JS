var Block = function(game, position) {
    //position 是 [0, 0] 格式
    var p = position
    var img = game.imageByName('block')
    var o = {
        x: p[0],
        y: p[1],
        alive: true,
        lives: p[2] || 1,
    }
    o.image = img.image
    o.w = img.w
    o.h = img.h
    o.kill =function() {
        o.lives--
        if (o.lives < 1){
            o.alive = false
        }
    }
    o.collide = function(b) {
        return o.alive && (rectIntersects(o, b) || rectIntersects(b, o))
    }
    return o
}