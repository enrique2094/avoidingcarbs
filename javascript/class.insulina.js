class Insuline {
    constructor (x, y, img, ctx){
        this.x = x
        this.y = y
        this.img = img;
        this.ctx = ctx
        
}
    drawYourself(){
    this.ctx.drawImage(this.img, this.x, this.y, 55, 55)
}
}