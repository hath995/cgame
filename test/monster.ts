/// <reference path="../typings/index.d.ts" />
import {Monster} from '../src/monster';
import {MonsterCard, ArmorCard} from '../src/card';
import {Tile} from '../src/tile'
import {expect} from 'chai';

describe('Monster Battles', function() {

    it("Should do damage to another monster", () => {
        var tile = new Tile(1, "blue");
        var minotaurCard = new MonsterCard("Minotaur", 70, "red", 40, 40);
        var rockwallCard = new MonsterCard("Rock Wall", 30, "green", 60, 0)
        var minotaur = new Monster(1, minotaurCard);
        var rockwall = new Monster(2, rockwallCard);
        minotaur.attack(rockwall, tile);
        expect(rockwall.hp).to.equal(20);

    });


    it("Should not be able to use restricted item on monster", () => {
        var pyroCard = new MonsterCard("Pyro drake", 80, "red", 40, 30, ["armor"], ["blue"], []);
        var leatherArmorCard = new ArmorCard("Leather Armor", 0, 20, 0);
        var pyro = new Monster(1, pyroCard);
        expect(pyro.canUseItem(leatherArmorCard)).to.be.false;
    });
});
