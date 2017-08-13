import {Token} from './token';
import {Card} from './card';

export class Player extends Token {
    //deck: Deck;
    hand: Card[];
    worth: number;

    constructor(public readonly name: string, public readonly icon: string, public money: number) {
        super()
        this.worth = money;
        this.hand = [];
    }
}
