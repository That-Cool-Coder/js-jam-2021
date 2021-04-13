function rectRectCollisionSide(rect1Corner, rect1Size, rect2Corner, rect2Size) {
    // Find what side of rect 1 the collision is on

    var collision = null;

    // This math below is only reliable if the two are known to be colliding or not already
    var rect1Corner2 = wrk.v.copyAdd(rect1Corner, rect1Size);
    var rect2Corner2 = wrk.v.copyAdd(rect2Corner, rect2Size);
    if (rectRectCollision(rect1Corner, rect1Corner2, rect2Corner, rect2Corner2)) {

        var dx = (rect1Corner.x + rect1Size.x / 2) - (rect2Corner.x + rect2Size.x / 2);
        var dy = (rect1Corner.y + rect1Size.y / 2) - (rect2Corner.y + rect2Size.y / 2);
        var width = (rect1Size.x + rect2Size.x) / 2;
        var height = (rect1Size.y + rect2Size.y) / 2;
        var crossWidth = width * dy;
        var crossHeight = height * dx;

        if (Math.abs(dx) <= width && Math.abs(dy) <= height) {
            if (crossWidth > crossHeight) {
                collision = (crossWidth > (-crossHeight)) ? 'top' : 'right';
            }
            else {
                collision = (crossWidth > (-crossHeight)) ? 'left' : 'bottom';
            }
        }
    }
    return collision;
}

function rectRectCollision(rect1Corner1, rect1Corner2, rect2Corner1, rect2Corner2) {
    // Find whether the rects are colliding

    return !(rect2Corner1.x > rect1Corner2.x || 
        rect2Corner2.x < rect1Corner1.x || 
        rect2Corner1.y > rect1Corner2.y ||
        rect2Corner2.y < rect1Corner1.y);
}