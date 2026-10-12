---
name: Shared predicates
url: https://rules.sudoku-sleuth.com/predicates.md
---

# Shared predicates

These definitions give each rule its precise meaning. C is the finite board, 𝔄 its ordered set of symbols, and N the number of cells. A case file names cells with r1c1 notation; the formulas use zero-based row, column and line positions.

L is an ordered line or ray, S a group of cells, and n the length of L. Supplied groups and paths are fixed by the setter. The loop parameter includes the last-to-first step. present(x) means that parameter x was supplied. Omitted booleans are false unless the rule's parameter table gives another default.

The quantifiers ∀x ∈ S and ∃x ∈ S mean every member and at least one member.

The symbols →, ∧, ∨, ¬ and ↔ mean implies, and, or, not and exactly when.

Absolute value for a number and size for a group both use |x|. Σ adds and Π multiplies.

The interval [a,b) includes a and excludes b. The collection 𝒫(C) contains all subsets of the board.

D is the face digit. V is the effective value: all rules share the same modifier assignment M. Without modifiers V=D. A finished answer supplies any required modifier cells, electron cells, hidden cages, constructed regions or letter values.

Board and quantifier notation.

```text
C = {cell(r,k) : 0 ≤ r < rows ∧ 0 ≤ k < cols}
cell(r,k) = r × cols + k
row(c) = ⌊c / cols⌋; col(c) = c mod cols
present(x) ↔ x is a supplied field of this rule instance
```

**D(c)** is the face symbol stored in cell c.

```text
D : C → 𝔄; ∀c ∈ C: D(c) = the supplied digit in c
```

**V(c)** is the numeric value derived from the single shared modifier assignment M.

```text
∀c ∈ C:
  (c ∈ M → V(c) = factor × D(c) + offset)
  ∧ (c ∉ M → V(c) = D(c))
Without a modifier: M = ∅ ∧ ∀c ∈ C: V(c) = D(c)
```

**rem(x,m)** is the normalised remainder for modulus m ≥ 1.

```text
rem(x,m) = r ↔ 0 ≤ r < m ∧ ∃q ∈ ℤ: x = q × m + r
```

**odd(x)** and **high(x)** classify an integer by parity and by which side of 5 it occupies.

```text
odd(x) ↔ rem(x,2) = 1
high(x) ↔ x > 5
```

**prime(x)** and **composite(x)** classify integers greater than one by their factors.

```text
prime(x) ↔ x ∈ ℤ ∧ x>1 ∧ ¬∃a,b ∈ ℤ: a>1 ∧ b>1 ∧ a×b=x
composite(x) ↔ x ∈ ℤ ∧ x>1 ∧ ∃a,b ∈ ℤ: a>1 ∧ b>1 ∧ a×b=x
```

**class_K(d)** names the digit's class in the supplied class system K.

```text
class_parity(d) = rem(d,2)
class_mod3(d) = rem(d,3)
class_entropy(𝔄[i]) = ⌊i / (|𝔄| / 3)⌋, for 0 ≤ i < |𝔄|, with |𝔄| divisible by 3
classes(K) = {0,1} if K = parity; {0,1,2} otherwise
```

**in(c,R)** says that cell c belongs to the supplied region or group R.

```text
in(c,R) ↔ c ∈ R
Regions = the primary regions declared for the board
```

**sameRegion(a,b)** says that both cells belong to one region of the board’s primary regions, the primary partition.

```text
sameRegion(a,b) ↔ ∃R ∈ Regions: in(a,R) ∧ in(b,R)
```

**orth(a,b)** says that two cells share an edge.

```text
orth(a,b) ↔ |row(a)−row(b)| + |col(a)−col(b)| = 1
```

**touch(a,b)** says that two cells touch diagonally at a corner.

```text
touch(a,b) ↔ |row(a)−row(b)| = 1 ∧ |col(a)−col(b)| = 1
```

**king(a,b)** says that distinct cells share an edge or corner.

```text
king(a,b) ↔ orth(a,b) ∨ touch(a,b)
```

**knight(a,b)** says that two cells are one chess knight move apart.

```text
knight(a,b) ↔ (|row(a)−row(b)| = 1 ∧ |col(a)−col(b)| = 2)
               ∨ (|row(a)−row(b)| = 2 ∧ |col(a)−col(b)| = 1)
```

**bishop(a,b)** says that distinct cells lie on the same board diagonal.

```text
bishop(a,b) ↔ a ≠ b ∧ |row(a)−row(b)| = |col(a)−col(b)|
moveRelation(m,a,b) ↔ (m=knight ∧ knight(a,b)) ∨ (m=king ∧ king(a,b))
                      ∨ (m=orthogonal ∧ orth(a,b)) ∨ (m=bishop ∧ bishop(a,b))
```

**aboveCell(a,b)** says that a is immediately above b in the same column.

```text
aboveCell(a,b) ↔ col(a) = col(b) ∧ row(a) + 1 = row(b)
```

**turn(c)** is the cell's image under a half-turn of the board.

```text
turn(c) = cell(rows−1−row(c), cols−1−col(c)) = N−1−c
```

**diag_direction** is the supplied main or anti-diagonal cell set.

```text
diag_main = {cell(i,i) : 0 ≤ i < min(rows,cols)}
diag_anti = {cell(i,cols−1−i) : 0 ≤ i < min(rows,cols)}
```

**window2(r,k)** is the 2×2 window with top-left coordinate (r,k).

```text
window2(r,k) = {cell(r,k), cell(r,k+1), cell(r+1,k), cell(r+1,k+1)}
0 ≤ r < rows−1 ∧ 0 ≤ k < cols−1
```

**at(L,i)** is the cell at zero-based position i in ordered path L.

