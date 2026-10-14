---
format: open-rules
title: Humming and summing
setter: sujoyku
source: https://tinyurl.com/5yzvk34w
case: https://sudoku-sleuth.com/cases/humming-and-summing
library: https://rules.sudoku-sleuth.com/
status: read
exported: 423716584d3c902a0b1c582a95003e56
---

```rules
sudoku 9x9
cage-1: cage r1c1-r2c1-r3c1 total 9 connected true
cage-2: cage r4c2-r5c2-r6c2 total 21 connected true
cage-3: cage r7c3-r8c3-r9c3 total 10 connected true
cage-4: cage r8c4-r8c5-r8c6 total 22 connected true
cage-5: cage r7c7-r8c7-r9c7 total 11 connected true
cage-6: cage r7c8-r7c9 total 13 connected true
cage-7: cage r4c8-r5c8-r6c8 total 21 connected true
cage-8: cage r2c9-r3c9 total 12 connected true
cage-9: cage r1c7-r1c8-r1c9 total 21 connected true
cage-10: cage r2c4-r2c5-r2c6 total 9 connected true
cage-11: cage r3c2-r3c3 total 13 connected true
whispers-1: whispers r6c7-r7c6-r6c5-r7c4-r6c3-r5c4 gap 5
whispers-2: whispers r4c7-r3c6 gap 5
```

Normal sudoku rules apply. Digits in a cage do not repeat and sum to the clue in the top left. Adjacent digits on a green line must have a difference of at least 5.
