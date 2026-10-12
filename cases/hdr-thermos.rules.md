---
format: open-rules
title: HDR Thermos
setter: Blobz
source: https://sudokupad.app/blobz/hdr-thermos
case: https://sudoku-sleuth.com/cases/hdr-thermos
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
---

```rules
sudoku 9x9
thermo-1: thermo r1c5-r1c6-r2c6-r3c6-r3c5
thermo-2: thermo r3c8-r2c8-r1c8-r1c9-r2c9
thermo-3: thermo r4c8-r4c9-r5c9-r6c8-r6c7
thermo-4: thermo r9c9-r9c8-r8c7-r7c8-r8c8
thermo-5: thermo r9c6-r9c5-r8c5-r8c4-r7c4
thermo-6: thermo r9c2-r8c1-r8c2-r7c2-r8c3
thermo-7: thermo r5c1-r4c1-r4c2-r5c2-r5c3
thermo-8: thermo r3c2-r2c1-r1c2-r2c3-r2c2
```

```drawing
- {"id":"drawing-17","rules":[],"visual":{"kind":"cage","cells":[8]}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"cage","cells":[6]}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"cage","cells":[5]}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"cage","cells":[4]}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"cage","cells":[12]}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"cage","cells":[13]}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"cage","cells":[14]}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"cage","cells":[25]}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"cage","cells":[28]}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"cage","cells":[29]}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"cage","cells":[31]}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"cage","cells":[34]}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"cage","cells":[41]}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"cage","cells":[40]}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"cage","cells":[39]}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"cage","cells":[37]}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"cage","cells":[36]}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"cage","cells":[47]}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"cage","cells":[60]}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"cage","cells":[58]}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"cage","cells":[56]}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"cage","cells":[66]}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"cage","cells":[69]}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"cage","cells":[70]}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"cage","cells":[73]}}
```

Normal sudoku rules apply. 

Yin Yang: Shade some cells such that all shaded cells are orthogonally connected, all unshaded cells are orthogonally connected, and no 2x2 area is fully shaded or unshaded.

Sight Lines: Digits in caged cells indicate how many cells of the same color (shaded or unshaded) are seen orthogonally from that position, including itself. The "other" color blocks vision.

HDR Thermos: Values on thermometers must increase from the bulb end. For the purpose of evaluating thermometers, digits in shaded cells have NEGATIVE values while digits in unshaded cells have POSITIVE values.
