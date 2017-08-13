import {Player} from './player';
import {Monster} from './monster'
export type Colors =  "red" | "green" | "blue" | "yellow" | "neutral";
export type TileKind = "castle" | "tower" | Colors;

export class Tile {
    monster: Monster | null;
    players: Player[];
    //Type
    //Zone
    connections: number[];
    kind: TileKind;
    value: number;
    level: number;
    owner: Player | null;
    constructor(public readonly id: number, kind: Colors) {
        this.monster = null;
        this.players = [];
        this.connections = [];
        this.kind = kind;
        this.value = 100;
        this.level = 1
        this.owner = null;
    }
}

