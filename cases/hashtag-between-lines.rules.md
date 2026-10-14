---
format: open-rules
title: Hashtag Between Lines
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/xdp4gmp8lu
case: https://sudoku-sleuth.com/cases/hashtag-between-lines
library: https://rules.sudoku-sleuth.com/
status: read
exported: 691d6706310ce823560543011e2ea331
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r1c3-r2c1-r3c1 total 27 connected true
cage-2: cage r3c3-r3c4-r4c3 total 7 connected true
cage-3: cage r6c3-r7c3-r7c4 total 9 connected true
cage-4: cage r6c7-r7c6-r7c7 total 10 connected true
cage-5: cage r3c6-r3c7-r4c7 total 18 connected true
cage-6: cage r7c1-r8c1-r9c1-r9c2-r9c3 total 23 connected true
cage-7: cage r7c9-r8c9-r9c7-r9c8-r9c9 total 19 connected true
cage-8: cage r1c7-r1c8-r1c9-r2c9-r3c9 total 21 connected true
cage-9: cage r3c5-r4c5 total 11 connected true
cage-10: cage r5c6-r5c7 total 10 connected true
cage-11: cage r5c3-r5c4 total 8 connected true
cage-12: cage r6c5-r7c5 total 11 connected true
cage-13: cage r5c1-r5c2 total 12 connected true
cage-14: cage r5c8-r5c9 total 14 connected true
between-1: between r3c2-r3c3-r2c3 ends ["r3c1","r1c3"]
between-2: between r2c7-r3c7-r3c8 ends ["r1c7","r3c9"]
between-3: between r3c5 ends ["r3c4","r3c6"]
between-4: between r5c3 ends ["r4c3","r6c3"]
between-5: between r7c2-r7c3-r8c3 ends ["r7c1","r9c3"]
between-6: between r5c7 ends ["r4c7","r6c7"]
between-7: between r8c7-r7c7-r7c8 ends ["r9c7","r7c9"]
between-8: between r7c5 ends ["r7c4","r7c6"]
```

- Normal sudoku rules apply.
- Between Lines: Digits placed on Between Lines must be strictly between the digits placed in the circles at the ends of those lines.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
