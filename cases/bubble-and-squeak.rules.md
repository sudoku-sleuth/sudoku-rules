---
format: open-rules
title: Bubble and Squeak
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/hcu3xrzvfz
case: https://sudoku-sleuth.com/cases/bubble-and-squeak
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c8=8 r4c5=4
exported: a973ba2a346d05138e874b8e39f0da88
---

```rules
sudoku 9x9
arrow-1: arrow r4c4-r3c5-r4c6-r3c7-r4c8 bulb ["r3c3"]
arrow-2: arrow r4c2-r5c1-r6c1 bulb ["r3c3"]
arrow-3: arrow r5c8-r4c7 bulb ["r6c9"]
arrow-4: arrow r6c6-r6c5-r7c4 bulb ["r5c7"]
arrow-5: arrow r7c1-r6c1 bulb ["r7c2"]
arrow-6: arrow r8c2-r9c2-r9c3 bulb ["r7c2"]
molecules atoms [["r3c4","r3c5","r4c4","r4c5"],["r3c6","r3c7","r4c6","r4c7"],["r4c7","r4c8","r5c7","r5c8"],["r5c8","r5c9","r6c8","r6c9"],["r6c4","r6c5","r7c4","r7c5"],["r5c1","r5c2","r6c1","r6c2"],["r6c2","r6c3","r7c2","r7c3"],["r6c1","r6c2","r7c1","r7c2"],["r6c8","r6c9","r7c8","r7c9"],["r7c7","r7c8","r8c7","r8c8"],["r7c6","r7c7","r8c6","r8c7"],["r2c1","r2c2","r3c1","r3c2"]] sum 8 electronMax 5
```

Normal Sudoku rules apply: Each row, column, and box must contain a complete set of the digits 1-9.
Arrows: Digits along the shaft of an arrow sum to the value shown in the attached circle.
MOLECULES: Cells are either electrons or non-electrons. A cell containing a digit from 1-5 is an electron. Each atom (pink circle) contains electrons whose digits sum to 8.  (Electrons can contain digits greater than 5.)
