---
format: open-rules
title: German Whispers Centers
setter: Will Power
source: https://sudokupad.app/eea0s5o685
case: https://sudoku-sleuth.com/cases/german-whispers-centers
library: https://rules.sudoku-sleuth.com/
status: read
exported: 33a260b20bf1742e6030487409cf83c4
---

```rules
sudoku 9x9
cage-1: cage r6c6-r6c7-r6c8-r6c9 total 23 connected true
cage-2: cage r4c1-r4c2-r4c3-r4c4 total 22 connected true
kropki-1: kropki r2c1-r3c1 white
kropki-2: kropki r3c1-r4c1 white
kropki-3: kropki r4c1-r5c1 white
kropki-4: kropki r3c4-r4c4 white
kropki-5: kropki r1c7-r2c7 white
kropki-6: kropki r1c7-r1c8 white
kropki-7: kropki r1c9-r2c9 white
kropki-8: kropki r3c9-r4c9 white
kropki-9: kropki r4c9-r5c9 white
kropki-10: kropki r5c9-r6c9 white
kropki-11: kropki r6c9-r7c9 white
kropki-12: kropki r7c9-r8c9 white
kropki-13: kropki r6c6-r7c6 white
kropki-14: kropki r6c6-r6c7 white
kropki-15: kropki r5c7-r6c7 white
whispers-1: whispers r1c3-r2c3-r3c3 gap 5
whispers-2: whispers r2c2-r2c3-r2c4 gap 5
whispers-3: whispers r2c8-r3c8-r4c8 gap 5
whispers-4: whispers r3c7-r3c8-r3c9 gap 5
whispers-5: whispers r3c6-r4c6-r5c6 gap 5
whispers-6: whispers r4c5-r4c6-r4c7 gap 5
whispers-7: whispers r5c4-r6c4-r7c4 gap 5
whispers-8: whispers r6c3-r6c4-r6c5 gap 5
whispers-9: whispers r7c1-r7c2-r7c3 gap 5
whispers-10: whispers r6c2-r7c2-r8c2 gap 5
whispers-11: whispers r7c7-r8c7-r9c7 gap 5
whispers-12: whispers r8c6-r8c7-r8c8 gap 5
```

Normal Sudoku rules apply. GERMAN WHISPERS- Numbers on green lines are at least 5 apart from their neighbors on the line. Numbers may repeat on green lines, if other rules allow. The intersections of the 6 green lines are different numbers than one another. KROPKI PAIRS- Numbers with a white dot between them are consecutive. Not all possible dots are given. KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage.
