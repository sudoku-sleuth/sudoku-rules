---
format: open-rules
title: 24th Wedding Anniversary
setter: Blobz
source: https://sudokupad.app/k6gq7qodzd
case: https://sudoku-sleuth.com/cases/24th-wedding-anniversary
library: https://rules.sudoku-sleuth.com/
status: read
givens: r5c1=1 r6c2=9 r7c3=9 r8c4=8
exported: b3d866279128fdcc65a09c53dfd400f6
---

```rules
sudoku 9x9
cage-1: cage r6c4-r6c5-r7c5-r7c6-r8c6 total 24 connected true
cage-2: cage r1c2-r2c2-r3c1-r3c2-r3c3 total 24 connected true
cage-3: cage r2c4-r3c4-r4c2-r4c3-r4c4 total 24 connected true
cage-4: cage r9c2-r9c3-r9c4 total 24 connected true
cage-5: cage r1c6-r2c6-r3c6 total 24 connected true
cage-6: cage r6c2-r7c1-r7c2-r8c1 total 24 connected true
cage-7: cage r9c8-r9c9 total 11 connected true
cage-8: cage r4c7-r4c8-r5c8-r5c9 total 24 connected true
cage-9: cage r2c7-r2c8-r3c7-r3c8-r3c9 total 24 connected true
cage-10: cage r9c7 total 1 connected true
whispers-1: whispers r2c8-r3c8-r4c8-r5c8-r6c8-r7c8-r8c8 gap 5
whispers-2: whispers r6c9-r6c8-r6c7-r6c6-r5c5-r4c6-r3c7 gap 5
palindrome r4c1-r3c1-r2c2-r2c3-r2c4-r3c5-r4c5-r5c4-r6c3-r7c2-r8c1-r8c2-r8c3-r8c4-r8c5
```

Normal sudoku rules apply.

Digits in cages do not repeat, and must sum to the small clue in the corner of the cage.

The grey line is a palindrome, reading the same in both directions.

Adjacent digits along the green line differ by at least 5.
