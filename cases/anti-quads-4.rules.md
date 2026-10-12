---
format: open-rules
title: Anti-Quads 4
setter: The Bard
source: https://sudokupad.app/udkacpmg6j
case: https://sudoku-sleuth.com/cases/anti-quads-4
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
anti-knight
allowed-digits-1: allowed-digits r1c3-r1c4-r2c3-r2c4 digits [3,4,5,6,7]
allowed-digits-2: allowed-digits r3c3-r3c4-r4c3-r4c4 digits [3,4,5,6,7]
allowed-digits-3: allowed-digits r1c5-r1c6-r2c5-r2c6 digits [1,2,3,4,7,8]
allowed-digits-4: allowed-digits r2c4-r2c5-r3c4-r3c5 digits [1,2,3,4,9]
allowed-digits-5: allowed-digits r2c2-r2c3-r3c2-r3c3 digits [1,2,6,7,9]
allowed-digits-6: allowed-digits r1c1-r1c2-r2c1-r2c2 digits [4,5,6,7,8,9]
allowed-digits-7: allowed-digits r8c6-r8c7-r9c6-r9c7 digits [1,2,4,5,6,7,8,9]
allowed-digits-8: allowed-digits r6c8-r6c9-r7c8-r7c9 digits [1,2,3,4,5,6,7,8]
allowed-digits-9: allowed-digits r4c8-r4c9-r5c8-r5c9 digits [1,2,4,5,6,7,8]
allowed-digits-10: allowed-digits r4c1-r4c2-r5c1-r5c2 digits [1,2,4,5,6,7,9]
allowed-digits-11: allowed-digits r1c8-r1c9-r2c8-r2c9 digits [1,2,3,5,7,8,9]
allowed-digits-12: allowed-digits r5c4-r5c5-r6c4-r6c5 digits [1,2,3,4,7,8,9]
allowed-digits-13: allowed-digits r7c3-r7c4-r8c3-r8c4 digits [1,3,4,5,6,7,8,9]
```

```drawing
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,1.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"KM","textColor":"#000000","fontSize":14}}
```

Normal Sudoku rules apply, place the digits 1-9 in each row, column, and box.
Anti-Quadruples: Digits in the PINK circle cannot appear in one of the four surrounding cells.
Anti-Knight: Cells that are a Knight's move apart (in chess) may not contain the same digit.
