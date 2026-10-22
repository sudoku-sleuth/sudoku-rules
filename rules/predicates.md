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

D is the face digit. V is the effective value constrained by the value-modifier rule, whose formula binds the modified cell set M. Without modifiers V=D. Mapped Values can also constrain V, or a separate named numeric channel. A finished answer supplies the shared shading set H and the numeric face/value channels. Modifier cells, electron cells, hidden cages, constructed regions and letter assignments are bound by their owning rule formulas.

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
type Channel = enum{D,V};
type Orientation = enum{forward,reverse,either};
type Move = enum{knight,king,orthogonal,bishop};
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
term connectedCells(S:set<cell>):boolean = |S|>0 ∧ ∀a,b∈S: ∃route:list<cell>: 0<|route| ∧ |route|<=|C| ∧ route[0]=a ∧ route[|route|-1]=b ∧ (∀c∈route:c∈S) ∧ (∀t∈[0,|route|-1):orth(route[t],route[t+1]));
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
# Shared numeric channels, scope and aggregates.
primitive relationSpec(op:enum{difference,"at-least",ratio,sum,less,multiple,shift},n:number):PairRelation;
term read(c:cell,ch:Channel):number = if ch="D" then toValue(D(c)) else V(c);
term aggregate(S:collection<cell>,ch:Channel,operation:enum{sum,product,count}):number = if operation="count" then |S| else if operation="sum" then Σ_{c∈S} read(c,ch) else Π_{c∈S} read(c,ch);
term repeatPolicy(S:collection<cell>,ch:Channel,repeats:boolean):boolean = repeats ∨ ∀d∈{read(c,ch):c∈S}: countWhere(S,λc:cell: read(c,ch)=d)<=1;
term numericBetween(x:number,a:number,b:number,inclusive:boolean):boolean = if inclusive then minimumPair(a,b)<=x<=maximumPair(a,b) else minimumPair(a,b)<x<maximumPair(a,b);
term relationOnScope(S:set<cell>,pairs:list<list<cell>>,r:PairRelation,ch:Channel):boolean = (∀p∈pairs: |p|=2 ∧ (∀c∈p:c∈S)) ∧ ∀p∈pairs: |p|=2 → pairRelation(r,read(p[0],ch),read(p[1],ch));
term monotonic(L:list<cell>,strict:boolean,direction:Orientation,ch:Channel):boolean = ((direction="forward" ∨ direction="either") ∧ ∀i∈[0,|L|-1): if strict then read(L[i],ch)<read(L[i+1],ch) else read(L[i],ch)<=read(L[i+1],ch)) ∨ ((direction="reverse" ∨ direction="either") ∧ ∀i∈[0,|L|-1): if strict then read(L[i],ch)>read(L[i+1],ch) else read(L[i],ch)>=read(L[i+1],ch));
term consecutiveValues(S:collection<cell>,ch:Channel,repeats:boolean):boolean = |S|>0 ∧ repeatPolicy(S,ch,repeats) ∧ ∀a,b∈S: read(a,ch)<read(b,ch) → ∃k∈[1,|S|): read(b,ch)-read(a,ch)=k ∧ ∀j∈[0,k): ∃c∈S: read(c,ch)=read(a,ch)+j;
term nonconsecutiveValues(S:collection<cell>,ch:Channel,repeats:boolean,separated:boolean):boolean = repeatPolicy(S,ch,repeats ∧ ¬separated) ∧ ∀a,b∈S: a!=b → if separated then |read(a,ch)-read(b,ch)|>1 else |read(a,ch)-read(b,ch)|!=1;
term extremumAt(c:cell,neighbours:set<cell>,mode:enum{min,max},ch:Channel):boolean = ∀d∈neighbours: if mode="min" then read(c,ch)<read(d,ch) else read(c,ch)>read(d,ch);
term scopedMove(m:Move,relation:enum{same,consecutive},digits:list<digit>,scope:set<cell>,ch:Channel):boolean = ∀a,b∈scope: moveRelation(m,a,b) ∧ (D(a)∈digits ∨ D(b)∈digits) → ¬(if relation="same" then read(a,ch)=read(b,ch) else pairRelation(relationSpec("difference",1),read(a,ch),read(b,ch)));
term lookup(L:list<cell>,n:position):cell requires (1<=n ∧ n<=|L|) = L[n-1];
term lookupRelated(L:list<cell>,n:position,target:number,ch:Channel,r:PairRelation):boolean = 1<=n ∧ n<=|L| ∧ pairRelation(r,read(lookup(L,n),ch),target);
term lookupEquals(L:list<cell>,n:position,target:number,ch:Channel):boolean = lookupRelated(L,n,target,ch,relationSpec("difference",0));
term inverseIndex(L:list<cell>,ch:Channel):boolean = ∀i∈[0,|L|): let n=read(L[i],ch); ⌊n⌋=n ∧ ∃k∈[1,|L|+1): k=n ∧ lookupEquals(L,k,i+1,ch);
# Ordered geometry and explicit undirected networks.
primitive cellLists(S:set<cell>,n:position):set<list<cell>>;
term reversal(L:list<cell>):list<cell> = ⟨L[|L|-1-i]:i∈[0,|L|)⟩;
term cyclicCut(L:list<cell>,s:position):list<cell> requires (|L|>0 ∧ 0<=s ∧ s<|L|) = ⟨L[rem(s+i,|L|)]:i∈[0,|L|)⟩;
term graphEdge(E:list<list<cell>>,a:cell,b:cell):boolean = a!=b ∧ ∃e∈E: |e|=2 ∧ {a,b}={e[0],e[1]};
term graphVertices(E:list<list<cell>>):set<cell> = {c∈C: ∃e∈E:c∈e};
term graphWindow(E:list<list<cell>>,W:list<cell>,k:position):boolean = k>=1 ∧ |W|=k ∧ distinctAt(W,λc:cell: cellIndex(c)) ∧ (∀c∈W:c∈graphVertices(E)) ∧ ∀i∈[0,|W|-1): graphEdge(E,W[i],W[i+1]);
term graphWindows(E:list<list<cell>>,k:position):set<list<cell>> = {W∈cellLists(graphVertices(E),k): graphWindow(E,W,k)};
term lineWindows(L:list<cell>,E:optional<list<list<cell>>>,k:position,closed:boolean):set<list<cell>> = if present(E) then graphWindows(unwrap(E),k) else {window(L,k,s,closed):s∈{i∈[0,|L|): k>=0 ∧ start(L,k,i,closed) ∧ (closed → |L|>0)}};
primitive connected<T>(E:collection<T>):boolean;
term validNetwork(E:list<list<cell>>):boolean = |E|>0 ∧ (∀e∈E: |e|=2 ∧ e[0]!=e[1]) ∧ connected(E);
term lineGeometry(L:list<cell>,E:optional<list<list<cell>>>,closed:boolean):boolean = present(E) → ¬closed ∧ validNetwork(unwrap(E)) ∧ (∀c∈L:c∈graphVertices(unwrap(E)));
term maximalRegionRuns(L:list<cell>,segments:list<list<cell>>):boolean = (∀s∈segments: |s|>0 ∧ ∃R∈Regions: ∀c∈s:c∈R) ∧ (Σ_{s∈segments}|s|)=|L| ∧ (∀i∈[0,|segments|): let offset=Σ_{j∈[0,i)} |segments[j]|; ∀k∈[0,|segments[i]|): 0<=offset+k ∧ offset+k<|L| ∧ segments[i][k]=L[offset+k]) ∧ ∀i∈[0,|segments|-1): |segments[i]|>0 ∧ |segments[i+1]|>0 → 0<=|segments[i]|-1 ∧ |segments[i]|-1<|segments[i]| ∧ ¬sameRegion(segments[i][|segments[i]|-1],segments[i+1][0]);
term modularMeaning(L:list<cell>,E:optional<list<list<cell>>>,closed:boolean,m:position,k:position):boolean = m>=1 ∧ k>=2 ∧ lineGeometry(L,E,closed) ∧ (∀W∈lineWindows(L,E,k,closed): distinctAt(W,λc:cell:rem(D(c),m))) ∧ (present(E) → (|graphVertices(unwrap(E))|<k → distinct_f(graphVertices(unwrap(E)),λc:cell:rem(D(c),m)))) ∧ (¬present(E) ∧ ¬closed ∧ |L|=2 → rem(D(L[0]),m)!=rem(D(L[1]),m));
term entropicMeaning(L:list<cell>,E:optional<list<list<cell>>>,closed:boolean):boolean = |𝔄|>0 ∧ |𝔄| mod 3=0 ∧ lineGeometry(L,E,closed) ∧ (∀W∈lineWindows(L,E,3,closed): distinctAt(W,λc:cell:classEntropy(D(c)))) ∧ (present(E) → (|graphVertices(unwrap(E))|<3 → distinct_f(graphVertices(unwrap(E)),λc:cell:classEntropy(D(c))))) ∧ (¬present(E) ∧ ¬closed ∧ |L|=2 → classEntropy(D(L[0]))!=classEntropy(D(L[1])));
term parityMeaning(L:list<cell>,E:optional<list<list<cell>>>,closed:boolean):boolean = lineGeometry(L,E,closed) ∧ ∀W∈lineWindows(L,E,2,closed): |W|=2 → ¬(odd(D(W[0]))↔odd(D(W[1])));
# Decimal operands. Each cell contributes one base-ten digit.
term decimal(L:list<cell>):number requires (∀c∈L:0<=D(c) ∧ D(c)<=9) = Σ_{i∈[0,|L|)} D(L[i])*10^(|L|-1-i);
term decimalValid(L:list<cell>):boolean = ∀c∈L:0<=D(c) ∧ D(c)<=9;
term reversibleDecimal(L:list<cell>,n:number):boolean = decimalValid(L) ∧ decimalValid(reversal(L)) ∧ (decimal(L)=n ∨ decimal(reversal(L))=n);
# Rays and finite stopping selectors.
term orderedRay(origin:cell,dr:position,dc:position,includeOrigin:boolean):list<cell> requires (|dr|<=1 ∧ |dc|<=1 ∧ (dr!=0 ∨ dc!=0)) = ⟨boardCell(row(origin)+t*dr,col(origin)+t*dc): t∈[0,rows+cols), (includeOrigin ∨ t>0) ∧ 0<=row(origin)+t*dr ∧ row(origin)+t*dr<rows ∧ 0<=col(origin)+t*dc ∧ col(origin)+t*dc<cols⟩;
term blockedPrefix(L:list<cell>,block:fn(cell)->boolean,includeBlocker:boolean):list<cell> = ⟨L[i]:i∈[0,|L|), (∀j∈[0,i):¬block(L[j])) ∧ (includeBlocker ∨ ¬block(L[i]))⟩;
term recordHigh(L:list<cell>,i:position,ch:Channel):boolean = pos(L,i) ∧ ∀j∈[0,i): read(L[j],ch)<read(L[i],ch);
term visibleRecords(L:list<cell>,ch:Channel):list<cell> = ⟨L[i]:i∈[0,|L|), recordHigh(L,i,ch)⟩;
# Aggregate operands preserve occurrence order before selecting a slice or prefix.
type AggregateOperand = record{cells:list<cell>,channel:Channel,operation:enum{sum,product,count,decimal},repeats:boolean,start:optional<position>,length:optional<position>,stop:optional<enum{target,given,crust}>,target:optional<number>,crusts:optional<list<digit>>,include:optional<boolean>};
term prefixStop(c:cell,mode:enum{target,given,crust},target:optional<number>,crusts:list<digit>,ch:Channel):boolean = (mode="target" ∧ present(target) ∧ read(c,ch)=unwrap(target)) ∨ (mode="given" ∧ given(c)) ∨ (mode="crust" ∧ D(c)∈crusts);
term operandSlice(o:AggregateOperand):list<cell> = let a=if present(o.start) then unwrap(o.start) else 0; let n=if present(o.length) then unwrap(o.length) else |o.cells|-a; ⟨o.cells[i]:i∈[0,|o.cells|), a<=i ∧ i<a+n⟩;
term operandCells(o:AggregateOperand):list<cell> = if present(o.stop) then blockedPrefix(operandSlice(o),λc:cell:prefixStop(c,unwrap(o.stop),o.target,if present(o.crusts) then unwrap(o.crusts) else ⟨D(d):d∈o.cells,false⟩,o.channel),present(o.include) ∧ unwrap(o.include)) else operandSlice(o);
term operandBounds(o:AggregateOperand):boolean = let a=if present(o.start) then unwrap(o.start) else 0; let n=if present(o.length) then unwrap(o.length) else |o.cells|-a; 0<=a ∧ 0<=n ∧ a+n<=|o.cells|;
term operandValid(o:AggregateOperand):boolean = operandBounds(o) ∧ repeatPolicy(operandCells(o),o.channel,o.repeats) ∧ (o.operation="decimal" → o.channel="D" ∧ decimalValid(operandCells(o))) ∧ (present(o.stop) → ∃c∈operandSlice(o): prefixStop(c,unwrap(o.stop),o.target,if present(o.crusts) then unwrap(o.crusts) else ⟨D(d):d∈o.cells,false⟩,o.channel));
term aggregateExpression(o:AggregateOperand):number requires (operandValid(o)) = if o.operation="decimal" then decimal(operandCells(o)) else if o.operation="sum" then aggregate(operandCells(o),o.channel,"sum") else if o.operation="product" then aggregate(operandCells(o),o.channel,"product") else aggregate(operandCells(o),o.channel,"count");
# Sight blockers may depend on the answer's channels, shading or primary regions.
type SightBlock = enum{listed,"different-parity","different-colour","different-region",greater,"at-least","not-equal"};
term sightBlock(origin:cell,c:cell,mode:SightBlock,listed:set<cell>,ch:Channel):boolean = (mode="listed" ∧ c∈listed) ∨ (mode="different-colour" ∧ ¬(shaded(c)↔shaded(origin))) ∨ (mode="different-region" ∧ ¬sameRegion(c,origin)) ∨ (mode="greater" ∧ read(c,ch)>read(origin,ch)) ∨ (mode="at-least" ∧ read(c,ch)>=read(origin,ch)) ∨ (mode="not-equal" ∧ read(c,ch)!=read(origin,ch)) ∨ (mode="different-parity" ∧ ⌊read(c,ch)⌋=read(c,ch) ∧ ⌊read(origin,ch)⌋=read(origin,ch) ∧ rem(read(c,ch),2)!=rem(read(origin,ch),2));
# Derived selections can feed either arithmetic or whole-set line meanings.
type PrefixSelection = record{stop:enum{target,given,crust},target:optional<number>,crusts:list<digit>,include:boolean};
term selectionValid(L:list<cell>,s:PrefixSelection,ch:Channel):boolean = ∃c∈L:prefixStop(c,s.stop,s.target,s.crusts,ch);
term selectedPrefix(L:list<cell>,s:PrefixSelection,ch:Channel):list<cell> = blockedPrefix(L,λc:cell:prefixStop(c,s.stop,s.target,s.crusts,ch),s.include);
term sumSegment(L:list<cell>,a:position,b:position,total:number,ch:Channel,repeats:boolean):boolean = 0<=a ∧ a<b ∧ b<=|L| ∧ let part=⟨L[i]:i∈[a,b)⟩; repeatPolicy(part,ch,repeats) ∧ aggregate(part,ch,"sum")=total;
term partitionSums(L:list<cell>,total:number,ch:Channel,repeats:boolean):boolean = ∃cuts:list<position>: |cuts|>=2 ∧ cuts[0]=0 ∧ cuts[|cuts|-1]=|L| ∧ ∀i∈[0,|cuts|-1): sumSegment(L,cuts[i],cuts[i+1],total,ch,repeats);
term sumLineMeaning(L:list<cell>,total:number,mode:enum{cover,partition},ch:Channel,repeats:boolean,closed:boolean):boolean = |L|>0 ∧ if mode="partition" then (if closed then ∃s∈[0,|L|):partitionSums(cyclicCut(L,s),total,ch,repeats) else partitionSums(L,total,ch,repeats)) else if closed then ∀i∈[0,|L|): ∃s∈[0,|L|): ∃k∈[1,|L|+1): start(L,k,s,true) ∧ (∃j∈[0,k):rem(s+j,|L|)=i) ∧ repeatPolicy(window(L,k,s,true),ch,repeats) ∧ aggregate(window(L,k,s,true),ch,"sum")=total else ∀i∈[0,|L|): ∃a∈[0,|L|): ∃b∈[a+1,|L|+1): a<=i ∧ i<b ∧ sumSegment(L,a,b,total,ch,repeats);
# Bounded scopes, alternatives and sequence adapters.
term relatedAny(rs:list<PairRelation>,a:number,b:number):boolean = ∃r∈rs: pairRelation(r,a,b);
term selectedPair(a:cell,b:cell,S:set<cell>,mode:enum{all,moves,incident},m:Move,anchors:set<cell>):boolean = a∈S ∧ b∈S ∧ a!=b ∧ (mode="all" ∨ moveRelation(m,a,b)) ∧ (mode!="incident" ∨ a∈anchors ∨ b∈anchors);
term divides(a:number,b:number):boolean = ⌊a⌋=a ∧ ⌊b⌋=b ∧ a!=0 ∧ ∃q∈ℤ: a*q=b;
term transitionAllowed(a:number,b:number,allowed:list<list<number>>):boolean = ∃p∈allowed: |p|=2 ∧ a=p[0] ∧ b=p[1];
term sequenceMeaning(L:list<cell>,ch:Channel,mode:enum{transitions,divisors,recurrence},allowed:list<list<number>>,a:number,b:number,closed:boolean):boolean = |L|>0 ∧ (closed → |L|>=3) ∧ (mode="recurrence" → ¬closed) ∧ (mode="transitions" → ∀p∈allowed:|p|=2) ∧ (if mode="recurrence" then ∀i∈[0,|L|-2): read(L[i+2],ch)=a*read(L[i],ch)+b*read(L[i+1],ch) else ∀i,j∈[0,|L|): next(L,i,j,closed) → if mode="divisors" then divides(read(L[i],ch),read(L[j],ch)) else transitionAllowed(read(L[i],ch),read(L[j],ch),allowed));
term indexHit(L:list<cell>,source:cell,indexChannel:Channel,ch:Channel,offset:position,target:number,r:PairRelation):boolean = let n=read(source,indexChannel)+offset; ⌊n⌋=n ∧ ∃k∈[1,|L|+1): k=n ∧ lookupRelated(L,k,target,ch,r);
# Aggregate arithmetic, arbitrary numeric profiles and derived quantities.
type WeightedOperand = record{operand:AggregateOperand,coefficient:number,power:position};
term weightedValid(o:WeightedOperand):boolean = operandValid(o.operand) ∧ o.power>=0;
term weightedResult(o:WeightedOperand):number requires (weightedValid(o)) = o.coefficient*aggregateExpression(o.operand)^o.power;
term expressionValid(os:list<WeightedOperand>):boolean = ∀o∈os: weightedValid(o);
term operandExpression(os:list<WeightedOperand>,operation:enum{sum,product}):number requires (expressionValid(os)) = if operation="sum" then Σ_{o∈os} (if weightedValid(o) then weightedResult(o) else 0) else Π_{o∈os} (if weightedValid(o) then weightedResult(o) else 0);
term frequency(S:collection<cell>,n:number,ch:Channel):position = countWhere(S,λc:cell:read(c,ch)=n);
term sameProfile(A:collection<cell>,B:collection<cell>,ch:Channel,multiset:boolean):boolean = ∀n∈({read(c,ch):c∈A} ∪ {read(c,ch):c∈B}): if multiset then frequency(A,n,ch)=frequency(B,n,ch) else (frequency(A,n,ch)>0 ↔ frequency(B,n,ch)>0);
term classCount(S:collection<cell>,ns:list<number>,ch:Channel):position = countWhere(S,λc:cell:read(c,ch)∈ns);
term numericProperty(n:number,property:enum{prime,composite,power,divisible,places},argument:position):boolean = (property="prime" ∧ prime(n)) ∨ (property="composite" ∧ composite(n)) ∨ (property="power" ∧ argument>=1 ∧ ∃k∈ℤ: k>=0 ∧ k^argument=n) ∨ (property="divisible" ∧ divides(argument,n)) ∨ (property="places" ∧ argument>=1 ∧ ⌊n⌋=n ∧ n>=0 ∧ (argument=1 ∨ n>=10^(argument-1)) ∧ n<10^argument);
type DerivedQuantity = record{left:AggregateOperand,right:AggregateOperand,operation:enum{sum,product,difference,ratio}};
term quantityValid(q:DerivedQuantity):boolean = operandValid(q.left) ∧ operandValid(q.right) ∧ (q.operation="ratio" → aggregateExpression(q.right)!=0);
term quantity(q:DerivedQuantity):number requires (quantityValid(q)) = if q.operation="sum" then aggregateExpression(q.left)+aggregateExpression(q.right) else if q.operation="product" then aggregateExpression(q.left)*aggregateExpression(q.right) else if q.operation="difference" then |aggregateExpression(q.left)-aggregateExpression(q.right)| else if aggregateExpression(q.right)!=0 then aggregateExpression(q.left)/aggregateExpression(q.right) else 0;
term selectedNeighbours(c:cell,S:set<cell>,m:Move,includeSelf:boolean):set<cell> = {d∈S: moveRelation(m,c,d) ∨ (includeSelf ∧ c=d)};
term coordinateHit(source:cell,S:set<cell>,r:number,k:number,rFactor:number,cFactor:number,offset:number,indexChannel:Channel,ch:Channel,target:number,relation:PairRelation):boolean = ⌊r⌋=r ∧ ⌊k⌋=k ∧ ⌊rFactor⌋=rFactor ∧ ⌊cFactor⌋=cFactor ∧ ⌊offset⌋=offset ∧ let n=read(source,indexChannel); ⌊n⌋=n ∧ ∃d∈S: row(d)=r+rFactor*(n+offset) ∧ col(d)=k+cFactor*(n+offset) ∧ pairRelation(relation,read(d,ch),target);
term ownFrequencies(S:collection<cell>,ch:Channel):boolean = ∀n∈{read(c,ch):c∈S}: frequency(S,n,ch)=n;
term classWindows(L:list<cell>,classes:list<list<number>>,counts:list<position>,k:position,closed:boolean,ch:Channel):boolean = k>=1 ∧ |classes|=|counts| ∧ ∀s∈[0,|L|): start(L,k,s,closed) ∧ (closed → |L|>0) → ∀i∈[0,|classes|): 0<=i ∧ i<|counts| ∧ classCount(window(L,k,s,closed),classes[i],ch)=counts[i];
# Shared answer references. These read one case-wide assignment per typed name.
primitive routeAnswer(name:string):list<cell>;
primitive routeClosed(name:string):boolean;
primitive networkAnswer(name:string):list<list<cell>>;
primitive partitionAnswer(name:string):set<set<cell>>;
term routeCells(L:list<cell>):set<cell> = {c∈C:c∈L};
term simpleRoute(L:list<cell>,S:set<cell>,m:Move,closed:boolean):boolean = |L|>0 ∧ (closed → |L|>=3) ∧ (∀c∈L:c∈S) ∧ distinctAt(L,λc:cell:cellIndex(c)) ∧ ∀i,j∈[0,|L|): next(L,i,j,closed) → moveRelation(m,L[i],L[j]);
term routeEdge(L:list<cell>,a:cell,b:cell,closed:boolean):boolean = ∃i,j∈[0,|L|): next(L,i,j,closed) ∧ {a,b}={L[i],L[j]};
term segmentSide(a:cell,b:cell,c:cell):number = (row(b)-row(a))*(col(c)-col(a))-(col(b)-col(a))*(row(c)-row(a));
term segmentCross(a:cell,b:cell,c:cell,d:cell):boolean = segmentSide(a,b,c)*segmentSide(a,b,d)<0 ∧ segmentSide(c,d,a)*segmentSide(c,d,b)<0;
term routeCrosses(L:list<cell>,M:list<cell>,closedL:boolean,closedM:boolean):boolean = ∃i,j∈[0,|L|): ∃k,t∈[0,|M|): next(L,i,j,closedL) ∧ next(M,k,t,closedM) ∧ segmentCross(L[i],L[j],M[k],M[t]);
term noRouteTouch(L:list<cell>,m:Move,closed:boolean):boolean = ∀i,j∈[0,|L|): i!=j ∧ ¬consecutive(L,i,j,closed) → ¬moveRelation(m,L[i],L[j]);
term canonicalEdges(E:list<list<cell>>):boolean = ∀i∈[0,|E|): |E[i]|=2 ∧ E[i][0]!=E[i][1] ∧ ∀j∈[0,i): |E[j]|=2 → {E[i][0],E[i][1]}!={E[j][0],E[j][1]};
term networkOn(E:list<list<cell>>,S:set<cell>,m:Move):boolean = |S|>0 ∧ canonicalEdges(E) ∧ (∀e∈E: |e|=2 ∧ e[0]∈S ∧ e[1]∈S ∧ moveRelation(m,e[0],e[1])) ∧ (if |S|=1 then |E|=0 else graphVertices(E)=S ∧ connected(E));
term networkDegree(E:list<list<cell>>,c:cell):position = countWhere(E,λe:list<cell>:c∈e);
term connectedRegionPartition(P:set<set<cell>>,S:set<cell>):boolean = partition(P,S) ∧ ∀R∈P: connectedCells(R);
term congruent(A:set<cell>,B:set<cell>,rotate:boolean,reflect:boolean):boolean = |A|=|B| ∧ |A|>0 ∧ ∃a∈A: ∃b∈B: ∃u,v∈{-1,1}: ∃swap∈{true,false}: (rotate ∨ (¬swap ∧ u=1 ∧ v=1) ∨ (reflect ∧ (if swap then u*v=1 else u*v=-1))) ∧ (reflect ∨ (if swap then u*v=-1 else u*v=1)) ∧ ∀p∈A: ∃q∈B: row(q)=row(b)+u*(if swap then col(p)-col(a) else row(p)-row(a)) ∧ col(q)=col(b)+v*(if swap then row(p)-row(a) else col(p)-col(a));
term symmetricRegion(R:set<cell>,r2:position,c2:position):boolean = ∀a∈R: ∃b∈R: row(a)+row(b)=r2 ∧ col(a)+col(b)=c2;
term separatedRegions(P:set<set<cell>>,m:Move):boolean = ∀A,B∈P: A!=B → ∀a∈A: ∀b∈B: ¬moveRelation(m,a,b);
type RegionCentre = record{row2:position,col2:position};
term centreInside(R:set<cell>,g:RegionCentre):boolean = 0<=g.row2 ∧ g.row2<=2*(rows-1) ∧ 0<=g.col2 ∧ g.col2<=2*(cols-1) ∧ {c∈C: |2*row(c)-g.row2|<=1 ∧ |2*col(c)-g.col2|<=1}⊆R;
# Shared selections, truth labels, assignments and extra symbol/value channels.
primitive selectionAnswer(name:string):set<cell>;
primitive choiceAnswer(name:string):boolean;
primitive assignmentAnswer(name:string):list<position>;
primitive valueAnswer(name:string,c:cell):value;
primitive symbolAnswer(name:string,c:cell):list<digit>;
term selectedCells(name:string):set<cell> = if name="H" then H else selectionAnswer(name);
term marked(name:string,c:cell):boolean = c∈selectedCells(name);
term channelValue(name:string,c:cell):number = if name="D" then toValue(D(c)) else if name="V" then V(c) else valueAnswer(name,c);
term reified(truth:boolean,meaning:boolean):boolean = truth ↔ meaning;
term conditionalMeaning(choice:boolean,yes:boolean,no:boolean):boolean = if choice then yes else no;
term truthCount(meanings:list<boolean>):position = countWhere(meanings,λb:boolean:b);
term markingRelation(a:cell,b:cell,name:string,relation:enum{same,different,"implies"}):boolean = if relation="same" then (marked(name,a) ↔ marked(name,b)) else if relation="different" then ¬(marked(name,a) ↔ marked(name,b)) else (marked(name,a) → marked(name,b));
term alternatingSquare(r:position,k:position,f:fn(cell)->boolean):boolean = (f(boardCell(r,k)) ↔ f(boardCell(r+1,k+1))) ∧ (f(boardCell(r,k+1)) ↔ f(boardCell(r+1,k))) ∧ ¬(f(boardCell(r,k)) ↔ f(boardCell(r,k+1)));
term componentPartition(P:set<set<cell>>,S:set<cell>):boolean = connectedRegionPartition(P,S) ∧ separatedRegions(P,"orthogonal");
term markedStart(L:list<cell>,i:position,name:string):boolean = pos(L,i) ∧ marked(name,L[i]) ∧ (if i=0 then true else 0<=i-1 ∧ i-1<|L| ∧ ¬marked(name,L[i-1]));
term markedRun(L:list<cell>,a:position,b:position,name:string):boolean = 0<=a ∧ a<b ∧ b<=|L| ∧ markedStart(L,a,name) ∧ (∀i∈[a,b):marked(name,L[i])) ∧ (if b=|L| then true else 0<=b ∧ b<|L| ∧ ¬marked(name,L[b]));
term japaneseSums(L:list<cell>,name:string,totals:list<number>,ch:Channel,repeats:boolean):boolean = distinctAt(L,λc:cell:cellIndex(c)) ∧ countWhere([0,|L|),λi:position:markedStart(L,i,name))=|totals| ∧ ∀a∈[0,|L|): ∀b∈[a+1,|L|+1): markedRun(L,a,b,name) → let j=countWhere([0,a),λi:position:markedStart(L,i,name)); 0<=j ∧ j<|totals| ∧ repeatPolicy(⟨L[i]:i∈[a,b)⟩,ch,repeats) ∧ aggregate(⟨L[i]:i∈[a,b)⟩,ch,"sum")=totals[j];
type ValueMap = record{digit:digit,value:number};
term validValueMap(mapping:list<ValueMap>):boolean = distinctAt(mapping,λp:ValueMap:p.digit);
term mappedValue(d:digit,v:number,mapping:list<ValueMap>):boolean = ∃p∈mapping:p.digit=d ∧ p.value=v;
term boundedAssignment(xs:list<position>,size:position,labels:position,bijective:boolean):boolean = size>=0 ∧ labels>=0 ∧ |xs|=size ∧ (∀x∈xs:0<=x ∧ x<labels) ∧ (bijective → size=labels ∧ distinctAt(xs,λx:position:x));
term cellSymbols(name:string,c:cell):list<digit> = if name="D" then ⟨D(c):i∈[0,1)⟩ else symbolAnswer(name,c);
term symbolFrequency(xs:list<digit>,d:digit):position = countWhere(xs,λx:digit:x=d);
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

