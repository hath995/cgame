import {Colors, Tile} from './Tile';
import {Player} from '../src/player';
export type ItemKind = "armor" | "weapon" | "accessory" | "scroll";

export class Card {
    constructor(public readonly name: string, public readonly cost: number) {
    }
}

export class MonsterCard extends Card {
    public readonly mhp: number;
    public readonly str: number;
    public readonly abilities: string[];
    public readonly itemRestrictions: ItemKind[];
    public readonly landRestrictions: Colors[];
    public readonly color: Colors;
    constructor(name: string, cost: number, color: Colors, mhp: number, str: number, itemRestrictions: ItemKind[] = [], landRestrictions: Colors[] = [], abilities: string[] = []) {
        super(name, cost);
        this.mhp = mhp;
        this.str = str;
        this.abilities = abilities;
        this.itemRestrictions = itemRestrictions;
        this.landRestrictions = landRestrictions;
        this.color = color;
    }

    canPlayCard(player: Player, tile: Tile) {
        if(tile.kind === "castle" || tile.kind === "tower") {
            return false;
        }else {
            return player.money >= this.cost && (
                this.landRestrictions.indexOf(tile.kind) === -1);
        }
    }
}

export class ItemCard extends Card {
    constructor(name: string, cost: number, public readonly kind: ItemKind) {
        super(name, cost);
    }
}

export class ArmorCard extends ItemCard {
    constructor(name: string, cost: number, public readonly healthMod: number, public readonly stMod: number) {
        super(name, cost, "armor");
    }
}

export class WeaponCard extends ItemCard {
    constructor(name: string, cost: number, public readonly healthMod: number, public readonly stMod: number) {
        super(name, cost, "weapon");
    }
}

export interface IAbility {
    effect(): void;
    conditions(): boolean;
}
