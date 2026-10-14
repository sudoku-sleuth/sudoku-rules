---
format: open-rules
title: Counterweights
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/1439xdcx2z
case: https://sudoku-sleuth.com/cases/counterweights
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c2=5 r3c4=1 r5c8=5 r6c6=7 r8c2=6 r9c9=3
exported: df51945a78f87ce538d4702772b2dffa
---

```rules
sudoku 9x9
double-arrow-1: double-arrow r2c1-r1c1-r1c2-r1c3-r2c3 ends ["r3c1","r3c3"]
double-arrow-2: double-arrow r8c1-r9c1-r9c2-r9c3-r8c3 ends ["r7c1","r7c3"]
double-arrow-3: double-arrow r3c8-r3c9-r2c9-r1c9-r1c8 ends ["r3c7","r1c7"]
double-arrow-4: double-arrow r4c4-r4c5-r5c5-r6c5-r6c4 ends ["r4c3","r6c3"]
double-arrow-5: double-arrow r4c8-r4c7-r5c7-r6c7-r6c8 ends ["r4c9","r6c9"]
double-arrow-6: double-arrow r8c4-r7c4-r7c5-r7c6-r8c6 ends ["r9c4","r9c6"]
double-arrow-7: double-arrow r4c1-r5c1 ends ["r4c2","r6c1"]
double-arrow-8: double-arrow r8c7-r7c7-r7c8 ends ["r9c7","r7c9"]
double-arrow-9: double-arrow r1c5-r1c6-r2c6 ends ["r1c4","r3c6"]
```

**Sudoku, Double Arrow**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Double Arrows: Digits along a line sum to same total as the digits in the circles connected to the line.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
