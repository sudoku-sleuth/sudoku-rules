---
format: open-rules
title: Smelting Iron Ore
setter: Blobz
source: https://sudokupad.app/blobz/smelting-iron-ore
case: https://sudoku-sleuth.com/cases/smelting-iron-ore
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r8c3=3
---

```rules
sudoku 9x9
cage-1: cage r3c5-r3c6-r4c5-r4c6 total 14 connected true
cage-2: cage r1c5-r1c6-r2c5-r2c6 total 30 connected true
cage-3: cage r7c3-r7c4-r7c5-r8c3-r8c4-r8c5-r9c3-r9c4-r9c5 connected true
arrow-1: arrow r2c4-r2c5 bulb ["r2c3"]
arrow-2: arrow r4c4-r4c5 bulb ["r4c3"]
arrow-3: arrow r4c7-r4c8 bulb ["r4c6"]
arrow-4: arrow r2c7-r2c8 bulb ["r2c6"]
arrow-5: arrow r8c8-r8c9 bulb ["r8c7"]
whispers-1: whispers r1c8-r2c8-r3c8-r4c8-r5c8-r6c8-r6c7-r7c7-r8c7 gap 5
whispers-2: whispers r1c3-r2c3-r3c3-r4c3-r5c3-r6c3-r6c2-r7c2-r8c2-r9c2 gap 5
renban-1: renban r3c5-r3c6-r4c6-r4c5
renban-2: renban r1c5-r1c6-r2c6-r2c5
```

```drawing
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[7.214,2.214],[7.5,1.929],[7.786,2.214]],"color":"#ffd466ff","thickness":9.6,"rounded":true}}
```

Normal sudoku rules apply. 

Digits in cages do not repeat, and sum to the given value. 

Pink lines contain a set of consecutive digits in any order. 

Digits along arrows sum to the digit in the attached circle. 

Along green lines, adjacent digits differ by 5 or more.

R8C2 contains a digit smaller than 3. R8C9 contains an even digit.
