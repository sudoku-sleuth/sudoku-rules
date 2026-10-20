---
document: prelude
name: Shared predicates
url: https://rules.sudoku-sleuth.com/predicates.md
feature_predicates: [visible]
---

# Shared predicates

These definitions give each rule its precise meaning. C is the finite board, 𝔄 its ordered set of symbols, and N the number of cells. A case file names cells with r1c1 notation; the formulas use zero-based row, column and line positions.

L and S are local names for a supplied ordered list and a cell group. A page declares its parameters explicitly; shortened names such as n must be locally bound. Supplied groups and paths are fixed by the setter. The loop parameter includes the last-to-first step. present(x) means that parameter x was supplied. Omitted booleans are false unless the rule's parameter table gives another default.

The quantifiers ∀x ∈ S and ∃x ∈ S mean every member and at least one member.

The symbols →, ∧, ∨, ¬ and ↔ mean implies, and, or, not and exactly when.

Absolute value for a number and size for a group both use |x|. Σ adds and Π multiplies.

The interval [a,b) includes a and excludes b. The collection 𝒫(C) contains all subsets of the board.

D is the face digit. V is the effective value constrained by a value assignment rule: value-modifier binds an affine modifier set, while liar-cells binds cells with independently chosen real values. Without a value assignment V=D. A finished answer supplies the shared shading set H and the numeric face/value channels. Modifier cells, electron cells, hidden cages, constructed regions and letter assignments are bound by their owning rule formulas.

## Typed vocabulary

Each input and term declares its argument and result types. Ordered lists retain repeated positions; sets do not. Paths are connected ordered lists. The board alphabet contains whole-number face digits; effective values may be exact fractions. Formula variables have explicit types or a supplied collection. The player's entries E and the answer's digit answer(c) = D(c) belong to the play-state setup features described under Play state; rule pages never use E.

