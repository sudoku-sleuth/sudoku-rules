---
format: open-rules
title: Pinchers
setter: Jobo
source: https://sudokupad.app/hopeatvtsw
case: https://sudoku-sleuth.com/cases/pinchers
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
thermo-1: thermo r4c4-r4c3-r4c2-r3c2
thermo-2: thermo r4c4-r3c4-r2c4-r2c3
thermo-3: thermo r2c2-r3c1-r2c1
thermo-4: thermo r2c2-r1c3-r1c2
thermo-5: thermo r2c8-r1c7-r1c8
thermo-6: thermo r2c8-r3c9-r2c9
thermo-7: thermo r4c6-r3c6-r2c6-r2c7
thermo-8: thermo r4c6-r4c7-r4c8-r3c8
thermo-9: thermo r6c6-r6c7-r6c8-r7c8
thermo-10: thermo r6c6-r7c6-r8c6-r8c7
thermo-11: thermo r8c8-r7c9-r8c9
thermo-12: thermo r8c8-r9c7-r9c8
thermo-13: thermo r6c4-r6c3-r6c2-r7c2
thermo-14: thermo r6c4-r7c4-r8c4-r8c3
thermo-15: thermo r8c2-r7c1-r8c1
thermo-16: thermo r8c2-r9c3-r9c2
```

```drawing
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.214,5.5],"width":0,"height":0.395,"rounded":true,"thickness":0,"angle":0,"text":"9","textColor":"#444f","fontSize":14.8,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.214,7.5],"width":0,"height":0.395,"rounded":true,"thickness":0,"angle":0,"text":"6","textColor":"#444f","fontSize":14.8,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.214,5.5],"width":0,"height":0.395,"rounded":true,"thickness":0,"angle":0,"text":"6","textColor":"#444f","fontSize":14.8,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.214,7.5],"width":0,"height":0.395,"rounded":true,"thickness":0,"angle":0,"text":"8","textColor":"#444f","fontSize":14.8,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.214,1.5],"width":0,"height":0.395,"rounded":true,"thickness":0,"angle":0,"text":"5","textColor":"#444f","fontSize":14.8,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.214,1.5],"width":0,"height":0.395,"rounded":true,"thickness":0,"angle":0,"text":"9","textColor":"#444f","fontSize":14.8,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.214,3.5],"width":0,"height":0.395,"rounded":true,"thickness":0,"angle":0,"text":"6","textColor":"#444f","fontSize":14.8,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.214,3.5],"width":0,"height":0.395,"rounded":true,"thickness":0,"angle":0,"text":"9","textColor":"#444f","fontSize":14.8,"textStroke":"#ffffff","textStrokeWidth":1}}
```

Normal sudoku rules apply.

Along thermometers, digits must increase from the bulb end.

The small clues at the top of thermometer bulbs show the highest digit to appear in all thermo tips originating from that bulb.
