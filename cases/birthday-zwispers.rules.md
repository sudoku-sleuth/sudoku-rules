---
format: open-rules
title: Birthday Zwispers
setter: Timotab
source: https://sudokupad.app/srhwl12v30
case: https://sudoku-sleuth.com/cases/birthday-zwispers
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c5-r1c6 total 11 connected true
cage-2: cage r2c7-r2c8-r2c9 total 23 connected true
cage-3: cage r3c2-r3c3-r3c4 total 23 connected true
cage-4: cage r7c4-r7c5 total 11 connected true
cage-5: cage r8c1-r8c2-r8c3 total 23 connected true
cage-6: cage r9c5-r9c6 total 11 connected true
cage-7: cage r8c8-r8c9-r9c8-r9c9 total 23 connected true
cage-8: cage r8c7-r9c7 total 11 connected true
cage-9: cage r6c3-r6c4-r6c5-r6c6 total 23 connected true
cage-10: cage r4c1-r4c2-r5c2 total 11 connected true
cage-11: cage r3c5-r3c6 total 11 connected true
cage-12: cage r5c7-r5c8 total 11 connected true
zipper-1: zipper r1c1-r1c2-r1c3-r1c4-r2c4-r3c4
whispers-1: whispers r1c1-r1c2-r1c3-r1c4-r2c4-r3c4 gap 5
zipper-2: zipper r9c6-r8c6-r7c6-r7c7-r7c8-r7c9
whispers-2: whispers r9c6-r8c6-r7c6-r7c7-r7c8-r7c9 gap 5
zipper-3: zipper r3c3-r4c3-r4c4-r4c5
whispers-3: whispers r3c3-r4c3-r4c4-r4c5 gap 5
zipper-4: zipper r7c3-r8c3-r8c4-r7c4
whispers-4: whispers r7c3-r8c3-r8c4-r7c4 gap 5
zipper-5: zipper r2c7-r3c7-r4c7-r4c6
whispers-5: whispers r2c7-r3c7-r4c7-r4c6 gap 5
zipper-6: zipper r2c8-r1c8-r2c9-r1c9
whispers-6: whispers r2c8-r1c8-r2c9-r1c9 gap 5
```

• Normal Sudoku rules apply.
• All lines in this puzzle are both German Whispers and Zipper lines.
• German Whispers: Adjacent digits along a German Whispers line must differ by at least five.
• Zipper Line: Along Zipper lines, pairs of digits equidistant from the center of the line have the
same sum.
• Killer Cages: Digits in cages cannot repeat, and must sum to the value in the top left corner of the cage.
