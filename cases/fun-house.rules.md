---
format: open-rules
title: Fun House
setter: Meggen033
source: https://sudokupad.app/1afvkdgafd
case: https://sudoku-sleuth.com/cases/fun-house
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r1c3 total 9 connected true
cage-2: cage r3c3-r4c3-r5c3-r6c3-r7c3-r7c4-r7c5-r7c6-r7c7 connected true
thermo r1c8-r1c9-r2c9-r3c9
kropki-1: kropki r5c4-r5c5 colour "white"
kropki-2: kropki r9c1-r9c2 colour "black"
arrow-1: arrow r7c9-r8c9-r9c9 bulb ["r6c9"]
arrow-2: arrow r9c7-r9c8 bulb ["r9c6"]
palindrome r9c6-r8c7-r7c6-r6c7-r6c8-r6c9
pair-1: pair r5c6-r5c7 sum 10
pair-2: pair r7c8-r8c8 sum 10
quadruple r6c2-r6c3-r7c2-r7c3 digits [6,7]
little-killer r4c1-r3c2-r2c3-r1c4 sum 14
sandwich r1c3-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3-r8c3-r9c3 sum 0
parity-cells-1: parity-cells r5c1-r5c9 parity "odd"
parity-cells-2: parity-cells r5c2-r5c8 parity "even"
extremum r7c5 type "max" exhaustive false
```

Normal Sudoku rules apply.

The digits in a cage must sum to the number printed in its corner. Digits may not repeat within a cage.

Digits along each thermometer must increase starting from the bulb end.

Digits along a palindrome line read the same forwards or backwards.

Cells with a filled circle must be odd. Cells with a filled square must be even.

The digits along each arrow must sum to the digit in the circled cell. Digits may repeat along an arrow if permitted by other rules.

A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are shown.

Adjacent cells connected with an X must sum to 10.

Circled digits where four cells meet must be present as values in those four cells.

Clues outside the grid show the sum of digits sandwiched between the 1 and the 9 in that row or column.

Digits along diagonals pointed to by arrows outside the grid must sum to the number listed. Digits may repeat along the diagonal if otherwise allowed by normal Sudoku rules.

Max cells must be greater than their orthogonally adjacent neighbors as indicated by the symbols bordering the cell.
