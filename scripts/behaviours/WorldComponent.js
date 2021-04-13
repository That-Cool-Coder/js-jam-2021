class WorldComponent extends wrk.GameEngine.DrawableEntity {
    constructor(type, topLeftCorner, size, color=0x000000) {
        super(type, topLeftCorner, wrk.PI, PIXI.Texture.WHITE, size, wrk.v(0, 0));
        this.addTag('WorldComponent');
        this.addTag(type);
        this.type = type;
        this.size = wrk.v.copy(size);
        this.setTint(color);
    }

    get topLeftPos() {
        return this.globalPosition;
    }

    get bottomRightPos() {
        return wrk.v.copyAdd(this.globalPosition, this.size);
    }

    isTouching(component) {
        // Put these in in vars as they are recursive getters
        var selfTopLeft = this.topLeftPos;
        var selfBottomRight = this.bottomRightPos;
        var otherTopLeft = component.topLeftPos;
        var otherBottomRight = component.bottomRightPos;
        
        return rectRectCollision(selfTopLeft, selfBottomRight, otherTopLeft, otherBottomRight);
    }

    collisionSide(component) {
        // Put these in in vars as they are recursive getters
        var selfTopLeft = this.topLeftPos;
        var componentTopLeft = component.topLeftPos;

        var selfSize = wrk.v.copyMult(this.size, 2);
        var componentSize = wrk.v.copyMult(component.colliderSize, 2);

        return rectRectCollisionSide(selfTopLeft, selfSize, componentTopLeft, componentSize);
    }
}