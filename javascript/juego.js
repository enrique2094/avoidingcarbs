const canvas = document.getElementById("scenario")
const ctx = canvas.getContext("2d")

let characterKike = new Image()
    characterKike.src = "img/kike.png"

let characterDonaBlue = new Image()
    characterDonaBlue.src ="img/donaazul.png"

let insulineImage = new Image()
    insulineImage.src ="img/jeringa.png"

const carbs = []
const shoots = []

let kike = new Kike (30, 300, ctx, characterKike)

function empezarJuego(){

    
    let btnStart = document.getElementById("start")
    btnStart.style.display = "none"
    btnStart.classList.add("noShow")
    canvas.classList.remove("noShow")

    movements()

    updateScenario()
}

    
function updateScenario(){

        ctx.clearRect(0, 0, 700, 400)
    if (carbs.length < 6){
        creatCarbs()
    }

    kike.drawYourself()


    carbs.forEach((dona, index) => {
          dona.x -= 2
          dona.drawYourself()

          if (kike.x + 100 >= dona.x){
             carbs.splice(index, 1) 
             kike.receiveDamage(5)
                if (kike.health <= 0){
               alert("HIGH SUGAR LEVEL, GAME OVER!")     
                }
          }

    })
    shoots.forEach((shoot, indexShoot) => {
        shoot.x += 2 
        shoot.drawYourself()

    carbs.forEach((carb, indexCarb) => {
        if(carb.x === shoot.x || carb.x === shoot.x + 1 || carb.x === carb.x -1){
            carbs.splice(indexCarb, 1)
            shoots.splice(indexShoot, 1)
            kike.total ++ 
        }
    })

})
   
    showData(kike.health, kike.total)
    requestAnimationFrame(updateScenario)
}

function showData(health, total){
    ctx.font = "40px Comic"
    ctx.fillText(`${health} ${total}`, 450, 40)
}

function creatCarbs(){
    
 const random = Math.floor(Math.random() * 400)
    if (random % 50 === 0){
        let donaBlue = new Dona (650, 300, ctx, characterDonaBlue)
    carbs.push(donaBlue)
    }
}

function movements(){

    document.addEventListener("keydown", (event) => {
        switch(event.key) {
            case "ArrowRight":
                kike.moveToTheFront()
                kike.img = characterKike
                break;
            case "ArrowUp":
                kike.jump()
                kike.img = characterKike
                break;
            case "ArrowDown":
                kike.getDown()
                break;
            case " ": 
                if (shoots.length < 50) {
                    const insuline = kike.shoot(kike.x + 60, kike.y + 35, insulineImage)
                shoots.push(insuline)
                }
                break;   
        } 
        })

}