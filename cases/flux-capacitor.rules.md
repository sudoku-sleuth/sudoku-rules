---
format: open-rules
title: Flux Capacitor
setter: Blobz
source: https://sudokupad.app/blobz/flux-capacitor
case: https://sudoku-sleuth.com/cases/flux-capacitor
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: beae0ded0f48e9121bf68df0e4020c3e
---

```rules
sudoku 9x9
thermo-1: thermo r1c1-r2c2-r3c3-r4c4
thermo-2: thermo r1c9-r2c8-r3c7-r4c6
thermo-3: thermo r9c5-r8c5-r7c5-r6c5
whispers-1: whispers r1c2-r2c3-r3c4-r4c5-r3c6-r2c7-r1c8 gap 5
whispers-2: whispers r3c8-r4c7-r5c6-r6c6-r7c6-r8c6 gap 5
whispers-3: whispers r2c1-r3c2-r4c3-r5c4-r6c4-r7c4-r8c4 gap 5
pair-1: pair r2c2-r2c3 sum 10
pair-2: pair r1c7-r2c7 sum 10
pair-3: pair r6c1-r7c1 sum 10
pair-4: pair r5c2-r6c2 sum 10
pair-5: pair r8c6-r8c7 sum 10
pair-6: pair r9c3-r9c4 sum 10
pair-7: pair r5c5-r5c6 sum 10
```

```drawing
- {"id":"drawing-10","rules":[],"visual":{"kind":"cage","cells":[64],"label":"FC","color":"#07ff","labelColor":"#07ff"}}
```

Normal sudoku rules apply.

Along green lines, adjacent digits differ by at least 5.

Along thermometers digits increase from the bulb end.

Digits separated by an X sum to 10; not all such X's are given.
