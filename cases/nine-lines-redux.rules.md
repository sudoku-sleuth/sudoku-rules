---
format: open-rules
title: Nine Lines Redux
setter: Timotab
source: https://sudokupad.app/9elyx0cu1g
case: https://sudoku-sleuth.com/cases/nine-lines-redux
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
renban-1: renban r2c2-r2c3-r2c4
renban-2: renban r3c2-r3c3-r3c4
renban-3: renban r4c2-r4c3-r4c4
renban-4: renban r1c7-r2c7-r3c7
renban-5: renban r1c8-r2c8-r3c8
renban-6: renban r5c7-r6c6-r7c5
renban-7: renban r6c7-r7c6-r8c5
renban-8: renban r9c1-r9c2-r9c3
renban-9: renban r9c8-r8c8-r8c9
little-killer-1: little-killer r1c1 sum 3
little-killer-2: little-killer r9c1-r8c2-r7c3-r6c4-r5c5-r4c6-r3c7-r2c8-r1c9 sum 45
little-killer-3: little-killer r1c8-r2c9 sum 6
x-sum-1: x-sum r9c6-r8c6-r7c6-r6c6-r5c6-r4c6-r3c6-r2c6-r1c6 sum 34
x-sum-2: x-sum r9c3-r8c3-r7c3-r6c3-r5c3-r4c3-r3c3-r2c3-r1c3 sum 17
x-sum-3: x-sum r3c1-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8-r3c9 sum 17
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[9.5,0.5],"width":0,"height":0.738,"rounded":true,"thickness":0,"angle":0,"text":"Even","textColor":"#000000","fontSize":28,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,4.5],"width":0,"height":0.738,"rounded":true,"thickness":0,"angle":0,"text":"Even","textColor":"#000000","fontSize":28,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[1.5,1.5],[1.5,3.5]],"color":"#f067f0ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[2.5,1.5],[2.5,3.5]],"color":"#f067f0ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[3.5,1.5],[3.5,3.5]],"color":"#f067f0ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[0.5,6.5],[2.5,6.5]],"color":"#f067f0ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[0.5,7.5],[2.5,7.5]],"color":"#f067f0ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[6.5,4.5],[4.5,6.5]],"color":"#f067f0ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[7.5,4.5],[5.5,6.5]],"color":"#f067f0ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[8.5,0.5],[8.5,2.5]],"color":"#f067f0ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[8.5,7.5],[7.5,7.5],[7.5,8.5]],"color":"#f067f0ff","thickness":9.6,"rounded":true}}
```

• Normal Sudoku Rules Apply: Place the digits 1 to 9 in every row, column, and box, without repetition.
• Bulbless Thermo-renbans: Digits along a grey bulbless thermo-renban line form a non-repeating consecutive set of digits which strictly increase from the bulb end. Each line has exactly one bulb at one end, but which end must be determined by the solver.
• Diagonal Sums: A number with an arrow outside the grid indicates the sum of the digits pointed to along the indicated diagonal. Digits are allowed to repeat along those diagonals as normally allowed by the other rules.
• X-Sums: A number without an arrow outside the grid indicates the sum of the first N digits, where N is the digit in the closest cell to the clue. A parity outside the grid indicates the parity of the sum of the first N digits, where N is the digit in the closest cell to the clue.
