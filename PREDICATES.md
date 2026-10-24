# Predicates

Predicates are the mathematical vocabulary of Open Rules. They read digits and values, compare numbers, select cells and describe relationships. A Boolean predicate returns true or false; other shared functions return numbers, cells or collections.

Predicates have typed inputs and results. They are used inside formulas, not declared as rules in a case file. Write `whispers-5` to place a rule; use functions such as `read` and `edgeDifference` when defining its maths.

The [shared predicate reference](rules/predicates.md) contains the complete vocabulary, signatures and definitions. [Types](spec/types.md) and the [formula grammar](spec/grammar.ebnf) describe the language.

## How formulas compose

[Difference Line](rules/difference-line.md) combines geometry with arithmetic. Its geometry checks an ordered path or explicit edge network. Its window functions select neighbouring pairs. `edgeDifference` reads the chosen channel at each end and takes the absolute difference.

For [Whispers 5](rules/whispers-5.md), the block uses effective values and requires each difference to be at least five. For the first step of a path, this is:

```text
|V(r4c2) − V(r4c3)| ≥ 5
```

`V` reads the effective value. `D` reads the printed digit. They agree in a puzzle with no value-changing rules. A formula can reuse the same comparisons in a line, a cage or a larger composition.

Logic joins these pieces. `∀` means “for every”, `∃` means “there is at least one”, `∧` means “and”, and `→` means “implies”. A block combines those pieces into a complete constraint with setter-supplied parameters. A [rule](RULES.md) then gives that constraint a familiar name and settings.

## Vocabulary by theme

Use this index to find the relevant part of the shared reference. The [typed vocabulary](rules/predicates.md#typed-vocabulary) lists every declaration and its exact signature.

| Theme | Names to look for | Reference |
| --- | --- | --- |
| Board and coordinates | `C`, `rows`, `cols`, `row`, `col`, `boardCell`, `Regions` | [Inputs and primitive operations](rules/predicates.md#inputs-and-primitive-operations) |
| Digits, values and channels | `D`, `V`, `read`, `Channel`, `channelValue` | [Channels, operands and geometry](rules/predicates.md#channels-operands-and-geometry) |
| Optional inputs and types | `some`, `absent`, `present`, `unwrap` | [Inputs and primitive operations](rules/predicates.md#inputs-and-primitive-operations) |
| Arithmetic and pair relations | `rem`, `odd`, `relationSpec`, `pairRelation`, `edgeDifference` | [Typed vocabulary](rules/predicates.md#typed-vocabulary) |
| Digit classes and counts | `digitClass`, `classCount`, `classProfile`, `classPattern`, `countWhere` | [Typed vocabulary](rules/predicates.md#typed-vocabulary) |
| Distinctness and whole-set rules | `allDifferent`, `repeatPolicy`, `valueSet`, `classWindows` | [Inputs and primitive operations](rules/predicates.md#inputs-and-primitive-operations), [typed vocabulary](rules/predicates.md#typed-vocabulary) |
| Paths, windows and networks | `next`, `consecutive`, `window`, `graphWindow`, `lineWindows`, `connected` | [Channels, operands and geometry](rules/predicates.md#channels-operands-and-geometry) |
| Sums, products and expressions | `aggregate`, `aggregateOperand`, `operandValid`, `aggregateExpression`, `defined`, `eval` | [Channels, operands and geometry](rules/predicates.md#channels-operands-and-geometry), [inputs](rules/predicates.md#inputs-and-primitive-operations) |
| Rays, prefixes and visibility | `blockedPrefix`, `prefixStop`, `recordHigh`, `visibleRecords` | [Rays, prefixes and sums](rules/predicates.md#rays-prefixes-and-sums) |
| Lookups and coordinates | `lookup`, `lookupRelated`, `queryHit`, `coordinateHit` | [Channels, operands and geometry](rules/predicates.md#channels-operands-and-geometry), [typed vocabulary](rules/predicates.md#typed-vocabulary) |
| Regions and partitions | `partition`, `connectedRegionPartition`, `congruent`, `symmetricRegion` | [Typed vocabulary](rules/predicates.md#typed-vocabulary) |
| Shared routes and networks | `routeAnswer`, `networkAnswer`, `partitionAnswer`, `routeClosed` | [Shared assignments](rules/predicates.md#shared-assignments) |
| Selections, labels and extra channels | `selectedCells`, `choiceAnswer`, `assignmentAnswer`, `cellSymbols`, `reified` | [Shared assignments](rules/predicates.md#shared-assignments) |
| Givens and play state | `given`, `givenValue`, `entered`, `placed`, `correct`, `visible` | [Play state](rules/predicates.md#play-state) |

## Use predicates in a custom rule

An [embedded custom definition](RULES.md#define-a-custom-rule) uses the same vocabulary as a library block. Declare typed parameters, bind local names, and compose the functions into a Boolean formula. The [case-file contract](spec/case-files.md#in-file-custom-definitions) gives a complete example.

The [block guide](BLOCKS.md) shows how these formulas become shared constraints. [Contributing](CONTRIBUTING.md) explains how to propose a reusable definition for the library.
