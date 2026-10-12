---
format: open-rules
title: People in glass houses...
setter: Timotab
source: https://sudokupad.app/35spwga7ry
case: https://sudoku-sleuth.com/cases/people-in-glass-houses
library: https://rules.sudoku-sleuth.com/
status: flagged
flags:
  - A feature in the source still needs a drawing definition.
---

```rules
sudoku 9x9
kropki-1: kropki r2c1-r2c2 colour "white"
kropki-2: kropki r6c9-r7c9 colour "white"
kropki-3: kropki r7c9-r8c9 colour "white"
kropki-4: kropki r8c8-r8c9 colour "black"
kropki-5: kropki r1c7-r1c8 colour "black"
kropki-6: kropki r6c8-r6c9 colour "black"
kropki-7: kropki r6c1-r7c1 colour "black"
kropki-8: kropki r2c6-r2c7 colour "black"
whispers r7c8-r8c8-r8c7-r8c6-r7c6-r6c6-r5c6-r5c5-r6c5-r7c5-r8c5-r8c4-r8c3-r8c2-r7c2-r6c2-r5c2-r4c2-r3c3-r2c4-r2c5-r2c6-r3c7-r4c8-r5c8-r6c8 gap 5 loop true
```

• Normal Sudoku rules apply
• German whispers: adjacent digits on a green line must differ by at least 5
• Digits separated by a white dot must be consecutive. Digits separated by a black dot must be in a 1:2 ratio