face reads the face digit; effective reads the effective value. toValue preserves a number exactly while identifying it as an effective value. The value-modifier formula existentially binds M, checks its placement and constrains every effective value using its factor and offset parameters. M is not a prelude input. Without a value modifier or a Mapped Values declaration targeting V, V=D. H is the shared shading answer. ValuedRuleMeanings contains the instantiated Boolean meanings of every rule reading the same V channel.

present reports whether an optional field was supplied; unwrap reads it only after present has been proved. minimumDigit/maximumDigit and minimumValue/maximumValue return the least/greatest item of a nonempty collection. Their arguments have to be nonempty; they do not supply invented defaults.

An `expression` is an authored arithmetic tree containing whole numbers, letters, addition, subtraction, multiplication, division or powers. Take the distinct letters across the supplied expressions in lexicographic order; letterCount counts them, and the list passed to defined and eval gives their integer answers in that order. defined is true precisely when every letter has an answer and every subexpression is defined. eval returns the exact integer result: division requires a nonzero divisor and an integer quotient; a power requires a nonnegative integer exponent. Undefined subexpressions never return a guessed value. These operations read the arithmetic tree, rather than defining a new Sudoku rule.

A `collection<T>` accepts a set, list or path of T. Aggregates over lists retain repeated positions; mapped sets remove duplicate results. Ordered comprehensions traverse intervals in increasing order or traverse a supplied list in its given order; a trailing condition filters that order. Sets have no implied order. Empty sums are zero and empty products are one. distinct_f, distinct_D and distinct_V compare members of a cell set. distinctAt compares different positions of a list or path, even when those positions name the same cell.

