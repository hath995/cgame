
export interface RNG {
    //nextInt: () => [number, RNG]
    nextInt16(): [number, RNG]
}

//type State<S, A> = (s:S) => [A, S]
export interface State<S, A> {
    (s: S): [A, S];
}

export class States {
    static unit<S, A>(a: A): State<S, A> {
        return (s: S) => [a, s];
    }
}

export type Rand<A> = State<RNG, A>



export class SimpleRNG implements RNG {
    constructor(public readonly seed: number) {
    }

    nextInt16(): [number, RNG] {
        let newSeed = (this.seed * 0x5DEECE66D + 0xB) & 0xFFFFFFFFFFFF
        let nextRNG = new SimpleRNG(newSeed)
        let n = newSeed >>> 16
        return [n, nextRNG];
    }

    static unit<A>(a: A): Rand<A> {
        return (rng: RNG) => [a, rng]
    }

    static flatMap<A, B>(f: Rand<A>, g: (x:A) => Rand<B>): Rand<B> {
        return (rng) => {
            let [a, r] = f(rng);
            return g(a)(r);
        }
    }

    static map<A, B>(s: Rand<A>, f: (x:A) => B): Rand<B> {
        return SimpleRNG.flatMap(s, (a: A) => SimpleRNG.unit(f(a)))
    }

    static map2<A, B, C>(ra: Rand<A>, rb: Rand<B>, f: (x:A, y: B) => C): Rand<C> {
        return SimpleRNG.flatMap(ra, a => SimpleRNG.map(rb, b => f(a, b)))
    }

    static both<A, B>(ra: Rand<A>, rb: Rand<B>): Rand<[A,B]> {
        return SimpleRNG.map2(ra, rb, (a:A,b:B): [A,B] => [a,b])
    }
    static int(r: RNG): [number, RNG] {
        return r.nextInt16();
    }
    static float(r: RNG) {
        let [a, rn] = r.nextInt16();
        return [a / Math.pow(2, 16), rn];
    }

    static char(ra: RNG): [string, RNG] {
        let [a, r] = ra.nextInt16();
        return [String.fromCharCode(a % 256), r];
    }

    static sequence<A>(fs: Array<Rand<A>>): Rand<Array<A>> {
        return (r: RNG): [Array<A>, RNG] => {
            if(fs.length == 0) {
                return [[], r];
            }else{
                let [x, ...xs] = fs
                return SimpleRNG.map2(x,
                                      SimpleRNG.sequence(xs),
                                      (a:A,b:Array<A>) => [a].concat(b))(r);
            }
        };
    }
}
function fill<A>(count: number, val: A):Array<A> {
    let results = [];
    for(let i = 0; i < count; i++) {
        results[i] = val;
    }
    return results;
}
let randIntChar = SimpleRNG.both(SimpleRNG.int, SimpleRNG.char);
let test = new SimpleRNG(1234);
let test2 = randIntChar(test);
console.log(randIntChar(test));
console.log(randIntChar(test2[1]));
console.log(SimpleRNG.sequence(fill(10, randIntChar))(test))
