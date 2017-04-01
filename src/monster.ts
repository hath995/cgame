import {Token} from './token';

export class Monster extends Token {
    hp: number
    constructor(public id: number, public name: string, public mhp: number, public str: number) {
        super()
        this.hp = mhp;

    }

}