The connectedCells formula chooses a route of at most |C| cells; revisiting cells is unnecessary for reachability on a finite board. partition covers every board cell exactly once. boardDiagonals constructs maximal straight bishop rays from top/side boundaries. magicLines lists all eight rows, columns and diagonals of a nine-cell square in reading order.

Shift relations compare integer values; their parity is the normalised remainder modulo 2.

## Channels, operands and geometry

`Channel` chooses D or V. `read` returns the chosen number; `relationSpec(op,n)` constructs a PairRelation whose op is op and whose value is n. It introduces no additional relation. `monotonic` chooses one direction for the whole list. `numericBetween` compares numbers, while `betweenPositions` selects positions.

`aggregate` sums, multiplies or counts occurrences. `repeatPolicy` compares numbers in the chosen channel, including separate occurrences of the same cell in a list. `AggregateOperand` first selects a zero-based slice, then an optional stopping prefix. Its start defaults to zero and its length to the remaining list. An absent include field excludes the stopping cell. Sum, product and count use the chosen channel; decimal reading uses face digits, one base-ten digit per cell. `operandValid` checks bounds, repeats, decimal symbols and the existence of a requested stopping cell before `aggregateExpression` reads the result.

`cellLists(S,n)` is the finite set of every ordered n-tuple over S, with repetition allowed; for n=0 it contains the empty list, and for n<0 it is empty. It supplies candidate tuples, without imposing a puzzle rule. `graphWindow` keeps simple traversals: cells do not repeat, each consecutive pair is a drawn edge, and either direction through a junction is included. `connected` accepts a cell collection (orthogonal adjacency, as before) or an edge list (explicit undirected adjacency). It is false for an empty collection and true when all vertices form one connected component. Graph reachability computes the result. `connectedCells` retains the expanded orthogonal formula for the cell-set rules. `validNetwork` requires two different endpoints per edge and one connected component. Reversed or repeated edge records denote the same undirected adjacency.

