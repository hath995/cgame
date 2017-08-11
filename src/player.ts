import {Token} from './token';
import {Card} from './card';

export class Player extends Token {
    name: string;
    icon: string;
    //deck: Deck;
    hand: Card[];
    money: number;
    worth: number;

    constructor() {
        super()
    }
}