```openrules
input C: set<cell>;
input 𝔄: list<digit>;
input rows: position;
input cols: position;
input ℤ: set<position>;
input Regions: set<set<cell>>;
input H: set<cell>;
input ValuedRuleMeanings: list<boolean>;
type PairRelation = record{op:enum{difference,"at-least",ratio,sum,less,multiple,shift},value:optional<number>};
type ClassSystem = enum{parity,mod3,entropy};
type Move = enum{knight,king,orthogonal,bishop};
primitive clueHolds(q:clause):boolean;
primitive face(c:cell):digit;
primitive effective(c:cell):value;
primitive toValue(x:number):value;
primitive row(c:cell):position;
primitive col(c:cell):position;
primitive cellIndex(c:cell):position;
primitive boardCell(r:position,k:position):cell;
primitive present<T>(x:optional<T>):boolean;
primitive unwrap<T>(x:optional<T>):T requires (present(x));
primitive minimumDigit(S:collection<digit>):digit requires (|S|>0);
primitive maximumDigit(S:collection<digit>):digit requires (|S|>0);
primitive minimumValue(S:collection<value>):value requires (|S|>0);
primitive maximumValue(S:collection<value>):value requires (|S|>0);
primitive alphabetPosition(d:digit):position;
primitive letterCount(expressions:collection<expression>):position;
primitive defined(e:expression,letters:list<position>):boolean;
primitive eval(e:expression,letters:list<position>):position requires (defined(e,letters));
term D(c:cell):digit = face(c);
term V(c:cell):value = effective(c);
term rem(x:number,m:number):position requires (⌊x⌋=x ∧ ⌊m⌋=m ∧ m>0) = x mod m;
term odd(x:number):boolean requires (⌊x⌋=x) = rem(x,2)=1;
term high(x:number):boolean = x>5;
term prime(x:number):boolean = ⌊x⌋=x ∧ x>1 ∧ ¬(∃a,b ∈ ℤ: a>1 ∧ b>1 ∧ a*b=x);
term composite(x:number):boolean = ⌊x⌋=x ∧ x>1 ∧ (∃a,b ∈ ℤ: a>1 ∧ b>1 ∧ a*b=x);
term minimumPosition(a:position,b:position):position = if a<b then a else b;
term maximumPosition(a:position,b:position):position = if a>b then a else b;
term minimumPair(a:number,b:number):number = if a<b then a else b;
term maximumPair(a:number,b:number):number = if a>b then a else b;
term classParity(d:digit):position = rem(d,2);
term classMod3(d:digit):position = rem(d,3);
term classEntropy(d:digit):position requires (|𝔄|>0 ∧ |𝔄| mod 3=0) = ⌊(3*alphabetPosition(d))/|𝔄|⌋;
term classIds(K:ClassSystem):set<position> = if K="parity" then [0,2) else [0,3);
term digitClass(K:ClassSystem,d:digit):position requires (K!="entropy" ∨ (|𝔄|>0 ∧ |𝔄| mod 3=0)) = if K="parity" then classParity(d) else if K="mod3" then classMod3(d) else if |𝔄|>0 ∧ |𝔄| mod 3=0 then classEntropy(d) else 0;
term in(c:cell,R:set<cell>):boolean = c∈R;
term sameRegion(a:cell,b:cell):boolean = ∃R ∈ Regions: a∈R ∧ b∈R;
term orth(a:cell,b:cell):boolean = |row(a)-row(b)|+|col(a)-col(b)|=1;
term touch(a:cell,b:cell):boolean = |row(a)-row(b)|=1 ∧ |col(a)-col(b)|=1;
term king(a:cell,b:cell):boolean = orth(a,b) ∨ touch(a,b);
term knight(a:cell,b:cell):boolean = (|row(a)-row(b)|=1 ∧ |col(a)-col(b)|=2) ∨ (|row(a)-row(b)|=2 ∧ |col(a)-col(b)|=1);
term bishop(a:cell,b:cell):boolean = a!=b ∧ |row(a)-row(b)|=|col(a)-col(b)|;
term moveRelation(m:Move,a:cell,b:cell):boolean = (m="knight" ∧ knight(a,b)) ∨ (m="king" ∧ king(a,b)) ∨ (m="orthogonal" ∧ orth(a,b)) ∨ (m="bishop" ∧ bishop(a,b));
term aboveCell(a:cell,b:cell):boolean = col(a)=col(b) ∧ row(a)+1=row(b);
term turn(c:cell):cell = boardCell(rows-1-row(c),cols-1-col(c));
term diagonal(direction:enum{main,anti}):set<cell> = {c∈C: if direction="main" then row(c)=col(c) else row(c)+col(c)=cols-1};
term window2(r:position,k:position):set<cell> = {boardCell(r,k),boardCell(r,k+1),boardCell(r+1,k),boardCell(r+1,k+1)};
term pos(L:list<cell>,i:position):boolean = 0<=i ∧ i<|L|;
term at(L:list<cell>,i:position):cell requires (pos(L,i)) = L[i];
term mirror(L:list<cell>,i:position):position requires (pos(L,i)) = |L|-1-i;
term next(L:list<cell>,i:position,j:position,closed:boolean):boolean = pos(L,i) ∧ pos(L,j) ∧ (j=i+1 ∨ (closed ∧ |L|>2 ∧ i=|L|-1 ∧ j=0));
term consecutive(L:list<cell>,i:position,j:position,closed:boolean):boolean = pos(L,i) ∧ pos(L,j) ∧ (|i-j|=1 ∨ (closed ∧ |L|>2 ∧ {i,j}={0,|L|-1}));
term start(L:list<cell>,k:position,s:position,closed:boolean):boolean = (¬closed ∧ 0<=s ∧ s<=|L|-k) ∨ (closed ∧ |L|>=k ∧ 0<=s ∧ s<|L|);
term window(L:list<cell>,k:position,s:position,closed:boolean):list<cell> requires (k>=0 ∧ start(L,k,s,closed) ∧ (closed → |L|>0)) = ⟨if closed then L[rem(s+t,|L|)] else L[s+t] : t∈[0,k)⟩;
term first(L:list<cell>,k:position):list<cell> requires (0<=k ∧ k<=|L|) = ⟨L[t] : t∈[0,k)⟩;
term betweenPositions(L:list<cell>,i:position,j:position):list<cell> requires (pos(L,i) ∧ pos(L,j)) = ⟨L[t] : t∈[0,|L|), minimumPosition(i,j)<t ∧ t<maximumPosition(i,j)⟩;
term firstOccurrence(L:list<cell>,d:digit,i:position):boolean = pos(L,i) ∧ D(L[i])=d ∧ ∀j∈[0,i): D(L[j])!=d;
term distinct_f<T>(S:set<T>,f:fn(T)->number):boolean = ∀a,b∈S: a!=b → f(a)!=f(b);
term distinctAt<T>(L:list<T>,f:fn(T)->number):boolean = ∀i,j∈[0,|L|): i!=j → f(L[i])!=f(L[j]);
term distinct_D(S:set<cell>):boolean = distinct_f(S,λc:cell: D(c));
term distinct_V(S:set<cell>):boolean = distinct_f(S,λc:cell: V(c));
term valueSum(S:collection<cell>):number = Σ_{c∈S} V(c);
term sum_D(S:collection<cell>):position = Σ_{c∈S} D(c);
term product_D(S:collection<cell>):position = Π_{c∈S} D(c);
term countWhere<T>(S:collection<T>,P:fn(T)->boolean):position = count x∈S: P(x);
term faceDigits(S:collection<cell>):set<digit> = {d∈𝔄: ∃c∈S: D(c)=d};
term multiplicity(L:list<digit>,d:digit):position = countWhere(L,λx:digit: x=d);
term min_D(S:collection<cell>):digit requires (|S|>0) = minimumDigit({D(c):c∈S});
term max_D(S:collection<cell>):digit requires (|S|>0) = maximumDigit({D(c):c∈S});
term min_V(S:collection<cell>):value requires (|S|>0) = minimumValue({V(c):c∈S});
term max_V(S:collection<cell>):value requires (|S|>0) = maximumValue({V(c):c∈S});
term pairRelation(r:PairRelation,a:number,b:number):boolean = (r.op="difference" ∧ present(r.value) ∧ |a-b|=unwrap(r.value)) ∨ (r.op="at-least" ∧ present(r.value) ∧ |a-b|>=unwrap(r.value)) ∨ (r.op="ratio" ∧ present(r.value) ∧ (a*unwrap(r.value)=b ∨ b*unwrap(r.value)=a)) ∨ (r.op="sum" ∧ present(r.value) ∧ a+b=unwrap(r.value)) ∨ (r.op="less" ∧ a<b) ∨ (r.op="multiple" ∧ ((a=0 ∧ b=0) ∨ (minimumPair(a,b)!=0 ∧ ∃q∈ℤ: maximumPair(a,b)=q*minimumPair(a,b)))) ∨ (r.op="shift" ∧ a!=5 ∧ b!=5 ∧ ⌊a⌋=a ∧ ⌊b⌋=b ∧ ¬((odd(a)↔odd(b))↔(high(a)↔high(b))));
term connected(S:set<cell>):boolean = |S|>0 ∧ ∀a,b∈S: ∃route:list<cell>: 0<|route| ∧ |route|<=|C| ∧ route[0]=a ∧ route[|route|-1]=b ∧ (∀c∈route:c∈S) ∧ (∀t∈[0,|route|-1):orth(route[t],route[t+1]));
term partition(P:set<set<cell>>,board:set<cell>):boolean = (∀R∈P: |R|>0 ∧ R⊆board) ∧ ∀c∈board: ∃R∈P: c∈R ∧ ∀T∈P: (c∈T ↔ T=R);
term samePartition(P:set<set<cell>>,a:cell,b:cell):boolean = ∃R∈P: a∈R ∧ b∈R;
term shaded(c:cell):boolean = c∈H;
term uniform(S:set<cell>):boolean = |S|>0 ∧ ((∀c∈S:shaded(c)) ∨ (∀c∈S:¬shaded(c)));
term excludes(S:set<cell>,Q:list<digit>):boolean = ∀d∈Q: ∀c∈S: D(c)!=d;
term allCells(groups:list<set<cell>>):set<cell> = {c∈C: ∃G∈groups: c∈G};
term magicLines(P:list<cell>):set<set<cell>> requires (|P|=9) = {{P[0],P[1],P[2]},{P[3],P[4],P[5]},{P[6],P[7],P[8]},{P[0],P[3],P[6]},{P[1],P[4],P[7]},{P[2],P[5],P[8]},{P[0],P[4],P[8]},{P[2],P[4],P[6]}};
term rowHouse(r:position):set<cell> = {c∈C:row(c)=r};
term columnHouse(k:position):set<cell> = {c∈C:col(c)=k};
term boxHouse(r:position,k:position):set<cell> = {c∈C:⌊row(c)/3⌋=r ∧ ⌊col(c)/3⌋=k};
term standardHouses():set<set<cell>> = {rowHouse(r):r∈[0,9)} ∪ {columnHouse(k):k∈[0,9)} ∪ {boxHouse(⌊i/3⌋,rem(i,3)):i∈[0,9)};
term mainRay(c:cell):list<cell> = ⟨boardCell(row(c)+t,col(c)+t):t∈[0,minimumPosition(rows-row(c),cols-col(c)))⟩;
term antiRay(c:cell):list<cell> = ⟨boardCell(row(c)+t,col(c)-t):t∈[0,minimumPosition(rows-row(c),col(c)+1))⟩;
term boardDiagonals():set<list<cell>> = {mainRay(c):c∈{d∈C:row(d)=0 ∨ col(d)=0}} ∪ {antiRay(c):c∈{d∈C:row(d)=0 ∨ col(d)=cols-1}};
term countRun(L:list<cell>):position = Σ_{i∈{t∈[0,|L|): ∃j∈[0,|L|): |t-j|=1 ∧ |D(L[t])-D(L[j])|=1}} D(L[i]);
# Givens: the digit a case gives a cell, if any.
primitive givenDigit(c:cell):optional<digit>;
term given(c:cell):boolean = present(givenDigit(c));
term givenValue(c:cell):digit requires (given(c)) = unwrap(givenDigit(c));
# Play state. Declarations marked play are the player's side; rule pages cannot name them.
term answer(c:cell):digit = D(c);
play input answered: boolean;
play primitive known(c:cell):boolean;
play primitive entry(c:cell):optional<digit>;
play primitive visible(c:cell):boolean;
play term placed(c:cell):boolean = present(entry(c));
play term entered(c:cell):digit requires (placed(c)) = unwrap(entry(c));
play term correct(c:cell):boolean = placed(c) ∧ (given(c) → entered(c)=givenValue(c)) ∧ (answered → known(c) ∧ entered(c)=answer(c));
```

