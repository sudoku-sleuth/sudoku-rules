---
format: open-rules
title: Bone Gift for Fido,Max,Mao Mao
setter: Will Power
source: https://sudokupad.app/gps5i2lq1x
case: https://sudoku-sleuth.com/cases/bone-gift-for-fido-max-mao-mao
library: https://rules.sudoku-sleuth.com/
status: read
exported: 985e5c12de420aa0f86be9f3ae44a9d0
---

```rules
sudoku 9x9
kropki-1: kropki r4c5-r5c5 white
kropki-2: kropki r5c5-r5c6 white
kropki-3: kropki r5c6-r6c6 white
kropki-4: kropki r4c4-r4c5 white
kropki-5: kropki r3c3-r4c3 white
kropki-6: kropki r5c1-r6c1 white
kropki-7: kropki r4c3-r4c4 black
kropki-8: kropki r3c1-r3c2 black
kropki-9: kropki r2c1-r2c2 black
kropki-10: kropki r1c3-r2c3 black
kropki-11: kropki r8c7-r9c7 black
kropki-12: kropki r8c8-r9c8 black
kropki-13: kropki r7c8-r7c9 black
whispers-1: whispers r4c5-r3c5-r2c5-r2c6-r3c6 gap 4
whispers-2: whispers r3c6-r4c5 gap 4
whispers-3: whispers r5c6-r4c7-r4c8-r5c8-r5c7 gap 4
whispers-4: whispers r5c7-r5c6 gap 4
whispers-5: whispers r6c3-r5c4-r5c5-r6c5-r7c4 gap 4
pair-1: pair r2c1-r3c1 sum 10
pair-2: pair r3c2-r3c3 sum 10
pair-3: pair r2c2-r2c3 sum 10
pair-4: pair r1c2-r1c3 sum 10
pair-5: pair r6c6-r7c6 sum 10
pair-6: pair r7c6-r7c7 sum 10
pair-7: pair r7c7-r8c7 sum 10
pair-8: pair r7c8-r8c8 sum 10
pair-9: pair r9c7-r9c8 sum 10
pair-10: pair r7c9-r8c9 sum 10
extremum r1c4 type "max" exhaustive false
```

SPEED RUN- Post your time on logic Masters Deutschland, if you like. Bonus for less than 15 minutes. Double bonus for less than 12 minutes. 

Normal Sudoku rules apply. 

KROPKI PAIRS- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given.  

XV PAIRS- Numbers with an X between them sum to 10. Not all possible X's are given.

DUTCH WHISPERS (Bow)- Numbers on red lines are at least 4 apart from their neighbors on the line. Numbers may repeat on red lines if other rules allow.

MAXIMUM- The gray cell with arrows pointing outward is greater than all orthogonally adjacent cells.

The gray line (Bone) has no effect on the puzzle.
