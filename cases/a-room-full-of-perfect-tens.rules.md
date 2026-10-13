---
format: open-rules
title: A Room Full of Perfect Tens
setter: Will Power
source: https://sudokupad.app/ly3jyxo443
case: https://sudoku-sleuth.com/cases/a-room-full-of-perfect-tens
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c7-r1c8 total 10 connected true
cage-2: cage r2c6-r2c7 total 10 connected true
cage-3: cage r3c5-r3c6 total 10 connected true
cage-4: cage r4c4-r4c5 total 10 connected true
cage-5: cage r5c3-r5c4 total 10 connected true
cage-6: cage r6c2-r6c3 total 10 connected true
cage-7: cage r7c1-r7c2 total 10 connected true
cage-8: cage r3c8-r3c9 total 10 connected true
cage-9: cage r4c7-r4c8 total 10 connected true
cage-10: cage r5c6-r5c7 total 10 connected true
cage-11: cage r6c5-r6c6 total 10 connected true
cage-12: cage r7c4-r7c5 total 10 connected true
cage-13: cage r8c3-r8c4 total 10 connected true
cage-14: cage r9c2-r9c3 total 10 connected true
cage-15: cage r9c7-r9c8 total 10 connected true
cage-16: cage r8c8-r8c9 total 10 connected true
cage-17: cage r4c1-r4c2 total 10 connected true
cage-18: cage r6c8-r6c9 total 10 connected true
kropki-1: kropki r3c9-r4c9 colour "black"
kropki-2: kropki r5c9-r6c9 colour "black"
kropki-3: kropki r6c9-r7c9 colour "black"
whispers-1: whispers r1c7-r2c6-r3c5-r4c4-r5c3-r6c2-r7c1 gap 5
whispers-2: whispers r3c9-r4c8-r5c7-r6c6-r7c5-r8c4-r9c3 gap 5
pair r4c9-r5c9 sum 5
```

Normal Sudoku rules apply. GERMAN WHISPERS- Numbers on green lines are at least 5 apart from their neighbors on the line. Numbers may repeat on green lines, if other rules allow. KILLER CAGES- Numbers in cages sum to 10. RATIO PAIRS- Numbers with a black dot between them are in a ratio of 2:1. XV PAIRS- Numbers with a V between them sum to 5. Not all possible dots and V are given.
