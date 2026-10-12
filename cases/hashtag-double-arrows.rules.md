---
format: open-rules
title: Hashtag Double Arrows
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/t54xtm5ylt
case: https://sudoku-sleuth.com/cases/hashtag-double-arrows
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r3c3-r3c4-r4c3 total 7 connected true
cage-2: cage r3c6-r3c7-r4c7 total 6 connected true
cage-3: cage r1c1-r1c2-r1c3-r2c1-r3c1 total 34 connected true
cage-4: cage r1c7-r1c8-r1c9-r2c9-r3c9 total 24 connected true
cage-5: cage r7c1-r8c1-r9c1-r9c2-r9c3 total 22 connected true
cage-6: cage r6c3-r7c3-r7c4 total 20 connected true
cage-7: cage r6c7-r7c6-r7c7 total 14 connected true
cage-8: cage r7c9-r8c9-r9c7-r9c8-r9c9 total 31 connected true
cage-9: cage r8c5-r9c5 total 11 connected true
cage-10: cage r5c1-r5c2 total 9 connected true
cage-11: cage r5c8-r5c9 total 9 connected true
cage-12: cage r1c5-r2c5 total 13 connected true
double-arrow-1: double-arrow r3c2-r3c3-r2c3 ends ["r3c1","r1c3"]
double-arrow-2: double-arrow r2c7-r3c7-r3c8 ends ["r1c7","r3c9"]
double-arrow-3: double-arrow r7c2-r7c3-r8c3 ends ["r7c1","r9c3"]
double-arrow-4: double-arrow r8c7-r7c7-r7c8 ends ["r9c7","r7c9"]
double-arrow-5: double-arrow r7c5 ends ["r7c4","r7c6"]
double-arrow-6: double-arrow r5c7 ends ["r6c7","r4c7"]
double-arrow-7: double-arrow r3c5 ends ["r3c4","r3c6"]
double-arrow-8: double-arrow r5c3 ends ["r4c3","r6c3"]
```

- Normal sudoku rules apply.
- Double Arrows: Digits along a line sum to same total as the digits in the circles connected to the line.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
