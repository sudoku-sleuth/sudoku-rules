---
format: open-rules
title: Cross Sum Renbans
setter: Meggen033
source: https://sudokupad.app/1yx3qtiyna
case: https://sudoku-sleuth.com/cases/cross-sum-renbans
library: https://rules.sudoku-sleuth.com/
status: read
exported: 20d2edaf32c222c698e19aec09edcc47
---

```rules
sudoku 9x9
kropki-1: kropki r6c4-r6c5 white
kropki-2: kropki r9c3-r9c4 white
kropki-3: kropki r8c3-r8c4 white
kropki-4: kropki r4c5-r5c5 black
kropki-5: kropki r6c9-r7c9 black
renban-1: renban r3c2-r3c3-r3c4-r2c5-r1c6
renban-2: renban r8c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8
renban-3: renban r8c1-r7c1-r6c1-r5c2
renban-4: renban r2c9-r3c8-r4c8-r4c9
renban-5: renban r4c5-r5c6-r5c7-r6c8
region-sum-1: region-sum r2c8-r3c7-r3c6-r2c5-r1c4 segments [["r2c8","r3c7"],["r3c6","r2c5","r1c4"]]
region-sum-2: region-sum r5c5-r6c5-r7c5-r8c5 segments [["r5c5","r6c5"],["r7c5","r8c5"]]
```

• Normal Sudoku rules apply.
• Lines are both Renban and Sum Lines. Different color lines are for clarification.
• Renban: Digits placed on lines must be a non-repeating set of consecutive digits, in any order.
• Sum Lines: The sum of the digits on a line is the same within each box the line is in.
• A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are given.
