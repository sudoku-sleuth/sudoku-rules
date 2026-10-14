---
format: open-rules
title: Symmetrically Asymmetrical?
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/symmetrically-asymmetrical
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r2c2=8 r2c4=1 r2c8=2 r4c8=7 r7c2=7 r8c2=2 r8c6=7 r8c8=6
exported: 7ca56cb44742eaadd672644f8f4a83f3
---

```rules
sudoku 9x9
kropki-1: kropki r3c3-r4c3 white
kropki-2: kropki r3c6-r3c7 white
kropki-3: kropki r6c7-r7c7 white
kropki-4: kropki r7c3-r7c4 white
kropki-5: kropki r3c7-r4c7 white
kropki-6: kropki r7c7-r7c8 white
kropki-7: kropki r6c3-r7c3 white
kropki-8: kropki r3c2-r3c3 white
kropki-9: kropki r9c1-r9c2 white
whispers-1: whispers r7c2-r6c2-r5c2-r4c2-r3c3-r4c4-r5c3 gap 4
whispers-2: whispers r5c3-r5c2 gap 4
whispers-3: whispers r2c3-r2c4-r2c5-r2c6-r3c7-r4c6-r3c5 gap 4
whispers-4: whispers r3c5-r2c5 gap 4
whispers-5: whispers r3c8-r4c8-r5c8-r6c8-r7c7-r6c6-r5c7 gap 4
whispers-6: whispers r5c7-r5c8 gap 4
whispers-7: whispers r8c7-r8c6-r8c5-r8c4-r7c3-r6c4-r7c5 gap 4
whispers-8: whispers r7c5-r8c5 gap 4
parity-cells r4c3-r3c6-r6c7-r7c4 parity "even"
```

```drawing
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[3.5,5.5],[4.5,4.5],[5.5,3.5]],"color":"#91F0FF","thickness":8,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[3.5,3.5],[4.5,4.5],[5.5,5.5]],"color":"#91F0FF","thickness":8,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[4.5,3.5],[4.5,4.5],[4.5,5.5]],"color":"#91F0FF","thickness":8,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[3.5,4.5],[4.5,4.5],[5.5,4.5]],"color":"#91F0FF","thickness":8,"rounded":true}}
```

Normal Sudoku rules apply. DUTCH WHISPERS- Numbers on red lines are at least 4 apart from their neighbors on the line. Numbers may repeat on red lines, if other rules allow. KROPKI PAIRS- Numbers with a white dot between them are consecutive. Not all possible dots are given. Cells with a gray square contain an even number. All numbers on gray squares are different than one another. Numbers on the four straight blue lines in box 5 each sum to 15.
