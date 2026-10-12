---
format: open-rules
title: Not Parity, Trinity
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/not-parity-trinity
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r3c3-r3c4 colour "white"
kropki-2: kropki r3c2-r3c3 colour "white"
kropki-3: kropki r4c1-r5c1 colour "white"
kropki-4: kropki r4c3-r4c4 colour "white"
kropki-5: kropki r4c4-r4c5 colour "white"
kropki-6: kropki r4c9-r5c9 colour "white"
kropki-7: kropki r6c3-r6c4 colour "white"
kropki-8: kropki r6c4-r6c5 colour "white"
kropki-9: kropki r6c7-r7c7 colour "white"
kropki-10: kropki r7c7-r8c7 colour "white"
kropki-11: kropki r9c7-r9c8 colour "white"
kropki-12: kropki r9c5-r9c6 colour "white"
kropki-13: kropki r9c4-r9c5 colour "white"
kropki-14: kropki r8c2-r9c2 colour "white"
kropki-15: kropki r7c2-r7c3 colour "white"
kropki-16: kropki r3c1-r3c2 colour "black"
kropki-17: kropki r3c4-r3c5 colour "black"
kropki-18: kropki r3c5-r3c6 colour "black"
kropki-19: kropki r2c9-r3c9 colour "black"
kropki-20: kropki r4c7-r5c7 colour "black"
kropki-21: kropki r5c7-r6c7 colour "black"
kropki-22: kropki r4c5-r4c6 colour "black"
kropki-23: kropki r4c2-r4c3 colour "black"
kropki-24: kropki r6c1-r6c2 colour "black"
kropki-25: kropki r6c2-r6c3 colour "black"
kropki-26: kropki r9c6-r9c7 colour "black"
kropki-27: kropki r9c8-r9c9 colour "black"
kropki-28: kropki r8c7-r9c7 colour "black"
kropki-29: kropki r6c5-r6c6 colour "black"
```

Normal Sudoku rules apply. KROPKI PAIRS- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given. Consider the three types of numbers in this ruleset.
