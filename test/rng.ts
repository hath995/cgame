
/// <reference path="../typings/index.d.ts" />
import {SimpleRNG, RNG, Rand} from '../src/rng'
import {assert} from 'chai';

describe('SimpleRNG', async () => {

  it('should provide a random int', () => {
    let rng = new SimpleRNG(123);
    let [num, nextRng] = rng.nextInt16();
    assert.isNumber(num);
    assert.instanceOf(nextRng, SimpleRNG);
  });

  it('unit', () => {
    let liftedConstant = SimpleRNG.unit(5);
    let rng = new SimpleRNG(123);
    let [c, nextRng] = liftedConstant(rng);
    assert.equal(c, 5);
    assert.instanceOf(nextRng, SimpleRNG);
  })

  it('flatMap', () => {
    let charGen: Rand<string> = SimpleRNG.flatMap(SimpleRNG.int, i => SimpleRNG.unit(String.fromCharCode(i % 256)));
    assert.typeOf(charGen(new SimpleRNG(345))[0], "string");
    assert.instanceOf(charGen(new SimpleRNG(345))[1], SimpleRNG);
  });

  it('should map function over output', () => {
    let charGen: Rand<string> = SimpleRNG.map(SimpleRNG.int, i => String.fromCharCode(i % 256));
    assert.typeOf(charGen(new SimpleRNG(345))[0], "string");
    assert.instanceOf(charGen(new SimpleRNG(345))[1], SimpleRNG);
  });

  it('should map functions of two arguments over two random generators to make a new generator', () => {
    let charPairGen  = SimpleRNG.map2(SimpleRNG.char, SimpleRNG.char, (a,b) => a + b);
    let sample = charPairGen(new SimpleRNG(345))
    assert.typeOf(sample[0], "string");
    assert.equal(sample[0].length, 2);
    assert.instanceOf(sample[1], SimpleRNG);
  });
  
  it('should create a new generator of pairs', () => {
    let charPairGen = SimpleRNG.both(SimpleRNG.char, SimpleRNG.char);
    let sample = charPairGen(new SimpleRNG(345))
    assert.isTrue(Array.isArray(sample[0]));
    assert.equal(sample[0].length, 2);
    assert.instanceOf(sample[1], SimpleRNG);
  })

  it('should create an arbitraryily long random sequence generator', () => {
    let sequenceGen = SimpleRNG.both([SimpleRNG.boolean); })
});