## Inputs and primitive operations

C contains every board cell. rows and cols give its dimensions; row, col and cellIndex are zero-based. boardCell(r,k) denotes that coordinate; the surrounding formula must keep it inside the board. Regions is the board's primary partition. The ordered alphabet 𝔄 contains the whole-number face digits; alphabetPosition(d) is d's zero-based position in it. ℤ denotes all whole numbers, including negative numbers. `position` means an integer used as a position, not an assertion that it is on the board.

face reads the face digit; effective reads the effective value. toValue preserves a number exactly while identifying it as an effective value. The value-modifier formula existentially binds M, checks its placement and constrains every effective value using its factor and offset parameters. M is not a prelude input. The liar-cells formula instead requires V to differ from D exactly on its chosen set, with permitted values and separate digit/value distinctness. Without a value assignment V=D. H is the shared shading answer. ValuedRuleMeanings contains the instantiated Boolean meanings of every rule reading the same V channel.

present reports whether an optional field was supplied; unwrap reads it only after present has been proved. minimumDigit/maximumDigit and minimumValue/maximumValue return the least/greatest item of a nonempty collection. Their arguments have to be nonempty; they do not supply invented defaults.

A `clause` is an owned clue record with a nonempty `id`, a `rule` reference and named `args`. clueHolds evaluates its complete instantiated rule under the same answer and shared channels as the owning declaration. Its private witnesses retain their original quantifiers. It does not assert the clue separately.

