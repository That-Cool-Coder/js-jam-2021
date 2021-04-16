class Player extends wrk.GameEngine.DrawableEntity {
    // These top two need to be statci because they are used in the super
    static texture = PIXI.Texture.WHITE;
    static size = wrk.v(12.5, 25);

    nonMirroredColor = 0xffffff;
    mirroredColor = 0x000000;

    moveAcceleration = 300;
    moveDeceleration = 300;
    maxSpeed = 150;
    jumpSpeed = -375;

    gravity = wrk.v(0, 550);

    worldComponentInteractions = {
        'Wall' : c => this.collideWithWorldComponent(c),
        'Finish' : c => this.interactWithFinish(c),
        'KillerBlock' : c => {if (this.isTouching(c)) mainScene.restartCrntLevel()}
    }
    
    constructor(name, localPosition, mirrored=false) {
        super(name, localPosition, wrk.PI, Player.texture, Player.size);
        this.addTag('Player');
        this.colliderSize = wrk.v.copy(this.textureSize);
        this.mirrored = mirrored;

        // Make a shortcut for reversing stuff, instead of lots of ifs everywhere
        // Also set the color
        if (this.mirrored)  {
            this.mirrorMult = -1;
            this.setTint(this.mirroredColor);
        }
        else {
            this.mirrorMult = 1;
            this.setTint(this.nonMirroredColor);
        }

        this.velocity = wrk.v(0, 0);

        this.isGrounded = false;
        this.isTouchingFinish = false;
        this.isFrozen = false;
    }

    setFrozen(state) {
        this.isFrozen = state;
    }

    update() {
        if (! this.isFrozen && wrk.GameEngine.deltaTime < config.maxAllowableDeltaTime) {
            this.checkGrounded();
            this.feelGravity();
            this.controls();
            this.dieIfOffScreen();

            wrk.v.add(this.localPosition, wrk.v.copyMult(this.velocity, wrk.GameEngine.deltaTime));
            
            this.isTouchingFinish = false;
            this.interactWithWorld();
        }
    }

    // Movement
    // --------

    feelGravity() {
        wrk.v.add(this.velocity, wrk.v.copyMult(this.gravity, wrk.GameEngine.deltaTime));
    }

    controls() {
        var leftOrRightInput = false;
        if (wrk.GameEngine.keyboard.keyIsDown('ArrowLeft') || 
            wrk.GameEngine.keyboard.keyIsDown('A')) {
            this.velocity.x -= this.moveAcceleration *
                wrk.GameEngine.deltaTime * this.mirrorMult;
            leftOrRightInput = true;
        }
        if (wrk.GameEngine.keyboard.keyIsDown('ArrowRight') || 
            wrk.GameEngine.keyboard.keyIsDown('D')) {
            this.velocity.x += this.moveAcceleration *
                wrk.GameEngine.deltaTime * this.mirrorMult;
            leftOrRightInput = true;
        }
        if (wrk.GameEngine.keyboard.keyIsDown('ArrowUp') || 
            wrk.GameEngine.keyboard.keyIsDown('W')) {
            if (this.isGrounded) this.startJump();
        }

        if (! leftOrRightInput) {
            if (wrk.abs(this.velocity.x) >
                this.moveDeceleration * wrk.GameEngine.deltaTime) {
                this.velocity.x -= wrk.sign(this.velocity.x) *
                    this.moveDeceleration * wrk.GameEngine.deltaTime;
            }
            else this.velocity.x = 0;
        }

        this.velocity.x = wrk.constrain(this.velocity.x, -this.maxSpeed, this.maxSpeed);
    }

    startJump() {
        this.velocity.y = this.jumpSpeed;
    }

    dieIfOffScreen() {
        if (this.localPosition.x < 0 ||
            this.localPosition.x > wrk.GameEngine.canvasSize.x || 
            this.localPosition.y < 0 ||
            this.localPosition.y > wrk.GameEngine.canvasSize.y) {
                
            mainScene.restartCrntLevel();
        }
    }
    
    // Collision stuff
    // ---------------

    interactWithWorld() {
        wrk.GameEngine.getEntitiesWithTag('WalkableObject').forEach(c => {
            var func = this.worldComponentInteractions[c.type];
            if (func != undefined) {
                func(c);
            }
        });
    }

    get topLeftPos() {
        return wrk.v.copySub(this.globalPosition, wrk.v.copyDiv(this.colliderSize, 2));
    }

    get bottomRightPos() {
        return wrk.v.copyAdd(this.globalPosition, wrk.v.copyDiv(this.colliderSize, 2));
    }

    checkGrounded() {

        // Use a for...of instead of a foreach to allow break
        var grounded = false;
        var worldComponents = wrk.GameEngine.getEntitiesWithTag('WalkableObject');
        for (var component of worldComponents) {
            if (this.collisionSide(component) == 'bottom') {
                grounded = true;
                break;
            }
        }
        this.isGrounded = grounded;
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
        return rectRectCollisionSide(this.topLeftPos, this.textureSize,
            component.topLeftPos, component.size);
    }

    collideWithWorldComponent(component) {
        if (this.isTouching(component)) {
            var collisionSide = this.collisionSide(component);

            switch (collisionSide) {
                case 'left':
                    var overlap = component.bottomRightPos.x - this.topLeftPos.x;
                    this.localPosition.x += overlap;
                    if (this.velocity.x < 0) this.velocity.x = 0;
                    break;

                case 'right':
                    var overlap = this.bottomRightPos.x - component.topLeftPos.x;
                    this.localPosition.x -= overlap;
                    if (this.velocity.x > 0) this.velocity.x = 0;
                    break;

                case 'top':
                    var overlap = component.bottomRightPos.y - this.topLeftPos.y;
                    this.localPosition.y += overlap + 2;
                    this.velocity.y = 5;
                    break;

                case 'bottom':
                    var overlap = this.bottomRightPos.y - component.topLeftPos.y
                    this.localPosition.y -= overlap;
                    this.velocity.y = 0;
                    break;
            }
        }
    }

    interactWithFinish(component) {
        if (this.collisionSide(component) == 'bottom'
            && component.forMirroredPlayer == this.mirrored) {
            this.isTouchingFinish = true;
        }
        this.collideWithWorldComponent(component);
    }
}