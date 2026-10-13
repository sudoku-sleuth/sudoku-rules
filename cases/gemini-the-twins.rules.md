---
format: open-rules
title: Gemini, The Twins
setter: Will Power
source: https://sudokupad.app/067450ecvd
case: https://sudoku-sleuth.com/cases/gemini-the-twins
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c5-r1c6 total 9 connected true
cage-2: cage r1c1-r1c2 total 10 connected true
cage-3: cage r5c3-r6c2-r6c3-r6c4 total 10 connected true
cage-4: cage r2c5-r3c5-r3c6-r3c7 total 14 connected true
cage-5: cage r5c5-r5c6-r5c7 total 12 connected true
cage-6: cage r9c3-r9c4 total 14 connected true
cage-7: cage r8c7-r8c8-r8c9-r9c7 total 25 connected true
cage-8: cage r2c1-r3c1-r3c2-r3c3 total 13 connected true
kropki-1: kropki r2c1-r3c1 colour "white"
kropki-2: kropki r1c2-r1c3 colour "white"
kropki-3: kropki r2c3-r3c3 colour "white"
kropki-4: kropki r4c3-r5c3 colour "white"
kropki-5: kropki r6c1-r6c2 colour "white"
kropki-6: kropki r9c2-r9c3 colour "white"
kropki-7: kropki r9c4-r9c5 colour "white"
kropki-8: kropki r5c4-r6c4 colour "white"
kropki-9: kropki r7c9-r8c9 colour "white"
kropki-10: kropki r5c9-r6c9 colour "white"
kropki-11: kropki r7c8-r8c8 colour "white"
kropki-12: kropki r5c7-r6c7 colour "white"
kropki-13: kropki r2c7-r3c7 colour "white"
kropki-14: kropki r1c6-r1c7 colour "white"
kropki-15: kropki r2c5-r3c5 colour "white"
kropki-16: kropki r2c9-r3c9 colour "white"
kropki-17: kropki r7c6-r8c6 colour "white"
pair-1: pair r3c3-r4c3 sum 10
pair-2: pair r3c5-r3c6 sum 10
pair-3: pair r8c7-r9c7 sum 10
```

Normal Sudoku rules apply. KROPKI PAIRS- Numbers with a white dot between them are consecutive. KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage. Numbers do not repeat in cages. XV PAIRS- Numbers with an X between them sum to 10. Not all possible dots and Xs are given. GRAY LINES are only to show the constellation, and do not affect the puzzle.
