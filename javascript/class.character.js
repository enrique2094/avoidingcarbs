class Character {
    constructor(x, y, ctx, img) {
        this.x = x
        this.y = y
        this.health = 50
        this.speed = 1
        this.ctx = ctx
        this.img = img;
        this.drawYourself()
        this.total = 0
    }

    receiveDamage(damage) {
        this.health -= damage
    }

    moveToTheFront() {
        this.x += 2
    }

    jump() {
        this.y -= 85
    }

    getDown() {
        this.y += 85
    }

    shoot(x, y, img) {
        const insuline = new Insuline (x, y, img, ctx)
        return insuline
    }
    
    alive() {
        if (this.health > 0) {
            return true
        }
        return false
    }

    drawYourself() {
        //this.ctx.fillRect(this.x, this.y, 30, 30)
        this.ctx.drawImage(this.img, this.x, this.y, 80, 80)
    }
} 