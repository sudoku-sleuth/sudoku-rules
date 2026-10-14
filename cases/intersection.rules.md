---
format: open-rules
title: Intersection
setter: Jobo
source: https://sudokupad.app/fvdgtx2cmm
case: https://sudoku-sleuth.com/cases/intersection
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 1a86ebaf41f44649fd4024719786d5aa
---

```rules
sudoku 9x9
kropki r8c9-r9c9 white
arrow-1: arrow r2c3-r3c4-r4c5 bulb ["r1c2"]
arrow-2: arrow r3c2-r4c3-r5c4 bulb ["r2c1"]
arrow-3: arrow r2c7-r3c6-r4c5 bulb ["r1c8"]
arrow-4: arrow r3c8-r4c7-r5c6 bulb ["r2c9"]
arrow-5: arrow r7c8-r6c7-r5c6 bulb ["r8c9"]
arrow-6: arrow r8c7-r7c6-r6c5 bulb ["r9c8"]
arrow-7: arrow r8c3-r7c4-r6c5 bulb ["r9c2"]
arrow-8: arrow r7c2-r6c3-r5c4 bulb ["r8c1"]
palindrome-1: palindrome r2c1-r3c2-r4c3-r4c4
palindrome-2: palindrome r4c6-r4c7-r3c8-r2c9
palindrome-3: palindrome r8c1-r7c2-r6c3-r6c4
palindrome-4: palindrome r8c9-r7c8-r6c7-r6c6
```

```drawing
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[3.5,4.5],[4.5,4.5],[5.5,4.5]],"color":"#cdb1ec","thickness":5,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[4.5,3.5],[4.5,4.5],[4.5,5.5]],"color":"#cdb1ec","thickness":5,"rounded":true}}
```

Normal sudoku rules apply.

Digits along an arrow must sum to the digit in that arrow's circle.

Grey lines are palindromes and must read the same in both directions.

Digits an equal distance from the center of a lavender line must sum to the digit on the center of that line. Lines go straight where they cross.

Digits separated by a white dot must be consecutive. Not all dots are given.
