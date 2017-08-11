import {Token} from './token';
import {Colors, Tile} from './Tile';

export class Monster extends Token {
    hp: number
    constructor(public id: number, public name: string, public color: Colors, public mhp: number, public str: number) {
        super()
        this.hp = mhp;

    }
    attack(enemy: Monster, tile: Tile) {
        enemy.hp -= this.str;
    }
}
