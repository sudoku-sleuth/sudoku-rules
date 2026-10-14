---
format: open-rules
title: The Ten Dual Commandments
setter: John Laurens and Charles Lee (FullDeck and Missing a Few Cards)
source: https://sudokupad.app/fjcl49mb28
case: https://sudoku-sleuth.com/cases/the-ten-dual-commandments
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c3=1 r2c5=2 r2c7=8 r4c1=3 r4c9=6 r5c4=4 r7c3=7 r9c5=5 r9c9=9
exported: 8820294ea790bc81b24b569f7684b632
---

```rules
sudoku 9x9
pair-1: pair r1c1-r1c2 sum 10
pair-2: pair r2c2-r2c3 sum 10
pair-3: pair r3c3-r3c4 sum 10
pair-4: pair r4c4-r4c5 sum 10
pair-5: pair r5c5-r5c6 sum 10
pair-6: pair r6c6-r6c7 sum 10
pair-7: pair r7c7-r7c8 sum 10
pair-8: pair r8c8-r8c9 sum 10
pair-9: pair r8c1-r9c1 sum 10
pair-10: pair r1c9-r2c9 sum 10
negative relations [{"op":"sum","value":10},{"op":"sum","value":5}] except [["r1c1","r1c2"],["r2c2","r2c3"],["r3c3","r3c4"],["r4c4","r4c5"],["r5c5","r5c6"],["r6c6","r6c7"],["r7c7","r7c8"],["r8c8","r8c9"],["r8c1","r9c1"],["r1c9","r2c9"]]
```

- Normal Sudoku rules apply.
- Cells separated by an X must sum to 10. Cells separated by a V must sum to 5. ALL Xs and Vs are given.

The ten X's in the puzzle are the ten dual (sic) commandments.
