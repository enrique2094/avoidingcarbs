class Character{
    constructor(x, y, ctx, img){
    this.x = x
    this.y = y
    this.health = 200
    this.speed = 1
    this.ctx = ctx
    this.img = img;
    this.drawYourself()
    }


    receiveDamage(damage){
        this.health -= damage
    }

    shoot(){

    }

    alive(){
        if (this.health > 0){
            return true
        }
        return false
    }

    drawYourself(){
        // this.ctx.fillRect(this.x, this.y, 30, 30)
        this.ctx.drawImage(this.img, this.x, this.y, 100, 100)
    }
}