An `expression` is an authored arithmetic tree containing whole numbers, letters, addition, subtraction, multiplication, division or powers. Take the distinct letters across the supplied expressions in lexicographic order; letterCount counts them, and the list passed to defined and eval gives their integer answers in that order. defined is true precisely when every letter has an answer and every subexpression is defined. eval returns the exact integer result: division requires a nonzero divisor and an integer quotient; a power requires a nonnegative integer exponent. Undefined subexpressions never return a guessed value. These operations read the arithmetic tree, rather than defining a new Sudoku rule.

A `collection<T>` accepts a set, list or path of T. Aggregates over lists retain repeated positions; mapped sets remove duplicate results. Ordered comprehensions traverse intervals in increasing order or traverse a supplied list in its given order; a trailing condition filters that order. Sets have no implied order. Empty sums are zero and empty products are one. distinct_f, distinct_D and distinct_V compare members of a cell set. distinctAt compares different positions of a list or path, even when those positions name the same cell.

The connected formula chooses a route of at most |C| cells; revisiting cells is unnecessary for reachability on a finite board. partition covers every board cell exactly once. boardDiagonals constructs maximal straight bishop rays from top/side boundaries. magicLines lists all eight rows, columns and diagonals of a nine-cell square in reading order.

Shift relations compare integer values; their parity is the normalised remainder modulo 2.

## Play state

Some setup features describe what a player sees, not which grids solve the puzzle. They are stated over the player's entries beside the answer.

E is a partial function from cells to symbols: E(c), written entered(c) in formulas, is the symbol the player typed in c, or undefined when the cell is empty. A given is not an entry; a symbol typed over a given is. Pencil marks and colours are not entries. placed(c) holds when E(c) is defined. given(c) holds when the case gives c a digit g(c), written givenValue(c) in formulas. correct(c) holds when c is placed, holds g(c) if it is a given, and, when answered, holds the answer's digit.

answered is true when the host holds a reference answer, and known(c) when that answer covers cell c. With an answer, a symbol counts only if it is the answer's, and no symbol counts in a cell whose answer is unknown. Without an answer, every symbol counts.

visible(c) says that c is shown to the player. A setup feature that decides what is shown defines visible(c) in full, as a function of E. A case has at most one such feature; without one, every cell is visible.

Declarations marked play form the play domain. Rule pages and shared terms outside it cannot use them; setup feature pages can use both domains.
