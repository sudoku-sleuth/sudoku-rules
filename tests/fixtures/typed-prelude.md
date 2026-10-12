# Typed shared prelude

Every signature and derived definition below passes the formula parser and type checker. Inputs describe a supplied board/answer; primitives are the small typed operations whose implementations belong to later evaluation. No rule kind or library host is built in. This is the executable vocabulary for slice 1, not a replacement publication of an existing rule meaning.

```openrules
input C: set<cell>;
input 𝔄: path<digit>;
input rows: position;
input cols: position;
input N: position;
input ℤ: set<position>;
input Regions: set<set<cell>>;
input M: set<cell>;
input factor: number;
input offset: number;
input loop: boolean;
primitive face(c: cell): digit;
primitive toValue(n: number): value;
primitive row(c: cell): position;
primitive col(c: cell): position;
primitive cell(r: position, k: position): cell;
primitive present<T>(x: optional<T>): boolean;
primitive unwrap<T>(x: optional<T>): T requires (present(x));
term D(c: cell): digit = face(c);
term V(c: cell): value = if c ∈ M then toValue(factor * D(c) + offset) else toValue(D(c));
term rem(x: number, m: number): position requires (⌊x⌋ = x ∧ ⌊m⌋ = m ∧ m > 0) = x mod m;
term odd(x: number): boolean requires (⌊x⌋ = x) = rem(x, 2) = 1;
term high(x: number): boolean = x > 5;
term in(c: cell, R: set<cell>): boolean = c ∈ R;
term sameRegion(a: cell, b: cell): boolean = ∃R ∈ Regions: a ∈ R ∧ b ∈ R;
term orth(a: cell, b: cell): boolean = |row(a) - row(b)| + |col(a) - col(b)| = 1;
term touch(a: cell, b: cell): boolean = |row(a) - row(b)| = 1 ∧ |col(a) - col(b)| = 1;
term king(a: cell, b: cell): boolean = orth(a,b) ∨ touch(a,b);
term knight(a: cell, b: cell): boolean = (|row(a) - row(b)| = 1 ∧ |col(a) - col(b)| = 2) ∨ (|row(a) - row(b)| = 2 ∧ |col(a) - col(b)| = 1);
term bishop(a: cell, b: cell): boolean = a != b ∧ |row(a) - row(b)| = |col(a) - col(b)|;
term aboveCell(a: cell, b: cell): boolean = col(a) = col(b) ∧ row(a) + 1 = row(b);
term pos(L: path<cell>, i: position): boolean = 0 <= i ∧ i < |L|;
term at(L: path<cell>, i: position): cell requires (pos(L,i)) = L[i];
term mirror(L: path<cell>, i: position): position requires (pos(L,i)) = |L| - 1 - i;
term next(L: path<cell>, i: position, j: position): boolean = pos(L,i) ∧ pos(L,j) ∧ (j = i + 1 ∨ (loop ∧ |L| > 2 ∧ i = |L| - 1 ∧ j = 0));
term consecutive(L: path<cell>, i: position, j: position): boolean = pos(L,i) ∧ pos(L,j) ∧ (|i-j| = 1 ∨ (loop ∧ |L| > 2 ∧ {i,j} = {0,|L|-1}));
term start(L: path<cell>, k: position, s: position): boolean = (not loop ∧ 0 <= s ∧ s <= |L|-k) ∨ (loop ∧ |L| >= k ∧ 0 <= s ∧ s < |L|);
term distinct(S: set<cell>): boolean = ∀a,b ∈ S: a != b implies D(a) != D(b);
term valueSum(S: set<cell>): number = Σ_{c ∈ S} V(c);
term sum_D(S: set<cell>): number = Σ_{c ∈ S} D(c);
term product_D(S: set<cell>): number = Π_{c ∈ S} D(c);
term count<T>(S: set<T>, P: fn(T)->boolean): number = |{x ∈ S: P(x)}|;
term faceDigits(S: set<cell>): set<digit> = {d ∈ 𝔄: ∃c ∈ S: D(c) = d};
```

Arithmetic uses reduced fractions of arbitrary-size integers. Decimal literals are exact; division is rational division, and a rule requiring an integer quotient must declare that condition. `mod` requires integer operands and a positive modulus. This prelude deliberately does not supply terms by guessing prose such as `magicLines`; source audit reports those missing definitions.
