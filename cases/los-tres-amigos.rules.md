---
format: open-rules
title: Los Tres Amigos
setter: Blobz
source: https://sudokupad.app/blobz/los-tres-amigos
case: https://sudoku-sleuth.com/cases/los-tres-amigos
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
exported: c2149c997d14b8ff0e34de2750a2f091
---

```rules
sudoku 9x9
cage-1: cage r2c2-r2c3-r2c4-r3c2-r3c3-r3c4-r4c2-r4c3-r4c4 connected true
cage-2: cage r6c6-r6c7-r6c8-r7c6-r7c7-r7c8-r8c6-r8c7-r8c8 connected true
cage-3: cage r8c1-r9c1 total 8 connected true
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,1.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#00000026","thickness":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,2.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#00000026","thickness":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,8.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#00000026","thickness":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,7.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#00000026","thickness":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,4.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#00000026","thickness":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,4.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#00000026","thickness":0}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,3.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#00000026","thickness":0}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,5.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#00000026","thickness":0}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,0.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#00000026","thickness":0}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,1.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#00000026","thickness":0}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,2.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#00000026","thickness":0}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,0.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#00000026","thickness":0}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,5.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#00000026","thickness":0}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,3.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#00000026","thickness":0}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,8.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#00000026","thickness":0}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,6.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#00000026","thickness":0}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,7.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#00000026","thickness":0}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,6.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#00000026","thickness":0}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[2.5,0.5],[3.5,0.5],[4.5,1.5],[4.5,3.5],[3.5,4.5],[1.5,4.5],[0.5,3.5],[0.5,1.5],[1.5,0.5],[2.5,0.5]],"color":"#c9c9c9ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[5.5,8.5],[7.5,8.5],[8.5,7.5],[8.5,5.5],[7.5,4.5],[5.5,4.5],[4.5,5.5],[4.5,7.5],[5.5,8.5]],"color":"#c7c7c7ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[2.5,3.5],[2.5,5.5],[3.5,6.5],[5.5,6.5],[6.5,5.5],[6.5,3.5],[5.5,2.5],[3.5,2.5],[2.5,3.5]],"color":"#c3c3c3ff","thickness":9.6,"rounded":true}}
```

Normal sudoku rules apply.

Digits in cages do not repeat, and sum to the small clue, if given.

Grey circles contain 1 or 9.

One grey loop is Entropic, one is German Whisper, and one is Region Sum; the solver must determine which is which.

Entropic: every 3 cells along the line contain one low digit {123}, one middly digit {456}, and one high digit {789}.

German Whisper: adjacent cells along the line differ by at least 5.

Region Sum: box borders divide the line into segments with the same sum.
