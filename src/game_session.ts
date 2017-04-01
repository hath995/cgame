import {SimpleRNG} from './rng'; 
import {Player} from './player';
import {GameMap} from './game_map';

export class GameSession {
    random_seed: SimpleRNG;
    turn: number = 1;
    round: number = 1;
    players: Player[] = [];
    map: GameMap;
    constructor(public readonly session_id: number = 1, random_seed: number = 4) {
        this.random_seed = new SimpleRNG(random_seed);
    }
}
