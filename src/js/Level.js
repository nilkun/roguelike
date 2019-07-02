export default class Level {
    constructor(width, height) {
        this.width = Math.floor(width / 18);
        this.height = Math.floor(height / 10);
        this.map = [
            [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, ],
            [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, ],
            [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, ],
            [ 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, ],
            [ 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, ],
            [ 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, ],
            [ 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, ],
            [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, ],
            [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, ],
            [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, ], 
        ];
        this.floor;
        this.wall;

    }
    render(renderer) {
        for(let y = 0; y < this.map.length; y++) {
            for(let x = 0; x < this.map[y].length; x++) {
                // renderer.rect(
                //     x * this.width, 
                //     y * this.height, 
                //     this.width, 
                //     this.height);
                if(this.map[y][x]) {
                    // console.log(this.wall);
                    renderer.drawImage(
                        this.wall, 
                        x * this.width, 
                        y * this.height, 
                        this.width,
                        this.height
                        );
                    // renderer.fill();                    
                    // renderer.beginPath();
                }
                else  {
                    renderer.drawImage(
                        this.floor, 
                        x * this.width, 
                        y * this.height, 
                        this.width,
                        this.height
                        );
                }
                // renderer.stroke();
                                   
                renderer.beginPath();
                // console.log(this.width, this.height, x, y)
            }            
        }
        renderer.stroke();
    }
}