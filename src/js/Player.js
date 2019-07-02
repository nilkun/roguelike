import Vector from "../../../shared/engine/Vector.js"
const UP = 0;
const DOWN = 1;
const LEFT = 2;
const RIGHT = 3;

export default class Player {
    constructor(scale) {
        this.position = new Vector( 3, 3);
        this.scale = scale;
        this.sprite;
    }

    render(renderer) {
        // renderer.clear();
        renderer.drawImage(
            this.sprite, 
            this.position.x * this.scale, 
            this.position.y * this.scale + this.scale/5,
            this.scale,
            this.scale / 1.8);
        // renderer.beginPath();
        // renderer.arc(this.position.x * this.scale + this.scale/2, this.position.y * this.scale + this.scale/2, this.scale / 2, 0 , 2 * Math.PI);
        // renderer.fill();
    }

    move(direction, map) {
        switch(direction) {
            case UP:
                this.position.y--;
                if(map[this.position.y][this.position.x]) this.position.y++;
                break;            
            case DOWN:
                this.position.y++;

                if(map[this.position.y][this.position.x]) this.position.y--;
                break;            
            case LEFT:
                this.position.x--;

                if(map[this.position.y][this.position.x]) this.position.x++;
                break;            
            case RIGHT:
                this.position.x++;
                // console.log(map)
                if(map[this.position.y][this.position.x]) this.position.x--;
                break;
        }
    }
}