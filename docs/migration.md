# Upgrade from 0.3 to 1.0

The 1.0 library preserves the solution meaning of the previous library. No valid old parameter set deliberately changes meaning. Defaults are bound before rewriting; a declaration remains one declaration, including under negation.

## Rewrite a case

```ts
import { migrateCase, checkCaseReferences, compilePublicLibrary } from '@sudoku-sleuth/open-rules';

const migrated = migrateCase({ file: 'example.rules.md', text: oldText });
if (!migrated.value) throw new Error(JSON.stringify(migrated.diagnostics));
// registry is compiled from the current public rule pages.
const checked = checkCaseReferences(migrated.value, registry);
```

`migrateCase` is a pure source transform. It reads neither files nor answers. It preserves the header, instance IDs, negation count, conditions, comments and other fenced blocks. External-library declarations remain as authored. Custom definitions retain their metadata; calls to the removed 0.3 helpers listed below are expanded from their archived formulas. Conditional declarations and declarations with an explicit drawing element retain their named declaration when available; Pair may select an equivalent XV or Kropki declaration while preserving those annotations. Removed Index Count maps to Lookup in count mode with the same primary cells; Aggregate Relation has no primary cell scope. Run the current case checker on the returned source.

For already decoded data, call `migrateDeclaration({kind, parameters})`. Values are numbers, bigints, strings, booleans, arrays and records. It returns an array containing one declaration. `migrateParsedDeclaration(ast)` projects the old parser AST and preserves exact keyword integers. `printMigratedDeclaration` writes the result without rounding those integers. Use `migrateCase` for source files with instance IDs, negations, drawing elements or conditions.

`migrationTable` is machine-readable: `kind` is the old name, `target` is the default returned declaration kind (Pair chooses its target per declaration), `canonical` owns its formula, `form` says rule or block, `parameterChanges` lists removed inputs when present, and `meaning` is identical. Board-dependent diagonals, indexing, lookup targets, negative scopes and anti-move scopes retain their bound declaration. Constructed Regions retains its local existential partition. Exact keyword integers outside JavaScript's safe range also retain the Pair rule form, so they never pass through a rounded JSON number. No answer-dependent expression is evaluated by the migration.

## Rule names and pair settings

Little Killer is now Diagonal Sum (`diagonal-sum`). The `little-killer` spelling, searches and published route remain aliases with the same parameters and meaning.

Whispers retains its general `gap`. Prefer `whispers-5` for German Whispers and `whispers-4` for Dutch Whispers; these rules bind Difference Line with the gap fixed at 5 or 4. Existing Whispers declarations with either gap may stay unchanged. Pill, Pill Arrow and Arrow Pill name Arrow with a two- or three-cell decimal bulb.

Pair retains its name. Migration selects a name per declaration after binding defaults:

| Pair settings | Result |
| --- | --- |
| `sum 10`, channel V | `xv … x` |
| `sum 5`, channel V | `xv … v` |
| `difference 1`, channel V | `kropki … white` |
| `ratio 2`, channel V | `kropki … black` |
| Other relations, channel D, or extra settings the target cannot express | Pair with its original settings |

XV and Kropki both read effective values V and require two cells. Neither has a negative or “all given” parameter; those conditions use a separate Negative declaration. Migration preserves that declaration, its scope and exceptions, as well as each clue's IDs, negations, conditions, drawing elements and comments. An outer `not` negates the mapped clue; it does not impose “all given”. Pair declarations with extra relation fields or unsupported settings stay Pair. Kropki aliases are white dot, black dot and Kropki dots; XV aliases are X and V and XV clues. Negative, Anti King and Anti Knight keep their names.

## Removed rule spellings

Whispers (`whispers`) is the retained rule for legacy `whisper`; Cage (`cage`) replaces legacy `killer` and `killer-cage`; Extra Regions (`extra-regions`) replaces legacy `unique`. The removed pages are no longer current rules. Migration binds each old contract and defaults before changing the kind, including URL references, IDs, negation, conditions and drawing elements. These renames preserve the original parameters and primary cell scope.

Outside and Quadruple remain separate: Outside accepts repeated cell occurrences, while Quadruple takes a cell set.

## Bindings and guards

