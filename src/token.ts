import {GameMap} from './game_map';

export class Token {
    current_tile: number;
    previous: number;
    constructor(){}
    move(map: GameMap, x: number) {}
    teleport(map: GameMap, x: number){}
}