With explicit edges, a line's whole-set rules use all vertices of the component. Window rules use every traversal of the stated length. Modulus and length are independent. Without explicit edges, windows retain the supplied position order, repeated positions and any last-to-first join. `reversal` reverses that order; `cyclicCut` starts a closed list at the chosen position. `maximalRegionRuns` checks ordered primary-region visits, including every return and every occurrence.

`lookup` reads a one-based position only after its bounds are established. `lookupRelated` also requires those bounds and applies a shared pair relation to the result and target. `inverseIndex` applies that lookup to each position of a self-inverse list.

## Rays, prefixes and sums

`orderedRay` lists cells nearest first from an origin in a unit horizontal, vertical or diagonal direction. Its includeOrigin argument controls whether position zero is included. `blockedPrefix` stops at the first blocker, optionally retaining it; without a blocker it keeps the whole list. `prefixStop` supplies target-number, given and crust-digit stopping conditions. Rules requesting a stopping prefix also require a stopping cell to exist.

`recordHigh` compares a number strictly with all earlier numbers on its ordered ray. Equal heights hide later copies. `visibleRecords` retains those record highs. Sight blockers can read numbers, shading or primary regions. Across several rays, Blocked Sight takes the union of selected cells and includes the origin at most once.

`sumSegment` selects a nonempty consecutive interval. `partitionSums` covers every position exactly once with adjacent intervals of the required sum. `sumLineMeaning` also permits overlapping covering intervals. Closed lines may cross the join; a closed partition chooses a cyclic cut before partitioning.

