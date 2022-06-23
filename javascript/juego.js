const canvas = document.getElementById("scenario")
const ctx = canvas.getContext("2d")

let characterKike = new Image()
    characterKike.src = "../img/kike.png"

let characterDonaPink = new Image()
    characterDonaPink.src ="../img/donas.png"

let characterDonaBlue = new Image()
characterDonaBlue.src ="../img/donaazul.png"

const carbs = []
let kike = new Kike (10, 300, ctx, characterKike)

function empezarJuego(){
    
    let btnStart = document.getElementById("start")
    btnStart.style.display = "none"
    btnStart.classList.add("noShow")
    canvas.classList.remove("noShow")

    updateScenario()
}

    function updateScenario(){
        ctx.clearRect(0, 0, 700, 400)
    console.log("actualiza")
    if (carbs.length < 3){
        creatCarbs()
    }

    kike.drawYourself()


    carbs.forEach(dona => {
          dona.x -= 2
          dona.drawYourself ()
    })
    
   
    showData(kike.health)
    requestAnimationFrame(updateScenario)
}

function showData(health, x, y){
    ctx.font = "40px Arial"
    ctx.fillText(health, 450, 40)
}

function creatCarbs(){
    
 const random = Math.floor(Math.random() * 400)
    if (random % 50 === 0){ 
       // let donaPink = new Dona (220, 200, ctx, characterDonaPink)
        let donaBlue = new Dona (650, 300, ctx, characterDonaBlue)
    carbs.push(donaBlue)
        console.log(carbs)
    }
}