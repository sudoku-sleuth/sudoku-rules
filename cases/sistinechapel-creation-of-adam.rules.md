---
format: open-rules
title: SistineChapel:Creation of Adam
setter: Will Power
source: https://sudokupad.app/uhlnxe3ipg
case: https://sudoku-sleuth.com/cases/sistinechapel-creation-of-adam
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r8c9-r9c9 total 10 connected true
cage-2: cage r1c4-r1c5 total 10 connected true
cage-3: cage r2c6-r3c6 total 10 connected true
cage-4: cage r1c3-r2c3 total 10 connected true
cage-5: cage r5c1-r6c1 total 12 connected true
cage-6: cage r5c3-r6c3 total 11 connected true
thermo-1: thermo r4c2-r5c2-r6c2-r7c3-r8c4-r8c5-r8c6
thermo-2: thermo r4c2-r5c2-r5c1-r6c1
thermo-3: thermo r4c2-r5c2-r5c3-r4c4
thermo-4: thermo r4c2-r5c2-r6c2-r7c3-r6c4-r7c4-r8c4
thermo-5: thermo r2c7-r3c7-r4c6-r4c5-r4c4
thermo-6: thermo r2c7-r3c7-r3c8-r3c9
thermo-7: thermo r2c7-r3c7-r4c8-r5c9
thermo-8: thermo r5c4-r6c5-r7c6-r8c7-r9c8
thermo-9: thermo r6c8-r6c7-r6c6-r5c5
thermo-10: thermo r3c5-r2c5-r1c6-r1c7-r1c8
thermo-11: thermo r2c1-r2c2-r3c3
```

```drawing
- {"id":"drawing-29","rules":[],"visual":{"kind":"line","points":[[1.5,0.5],[1.5,1.5],[2.5,2.5]],"color":"#94D1FF","thickness":8,"rounded":true}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"line","points":[[4.5,3.5],[5.5,4.5],[6.5,5.5],[7.5,6.5],[8.5,7.5]],"color":"#94D1FF","thickness":8,"rounded":true}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"line","points":[[3.5,1.5],[4.5,1.5],[4.5,0.5],[5.5,0.5]],"color":"#E0C076","thickness":8,"rounded":true}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"line","points":[[3.5,1.5],[4.5,1.5],[4.5,2.5],[3.5,3.5]],"color":"#E0C076","thickness":8,"rounded":true}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"line","points":[[3.5,1.5],[4.5,1.5],[5.5,1.5],[6.5,2.5],[7.5,3.5],[7.5,4.5],[7.5,5.5]],"color":"#E0C076","thickness":8,"rounded":true}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"line","points":[[6.5,2.5],[5.5,3.5],[6.5,3.5],[7.5,3.5]],"color":"#E0C076","thickness":8,"rounded":true}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"line","points":[[1.5,6.5],[2.5,6.5],[3.5,5.5],[3.5,4.5],[3.5,3.5]],"color":"#FAD646","thickness":8,"rounded":true}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"line","points":[[1.5,6.5],[2.5,6.5],[2.5,7.5],[2.5,8.5]],"color":"#FAD646","thickness":8,"rounded":true}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"line","points":[[1.5,6.5],[2.5,6.5],[3.5,7.5],[4.5,8.5]],"color":"#FAD646","thickness":8,"rounded":true}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"line","points":[[2.5,4.5],[1.5,4.5],[0.5,5.5],[0.5,6.5],[0.5,7.5]],"color":"#BF7917","thickness":8,"rounded":true}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"line","points":[[5.5,7.5],[5.5,6.5],[5.5,5.5],[4.5,4.5]],"color":"#BF7917","thickness":8,"rounded":true}}
```

Normal Sudoku rules apply. THERMOMETERS- Numbers on thermometers increase from the bulb end. Two different thermometers end at row 4 column 4. KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage.
