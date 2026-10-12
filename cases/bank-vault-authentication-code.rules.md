---
format: open-rules
title: Bank Vault Authentication Code
setter: Will Power
source: https://sudokupad.app/31h29dnok8
case: https://sudoku-sleuth.com/cases/bank-vault-authentication-code
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r9c4-r9c5 colour "white"
kropki-2: kropki r9c5-r9c6 colour "white"
kropki-3: kropki r7c5-r8c5 colour "white"
kropki-4: kropki r7c5-r7c6 colour "white"
kropki-5: kropki r6c2-r7c2 colour "white"
kropki-6: kropki r5c3-r6c3 colour "white"
kropki-7: kropki r4c3-r5c3 colour "white"
kropki-8: kropki r4c7-r5c7 colour "white"
kropki-9: kropki r5c7-r6c7 colour "white"
kropki-10: kropki r3c5-r3c6 colour "white"
kropki-11: kropki r2c4-r2c5 colour "white"
kropki-12: kropki r2c5-r2c6 colour "white"
kropki-13: kropki r3c8-r4c8 colour "white"
kropki-14: kropki r4c8-r5c8 colour "white"
kropki-15: kropki r5c8-r6c8 colour "white"
kropki-16: kropki r6c6-r6c7 colour "white"
arrow-1: arrow r1c2-r2c2-r2c1 bulb ["r1c1"]
arrow-2: arrow r2c9-r2c8-r1c8 bulb ["r1c9"]
arrow-3: arrow r4c7-r5c7-r6c7 bulb ["r3c7"]
arrow-4: arrow r7c6-r7c5-r7c4 bulb ["r7c7"]
arrow-5: arrow r6c3-r5c3-r4c3 bulb ["r7c3"]
arrow-6: arrow r3c4-r3c5-r3c6 bulb ["r3c3"]
arrow-7: arrow r9c8-r8c8-r8c9 bulb ["r9c9"]
arrow-8: arrow r8c1-r8c2-r9c2 bulb ["r9c1"]
whispers-1: whispers r4c4-r5c5-r6c6 gap 5
whispers-2: whispers r4c6-r5c5-r6c4 gap 5
```

Normal Sudoku rules apply. GERMAN WHISPERS (vault handle)- Numbers on the green line are at least 5 apart from their neighbors on the line. ARROWS- Numbers on arrows sum to the number in the arrow's circle. The circles in the four corner cells of the puzzle are all different than one another. KROPKI PAIRS- Numbers with a white dot between them are consecutive.
