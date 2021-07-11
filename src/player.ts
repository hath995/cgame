import {Token} from './token';
import {Card} from './card';
export type Colors =  "red" | "green" | "blue" | "yellow" | "neutral";


type Chain  = {
    [color: string]: number;
}

export class Player extends Token {
    //deck: Deck;
    hand: Card[];
    worth: number;
    chains: Chain[];

    constructor(public readonly name: string, public readonly icon: string, public money: number) {
        super()
        this.worth = money;
        this.hand = [];
    }
}
