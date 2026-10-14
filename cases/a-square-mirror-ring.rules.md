---
format: open-rules
title: A Square Mirror Ring
setter: Meggen033
source: https://sudokupad.app/2w976myysr
case: https://sudoku-sleuth.com/cases/a-square-mirror-ring
library: https://rules.sudoku-sleuth.com/
status: read
exported: 8684d95e12f3d2268844e48bbe27cd7b
---

```rules
sudoku 9x9
arrow-1: arrow r6c4-r5c5-r4c6 bulb ["r7c3"]
arrow-2: arrow r9c6-r9c5 bulb ["r8c7"]
arrow-3: arrow r8c6-r7c6 bulb ["r8c5"]
arrow-4: arrow r6c1-r5c2 bulb ["r7c2"]
arrow-5: arrow r1c4-r1c5 bulb ["r2c3"]
arrow-6: arrow r4c9-r5c9 bulb ["r3c8"]
arrow-7: arrow r6c8-r6c7 bulb ["r6c9"]
arrow-8: arrow r2c2-r1c1 bulb ["r3c3"]
arrow-9: arrow r2c6-r3c6 bulb ["r1c6"]
palindrome r6c3-r5c3-r4c3-r3c3-r3c4-r3c5-r3c6-r3c7-r4c7-r5c7-r6c7-r7c7-r7c6-r7c5-r7c4
quadruple-1: quadruple r8c8-r8c9-r9c8-r9c9 digits [1,2,3,6]
quadruple-2: quadruple r1c8-r1c9-r2c8-r2c9 digits [1,2,4,5]
quadruple-3: quadruple r1c1-r1c2-r2c1-r2c2 digits [1,2,3,5]
quadruple-4: quadruple r8c1-r8c2-r9c1-r9c2 digits [1,2,3,4]
```

•	Normal Sudoku rules apply. 
•	Digits along a grey palindrome line read the same forwards or backwards.
•	The digits along each arrow must sum to the digit in the circled cell.
•	Digits in a white circle must appear at least once in the four surrounding cells.
