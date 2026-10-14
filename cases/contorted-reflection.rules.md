---
format: open-rules
title: Contorted Reflection
setter: Meggen033
source: https://sudokupad.app/lv4qqnckke
case: https://sudoku-sleuth.com/cases/contorted-reflection
library: https://rules.sudoku-sleuth.com/
status: read
exported: 4d87a63d66a4b608d28a5a6b891188ac
---

```rules
sudoku 9x9
diagonal direction "main"
kropki-1: kropki r2c1-r2c2 white
kropki-2: kropki r1c2-r2c2 white
kropki-3: kropki r4c4-r5c4 white
kropki-4: kropki r4c4-r4c5 white
kropki-5: kropki r7c6-r7c7 white
kropki-6: kropki r6c7-r7c7 white
kropki-7: kropki r1c3-r1c4 white
kropki-8: kropki r5c3-r6c3 black
kropki-9: kropki r3c5-r3c6 black
kropki-10: kropki r5c4-r6c4 black
kropki-11: kropki r4c5-r4c6 black
arrow-1: arrow r9c3-r8c3 bulb ["r9c2"]
arrow-2: arrow r3c9-r3c8 bulb ["r2c9"]
arrow-3: arrow r4c7-r4c8 bulb ["r3c7"]
arrow-4: arrow r7c4-r8c4 bulb ["r7c3"]
arrow-5: arrow r9c7-r9c6 bulb ["r8c7"]
pair-1: pair r1c2-r1c3 sum 10
pair-2: pair r2c1-r3c1 sum 10
pair-3: pair r3c3-r4c3 sum 5
pair-4: pair r3c3-r3c4 sum 5
pair-5: pair r6c7-r6c8 sum 5
pair-6: pair r7c6-r8c6 sum 5
```

•	Normal Sudoku rules apply. 
•	Digits along the negative diagonal cannot repeat. 
•	Adjacent cells connected with a X must sum to 10.
•	Adjacent cells connected with a V must sum to 5.
•	The digits along each arrow must sum to the digit in the circled cell.
•	A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are given.