- Cage uses a zero-coefficient D-count operand for face-digit distinctness independently of the total's channel. An absent total contributes zero on each side.
- Double Arrow validates repeats over all end and shaft occurrences together. Pair, Cage Pair and Double Arrow retain rejecting arity guards, using an impossible negative absolute difference instead of an unsafe index.
- Product Cage uses D and inverts distinct into repeats. Bremban permits repeats. Kropki and XV read V.
- Class Pattern preserves open two-cell checks, cyclic windows and short-network component checks. Modulus and window length remain independent. Same Class reads the supplied set; Window Classes covers every board square.
- Profiles preserve list occurrences, set membership, repeated class records, lower-bound clue multiplicities and exact counts. Quadruple's set contract differs from Outside's occurrence-collection contract.
- Lookup counts query occurrences. Every query carries a bounded one-based index, its own target, channel and relation; noninteger indices miss.
- Complete and partial Arrow, Region Sum's maximal runs, Zipper's centre policy, local modifier witnesses and shared route/region ownership retain their separate conditions.

## Collection defaults

These six formerly required parameters now default to empty collections: Digit Profile classes and counts; Negative except; Cage Shapes free; Constructed Regions borders and joins. This also accepts the previously rejected empty collections in the published Negative, Cage Shapes and Constructed Regions examples. Existing valid parameter sets keep their meaning.

## Removed inert parameters

Index no longer takes `strips`; Value Modifier no longer takes `name`. Neither input appeared in its old formula. The migration drops both inputs, preserving their meaning. `migrationTable.parameterChanges` records these removals.

## Formula API changes

The clean break removes these callable names: minimumDigit, maximumDigit, minimumValue, maximumValue, in, at, distinct_f, distinctAt, distinct_D, distinct_V, valueSum, sum_D, product_D, faceDigits, min_D, max_D, min_V, max_V, connectedCells, shaded, excludes, relationOnScope, scopedMove, lookupEquals, inverseIndex, orderedRay and indexHit.

Use aggregate(S,ch,operation), repeatPolicy(S,ch,repeats), allDifferent(S,f), connected(S), marked(name,c), lookupRelated and queryHit. For occurrence-aware distinctness, pass a list or path; for member distinctness, pass a set. orderedCells now accepts any cell collection, preserving list occurrences and ordering set members by board index. graphEdge accepts any collection of edge records. classWindows adds an explicit exact/at-least comparison argument.

The declaration migrators rewrite published rule declarations. They expand removed helpers with archived migration bodies in embedded custom-rule maths. Other removed callable names need a manual update to the new typed vocabulary. The previous prelude, rule contracts and formulas remain available as migration fixtures.

The library removes the single-owner helpers boundedAssignment, sequenceMeaning, monotonic, sameProfile, sumLineMeaning, valueSetMeaning and japaneseSums; their formulas now live on Assignment, Local Sequence, Monotone Line, Profile Relation, Sum Partition, Value Set and Japanese Sums respectively. Inline the formula from the owning page in custom formula programs. Use allCells for either grouped sets or edge lists, samePartition(Regions,a,b) for authored region membership, and D(c) for the answer digit. Use ⌊minimumPair(a,b)⌋ or ⌊maximumPair(a,b)⌋ when integer endpoints are needed; minimumPosition and maximumPosition are removed.

## Finite normalisation

`declarationRegistry` records lowering coverage. Class Pattern, Value Set, Aggregate Groups and Lookup Count have formula definitions but no finite-primitive lowering. Existing setter shorthands retain their prior lowering entries. A migrated general declaration can therefore have an unsupported normalisation status even when its formula is equivalent. Bounded formula conformance covers every old kind independently of that normaliser.

## Every old kind

Migration chooses a familiar rule where one exists, otherwise a block with settings. Each row names its formula-owning block.

