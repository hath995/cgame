/// <reference path="../typings/index.d.ts" />
import {Monster} from '../src/monster';
import {Tile} from '../src/tile'
import {expect} from 'chai';

describe('Monster Battles', function() {

    it("Should do damage to another monster", () => {
        var tile = new Tile(1, "blue");
        var minotaur = new Monster(1, "Minotaur", "red", 40, 40);
        var rockwall = new Monster(2, "Rock Wall", "green", 60, 0);
        minotaur.attack(rockwall, tile);
        expect(rockwall.hp).to.equal(20);

    });
});
