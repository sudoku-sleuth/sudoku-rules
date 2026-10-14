---
format: open-rules
title: Do You Want to Know a Secret?
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/91urzol593
case: https://sudoku-sleuth.com/cases/do-you-want-to-know-a-secret
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c2=2 r2c4=3
exported: 2f8a655f064f15c591e98a9c461de4c1
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2 total 3 connected true
cage-2: cage r1c3-r2c3 total 7 connected true
cage-3: cage r2c2-r3c2 total 11 connected true
cage-4: cage r2c1-r3c1 total 15 connected true
cage-5: cage r1c4-r2c4 total 7 connected true
cage-6: cage r3c4-r3c5 total 6 connected true
cage-7: cage r1c6-r2c6 total 9 connected true
cage-8: cage r1c7-r2c7 total 6 connected true
cage-9: cage r1c8-r2c8 total 14 connected true
cage-10: cage r3c7-r3c8 total 5 connected true
cage-11: cage r1c9-r2c9 total 16 connected true
cage-12: cage r1c5-r2c5 total 15 connected true
cage-13: cage r4c1-r4c2 total 3 connected true
cage-14: cage r5c2-r6c2 total 13 connected true
cage-15: cage r5c1-r6c1 total 9 connected true
cage-16: cage r4c3-r5c3 total 12 connected true
cage-17: cage r4c4-r5c4 total 8 connected true
cage-18: cage r4c5-r4c6 total 7 connected true
cage-19: cage r5c5-r5c6 total 17 connected true
cage-20: cage r6c4-r6c5 total 12 connected true
cage-21: cage r4c7-r4c8 total 16 connected true
cage-22: cage r4c9-r5c9 total 13 connected true
cage-23: cage r7c1-r8c1 total 9 connected true
cage-24: cage r7c2-r7c3 total 4 connected true
cage-25: cage r8c2-r8c3 total 13 connected true
cage-26: cage r9c1-r9c2 total 17 connected true
cage-27: cage r5c7-r5c8 total 7 connected true
cage-28: cage r6c7-r6c8 total 7 connected true
cage-29: cage r7c7-r8c7 total 17 connected true
cage-30: cage r7c8-r7c9 total 13 connected true
cage-31: cage r8c8-r8c9 total 3 connected true
cage-32: cage r9c7-r9c8 total 9 connected true
cage-33: cage r7c4-r7c5 total 10 connected true
cage-34: cage r8c4-r9c4 total 16 connected true
cage-35: cage r8c5-r9c5 total 5 connected true
cage-36: cage r7c6-r8c6 total 8 connected true
```

Normal sudoku rules apply. Digits inside the cages marked by dashed lines add up to the small number in the corner of the cage. 

Something to think about: What are the digits in every row, column, and box? What do they add up to?