## Play state

Some setup features describe what a player sees, not which grids solve the puzzle. They are stated over the player's entries beside the answer.

E is a partial function from cells to symbols: E(c), written entered(c) in formulas, is the symbol the player typed in c, or undefined when the cell is empty. A given is not an entry; a symbol typed over a given is. Pencil marks and colours are not entries. placed(c) holds when E(c) is defined. given(c) holds when the case gives c a digit g(c), written givenValue(c) in formulas. correct(c) holds when c is placed, holds g(c) if it is a given, and, when answered, holds the answer's digit.

answered is true when the host holds a reference answer, and known(c) when that answer covers cell c. With an answer, a symbol counts only if it is the answer's, and no symbol counts in a cell whose answer is unknown. Without an answer, every symbol counts.

visible(c) says that c is shown to the player. A setup feature that decides what is shown defines visible(c) in full, as a function of E. A case has at most one such feature; without one, every cell is visible.

Declarations marked play form the play domain. Rule pages and shared terms outside it cannot use them; setup feature pages can use both domains.

## Shared assignments

`routeAnswer(name)`, `networkAnswer(name)` and `partitionAnswer(name)` read the finished answer's named ordered routes, undirected edge lists and region collections. A name is a case-sensitive string. Each typed name has exactly one constructor and denotes one object throughout the case; different types have separate namespaces. Different names may denote equal objects.