| Old kind | New declaration and block | Meaning |
| --- | --- | --- |
| `absent-digits` | `absent-digits` (rule; formula home `digit-profile`) | identical |
| `aggregate-equation` | `aggregate-equation` (block; formula home `aggregate-equation`) | identical |
| `aggregate-relation` | `aggregate-equation` (block; formula home `aggregate-equation`) | identical |
| `allowed-digits` | `allowed-digits` (rule; formula home `digit-profile`) | identical |
| `anti-king` | `anti-king` (rule; formula home `relation-scope`) | identical |
| `anti-knight` | `anti-knight` (rule; formula home `relation-scope`) | identical |
| `arrow` | `arrow` (rule; formula home `arrow`) | identical |
| `assignment` | `assignment` (block; formula home `assignment`) | identical |
| `battenburg` | `battenburg` (rule; formula home `battenburg`) | identical |
| `between` | `between` (rule; formula home `endpoint-range`) | identical |
| `blocked-sight` | `blocked-sight` (block; formula home `blocked-sight`) | identical |
| `bremban` | `bremban` (rule; formula home `value-set`) | identical |
| `cage` | `cage` (rule; formula home `aggregate-equation`) | identical |
| `cage-expressions` | `cage-expressions` (rule; formula home `cage-expressions`) | identical |
| `cage-pair` | `cage-pair` (rule; formula home `aggregate-equation`) | identical |
| `cage-shapes` | `cage-shapes` (rule; formula home `cage-shapes`) | identical |
| `cell-entries` | `cell-entries` (block; formula home `cell-entries`) | identical |
| `choice-count` | `choice-count` (block; formula home `choice-count`) | identical |
| `clone` | `clone` (rule; formula home `relation-scope`) | identical |
| `close-whispers` | `close-whispers` (rule; formula home `difference-line`) | identical |
| `constructed-regions` | `constructed-regions` (rule; formula home `region-partition`) | identical |
| `coordinate-arrows` | `coordinate-arrows` (rule; formula home `coordinate-arrows`) | identical |
| `coordinate-count` | `coordinate-count` (block; formula home `coordinate-count`) | identical |
| `counting-circles` | `counting-circles` (rule; formula home `digit-profile`) | identical |
| `decoration` | `decoration` (block; formula home `decoration`) | identical |
| `derived-count` | `derived-count` (block; formula home `derived-count`) | identical |
| `diagonal` | `diagonal` (rule; formula home `relation-scope`) | identical |
| `diagonal-lines` | `diagonal-lines` (rule; formula home `diagonal-lines`) | identical |
| `difference-line` | `difference-line` (block; formula home `difference-line`) | identical |
| `digit-profile` | `digit-profile` (block; formula home `digit-profile`) | identical |
| `doll-sum` | `doll-sum` (rule; formula home `selected-stretch`) | identical |
| `double-arrow` | `double-arrow` (rule; formula home `aggregate-equation`) | identical |
| `entropic` | `entropic` (rule; formula home `class-pattern`) | identical |
| `equal-sums` | `equal-sums` (rule; formula home `aggregate-groups`) | identical |
| `equality-cage` | `equality-cage` (rule; formula home `digit-profile`) | identical |
| `extremum` | `extremum` (rule; formula home `neighbour-extremum`) | identical |
| `flat-mates` | `flat-mates` (rule; formula home `flat-mates`) | identical |
| `greek-carpet` | `greek-carpet` (rule; formula home `greek-carpet`) | identical |
| `hidden-modular` | `hidden-modular` (rule; formula home `hidden-modular`) | identical |
| `index` | `index` (rule; formula home `lookup`) | identical |
| `index-count` | `lookup` (block; formula home `lookup`) | identical |
| `index-line` | `index-line` (rule; formula home `lookup`) | identical |
| `japanese-sums` | `japanese-sums` (rule; formula home `japanese-sums`) | identical |
| `killer` | `cage` (rule; formula home `aggregate-equation`) | identical |
| `killer-cage` | `cage` (rule; formula home `aggregate-equation`) | identical |
| `kropki` | `kropki` (rule; formula home `aggregate-equation`) | identical |
| `layered-cage` | `layered-cage` (rule; formula home `layered-cage`) | identical |
| `limited-digits` | `limited-digits` (rule; formula home `digit-profile`) | identical |
| `line-choice` | `line-choice` (block; formula home `line-choice`) | identical |
| `little-killer` | `diagonal-sum` (rule; formula home `aggregate-equation`) | identical |
| `local-sequence` | `local-sequence` (block; formula home `local-sequence`) | identical |
| `lockout` | `lockout` (rule; formula home `endpoint-range`) | identical |
| `look-and-say` | `look-and-say` (rule; formula home `digit-profile`) | identical |
| `lookup` | `lookup` (block; formula home `lookup`) | identical |
| `magic-square` | `magic-square` (rule; formula home `magic-square`) | identical |
| `mapped-values` | `mapped-values` (block; formula home `mapped-values`) | identical |
| `marking-relation` | `marking-relation` (block; formula home `marking-relation`) | identical |
| `maze` | `maze` (block; formula home `maze`) | identical |
| `mean-lines` | `mean-lines` (rule; formula home `aggregate-groups`) | identical |
| `modular` | `modular` (rule; formula home `class-pattern`) | identical |
| `molecules` | `molecules` (rule; formula home `molecules`) | identical |
| `n-mate` | `n-mate` (rule; formula home `n-mate`) | identical |
| `nabner` | `nabner` (rule; formula home `value-set`) | identical |
| `negative` | `negative` (rule; formula home `relation-scope`) | identical |
| `neighbour-count` | `neighbour-count` (block; formula home `neighbour-count`) | identical |
| `network-clue` | `network-clue` (block; formula home `network-clue`) | identical |
| `number-property` | `number-property` (block; formula home `number-property`) | identical |
| `numbered-room` | `numbered-room` (rule; formula home `lookup`) | identical |
| `ordered-block` | `ordered-block` (rule; formula home `ordered-block`) | identical |
| `outside` | `outside` (rule; formula home `digit-profile`) | identical |
| `pair` | `pair` (rule; formula home `aggregate-equation`) | identical |
| `paired-roles` | `paired-roles` (block; formula home `paired-roles`) | identical |
| `palindrome` | `palindrome` (rule; formula home `mirrored-pairs`) | identical |
| `parity` | `parity` (rule; formula home `class-pattern`) | identical |
| `parity-cells` | `parity-cells` (rule; formula home `class-pattern`) | identical |
| `pointing-arrow` | `pointing-arrow` (rule; formula home `lookup`) | identical |
| `pointing-thermo` | `pointing-thermo` (rule; formula home `lookup`) | identical |
| `prefix-sum` | `prefix-sum` (rule; formula home `aggregate-equation`) | identical |
| `pressure-gauge` | `pressure-gauge` (rule; formula home `pressure-gauge`) | identical |
| `primality` | `primality` (rule; formula home `number-property`) | identical |
| `product-cage` | `product-cage` (rule; formula home `aggregate-equation`) | identical |
| `profile-relation` | `profile-relation` (block; formula home `profile-relation`) | identical |
| `quadruple` | `quadruple` (rule; formula home `digit-profile`) | identical |
| `region-clue` | `region-clue` (block; formula home `region-clue`) | identical |
| `region-partition` | `region-partition` (block; formula home `region-partition`) | identical |
| `region-shape` | `region-shape` (block; formula home `region-shape`) | identical |
| `region-sum` | `region-sum` (rule; formula home `aggregate-groups`) | identical |
| `relation-scope` | `relation-scope` (block; formula home `relation-scope`) | identical |
| `remainder-cage` | `remainder-cage` (rule; formula home `number-property`) | identical |
| `renban` | `renban` (rule; formula home `value-set`) | identical |
| `rotational-sums` | `rotational-sums` (rule; formula home `mirrored-pairs`) | identical |
| `route` | `route` (block; formula home `route`) | identical |
| `route-clue` | `route-clue` (block; formula home `route-clue`) | identical |
| `route-group` | `route-group` (block; formula home `route-group`) | identical |
| `run-sum` | `run-sum` (rule; formula home `selected-stretch`) | identical |
| `same-class` | `same-class` (rule; formula home `class-pattern`) | identical |
| `sandwich` | `sandwich` (rule; formula home `selected-stretch`) | identical |
| `scoped-move` | `scoped-move` (rule; formula home `relation-scope`) | identical |
| `selection` | `selection` (block; formula home `selection`) | identical |
| `shade-components` | `shade-components` (block; formula home `shade-components`) | identical |
| `shifter-line` | `shifter-line` (rule; formula home `shifter-line`) | identical |
| `skyscraper` | `skyscraper` (rule; formula home `blocked-sight`) | identical |
| `slow-thermo` | `slow-thermo` (rule; formula home `monotone-line`) | identical |
| `split-pea` | `split-pea` (rule; formula home `split-pea`) | identical |
| `subset-total` | `subset-total` (block; formula home `subset-total`) | identical |
| `sudoku` | `sudoku` (rule; formula home `sudoku`) | identical |
| `sum-free-cage` | `sum-free-cage` (rule; formula home `digit-profile`) | identical |
| `sum-partition` | `sum-partition` (block; formula home `sum-partition`) | identical |
| `summit` | `summit` (rule; formula home `difference-line`) | identical |
| `symbol-house` | `symbol-house` (block; formula home `symbol-house`) | identical |
| `tardis` | `tardis` (rule; formula home `neighbour-extremum`) | identical |
| `thermo` | `thermo` (rule; formula home `monotone-line`) | identical |
| `unique` | `extra-regions` (rule; formula home `relation-scope`) | identical |
| `value-modifier` | `value-modifier` (block; formula home `value-modifier`) | identical |
| `vault` | `vault` (rule; formula home `vault`) | identical |
| `whisper` | `whispers` (rule; formula home `difference-line`) | identical |
| `whispers` | `whispers` (rule; formula home `difference-line`) | identical |
| `window-classes` | `window-classes` (rule; formula home `class-pattern`) | identical |
| `x-sum` | `x-sum` (rule; formula home `selected-stretch`) | identical |
| `yin-yang` | `yin-yang` (rule; formula home `yin-yang`) | identical |
| `zipper` | `zipper` (rule; formula home `mirrored-pairs`) | identical |

