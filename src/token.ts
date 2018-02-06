import {GameMap} from './game_map';

export class Token {
    current_tile: number;
    previous: number[];
    constructor(){
        this.current_tile = 0;
        this.previous = [];
    }
    move(map: GameMap, x: number) {
        this.previous.push(x);
        this.current_tile = x;
    }
    teleport(map: GameMap, x: number){
        this.current_tile = x;
        this.previous = [];
    }
}
