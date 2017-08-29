import {Player} from './player';
import {Monster} from './monster'
export type Colors =  "red" | "green" | "blue" | "yellow" | "neutral";
export type TileKind = "castle" | "tower" | Colors;

const CM: ReadonlyArray<number> = [1, 1.5, 1.8, 2, 2.2];
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
        this.base_value = 100;
        this.value = 100;
        this.level = 1
        this.owner = null;
    }

    levelUp() {
        this.level++;
        this.value = this.valueCalc()
    }

    valueCalc() {
        return Math.floor(this.base_value * Math.pow(2, this.level - 1) * this.owner.);
    }
}

