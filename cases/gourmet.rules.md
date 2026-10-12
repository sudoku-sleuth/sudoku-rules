---
format: open-rules
title: Gourmet
setter: Jobo
source: https://tinyurl.com/yu855v6z
case: https://sudoku-sleuth.com/cases/gourmet
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - A clue marker still needs to be read before we can confirm the rule for unmarked pairs.
---

```rules
sudoku 9x9
thermo-1: thermo r4c4-r3c3
thermo-2: thermo r5c4-r5c3
thermo-3: thermo r6c4-r7c3
thermo-4: thermo r6c5-r7c5
thermo-5: thermo r6c6-r7c7
thermo-6: thermo r5c6-r5c7
thermo-7: thermo r4c6-r3c7
thermo-8: thermo r4c5-r3c5
negative relations [{"op":"difference","value":1}] except [["r1c2","r2c2"],["r1c8","r2c8"],["r2c2","r3c2"],["r2c8","r3c8"],["r7c2","r8c2"],["r7c8","r8c8"],["r8c2","r9c2"],["r8c8","r9c8"],["r2c1","r2c2"],["r2c2","r2c3"],["r2c7","r2c8"],["r2c8","r2c9"],["r8c1","r8c2"],["r8c2","r8c3"],["r8c7","r8c8"],["r8c8","r8c9"]]
```

```drawing
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,1.5],"width":1.525,"height":1.525,"rounded":true,"stroke":"#CFCFCF","thickness":6.7}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,7.5],"width":1.525,"height":1.525,"rounded":true,"stroke":"#CFCFCF","thickness":6.7}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,1.5],"width":1.525,"height":1.525,"rounded":true,"stroke":"#CFCFCF","thickness":6.7}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,7.5],"width":1.525,"height":1.525,"rounded":true,"stroke":"#CFCFCF","thickness":6.7}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,1.5],"width":0.34,"height":0.34,"rounded":true,"fill":"#FFFFFF","thickness":0}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.09,1.5],"width":0,"height":0,"rounded":false,"stroke":"#FFFFFF","thickness":2,"text":"3","fontSize":16,"textStroke":"#FFFFFF","textStrokeWidth":3.4}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,7.5],"width":0.34,"height":0.34,"rounded":true,"fill":"#FFFFFF","thickness":0}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.09,7.5],"width":0,"height":0,"rounded":false,"stroke":"#FFFFFF","thickness":2,"text":"7","fontSize":16,"textStroke":"#FFFFFF","textStrokeWidth":3.4}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,1.5],"width":0.34,"height":0.34,"rounded":true,"fill":"#FFFFFF","thickness":0}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.09,1.5],"width":0,"height":0,"rounded":false,"stroke":"#FFFFFF","thickness":2,"text":"5","fontSize":16,"textStroke":"#FFFFFF","textStrokeWidth":3.4}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,7.5],"width":0.34,"height":0.34,"rounded":true,"fill":"#FFFFFF","thickness":0}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.09,7.5],"width":0,"height":0,"rounded":false,"stroke":"#FFFFFF","thickness":2,"text":"6","fontSize":16,"textStroke":"#FFFFFF","textStrokeWidth":3.4}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,1.5],"width":0.34,"height":0.34,"rounded":true,"fill":"#FFFFFF","thickness":0}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.09,1.5],"width":0,"height":0,"rounded":false,"stroke":"#FFFFFF","thickness":2,"text":"4","fontSize":16,"textStroke":"#FFFFFF","textStrokeWidth":3.4}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,7.5],"width":0.34,"height":0.34,"rounded":true,"fill":"#FFFFFF","thickness":0}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.09,7.5],"width":0,"height":0,"rounded":false,"stroke":"#FFFFFF","thickness":2,"text":"8","fontSize":16,"textStroke":"#FFFFFF","textStrokeWidth":3.4}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,1.5],"width":0.34,"height":0.34,"rounded":true,"fill":"#FFFFFF","thickness":0}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.09,1.5],"width":0,"height":0,"rounded":false,"stroke":"#FFFFFF","thickness":2,"text":"9","fontSize":16,"textStroke":"#FFFFFF","textStrokeWidth":3.4}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,7.5],"width":0.34,"height":0.34,"rounded":true,"fill":"#FFFFFF","thickness":0}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.09,7.5],"width":0,"height":0,"rounded":false,"stroke":"#FFFFFF","thickness":2,"text":"9","fontSize":16,"textStroke":"#FFFFFF","textStrokeWidth":3.4}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,1],"width":0.34,"height":0.34,"rounded":true,"fill":"#FFFFFF","thickness":0}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.59,1],"width":0,"height":0,"rounded":false,"stroke":"#FFFFFF","thickness":2,"text":"2","fontSize":16,"textStroke":"#FFFFFF","textStrokeWidth":3.4}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,2],"width":0.34,"height":0.34,"rounded":true,"fill":"#FFFFFF","thickness":0}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.59,2],"width":0,"height":0,"rounded":false,"stroke":"#FFFFFF","thickness":2,"text":"4","fontSize":16,"textStroke":"#FFFFFF","textStrokeWidth":3.4}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,7],"width":0.34,"height":0.34,"rounded":true,"fill":"#FFFFFF","thickness":0}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.59,7],"width":0,"height":0,"rounded":false,"stroke":"#FFFFFF","thickness":2,"text":"1","fontSize":16,"textStroke":"#FFFFFF","textStrokeWidth":3.4}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,8],"width":0.34,"height":0.34,"rounded":true,"fill":"#FFFFFF","thickness":0}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.59,8],"width":0,"height":0,"rounded":false,"stroke":"#FFFFFF","thickness":2,"text":"8","fontSize":16,"textStroke":"#FFFFFF","textStrokeWidth":3.4}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,1],"width":0.34,"height":0.34,"rounded":true,"fill":"#FFFFFF","thickness":0}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.59,1],"width":0,"height":0,"rounded":false,"stroke":"#FFFFFF","thickness":2,"text":"3","fontSize":16,"textStroke":"#FFFFFF","textStrokeWidth":3.4}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,2],"width":0.34,"height":0.34,"rounded":true,"fill":"#FFFFFF","thickness":0}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.59,2],"width":0,"height":0,"rounded":false,"stroke":"#FFFFFF","thickness":2,"text":"8","fontSize":16,"textStroke":"#FFFFFF","textStrokeWidth":3.4}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,7],"width":0.34,"height":0.34,"rounded":true,"fill":"#FFFFFF","thickness":0}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.59,7],"width":0,"height":0,"rounded":false,"stroke":"#FFFFFF","thickness":2,"text":"1","fontSize":16,"textStroke":"#FFFFFF","textStrokeWidth":3.4}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,8],"width":0.34,"height":0.34,"rounded":true,"fill":"#FFFFFF","thickness":0}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.59,8],"width":0,"height":0,"rounded":false,"stroke":"#FFFFFF","thickness":2,"text":"7","fontSize":16,"textStroke":"#FFFFFF","textStrokeWidth":3.4}}
```

Normal sudoku rules apply.

Along thermometers, digits must increase from the bulb end.

Digits in a wheel have to be placed in the same circular order in the four cells that are touched by the wheel. The wheels might have to be rotated to the correct position by 90°, 180°, or 270°.

Any two orthogonally adjacent cells cannot contain consecutive digits.
