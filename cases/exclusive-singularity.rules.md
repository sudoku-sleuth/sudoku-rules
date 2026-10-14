---
format: open-rules
title: Exclusive Singularity
setter: Meggen033
source: https://sudokupad.app/cwrahld3we
case: https://sudoku-sleuth.com/cases/exclusive-singularity
library: https://rules.sudoku-sleuth.com/
status: read
exported: 9962686a097ca4f9fd52b847d332009a
---

```rules
sudoku 9x9
cage r4c1-r4c2-r4c3 total 9 connected true
thermo r4c6-r4c5-r5c4-r6c4
kropki-1: kropki r5c2-r5c3 white
kropki-2: kropki r7c6-r8c6 black
arrow r4c9-r4c8 bulb ["r3c9"]
palindrome r5c5-r6c6-r7c7-r8c7
between r9c6-r9c7-r9c8-r8c8-r7c9-r6c9 ends ["r9c5","r5c9"]
whispers-1: whispers r1c4-r2c4-r3c4 gap 5
whispers-2: whispers r4c4-r3c4 gap 5
renban r7c4-r8c4-r9c4
region-sum r2c5-r2c4-r2c3-r3c3-r3c2-r4c2-r5c2 segments [["r2c5","r2c4"],["r2c3","r3c3","r3c2"],["r4c2","r5c2"]]
pair-1: pair r2c8-r2c9 sum 10
pair-2: pair r8c2-r9c2 sum 5
quadruple r8c8-r8c9-r9c8-r9c9 digits [2,8]
parity-cells r2c2 parity "even"
extremum-1: extremum r7c2 type "min" exhaustive false
extremum-2: extremum r5c8 type "max" exhaustive false
```

Normal Sudoku rules apply.

Digits along a grey palindrome line read the same forwards or backwards.

Adjacent digits along a green german whisper line must have a difference of at least 5.

Digits along a megenta renban form a set of consecutive non-repeating digits in any order.

Digits along a blue line create a sumline where the sum of digits on a line within a particular 3x3 box must be the same for all the boxes the line passes through.

Digits along each thermometer must increase starting from the bulb end.

The digits along each arrow must sum to the digit in the circled cell.

Cells along lines between two filled circles must have values between those in the circles.

Cells with a filled square must be even.

A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are shown.

Adjacent cells connected with an X must sum to 10. Adjacent cells connected with a V must sum to 5.

Min/max cells must be greater than or less than their orthogonally adjacent neighbors as indicated by the symbols bordering the cell.

The digits in a cage must sum to the number printed in its corner. Digits may not repeat within a cage.

Circled digits where four cells meet must be present as values in those four cells.
