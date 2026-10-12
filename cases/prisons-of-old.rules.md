---
format: open-rules
title: Prisons of Old
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/9f1xszb3ow
case: https://sudoku-sleuth.com/cases/prisons-of-old
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c6-r1c7-r1c8 total 14 connected true
cage-2: cage r1c2-r1c3-r1c4 total 10 connected true
cage-3: cage r2c1-r3c1-r4c1 total 12 connected true
cage-4: cage r6c1-r7c1-r8c1 total 13 connected true
cage-5: cage r9c6-r9c7-r9c8 total 12 connected true
cage-6: cage r9c2-r9c3-r9c4 total 19 connected true
cage-7: cage r2c9-r3c9-r4c9 total 10 connected true
cage-8: cage r6c9-r7c9-r8c9 total 18 connected true
cage-9: cage r3c3-r3c4-r4c3 total 9 connected true
cage-10: cage r3c6-r3c7-r4c7 total 8 connected true
cage-11: cage r6c7-r7c6-r7c7 total 12 connected true
cage-12: cage r6c3-r7c3-r7c4 total 23 connected true
cage-13: cage r6c4-r6c5-r6c6 total 10 connected true
pair-1: pair r1c5-r1c6 relation {"op":"sum","value":10}
pair-2: pair r4c1-r5c1 relation {"op":"sum","value":10}
pair-3: pair r9c4-r9c5 relation {"op":"sum","value":10}
pair-4: pair r5c9-r6c9 relation {"op":"sum","value":10}
pair-5: pair r2c4-r2c5 relation {"op":"sum","value":10}
pair-6: pair r8c5-r8c6 relation {"op":"sum","value":10}
pair-7: pair r1c4-r1c5 relation {"op":"sum","value":5}
pair-8: pair r5c1-r6c1 relation {"op":"sum","value":5}
pair-9: pair r9c5-r9c6 relation {"op":"sum","value":5}
pair-10: pair r4c9-r5c9 relation {"op":"sum","value":5}
pair-11: pair r7c8-r8c8 relation {"op":"sum","value":5}
```

**Sudoku, Cages, XV**

Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
Cages: Digits add to the total in the top left corner of the cage, if given. Digits cannot repeat in cages.
XV pairs: Digits in cells separated by a V sum to 5. Digits in cells connected by a X sum to 10. 

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html
