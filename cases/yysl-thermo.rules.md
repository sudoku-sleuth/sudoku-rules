---
format: open-rules
title: YYSL Thermo
setter: Blobz
source: https://sudokupad.app/blobz/yysl-thermo
case: https://sudoku-sleuth.com/cases/yysl-thermo
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 43db7c34b2bd863d1fb425417bd87f29
---

```rules
sudoku 9x9
thermo-1: thermo r3c1-r2c2-r3c2-r2c3
thermo-2: thermo r4c5-r5c5-r5c6-r4c6
thermo-3: thermo r6c2-r5c2-r5c3-r4c3
thermo-4: thermo r8c3-r9c3-r9c2-r8c2
thermo-5: thermo r7c4-r8c4-r8c5-r9c5
thermo-6: thermo r2c5-r2c4-r3c5-r2c6-r3c6
thermo-7: thermo r2c7-r3c8-r2c9-r3c9-r2c8
thermo-8: thermo r6c9-r6c8-r5c9-r5c8-r5c7
thermo-9: thermo r7c7-r8c7-r9c8-r8c8-r9c9
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"cage","cells":[10],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"cage","cells":[12],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"cage","cells":[13],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"cage","cells":[14],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"cage","cells":[22],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"cage","cells":[7],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"cage","cells":[25],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"cage","cells":[17],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"cage","cells":[29],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"cage","cells":[38],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"cage","cells":[47],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"cage","cells":[37],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"cage","cells":[31],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"cage","cells":[40],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"cage","cells":[49],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"cage","cells":[32],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"cage","cells":[41],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"cage","cells":[48],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"cage","cells":[52],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"cage","cells":[44],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"cage","cells":[55],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"cage","cells":[63],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"cage","cells":[65],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"cage","cells":[74],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"cage","cells":[57],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"cage","cells":[76],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"cage","cells":[60],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"cage","cells":[69],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"cage","cells":[70],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"cage","cells":[71],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"cage","cells":[79],"color":"#000000","labelColor":"#000000"}}
```

Normal sudoku rules apply. 

Shade some cells such that all shaded cells are orthogonally connected and all unshaded cells are orthogonally connected and no 2x2 area is fully shaded or unshaded. 

Digits in caged cells indicate how many cells of the same color (shaded or unshaded) are seen orthogonally from that position, including itself. The "other" color blocks vision. 

Digits on thermometers must increase from the bulb end.
