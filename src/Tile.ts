import {Player} from './player';
import {Monster} from './monster'
type TileKinds = "castle" | "tower" | "red" | "green" | "blue" | "yellow";

export class Tile {
    monster: Monster | null;
    players: Player[];
    //Type
    //Zone
    connections: number[];
    kind: TileKinds;
    value: number;
    level: number;
    owner: Player | null;
    constructor(public readonly id: number) {}
}
