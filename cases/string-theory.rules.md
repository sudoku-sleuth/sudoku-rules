---
format: open-rules
title: String Theory
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/string-theory
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
pair-1: pair r6c7-r6c8 relation {"op":"difference","value":3}
pair-2: pair r7c7-r7c8 relation {"op":"difference","value":3}
pair-3: pair r5c6-r5c7 relation {"op":"ratio","value":3}
pair-4: pair r5c6-r6c6 relation {"op":"ratio","value":3}
pair-5: pair r6c5-r7c5 relation {"op":"ratio","value":3}
pair-6: pair r6c5-r6c6 relation {"op":"ratio","value":3}
pair-7: pair r7c5-r8c5 relation {"op":"ratio","value":3}
kropki-1: kropki r4c5-r5c5 colour "black"
kropki-2: kropki r5c4-r5c5 colour "black"
kropki-3: kropki r5c3-r5c4 colour "black"
kropki-4: kropki r5c3-r6c3 colour "black"
kropki-5: kropki r6c2-r6c3 colour "black"
kropki-6: kropki r6c1-r6c2 colour "black"
kropki-7: kropki r6c1-r7c1 colour "black"
kropki-8: kropki r7c1-r8c1 colour "black"
kropki-9: kropki r8c1-r9c1 colour "black"
kropki-10: kropki r1c4-r1c5 colour "black"
kropki-11: kropki r1c5-r1c6 colour "black"
kropki-12: kropki r1c6-r1c7 colour "black"
kropki-13: kropki r1c7-r2c7 colour "black"
kropki-14: kropki r2c7-r3c7 colour "black"
kropki-15: kropki r3c7-r4c7 colour "black"
kropki-16: kropki r4c7-r4c8 colour "black"
kropki-17: kropki r4c8-r4c9 colour "black"
kropki-18: kropki r4c9-r5c9 colour "black"
kropki-19: kropki r8c9-r9c9 colour "black"
kropki-20: kropki r7c3-r8c3 colour "black"
pair-8: pair r3c2-r4c2 relation {"op":"ratio","value":3}
pair-9: pair r4c2-r4c3 relation {"op":"ratio","value":3}
kropki-21: kropki r2c8-r3c8 colour "black"
```

Normal Sudoku rules apply. Numbers with a black dot between them are in a ratio of 3:1 or 2:1, according to the number in the dot. Numbers with a white dot between them have a difference of 3. Not all possible dots are given.
