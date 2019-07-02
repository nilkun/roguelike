import Viewport from "../../../shared/engine/Viewport.js"
import AssetsManager from "../../../shared/engine/AssetsManager.js"
import Player from "./Player.js"
import Info from "./Messages.js";
import Level from "./Level.js";

const UP = 0;
const DOWN = 1;
const LEFT = 2;
const RIGHT = 3;

const RESOURCES = "resources/";

const screen = document.querySelector(".mainbody").getBoundingClientRect();
// calculate optimal screensize
const ratio = 1.8;
const settingsX = screen.height * ratio > screen.width 
    ? screen.width * .8
    : screen.height * .8 * ratio;
const settingsY = screen.height * ratio > screen.width 
    ? screen.width * .8 / ratio
    : screen.height * .8;

const size = Math.floor(settingsX / 18);
const level = new Level(settingsX, settingsY);

const viewport = new Viewport(settingsX, settingsY);
const renderer = viewport.context;
const player = new Player(size);

const loop = () => {

    viewport.clear();
    // movePlayer();

    level.render(renderer);
    player.render(renderer);
    requestAnimationFrame(loop);
}
const keyInputs = {};

// THIS ONE ALLOWS HOLDING DOWN THE KEYS
const handleInput3 = (e) => {
    keyInputs[e.key] = !keyInputs[e.key];
}

const handleInput = (e) => {

    // ONLY PROBLEM WITH CURRENT SOLUTION IS THAT YOU CANT HOLD DOWN THE KEYS
    keyInputs[e.key] = true;
    if(keyInputs["ArrowUp"]) {
        player.move(UP, level.map);
        info.addMessage("moving up");        
    }
    else if(keyInputs["ArrowDown"]) {
        player.move(DOWN, level.map);
        info.addMessage("moving down");
    }

    if(keyInputs["ArrowLeft"]) {
        player.move(LEFT, level.map);
        info.addMessage("moving left");
    }

    else if(keyInputs["ArrowRight"]) {
        player.move(RIGHT, level.map);
        info.addMessage("moving right"); 
    }

    keyInputs[e.key] = false;
    // switch(e.key) {
    //     case "ArrowUp":
    //         player.move(UP, level.map);
    //         info.addMessage("moving up")
    //         break;        
    //     case "ArrowDown":
    //         player.move(DOWN, level.map);
    //         info.addMessage("moving down")
    //         break;
    //     case "ArrowLeft":
    //         player.move(LEFT, level.map);
    //         info.addMessage("moving left")
    //         break;
    //     case "ArrowRight":
    //         player.move(RIGHT, level.map);
    //         info.addMessage("moving right")
    //         break;
    // }
}
const handleInput2 = (e) => {  
    keyInputs[e.key] = false;
}


const movePlayer = () => {
    if(keyInputs["ArrowUp"]) {
        player.move(UP, level.map);
        info.addMessage("moving up");        
    }
    else if(keyInputs["ArrowDown"]) {
        player.move(DOWN, level.map);
        info.addMessage("moving down");
    }

    if(keyInputs["ArrowLeft"]) {
        player.move(LEFT, level.map);
        info.addMessage("moving left");
    }

    else if(keyInputs["ArrowRight"]) {
        player.move(RIGHT, level.map);
        info.addMessage("moving right"); 
    }
}
renderer.imageSmoothingEnabled = false;
// ANTI-ALIASING OFF

window.addEventListener("keydown", (e) => handleInput(e));
window.addEventListener("keyup", (e) => handleInput2(e));
const info = new Info;
// info.addMessage();
// info.addMessage();
// info.addMessage();
// info.addMessage();
// level.render(renderer);

const assets = new AssetsManager;
assets.addImg(RESOURCES + "hero.png");
assets.addImg(RESOURCES + "floor.png");
assets.addImg(RESOURCES + "wall.png");

const start = () => {
    player.sprite = assets.images[0];
    level.wall = assets.images[2];
    level.floor = assets.images[1];
    loop();
}
assets.initialize(start);




// loop();