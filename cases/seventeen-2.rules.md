---
format: open-rules
title: Seventeen
setter: Blobz
source: https://sudokupad.app/blobz/seventeen
case: https://sudoku-sleuth.com/cases/seventeen-2
library: https://rules.sudoku-sleuth.com/
status: read
givens: r4c4=1 r4c6=7
exported: b7ee0b31d3c133796818c2bfc9dabed7
---

```rules
sudoku 9x9
cage-1: cage r2c1-r3c1-r4c1-r5c1-r5c2 total 17 connected true
cage-2: cage r2c3-r3c2-r3c3-r4c3-r5c3 total 17 connected true
cage-3: cage r6c3-r7c3-r8c2-r8c3-r8c4 total 17 connected true
cage-4: cage r8c1-r9c1-r9c2 total 17 connected true
cage-5: cage r8c7-r9c6-r9c7 total 17 connected true
cage-6: cage r5c6-r6c5-r6c6-r7c6-r7c7 total 17 connected true
cage-7: cage r3c4-r4c4-r5c4-r6c4 total 17 connected true
cage-8: cage r4c5-r5c5 total 17 connected true
cage-9: cage r3c6-r3c7-r4c7 total 17 connected true
cage-10: cage r5c7-r6c7 total 17 connected true
cage-11: cage r4c8-r5c8-r6c8-r7c8-r8c8 total 17 connected true
cage-12: cage r2c5-r2c6-r2c7-r2c8-r3c8 total 17 connected true
cage-13: cage r1c6-r1c7-r1c8 total 17 connected true
kropki-1: kropki r5c3-r5c4 white
kropki-2: kropki r5c8-r5c9 white
```

Normal sudoku rules apply.

Digits in cages do not repeat, and sum to the small clue.

Digits separated by a white dot differ by one (not all such dots are shown).