## Parameterised predicates

Use moveRelation(move,a,b) for orthogonal steps, diagonal steps, king steps, knight moves and bishop lines. It replaces orth, touch, king, knight and bishop. The diagonal setting is a single diagonal step; bishop accepts any nonzero diagonal displacement.

Use numericProperty(n,"prime",1) or numericProperty(n,"composite",1) for primality. Both require an integer greater than one; the composite setting requires a proper factor and the prime setting excludes one. The old properFactor, prime and composite helpers are removed.

Use valueSet(cells,channel,repeats,mode), with consecutive, nonconsecutive or separated support, in place of consecutiveValues and nonconsecutiveValues. The repeat and separation settings preserve their occurrence policies. Use classCount(cells,{number},channel) instead of frequency; classCount accepts any collection of numeric class members. migrateCase expands the archived bodies of these removed helpers in embedded formulas.

## Cage aliases

Cage is the public rule name. Killer Cage and Killer remain aliases. Both legacy kinds, killer and killer-cage, and their library URLs load the Cage contract and migrate to cage with the same defaults and conditions. Little Killer is now Diagonal Sum; the old name and published route remain aliases.

## Liar rules

Liar Cells (liar-cells) and Lying Clues (clue-count) are additional named rules. Liar Cells constrains the shared effective-value channel; Lying Clues counts complete false clues from an explicit owned list. They reuse the existing counting and distinctness functions. See the [lying-clue guide](design/lying-clues.md) for scope and channel conventions.

