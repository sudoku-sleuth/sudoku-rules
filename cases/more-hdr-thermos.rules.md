---
format: open-rules
title: More HDR Thermos
setter: Blobz
source: https://sudokupad.app/blobz/more-hdr-thermos
case: https://sudoku-sleuth.com/cases/more-hdr-thermos
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
---

```rules
sudoku 9x9
thermo-1: thermo r5c2-r6c2-r6c1-r5c1
thermo-2: thermo r4c9-r5c9-r5c8-r4c8
thermo-3: thermo r8c6-r9c6-r9c5-r8c5
thermo-4: thermo r1c4-r1c5-r2c5-r2c4
thermo-5: thermo r9c1-r9c2-r8c1
thermo-6: thermo r1c1-r2c1-r1c2
thermo-7: thermo r1c8-r1c9-r2c9
thermo-8: thermo r9c8-r9c9-r8c9
thermo-9: thermo r4c3-r3c3-r3c4-r4c4
```

```drawing
- {"id":"drawing-19","rules":[],"visual":{"kind":"cage","cells":[36]}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"cage","cells":[9]}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"cage","cells":[63]}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"cage","cells":[10]}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"cage","cells":[11]}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"cage","cells":[14]}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"cage","cells":[15]}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"cage","cells":[34]}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"cage","cells":[23]}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"cage","cells":[64]}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"cage","cells":[38]}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"cage","cells":[68]}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"cage","cells":[70]}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"cage","cells":[61]}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"cage","cells":[52]}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"cage","cells":[30]}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"cage","cells":[58]}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"cage","cells":[29]}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"cage","cells":[19]}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"cage","cells":[2]}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"cage","cells":[79]}}
```

Normal sudoku rules apply. 

Yin Yang: Shade some cells such that all shaded cells are orthogonally connected, all unshaded cells are orthogonally connected, and no 2x2 area is fully shaded or unshaded.

Sight Lines: Digits in caged cells indicate how many cells of the same color (shaded or unshaded) are seen orthogonally from that position, including itself. The "other" color blocks vision.

HDR Thermos: Values on thermometers must increase from the bulb end. For the purpose of evaluating thermometers, digits in shaded cells have NEGATIVE values while digits in unshaded cells have POSITIVE values.
