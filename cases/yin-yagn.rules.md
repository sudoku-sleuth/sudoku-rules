---
format: open-rules
title: Yin Yagn
setter: Timotab
source: https://sudokupad.app/de2dt3ohoq
case: https://sudoku-sleuth.com/cases/yin-yagn
library: https://rules.sudoku-sleuth.com/
status: read
---

> • Normal sudoku rules apply: Place the digits 1-9 in every row, column, and box, without repetition.

> • Yin Yang: Shade some cells such that all shaded cells are orthogonally connected, all unshaded cells are orthogonally connected, and no 2x2 area is fully shaded or fully unshaded.

> • A clue that is in cells that are all shaded or all unshaded is RIGHT. A clue that has at least one cell shaded and at least one cell unshaded is very, very WROGN. See below for exact definitions of WROGN clues.

```rules
sudoku 9x9
yin-yang
```

## Cages

> • RIGHT Cages: Digits in cages must sum to the value in the top left corner of the cage.

> • WROGN Cages: Digits in cages must not sum to the value in the top left corner of the cage.

```rules
cage-1: cage r8c7-r8c8 total 9 repeats true if uniform
cage-2: not cage r8c7-r8c8 total 9 repeats true unless uniform
cage-3: cage r9c4-r9c5 total 4 repeats true if uniform
cage-4: not cage r9c4-r9c5 total 4 repeats true unless uniform
cage-5: cage r9c6-r9c7 total 3 repeats true if uniform
cage-6: not cage r9c6-r9c7 total 3 repeats true unless uniform
cage-7: cage r1c2-r1c3 total 17 repeats true if uniform
cage-8: not cage r1c2-r1c3 total 17 repeats true unless uniform
cage-9: cage r1c4-r1c5 total 16 repeats true if uniform
cage-10: not cage r1c4-r1c5 total 16 repeats true unless uniform
cage-11: cage r1c7-r1c8-r1c9-r2c9-r3c9 total 15 repeats true if uniform
cage-12: not cage r1c7-r1c8-r1c9-r2c9-r3c9 total 15 repeats true unless uniform
cage-13: cage r2c7-r2c8 total 15 repeats true if uniform
cage-14: not cage r2c7-r2c8 total 15 repeats true unless uniform
cage-15: cage r3c7-r3c8 total 15 repeats true if uniform
cage-16: not cage r3c7-r3c8 total 15 repeats true unless uniform
cage-17: cage r7c3-r7c4 total 9 repeats true if uniform
cage-18: not cage r7c3-r7c4 total 9 repeats true unless uniform
```

## Black dots

> • RIGHT Kropki: Where digits are separated by a black dot, one must be double the other. Not all dots are necessarily given.

> • WROGN Kropki: Where digits are separated by a black dot, neither is allowed to be double the other.

```rules
kropki-1: kropki r5c1-r6c1 colour "black" if uniform
kropki-2: not kropki r5c1-r6c1 colour "black" unless uniform
kropki-3: kropki r4c1-r5c1 colour "black" if uniform
kropki-4: not kropki r4c1-r5c1 colour "black" unless uniform
kropki-5: kropki r5c1-r5c2 colour "black" if uniform
kropki-6: not kropki r5c1-r5c2 colour "black" unless uniform
kropki-7: kropki r2c1-r3c1 colour "black" if uniform
kropki-8: not kropki r2c1-r3c1 colour "black" unless uniform
kropki-9: kropki r9c8-r9c9 colour "black" if uniform
kropki-10: not kropki r9c8-r9c9 colour "black" unless uniform
kropki-11: kropki r7c9-r8c9 colour "black" if uniform
kropki-12: not kropki r7c9-r8c9 colour "black" unless uniform
kropki-13: kropki r7c3-r8c3 colour "black" if uniform
kropki-14: not kropki r7c3-r8c3 colour "black" unless uniform
kropki-15: kropki r5c7-r5c8 colour "black" if uniform
kropki-16: not kropki r5c7-r5c8 colour "black" unless uniform
```

## Purple lines

> • RIGHT Renban: Digits on a purple line form a set of non-repeating, consecutive digits in any order.

> • WROGN Renban: No two digits on a purple line can be consecutive, regardless of their position on the line. Digits may not repeat on lines.(ie, WROGN renban lines are RIGHT nabner lines).

```rules
renban-1: renban r9c6-r8c6-r7c6-r7c5 if uniform
nabner-1: nabner r9c6-r8c6-r7c6-r7c5 distinct true unless uniform
renban-2: renban r9c4-r8c4-r7c4 if uniform
nabner-2: nabner r9c4-r8c4-r7c4 distinct true unless uniform
renban-3: renban r1c5-r1c6-r1c7 if uniform
nabner-3: nabner r1c5-r1c6-r1c7 distinct true unless uniform
renban-4: renban r6c9-r5c9-r4c9 if uniform
nabner-4: nabner r6c9-r5c9-r4c9 distinct true unless uniform
renban-5: renban r6c6-r6c7-r6c8-r7c8 if uniform
nabner-5: nabner r6c6-r6c7-r6c8-r7c8 distinct true unless uniform
renban-6: renban r4c8-r4c7-r4c6-r3c6 if uniform
nabner-6: nabner r4c8-r4c7-r4c6-r3c6 distinct true unless uniform
renban-7: renban r2c5-r3c5-r3c4 if uniform
nabner-7: nabner r2c5-r3c5-r3c4 distinct true unless uniform
```

## Gold lines

> • RIGHT Nabner: No two digits on a gold line can be consecutive, regardless of their position on the line. Digits may not repeat on lines.

> • WROGN Nabner: Digits on a gold line form a set of non-repeating, consecutive digits in any order. (ie, WROGN nabner lines are RIGHT renban lines)

```rules
nabner-8: nabner r9c3-r9c2-r9c1-r8c1-r7c1 distinct true if uniform
renban-8: renban r9c3-r9c2-r9c1-r8c1-r7c1 unless uniform
nabner-9: nabner r7c2-r8c2-r8c3 distinct true if uniform
renban-9: renban r7c2-r8c2-r8c3 unless uniform
nabner-10: nabner r5c5-r5c6-r5c7 distinct true if uniform
renban-10: renban r5c5-r5c6-r5c7 unless uniform
```

## Quadruples

> • RIGHT Quadruples: Digits in a Quadruple circle must be placed at least once in the four cells touching that circle.

> • WROGN Quadruples: Digits in a Quadruple circle must not be placed at all in the four cells touching that circle.

```rules
quadruple-1: quadruple r7c4-r7c5-r8c4-r8c5 digits [1,2,3,5] if uniform
absent-digits-1: absent-digits r7c4-r7c5-r8c4-r8c5 digits [1,2,3,5] unless uniform
quadruple-2: quadruple r5c6-r5c7-r6c6-r6c7 digits [5,6,7,8] if uniform
absent-digits-2: absent-digits r5c6-r5c7-r6c6-r6c7 digits [5,6,7,8] unless uniform
quadruple-3: quadruple r5c3-r5c4-r6c3-r6c4 digits [2,9] if uniform
absent-digits-3: absent-digits r5c3-r5c4-r6c3-r6c4 digits [2,9] unless uniform
```
