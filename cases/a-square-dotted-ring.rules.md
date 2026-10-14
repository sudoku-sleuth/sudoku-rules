---
format: open-rules
title: A Square Dotted Ring
setter: Meggen033
source: https://sudokupad.app/jnyo2wg0iq
case: https://sudoku-sleuth.com/cases/a-square-dotted-ring
library: https://rules.sudoku-sleuth.com/
status: read
exported: b63a3368a20dde6f7152b984c0db6e31
---

```rules
sudoku 9x9
kropki-1: kropki r3c4-r3c5 white
kropki-2: kropki r3c5-r3c6 white
kropki-3: kropki r4c7-r5c7 white
kropki-4: kropki r5c7-r6c7 white
kropki-5: kropki r7c5-r7c6 white
kropki-6: kropki r7c4-r7c5 white
kropki-7: kropki r5c3-r6c3 white
kropki-8: kropki r4c3-r5c3 white
kropki-9: kropki r1c1-r1c2 white
kropki-10: kropki r2c1-r2c2 white
kropki-11: kropki r3c8-r4c8 white
kropki-12: kropki r3c9-r4c9 white
kropki-13: kropki r6c1-r7c1 white
kropki-14: kropki r6c2-r7c2 white
kropki-15: kropki r1c6-r1c7 white
kropki-16: kropki r1c9-r2c9 white
kropki-17: kropki r8c2-r9c2 white
kropki-18: kropki r8c4-r9c4 white
kropki-19: kropki r4c1-r5c1 white
kropki-20: kropki r3c3-r4c3 black
kropki-21: kropki r3c3-r3c4 black
kropki-22: kropki r6c7-r7c7 black
kropki-23: kropki r7c6-r7c7 black
kropki-24: kropki r9c8-r9c9 black
pair-1: pair r7c3-r7c4 sum 10
pair-2: pair r6c3-r7c3 sum 10
pair-3: pair r8c8-r8c9 sum 10
pair-4: pair r4c9-r5c9 sum 10
pair-5: pair r4c4-r5c4 sum 10
pair-6: pair r3c7-r4c7 sum 5
pair-7: pair r3c6-r3c7 sum 5
pair-8: pair r5c1-r5c2 sum 5
```

•	Normal Sudoku rules apply. 
•	Adjacent cells connected with a X must sum to 10.
•	Adjacent cells connected with a V must sum to 5.
•	A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are given.
