---
format: open-rules
title: Flight of the TARDIS
setter: The Bard
source: https://sudokupad.app/xn1jvjcv1s
case: https://sudoku-sleuth.com/cases/flight-of-the-tardis
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
---

```rules
sudoku 9x9
thermo-1: thermo r6c3-r5c3-r4c3-r4c4-r4c5-r3c5-r2c6
thermo-2: thermo r4c6-r5c7-r6c8-r7c7-r8c6
```

```drawing
- {"id":"drawing-3","rules":[],"visual":{"kind":"cage","cells":[45,46,47],"label":"-10","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"cage","cells":[14,15],"label":"5","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"cage","cells":[28,29,37,38],"label":"0","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"cage","cells":[27,36],"label":"7","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"cage","cells":[12,13],"label":"-1","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"cage","cells":[16,17],"label":"-5","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"cage","cells":[67,68],"label":"3","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"cage","cells":[59,60],"label":"3","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"cage","cells":[66,75],"label":"-3","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"cage","cells":[55,56],"label":"-3","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"cage","cells":[64,73],"label":"-3","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"cage","cells":[43,52],"label":"9","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"cage","cells":[34,35],"label":"2","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"cage","cells":[0,9,18],"label":"21","color":"#000000","labelColor":"#000000"}}
```

Normal Sudoku Rules apply, place the digits 1-9 in each row, column, and box. 
The TARDIS needs to fly from the blue square to the other blue square through an orthogonally connected loop that does not touch itself even diagonally. 
Digits on this path have negative values for all clues AND are only odd digits. 
Killer Cages: digits in each cage add up to the total in the corner. 
Thermometers: digits along a thermometer strictly increase OR decrease in value.
