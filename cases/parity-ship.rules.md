---
format: open-rules
title: Parity Ship
setter: Kennet's Dad
source: https://sudokupad.app/rzgz4g0vvy
case: https://sudoku-sleuth.com/cases/parity-ship
library: https://rules.sudoku-sleuth.com/
status: read
exported: be30e6788a0f556b2ca56b331b2128ed
---

```rules
sudoku 9x9
cage-1: cage r4c2-r5c2-r5c3-r6c2 total 30 connected true
cage-2: cage r4c8-r5c7-r5c8-r6c8 total 13 connected true
whispers-1: whispers r6c3-r7c3-r8c3-r8c4-r7c4-r7c3 gap 5
whispers-2: whispers r7c3-r7c2 gap 5
whispers-3: whispers r2c3-r3c3-r4c3-r4c4-r3c4-r3c3 gap 5
whispers-4: whispers r3c3-r3c2 gap 5
whispers-5: whispers r5c7-r5c6-r6c6-r6c5-r5c5-r5c6 gap 5
whispers-6: whispers r5c6-r4c6-r4c7-r3c7-r3c8-r2c8-r2c7-r3c7 gap 5
whispers-7: whispers r4c6-r3c6-r3c7 gap 5
whispers-8: whispers r6c7-r7c7-r8c7-r8c8-r7c8-r7c7 gap 5
whispers-9: whispers r7c7-r7c6 gap 5
pair-1: pair r8c6-r8c7 sum 10
pair-2: pair r5c9-r6c9 sum 10
pair-3: pair r4c1-r5c1 sum 5
pair-4: pair r1c4-r1c5 sum 5
pair-5: pair r8c6-r9c6 sum 5
```

German whispers, X/V, Killer cages

Normal sudoku rules apply. Adjacent digits on a green line must have a difference of at least 5. Digits in cells separated by an X sum to ten. Digits in cells separated by a V sum to 5. Digits in cages sum to the number given.
