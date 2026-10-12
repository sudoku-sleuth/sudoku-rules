---
format: open-rules
title: Sum Neighbors
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/o7c8p905gq
case: https://sudoku-sleuth.com/cases/sum-neighbors
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c3=3 r3c5=5 r4c6=3 r5c7=8
---

```rules
sudoku 9x9
run-sum-1: run-sum r3c1-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8-r3c9 sum 12
run-sum-2: run-sum r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r2c9 sum 10
run-sum-3: run-sum r1c4-r2c4-r3c4-r4c4-r5c4-r6c4-r7c4-r8c4-r9c4 sum 7
run-sum-4: run-sum r1c6-r2c6-r3c6-r4c6-r5c6-r6c6-r7c6-r8c6-r9c6 sum 7
run-sum-5: run-sum r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r8c2-r9c2 sum 9
run-sum-6: run-sum r1c3-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3-r8c3-r9c3 sum 6
run-sum-7: run-sum r6c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7-r6c8-r6c9 sum 6
run-sum-8: run-sum r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5 sum 9
run-sum-9: run-sum r4c1-r4c2-r4c3-r4c4-r4c5-r4c6-r4c7-r4c8-r4c9 sum 9
run-sum-10: run-sum r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8-r5c9 sum 18
run-sum-11: run-sum r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8-r7c9 sum 0
run-sum-12: run-sum r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9 sum 5
run-sum-13: run-sum r8c1-r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8-r8c9 sum 5
run-sum-14: run-sum r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r7c7-r8c7-r9c7 sum 9
run-sum-15: run-sum r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1-r9c1 sum 24
```

**Sudoku, Runsums**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Runsums: Clues outside the grid give the sum of all digits that are consecutive with at least one of the adjacent digits in the corresponding row or columnn. For example, a row with digits 167853249 would have outside clue 26 = (6+7+8) + (3+2). 

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