```text
pos(L,i) ↔ 0 ≤ i < |L|
at(L,i) = L[i], defined when pos(L,i)
```

**consecutive(L,i,j)** says that two positions are neighbours along the path, including its supported loop closure.

```text
consecutive(L,i,j) ↔ pos(L,i) ∧ pos(L,j)
  ∧ (|i−j| = 1 ∨ (loop ∧ |L| > 2 ∧ {i,j} = {0,|L|−1}))
```

**next(L,i,j)** says that j immediately follows i in the forward direction.

```text
next(L,i,j) ↔ pos(L,i) ∧ pos(L,j)
  ∧ (j = i+1 ∨ (loop ∧ |L| > 2 ∧ i = |L|−1 ∧ j = 0))
```

**mirror(L,i)** is the position equally far from the opposite end of L.

```text
mirror(L,i) = |L|−1−i, for pos(L,i)
```

**window(L,k,s)** is the k-position window starting at s, with loop positions wrapping.

```text
start(L,k,s) ↔ (¬loop ∧ 0 ≤ s ≤ |L|−k)
                ∨ (loop ∧ |L| ≥ k ∧ 0 ≤ s < |L|)
window(L,k,s)[t] = at(L, rem(s+t,|L|)), for 0 ≤ t < k
```

**first(L,k)** is the first k positions in a direction already fixed by L.

```text
first(L,k) = (at(L,0), …, at(L,k−1)), with 0 ≤ k ≤ |L|
betweenPositions(L,i,j) = (at(L,t) : min(i,j) < t < max(i,j))
firstOccurrence(L,d,i) ↔ pos(L,i) ∧ D(at(L,i)) = d
                         ∧ ∀j ∈ [0,i): D(at(L,j)) ≠ d
```

**distinct(S)** says that different cells in S hold different face symbols.

```text
distinct(S) ↔ ∀a,b ∈ S: a ≠ b → D(a) ≠ D(b)
distinct_f(S) ↔ ∀a,b ∈ S: a ≠ b → f(a) ≠ f(b)
```

**valueSum(S)** adds the effective values of cells in S.

```text
valueSum(S) = Σ_{c∈S} V(c)
sum_D(S) = Σ_{c∈S} D(c)
product_D(S) = Π_{c∈S} D(c)
```

**count(S,P)** counts the members of S satisfying predicate P.

```text
count(S,P) = |{x ∈ S : P(x)}|
faceDigits(S) = {d ∈ 𝔄 : ∃c ∈ S: D(c) = d}
multiplicity(L,d) = |{i ∈ [0,|L|) : L[i] = d}|
```

**count(S,P)** counts the members of S satisfying predicate P.

```text
min_f(S) = x ↔ (∃c ∈ S: f(c) = x) ∧ ∀c ∈ S: x ≤ f(c)
max_f(S) = x ↔ (∃c ∈ S: f(c) = x) ∧ ∀c ∈ S: x ≥ f(c)
```

**relation(r,a,b)** is the arithmetic relation selected by the supplied pair relation r.

```text
relation(r,a,b) ↔
  (r.op = difference ∧ |a−b| = r.value)
  ∨ (r.op = at-least ∧ |a−b| ≥ r.value)
  ∨ (r.op = ratio ∧ (a×r.value = b ∨ b×r.value = a))
  ∨ (r.op = sum ∧ a+b = r.value)
  ∨ (r.op = less ∧ a < b)
  ∨ (r.op = multiple ∧ ((a=b=0)
       ∨ (min(a,b) ≠ 0 ∧ ∃q ∈ ℤ: max(a,b) = q×min(a,b))))
  ∨ (r.op = shift ∧ a ≠ 5 ∧ b ≠ 5
       ∧ ¬((odd(a) ↔ odd(b)) ↔ (high(a) ↔ high(b))))
```

**connected(S)** says that any two cells of S can be joined by orthogonal steps within S.

```text
reach_S(a,b) ↔ ∨_{k=0}^{N−1} ∃x₀,…,xₖ ∈ S:
  x₀=a ∧ xₖ=b ∧ ∀t ∈ [0,k): orth(xₜ,xₜ₊₁)
connected(S) ↔ S ≠ ∅ ∧ ∀a,b ∈ S: reach_S(a,b)
```

**partition(P,C)** says that the supplied region family P covers C exactly once.

```text
partition(P,C) ↔ (∀R ∈ P: R ≠ ∅ ∧ R ⊆ C)
  ∧ ∀c ∈ C: ∃R ∈ P: c ∈ R ∧ ∀T ∈ P: (c ∈ T ↔ T=R)
same_P(a,b) ↔ ∃R ∈ P: a ∈ R ∧ b ∈ R
```

**eval(e,ℓ)** evaluates an authored expression using integer letter bindings ℓ.

```text
eval(number(x),ℓ) = x; eval(letter(a),ℓ) = ℓ(a)
eval(op(e₁,e₂),ℓ) = eval(e₁,ℓ) op eval(e₂,ℓ), for op ∈ {+,−,×}
eval(e₁/e₂,ℓ) = x ↔ b ≠ 0 ∧ a = b×x, where a=eval(e₁,ℓ), b=eval(e₂,ℓ)
eval(e₁^e₂,ℓ) = a^b, defined when b ∈ ℤ ∧ b ≥ 0
```

**defined(e,ℓ)** says that evaluation returns a number.

```text
defined(e,ℓ) ↔ ∃v: eval(e,ℓ)=v
```

ValuedRules are the declared rules that read V. Meaning_r(D,V) is rule r’s formula using the shared digits and values.

For ordered sequences, distinct compares positions and sums and counts retain repeated positions. Empty sums are zero; empty products are one. Connectedness expands over the finite board; a partition covers each cell exactly once. Expression division has an integer result, and every subexpression must be defined.
