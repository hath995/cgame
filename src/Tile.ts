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
    readonly base_value: number;
    level: number;
    readonly region: number;
    owner: Player | null;
    constructor(public readonly id: number, kind: Colors, region: number = 1, base_value: number = 100) {
        this.monster = null;
        this.players = [];
        this.connections = [];
        this.kind = kind;
        this.base_value = base_value;
        this.value = base_value;
        this.level = 1
        this.owner = null;
        this.region = region;
    }

    levelUp() {
        this.level++;
        this.value = this.valueCalc()
    }

    valueCalc() {
        if(!this.owner) {
            return this.base_value;
        }
        let chainCount: number = this.owner.chains[this.region][this.kind];
        let multiplier = CM[chainCount - 1 < 5 ? chainCount - 1 : 5];
        return Math.floor(this.base_value * Math.pow(2, this.level - 1) * multiplier);
    }
}

