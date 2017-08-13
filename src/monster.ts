import {Token} from './token';
import {Colors, Tile} from './Tile';
import {MonsterCard, ItemCard} from './card';

export class Monster extends Token {
    public hp: number;
    public mhp: number;
    public str: number;
    public readonly name: string;
    
    constructor(public readonly id: number, public readonly card: MonsterCard) {
        super()
        this.hp = card.mhp;
        this.mhp = card.mhp
        this.str = card.str;
    }
    attack(enemy: Monster, tile: Tile, item?: ItemCard, enemyItem?: ItemCard) {
        enemy.hp = Math.max(enemy.hp - this.str, 0);
    }

    canUseItem(item: ItemCard): boolean {
        return this.card.itemRestrictions.indexOf(item.kind) === -1;
    }
}