For each finite set of names referenced by a case, choose those objects once, together with the digit and value assignments, and conjoin every instantiated formula under that shared choice. This is a joint existential assignment, including when a declaration is negated. Negation tests its named object; it does not choose a fresh object or mean that no possible object exists. An omitted constructor supplies no topology. A constructor and every clue on its result must use the same name. These assignments are solution data, never setter parameters or player entries.

`routeClosed(name)` reads the unique Route constructor’s loop parameter as case schema, including under negation or a condition. It is not a separately chosen Boolean; changing the polarity of a rule never changes this metadata. Clues and groups never supply closure again.

`simpleRoute` checks nonempty, distinct cells and every step, including closure. A closed route has at least three cells. `routeEdge` is undirected; its list retains a chosen start and orientation for directed clues. `noRouteTouch` exempts consecutive positions, including a closed route's join. `segmentCross` detects proper interior intersections of straight steps of any length, including bishop and knight steps. Shared endpoints and collinear overlaps are not crossings; use disjoint and touch conditions for those. `canonicalEdges` rejects duplicate undirected edges. `networkOn` checks the exact vertex scope and connectivity, allowing a one-cell graph with no edges. A connected simple graph is a tree exactly when its edge count is one less than its vertex count.

`congruent` checks translations, with optional quarter-turn rotations and reflections. `symmetricRegion` uses doubled zero-based centre coordinates, so centres may lie on cells, edges or corners. `separatedRegions` tests different regions only. A partition covers exactly its stated scope, which may be a proper subset of the board.


