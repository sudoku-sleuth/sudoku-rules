---
format: open-rules
title: PALINDROME Єm⌂╓d∩!└@¶
setter: Will Power
source: https://sudokupad.app/tnd3whfrr2
case: https://sudoku-sleuth.com/cases/palindrome-m-d
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r5c3-r6c3 colour "white"
kropki-2: kropki r4c3-r5c3 colour "white"
kropki-3: kropki r3c3-r4c3 colour "white"
kropki-4: kropki r7c4-r7c5 colour "white"
kropki-5: kropki r7c5-r7c6 colour "white"
kropki-6: kropki r7c6-r7c7 colour "white"
kropki-7: kropki r4c5-r4c6 colour "white"
kropki-8: kropki r3c7-r4c7 colour "black"
kropki-9: kropki r4c7-r5c7 colour "black"
kropki-10: kropki r5c7-r6c7 colour "black"
kropki-11: kropki r8c1-r9c1 colour "black"
kropki-12: kropki r8c5-r9c5 colour "black"
kropki-13: kropki r7c7-r7c8 colour "black"
kropki-14: kropki r5c4-r6c4 colour "black"
kropki-15: kropki r1c2-r1c3 colour "black"
kropki-16: kropki r2c6-r3c6 colour "black"
kropki-17: kropki r3c1-r4c1 colour "black"
kropki-18: kropki r4c1-r5c1 colour "black"
kropki-19: kropki r1c4-r1c5 colour "black"
kropki-20: kropki r1c5-r1c6 colour "black"
palindrome r5c1-r6c1-r7c2-r8c3-r9c4-r9c5-r9c6-r8c7-r7c8-r6c9-r5c9-r4c9-r3c9-r2c8-r1c7-r1c6-r2c5-r3c4-r4c4-r3c3-r4c2-r5c3-r6c4-r5c5-r4c5-r3c6-r2c7-r3c8-r3c7-r4c8-r4c7-r5c6-r5c7-r5c8-r6c7
```

Normal Sudoku rules apply.

PALINDROME- Numbers an equal distance from the ends of the gray line are the same number.

KROPKI PAIRS- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given.
