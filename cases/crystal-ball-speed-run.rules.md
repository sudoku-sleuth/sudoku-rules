---
format: open-rules
title: Crystal Ball Speed Run
setter: Will Power
source: https://sudokupad.app/i1p05irh8f
case: https://sudoku-sleuth.com/cases/crystal-ball-speed-run
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage r8c9-r9c8-r9c9 total 12 connected true
kropki-1: kropki r6c3-r7c3 colour "white"
kropki-2: kropki r5c3-r6c3 colour "white"
kropki-3: kropki r4c3-r5c3 colour "white"
kropki-4: kropki r3c3-r3c4 colour "white"
kropki-5: kropki r3c4-r3c5 colour "white"
kropki-6: kropki r3c5-r3c6 colour "white"
kropki-7: kropki r3c7-r4c7 colour "white"
kropki-8: kropki r4c7-r5c7 colour "white"
kropki-9: kropki r5c7-r6c7 colour "white"
kropki-10: kropki r7c6-r7c7 colour "white"
kropki-11: kropki r7c5-r7c6 colour "white"
kropki-12: kropki r7c4-r7c5 colour "white"
kropki-13: kropki r9c8-r9c9 colour "white"
kropki-14: kropki r8c9-r9c9 colour "white"
kropki-15: kropki r7c6-r8c6 colour "black"
kropki-16: kropki r6c2-r6c3 colour "black"
kropki-17: kropki r2c4-r3c4 colour "black"
arrow-1: arrow r7c7-r8c6 bulb ["r6c8"]
arrow-2: arrow r7c3-r6c2 bulb ["r8c4"]
arrow-3: arrow r3c3-r2c4 bulb ["r4c2"]
arrow-4: arrow r3c7-r4c8 bulb ["r2c6"]
arrow-5: arrow r8c2-r9c3 bulb ["r7c1"]
arrow-6: arrow r8c8-r9c7 bulb ["r7c9"]
```

Normal Sudoku rules apply. ARROWS- Numbers on arrows sum to the number in the arrow's circle. Numbers may repeat on arrows, if other rules allow. KROPKI PAIRS- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given. KILLER CAGE- Numbers in cages sum to the number in the top left corner of the cage. Record your time on Logic Masters Deutschland website, if you like. Bonus points for less than 10 minutes. Double bonus for less than 8 minutes.
