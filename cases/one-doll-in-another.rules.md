---
format: open-rules
title: One Doll in Another
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/ttse9k3atr
case: https://sudoku-sleuth.com/cases/one-doll-in-another
library: https://rules.sudoku-sleuth.com/
status: read
givens: r3c6=6 r5c3=2 r7c2=4 r7c8=9
---

```rules
sudoku 9x9
kropki-1: kropki r3c4-r3c5 colour "white"
kropki-2: kropki r6c6-r7c6 colour "white"
kropki-3: kropki r5c6-r6c6 colour "white"
kropki-4: kropki r3c1-r3c2 colour "white"
kropki-5: kropki r4c1-r4c2 colour "white"
doll-sum-1: doll-sum r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r8c2-r9c2 sums [17]
doll-sum-2: doll-sum r4c9-r4c8-r4c7-r4c6-r4c5-r4c4-r4c3-r4c2-r4c1 sums [3]
doll-sum-3: doll-sum r1c6-r2c6-r3c6-r4c6-r5c6-r6c6-r7c6-r8c6-r9c6 sums [4,6,8]
doll-sum-4: doll-sum r9c6-r8c6-r7c6-r6c6-r5c6-r4c6-r3c6-r2c6-r1c6 sums [9,10]
doll-sum-5: doll-sum r1c8-r2c8-r3c8-r4c8-r5c8-r6c8-r7c8-r8c8-r9c8 sums [11]
doll-sum-6: doll-sum r3c9-r3c8-r3c7-r3c6-r3c5-r3c4-r3c3-r3c2-r3c1 sums [11,16]
doll-sum-7: doll-sum r3c1-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8-r3c9 sums [3,6]
doll-sum-8: doll-sum r1c4-r2c4-r3c4-r4c4-r5c4-r6c4-r7c4-r8c4-r9c4 sums [4]
doll-sum-9: doll-sum r8c1-r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8-r8c9 sums [17]
doll-sum-10: doll-sum r7c9-r7c8-r7c7-r7c6-r7c5-r7c4-r7c3-r7c2-r7c1 sums [6,9]
```

Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.

Consecutive pairs: Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.

RUSSIAN DOLL SUMS: In each row or column with an outside clue, there exist two digits A and B which sum to the clue and the digits between A and B also sum to the outside clue. Multiple clues in the same row or column are separated by spaces.
