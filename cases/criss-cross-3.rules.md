---
format: open-rules
title: Criss Cross
setter: Tingo
source: https://tinyurl.com/crisscrosssudoku
case: https://sudoku-sleuth.com/cases/criss-cross-3
library: https://rules.sudoku-sleuth.com/
status: flagged
flags:
  - Some source features still need to be checked against our reading.
  - Some of the source rules still need to be included in our reading.
  - The source describes Renban lines that are not yet included in our reading.
---

```rules
sudoku 9x9
anti-knight
diagonal-1: diagonal direction "main"
diagonal-2: diagonal direction "anti"
kropki-1: kropki r4c9-r5c9 colour "white"
kropki-2: kropki r6c7-r6c8 colour "white"
kropki-3: kropki r5c7-r5c8 colour "white"
region-sum-1: region-sum r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8-r5c9 segments [["r5c1","r5c2","r5c3"],["r5c4","r5c5","r5c6"],["r5c7","r5c8","r5c9"]]
region-sum-2: region-sum r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5 segments [["r1c5","r2c5","r3c5"],["r4c5","r5c5","r6c5"],["r7c5","r8c5","r9c5"]]
pair-1: pair r5c7-r6c7 relation {"op":"sum","value":10}
pair-2: pair r4c8-r5c8 relation {"op":"sum","value":10}
pair-3: pair r5c9-r6c9 relation {"op":"sum","value":10}
pair-4: pair r5c6-r5c7 relation {"op":"sum","value":5}
pair-5: pair r4c7-r5c7 relation {"op":"sum","value":5}
```

Normal Sudoku Rules Apply
Cells separated by a knight's move (in chess) cannot contain the same value
The blue line is a region sums line. Digits along a line must sum to the same total in each region the line enters. If a line enters a region multiple times, each instance is calculated separately. There are 2 RS lines in this puzzle, one 9 cells long that is vertical, and one 9 cells long that is horizontal. They intersect, but do not change direction.
Cells joined by white dots are consecutive in value. Not all dots are given.
Cells joined by Vs sum to 5. Cells joined by Xs sum to 10. Not all Vs and Xs are given.
Digits along the diagonals must not repeat on their respective line. Additionally, the positive diagonal (bottom left to top right) acts as 3 unimodular lines. In each box it crosses, the 3 cells on the line must be from the same modular set, i.e.: 1,4,7; or 2,5,8; or 3,6,9. On the negative diagonal (top left to bottom right), the line also acts as renban lines. In each box it crosses, the 3 cells on the line are a 3-cell renban, which contains consecutive digits in any order.
