---
format: open-rules
title: How Did I Get Locked Out?
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/7svx618wyi
case: https://sudoku-sleuth.com/cases/how-did-i-get-locked-out
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r2c2-r2c3-r3c2 total 7 connected true
cage-2: cage r7c8-r8c7-r8c8 total 23 connected true
cage-3: cage r4c3-r4c4-r5c3 total 16 connected true
cage-4: cage r5c7-r6c6-r6c7 total 14 connected true
cage-5: cage r6c3-r6c4-r7c3 total 12 connected true
cage-6: cage r3c7-r4c6-r4c7 total 18 connected true
cage-7: cage r1c1-r2c1 total 10 connected true
cage-8: cage r8c9-r9c9 total 7 connected true
lockout-1: lockout r6c3-r6c4 ends ["r5c3","r6c5"] gap 4
lockout-2: lockout r4c7-r4c6 ends ["r5c7","r4c5"] gap 4
lockout-3: lockout r8c2 ends ["r7c3","r9c1"] gap 4
lockout-4: lockout r2c8 ends ["r1c9","r3c7"] gap 4
lockout-5: lockout r4c3-r4c4-r3c4 ends ["r4c2","r2c4"] gap 4
lockout-6: lockout r2c3-r2c2-r3c2 ends ["r2c4","r4c2"] gap 4
lockout-7: lockout r8c7-r8c8-r7c8 ends ["r8c6","r6c8"] gap 4
lockout-8: lockout r6c7-r6c6-r7c6 ends ["r6c8","r8c6"] gap 4
```

- Normal sudoku rules apply.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Lockout lines: Digits in the diamonds at the ends of a lockout line must differ by at least 4. Digits on a line must fall outside the range defined by their attached diamonds and may repeat if allowed by other rules.
