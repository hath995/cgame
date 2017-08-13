
/// <reference path="../typings/index.d.ts" />
import {MonsterCard} from '../src/card';
import {Player} from '../src/player';
import {Tile} from '../src/tile'
import {expect} from 'chai';

describe('Card methods', function() {

    it("Should not be able to play card with insufficent money", () => {
        var tile = new Tile(1, "red");
        var player = new Player("foo", "dude", 50); 
        var pyroCard = new MonsterCard("Pyro drake", 80, "red", 40, 30, ["armor"], ["blue"], []);
        expect(pyroCard.canPlayCard(player, tile)).to.be.false;

    });

    it("Should be able to play card with sufficent money", () => {
        var tile = new Tile(1, "red");
        var player = new Player("foo", "dude", 80); 
        var pyroCard = new MonsterCard("Pyro drake", 80, "red", 40, 30, ["armor"], ["blue"], []);
        expect(pyroCard.canPlayCard(player, tile)).to.be.true;
    });


    it("Should not be able to play card on restricted land", () => {
        var tile = new Tile(1, "blue");
        var player = new Player("foo", "dude", 80); 
        var pyroCard = new MonsterCard("Pyro drake", 80, "red", 40, 30, ["armor"], ["blue"], []);
        expect(pyroCard.canPlayCard(player, tile)).to.be.false;
    });
});
