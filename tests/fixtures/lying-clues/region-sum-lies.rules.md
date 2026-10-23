---
format: open-rules
title: Region Sum Lies
setter: Marty Sears
source: https://sudokupad.app/b03tzwpko3 (Logic Masters https://logic-masters.de/Raetselportal/Raetsel/zeigen.php?id=000VEJ)
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
liar-cells
kropki-1: kropki r7c4-r8c4 black
kropki-2: kropki r6c9-r7c9 black
kropki-3: kropki r3c5-r3c6 black
kropki-4: kropki r5c8-r6c8 black
kropki-5: kropki r8c2-r9c2 black
region-sum-1: region-sum r8c2-r7c1-r6c2-r7c3-r8c4-r9c3 segments [["r8c2","r7c1"],["r6c2"],["r7c3"],["r8c4"],["r9c3"]]
region-sum-1-liars: #line-liar-limit r8c2-r7c1-r6c2-r7c3-r8c4-r9c3
region-sum-2: region-sum r6c6-r5c5-r5c6-r4c6-r5c7 segments [["r6c6","r5c5","r5c6","r4c6"],["r5c7"]]
region-sum-2-liars: #line-liar-limit r6c6-r5c5-r5c6-r4c6-r5c7
region-sum-3: region-sum r9c4-r9c5-r8c5-r7c5-r8c6-r9c6-r9c7-r8c8-r7c9 segments [["r9c4","r9c5","r8c5","r7c5","r8c6","r9c6"],["r9c7","r8c8","r7c9"]]
region-sum-3-liars: #line-liar-limit r9c4-r9c5-r8c5-r7c5-r8c6-r9c6-r9c7-r8c8-r7c9
region-sum-4: region-sum r4c8-r4c9-r3c9-r2c9 segments [["r4c8","r4c9"],["r3c9","r2c9"]]
region-sum-4-liars: #line-liar-limit r4c8-r4c9-r3c9-r2c9
region-sum-5: region-sum r3c1-r4c1 segments [["r3c1"],["r4c1"]]
region-sum-5-liars: #line-liar-limit r3c1-r4c1
region-sum-6: region-sum r4c4-r3c4-r2c4-r1c4 segments [["r4c4"],["r3c4","r2c4","r1c4"]]
region-sum-6-liars: #line-liar-limit r4c4-r3c4-r2c4-r1c4
region-sum-7: region-sum r7c7-r6c8-r6c7 segments [["r7c7"],["r6c8","r6c7"]]
region-sum-7-liars: #line-liar-limit r6c7-r7c7-r6c8
region-sum-8: region-sum r5c4-r4c5-r3c6-r4c7-r5c8-r6c9-r7c8-r8c7-r7c6-r6c5-r7c4-r6c3-r5c2-r4c3 segments [["r5c4","r4c5"],["r3c6"],["r4c7","r5c8","r6c9"],["r7c8","r8c7"],["r7c6"],["r6c5"],["r7c4"],["r6c3","r5c2","r4c3"]]
region-sum-8-liars: #line-liar-limit r4c3-r5c4-r4c5-r3c6-r4c7-r5c8-r6c9-r7c8-r8c7-r7c6-r6c5-r7c4-r6c3-r5c2
```

## At most one liar per blue line

```custom-rules
- id: line-liar-limit
  name: Line liar limit
  class: with aggregates
  parameters:
    line:
      type: path<cell>
      default: Required.
      description: The complete blue line.
  definition: No blue line contains more than one liar cell.
  maths: "countWhere(line,λc:cell: V(c)!=D(c))<=1"
  example: "Satisfies: values equal digits everywhere. Breaks: two cells on the line have different values from their digits."
```

Logic Masters source: https://logic-masters.de/Raetselportal/Raetsel/zeigen.php?id=000VEJ

## Source rules

Normal sudoku rules apply.

LIAR CELLS:
Every row, column and 3x3 box contains one liar cell, whose real value is different from its digit.

• Every liar cell contains a different digit from 1-9.
• Every liar cell has a different value from 1-9.
• No blue line may contain more than one liar cell.

REGION SUM LINES: 
Box borders divide blue lines into segments. The values of cells on each segment have the same sum. This sum must be determined for each line.

BLACK DOTS:
If a black dot sits between two cells, the value of one is double the value of the other.

NOTES:
The arrows and circles on the right can be use to keep track.

The arrows and circles to the right are optional notes, outside the Sudoku board.

The two closed blue lines are listed from a box crossing, so each listed segment is one uninterrupted run between box borders.