`selectionAnswer(name)` reads a cell set; `selectedCells("H")` reads the existing
shading set H and other names read independent selections. `marked` is membership
in that selected set. Use Selection to constrain its scope and counts. Marking
relations share that membership, and `alternatingSquare` applies one Boolean
classification to the four corners of a 2×2. `componentPartition` combines a
connected partition with orthogonal separation, making every region maximal.
On an empty set it requires an empty partition.

`markedStart` and `markedRun` identify maximal nonempty runs in a supplied list.
`japaneseSums` counts their starts, then compares each run's sum to the clue with
that start's rank. Zero-sum runs still consume a clue. Empty lists match only
empty clues. It rejects repeated cells; it imposes no movement convention.

`choiceAnswer(name)` reads one Boolean label. `reified(label,meaning)` is
Boolean equivalence to the complete meaning, including its guards. `truthCount`
counts true occurrences in a list. `conditionalMeaning` chooses between two
explicit complete meanings. False reification negates a whole rule; explicit
inversion need not equal that complement. Labels name solution Booleans, not
rule instance IDs. Formulas provide their meanings directly, without reference
resolution or recursive rule lookup. Choice Count bounds distinct labels;
a label without reification remains a free Boolean.

`assignmentAnswer(name)` reads a list of integers. `boundedAssignment` checks
its length, zero-based label domain and optional bijection. Zero slots and zero
labels admit the empty bijection. A positive slot count with zero labels is
impossible. Custom formulas apply the meaning selected for each slot after
checking the assignment bounds.

`valueAnswer(name,c)` reads a named exact numeric channel. `channelValue("D",c)`
reads the face digit; `channelValue("V",c)` reads the existing effective value;
other names read independent value assignments. Mapped Values constrains these
channels using a shared selection. Map keys are unique; unlisted selected digits
are rejected. Free mode requires membership in its explicit allowed list. Outside
identity constrains every other board cell to D; outside free leaves those cells
for another declaration. Declarations on a channel conjoin; they do not run as
sequential transformations. D is read-only. Existing Channel parameters still
accept only D or V; named channels are used in formulas through channelValue.

`symbolAnswer(name,c)` reads an ordered list of whole-number symbols for a cell.
`cellSymbols("D",c)` is the one-element list containing D(c); other names read
symbolAnswer. D is reserved and Cell Entries cannot write it. `symbolFrequency`
counts occurrences, including repeats within one cell. Symbol House totals these
frequencies over each cell set and excludes unlisted symbols. Cell Entries
supplies per-cell alphabet, size, repeat and face-link conditions. These solution
lists are separate from the player's entries and pencil marks. Empty entries
are allowed only by an explicit zero minimum; first-entry mode always requires
at least one symbol. Shared readers require an assignment; a missing name or
cell is not an empty list, false label, zero or identity channel.
