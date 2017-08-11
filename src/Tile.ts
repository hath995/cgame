import {Player} from './player';
import {Monster} from './monster'
export type Colors = "castle" | "tower" | "red" | "green" | "blue" | "yellow" | "neutral";

export class Tile {
    monster: Monster | null;
    players: Player[];
    //Type
    //Zone
    connections: number[];
    color: Colors;
    value: number;
    level: number;
    owner: Player | null;
    constructor(public readonly id: number, color: Colors) {
        this.monster = null;
        this.players = [];
        this.connections = [];
        this.color = color;
        this.value = 100;
        this.level = 1
        this.owner = null;
    }
}
