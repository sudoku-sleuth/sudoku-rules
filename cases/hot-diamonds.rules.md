---
format: open-rules
title: Hot Diamonds
setter: Dr Logic
source: https://sudokupad.app/vkexgltc8n
case: https://sudoku-sleuth.com/cases/hot-diamonds
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
whispers-1: whispers r1c2-r2c2-r3c2 gap 5
whispers-2: whispers r6c4-r5c4-r4c4-r4c5-r4c6 gap 5
whispers-3: whispers r1c8-r2c8-r3c8 gap 5
whispers-4: whispers r7c2-r8c2-r9c2 gap 5
whispers-5: whispers r9c7-r8c8-r7c9 gap 5
whispers-6: whispers r5c1-r5c2 gap 5
whispers-7: whispers r8c4-r8c5-r8c6 gap 5
whispers-8: whispers r4c5-r4c4-r5c4 gap 5
nabner-1: nabner r4c4-r5c5-r6c6 distinct true
nabner-2: nabner r7c9-r7c8-r8c7-r9c7 distinct true
nabner-3: nabner r7c2-r8c1-r9c2-r8c3 distinct true
nabner-4: nabner r1c8-r2c7-r3c8-r2c9 distinct true
nabner-5: nabner r1c2-r2c3-r3c2-r2c1 distinct true
renban-1: renban r6c5-r5c5-r5c6
renban-2: renban r8c7-r8c8-r7c8
renban-3: renban r1c5-r2c5
renban-4: renban r2c8-r2c9
renban-5: renban r8c2-r8c3
renban-6: renban r2c3-r2c2-r2c1
renban-7: renban r9c1-r9c2
nabner-6: nabner r9c8-r9c9-r8c9 distinct true
nabner-7: nabner r3c3-r4c3-r3c4 distinct true
nabner-8: nabner r6c7-r7c7-r7c6 distinct true
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,3.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#ded971ff","thickness":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,8.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#ded971ff","thickness":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,2.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#ded971ff","thickness":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,6.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#ded971ff","thickness":0}}
```

Normal sudoku rules apply.

Adjacent digits along a green 'german whispers' line differ by at least 5.

Digits along a gold 'nabner' line form a set of non-repeating digits where no two digits are consecutive.

Digits along a purple 'renban' line form a set of non-repeating consecutive digits, in any order.

Digits along a gold thermo rise in size from the bulb end. Treat every gold thermo as a nabner line also. For clarification, each thermo is also a 3-cell nabner line.