<!-- formula-migration:start -->
## Embedded custom formulas

The migration table in src/migration-data.ts owns every removed callable term from the frozen 0.3 vocabulary, together with the folded uniform predicate. The table below is generated from it by bun scripts/library-report.ts.

Rewrites preserve occurrence policy: distinct_D and distinct_V compare different cells in a set; distinctAt compares different positions, including repeated cells. Face sums and products bind their exact whole-number result as position; effective-value sums retain fractions. Shading reads the existing H set directly. The four nonempty minimum/maximum primitives remain available for archived extremum bodies.

Where the table says local, migration substitutes the archived body into a fresh local let value. Its dependencies are migrated recursively. Helper arguments and enclosing formula variables cannot be captured by generated binders. Function-valued references become typed lambdas; the generic distinctness references use allDifferent. Parentheses retain the scope of conditionals, quantifiers, lambdas and lets.

| Legacy callable | Action | Replacement or archived body |
| --- | --- | --- |
| `answer` | Embed local value | `D(c)` |
| `at` | Embed local value | `L[i]` |
| `bishop` | Rewrite | `moveRelation("bishop",a,b)` |
| `boundedAssignment` | Embed local value | `(((((size >= 0) and (labels >= 0)) and (\|xs\| = size)) and (forall x∈xs: ((0 <= x) and (x < labels)))) and (bijective implies ((size = labels) and distinctAt(xs,(λx:position:x)))))` |
| `composite` | Rewrite | `numericProperty(x,"composite",1)` |
| `connectedCells` | Embed local value | `((\|S\| > 0) and (forall a,b∈S: (exists route:list<cell>: ((((((0 < \|route\|) and (\|route\| <= \|C\|)) and (route[0] = a)) and (route[(\|route\| - 1)] = b)) and (forall c∈route: (c in S))) and (forall t∈[0,(\|route\| - 1)): orth(route[t],route[(t + 1)]))))))` |
| `consecutiveValues` | Rewrite | `valueSet(S,ch,repeats,"consecutive")` |
| `distinct_D` | Rewrite | `∀a,b∈S: a!=b → D(a)!=D(b)` |
| `distinct_f` | Rewrite | `∀a,b∈S: a!=b → f(a)!=f(b)` |
| `distinct_V` | Rewrite | `∀a,b∈S: a!=b → V(a)!=V(b)` |
| `distinctAt` | Rewrite | `∀i,j∈[0,\|L\|): i!=j → f(L[i])!=f(L[j])` |
| `excludes` | Embed local value | `(forall d∈Q: (forall c∈S: (D(c) != d)))` |
| `faceDigits` | Embed local value | `{d∈𝔄:(exists c∈S: (D(c) = d))}` |
| `frequency` | Rewrite | `classCount(S,{n},ch)` |
| `graphVertices` | Embed local value | `{c∈C:(exists e∈E: (c in e))}` |
| `in` | Embed local value | `(c in R)` |
| `indexHit` | Embed local value | `(let n=(read(source,indexChannel) + offset); ((⌊n⌋ = n) and (exists k∈[1,(\|L\| + 1)): ((k = n) and lookupRelated(L,k,target,ch,r)))))` |
| `inverseIndex` | Embed local value | `(forall i∈[0,\|L\|): (let n=read(L[i],ch); ((⌊n⌋ = n) and (exists k∈[1,(\|L\| + 1)): ((k = n) and lookupEquals(L,k,(i + 1),ch))))))` |
| `japaneseSums` | Embed local value | `((distinctAt(L,(λc:cell:cellIndex(c))) and (countWhere([0,\|L\|),(λi:position:markedStart(L,i,name))) = \|totals\|)) and (forall a∈[0,\|L\|): (forall b∈[(a + 1),(\|L\| + 1)): (markedRun(L,a,b,name) implies (let j=countWhere([0,a),(λi:position:markedStart(L,i,name))); ((((0 <= j) and (j < \|totals\|)) and repeatPolicy(⟨L[i]:i∈[a,b)⟩,ch,repeats)) and (aggregate(⟨L[i]:i∈[a,b)⟩,ch,"sum") = totals[j])))))))` |
| `king` | Rewrite | `moveRelation("king",a,b)` |
| `knight` | Rewrite | `moveRelation("knight",a,b)` |
| `lookupEquals` | Embed local value | `lookupRelated(L,n,target,ch,relationSpec("difference",0))` |
| `max_D` | Embed local value | `maximumDigit({D(c):c∈S})` |
| `max_V` | Embed local value | `maximumValue({V(c):c∈S})` |
| `maximumPosition` | Embed local value | `(if (a > b) then a else b)` |
| `min_D` | Embed local value | `minimumDigit({D(c):c∈S})` |
| `min_V` | Embed local value | `minimumValue({V(c):c∈S})` |
| `minimumPosition` | Embed local value | `(if (a < b) then a else b)` |
| `monotonic` | Embed local value | `((((direction = "forward") or (direction = "either")) and (forall i∈[0,(\|L\| - 1)): (if strict then (read(L[i],ch) < read(L[(i + 1)],ch)) else (read(L[i],ch) <= read(L[(i + 1)],ch))))) or (((direction = "reverse") or (direction = "either")) and (forall i∈[0,(\|L\| - 1)): (if strict then (read(L[i],ch) > read(L[(i + 1)],ch)) else (read(L[i],ch) >= read(L[(i + 1)],ch))))))` |
| `nonconsecutiveValues` | Rewrite | `valueSet(S,ch,repeats and not separated,if separated then "separated" else "nonconsecutive")` |
| `orderedRay` | Embed local value | `⟨boardCell((row(origin) + (t * dr)),(col(origin) + (t * dc))):t∈[0,(rows + cols)),(((((includeOrigin or (t > 0)) and (0 <= (row(origin) + (t * dr)))) and ((row(origin) + (t * dr)) < rows)) and (0 <= (col(origin) + (t * dc)))) and ((col(origin) + (t * dc)) < cols))⟩` |
| `orth` | Rewrite | `moveRelation("orthogonal",a,b)` |
| `prime` | Rewrite | `numericProperty(x,"prime",1)` |
| `product_D` | Rewrite | `let result:position=⌊aggregate(S,"D","product")⌋; result` |
| `properFactor` | Embed local value | `∃a,b∈ℤ: a>1 ∧ b>1 ∧ a*b=x` |
| `relationOnScope` | Embed local value | `((forall p∈pairs: ((\|p\| = 2) and (forall c∈p: (c in S)))) and (forall p∈pairs: ((\|p\| = 2) implies pairRelation(r,read(p[0],ch),read(p[1],ch)))))` |
| `sameProfile` | Embed local value | `(forall n∈({read(c,ch):c∈A} union {read(c,ch):c∈B}): (if multiset then (frequency(A,n,ch) = frequency(B,n,ch)) else ((frequency(A,n,ch) > 0) iff (frequency(B,n,ch) > 0))))` |
| `sameRegion` | Embed local value | `(exists R∈Regions: ((a in R) and (b in R)))` |
| `scopedMove` | Embed local value | `(forall a,b∈scope: ((moveRelation(m,a,b) and ((D(a) in digits) or (D(b) in digits))) implies not((if (relation = "same") then (read(a,ch) = read(b,ch)) else pairRelation(relationSpec("difference",1),read(a,ch),read(b,ch))))))` |
| `sequenceMeaning` | Embed local value | `(((((\|L\| > 0) and (closed implies (\|L\| >= 3))) and ((mode = "recurrence") implies not(closed))) and ((mode = "transitions") implies (forall p∈allowed: (\|p\| = 2)))) and (if (mode = "recurrence") then (forall i∈[0,(\|L\| - 2)): (read(L[(i + 2)],ch) = ((a * read(L[i],ch)) + (b * read(L[(i + 1)],ch))))) else (forall i,j∈[0,\|L\|): (next(L,i,j,closed) implies (if (mode = "divisors") then divides(read(L[i],ch),read(L[j],ch)) else transitionAllowed(read(L[i],ch),read(L[j],ch),allowed))))))` |
| `shaded` | Rewrite | `c∈H` |
| `sum_D` | Rewrite | `let result:position=⌊aggregate(S,"D","sum")⌋; result` |
| `sumLineMeaning` | Embed local value | `((\|L\| > 0) and (if (mode = "partition") then (if closed then (exists s∈[0,\|L\|): partitionSums(cyclicCut(L,s),total,ch,repeats)) else partitionSums(L,total,ch,repeats)) else (if closed then (forall i∈[0,\|L\|): (exists s∈[0,\|L\|): (exists k∈[1,(\|L\| + 1)): (((start(L,k,s,true) and (exists j∈[0,k): (rem((s + j),\|L\|) = i))) and repeatPolicy(window(L,k,s,true),ch,repeats)) and (aggregate(window(L,k,s,true),ch,"sum") = total))))) else (forall i∈[0,\|L\|): (exists a∈[0,\|L\|): (exists b∈[(a + 1),(\|L\| + 1)): (((a <= i) and (i < b)) and sumSegment(L,a,b,total,ch,repeats))))))))` |
| `touch` | Rewrite | `moveRelation("diagonal",a,b)` |
| `uniform` | Embed local value | `\|S\|>0 ∧ ((∀c∈S:shaded(c)) ∨ (∀c∈S:¬shaded(c)))` |
| `valueSum` | Rewrite | `aggregate(S,"V","sum")` |

## Local kind collisions

A local definition that shares a library kind keeps its own meaning. Reviewed Split Pea formulas migrate to the library rule on positive decimal digit alphabets. A full path supplies line directly; a separate interior and two ends (or bulbs) become the first end, the interior occurrences in order, and the last end. The formula and parameter types must match a reviewed form; declarations retain IDs, negations, conditions, drawings and comments.

Every other collision receives an unused local-<id> name, with a numeric suffix when needed. Both its definition and declarations are renamed. Battenburg with an exhaustive marks record and multicolour Japanese Sums retain their local formulas under this rule. Definitions with an unrecognised Split Pea meaning or a nondecimal alphabet also retain a renamed local definition.
<!-- formula-migration:end -->
