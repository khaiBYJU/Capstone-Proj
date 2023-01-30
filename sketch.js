var rockImg, rock
var rocketImage, rocket
var spaceImage, space

var gameState = "PLAY"


function preload(){
    rockImage = loadImage("rock.png");
    rocketImage = loadImage("rocket.png");
    spaceImage = loadImage("space.jpg");
}

function setup() {
    createCanvas(500, 470);
    space = createSprite(300, 300, 50, 50)
    space.addImage("space", spaceImage)

    rocket = createSprite(280, 400, 50, 50)
    rocket.addImage("rocket", rocketImage)
    rocket.scale = 0.2;
    
    rockGroup = new Group()
}

function draw() {
    background(0)
    if (gameState === "PLAY") {

        if (keyDown("left_arrow")){
            rocket.x = rocket.x - 8
        }
        if (keyDown("right_arrow")){
            rocket.x = rocket.x + 8
        }

        if (space.y > 290) {
            space.y = 200
        }

        rockSpawn()

        if (rockGroup.isTouching(rocket)) {
            rocket.velocityY = 0
            rocket.destroy()
            gameState = "END"
        }


        drawSprites()
    }
    if (gameState === "END") {
        stroke("red")
        fill("red")
        textSize(50)
        text("GAME OVER", 110, 200)
    }

}


function rockSpawn() {
    if (frameCount % 240 === 0) {
        var rock = createSprite(200, 200, 50, 50)
        
        rock.x = Math.round(random(100, 300))
        rock.velocityY = 1
        rock.velocityY = rock.velocityY + 6


        rock.addImage("rock", rockImage)
        rock.scale = 0.2

        rock.depth = rocket.depth
        rock.depth +=2

        rock.lifetime = 300

        rockGroup.add(rock)
        rock.debug = true
        rocket.debug = true

    }
}