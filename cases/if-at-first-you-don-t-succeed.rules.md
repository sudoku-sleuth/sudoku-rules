---
format: open-rules
title: "If,At First,You Don't Succeed:"
setter: Will Power
source: https://sudokupad.app/7f7lkj19w7
case: https://sudoku-sleuth.com/cases/if-at-first-you-don-t-succeed
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r1c1-r2c1 connected true
cage-2: cage r2c9-r3c9 connected true
cage-3: cage r4c6-r5c6 connected true
cage-4: cage r5c5-r6c5 connected true
cage-5: cage r5c4-r6c4 connected true
cage-6: cage r4c4-r4c5 connected true
cage-7: cage r4c1-r5c1 connected true
cage-8: cage r7c4-r8c4 connected true
cage-9: cage r8c7-r9c7 connected true
cage-10: cage r5c7-r5c8 connected true
thermo-1: thermo r6c5-r7c5-r8c5-r9c6
thermo-2: thermo r6c5-r7c5-r8c5-r9c4
thermo-3: thermo r6c5-r7c5-r6c4
thermo-4: thermo r5c4-r5c3-r5c2-r6c1
thermo-5: thermo r5c4-r5c3-r5c2-r4c1
thermo-6: thermo r5c4-r5c3-r4c4
thermo-7: thermo r5c4-r5c3-r6c4
thermo-8: thermo r4c5-r3c5-r2c5-r1c4
thermo-9: thermo r4c5-r3c5-r2c5-r1c6
thermo-10: thermo r4c5-r3c5-r4c6
thermo-11: thermo r4c5-r3c5-r4c4
thermo-12: thermo r5c6-r5c7-r5c8-r4c9
thermo-13: thermo r5c6-r5c7-r5c8-r6c9
thermo-14: thermo r5c6-r5c7-r4c6
thermo-15: thermo r5c6-r5c7-r6c6
thermo-16: thermo r6c5-r7c5
thermo-17: thermo r9c9-r8c8-r7c8
thermo-18: thermo r9c9-r8c8-r8c7
thermo-19: thermo r9c9-r8c8-r9c8
thermo-20: thermo r9c9-r8c8-r8c9
thermo-21: thermo r1c9-r2c8-r3c8
thermo-22: thermo r1c9-r2c8-r2c7
thermo-23: thermo r1c9-r2c8-r1c8
thermo-24: thermo r1c9-r2c8-r2c9
thermo-25: thermo r1c1-r2c2-r3c2
thermo-26: thermo r1c1-r2c2-r2c3
thermo-27: thermo r1c1-r2c2-r1c2
thermo-28: thermo r1c1-r2c2-r2c1
thermo-29: thermo r7c2-r8c2-r9c1
thermo-30: thermo r7c2-r8c2-r9c3
thermo-31: thermo r7c2-r8c2-r7c1
thermo-32: thermo r7c2-r8c2-r7c3
thermo-33: thermo r6c5-r7c5-r6c6
```

```drawing
- {"id":"drawing-77","rules":[],"visual":{"kind":"line","points":[[3.5,0.5],[4.5,1.5],[4.5,2.5],[3.5,3.5]],"color":"#C77EFA","thickness":8,"rounded":true}}
- {"id":"drawing-78","rules":[],"visual":{"kind":"line","points":[[5.5,3.5],[4.5,2.5]],"color":"#C77EFA","thickness":8,"rounded":true}}
- {"id":"drawing-79","rules":[],"visual":{"kind":"line","points":[[4.5,1.5],[5.5,0.5]],"color":"#C77EFA","thickness":8,"rounded":true}}
- {"id":"drawing-80","rules":[],"visual":{"kind":"line","points":[[4.5,5.5],[4.5,6.5],[4.5,7.5],[3.5,8.5]],"color":"#C77EFA","thickness":8,"rounded":true}}
- {"id":"drawing-81","rules":[],"visual":{"kind":"line","points":[[5.5,8.5],[4.5,7.5]],"color":"#C77EFA","thickness":8,"rounded":true}}
- {"id":"drawing-82","rules":[],"visual":{"kind":"line","points":[[4.5,6.5],[5.5,5.5]],"color":"#C77EFA","thickness":8,"rounded":true}}
- {"id":"drawing-83","rules":[],"visual":{"kind":"line","points":[[4.5,6.5],[3.5,5.5]],"color":"#C77EFA","thickness":8,"rounded":true}}
- {"id":"drawing-84","rules":[],"visual":{"kind":"line","points":[[3.5,4.5],[2.5,4.5],[1.5,4.5],[0.5,3.5]],"color":"#9EFAF8","thickness":8,"rounded":true}}
- {"id":"drawing-85","rules":[],"visual":{"kind":"line","points":[[1.5,4.5],[0.5,5.5]],"color":"#9EFAF8","thickness":8,"rounded":true}}
- {"id":"drawing-86","rules":[],"visual":{"kind":"line","points":[[3.5,5.5],[2.5,4.5],[3.5,3.5]],"color":"#9EFAF8","thickness":8,"rounded":true}}
- {"id":"drawing-87","rules":[],"visual":{"kind":"line","points":[[5.5,4.5],[6.5,4.5],[7.5,4.5],[8.5,3.5]],"color":"#9EFAF8","thickness":8,"rounded":true}}
- {"id":"drawing-88","rules":[],"visual":{"kind":"line","points":[[8.5,5.5],[7.5,4.5]],"color":"#9EFAF8","thickness":8,"rounded":true}}
- {"id":"drawing-89","rules":[],"visual":{"kind":"line","points":[[5.5,3.5],[6.5,4.5],[5.5,5.5]],"color":"#9EFAF8","thickness":8,"rounded":true}}
- {"id":"drawing-90","rules":[],"visual":{"kind":"line","points":[[4.5,2.5],[4.5,3.5]],"color":"#C77EFA","thickness":8,"rounded":true}}
- {"id":"drawing-91","rules":[],"visual":{"kind":"line","points":[[0.5,0.5],[1.5,1.5],[1.5,2.5]],"color":"#FFA666","thickness":8,"rounded":true}}
- {"id":"drawing-92","rules":[],"visual":{"kind":"line","points":[[0.5,1.5],[1.5,1.5],[2.5,1.5]],"color":"#FFA666","thickness":8,"rounded":true}}
- {"id":"drawing-93","rules":[],"visual":{"kind":"line","points":[[1.5,0.5],[1.5,1.5],[1.5,2.5]],"color":"#FFA666","thickness":8,"rounded":true}}
- {"id":"drawing-94","rules":[],"visual":{"kind":"line","points":[[8.5,8.5],[7.5,7.5],[6.5,7.5]],"color":"#FFA666","thickness":8,"rounded":true}}
- {"id":"drawing-95","rules":[],"visual":{"kind":"line","points":[[7.5,6.5],[7.5,7.5],[7.5,8.5]],"color":"#FFA666","thickness":8,"rounded":true}}
- {"id":"drawing-96","rules":[],"visual":{"kind":"line","points":[[8.5,7.5],[7.5,7.5],[6.5,7.5]],"color":"#FFA666","thickness":8,"rounded":true}}
- {"id":"drawing-97","rules":[],"visual":{"kind":"line","points":[[6.5,1.5],[7.5,1.5],[8.5,2.5]],"color":"#FF7383","thickness":8,"rounded":true}}
- {"id":"drawing-98","rules":[],"visual":{"kind":"line","points":[[6.5,2.5],[7.5,1.5],[8.5,0.5]],"color":"#FF7383","thickness":8,"rounded":true}}
- {"id":"drawing-99","rules":[],"visual":{"kind":"line","points":[[6.5,0.5],[7.5,1.5]],"color":"#FF7383","thickness":8,"rounded":true}}
- {"id":"drawing-100","rules":[],"visual":{"kind":"line","points":[[0.5,8.5],[1.5,7.5],[2.5,7.5]],"color":"#FF7383","thickness":8,"rounded":true}}
- {"id":"drawing-101","rules":[],"visual":{"kind":"line","points":[[1.5,6.5],[1.5,7.5],[1.5,8.5]],"color":"#FF7383","thickness":8,"rounded":true}}
- {"id":"drawing-102","rules":[],"visual":{"kind":"line","points":[[0.5,7.5],[1.5,7.5]],"color":"#FF7383","thickness":8,"rounded":true}}
```

SKYDIVING IS NOT FOR YOU. Normal Sudoku rules apply. THERMOMETERS- Numbers on thermometers increase from the bulb end. Each skydiver is a different thermometer, ending where their hands meet. KILLER CAGES- Numbers in cages sum to 10. Colors are used only to differentiate skydivers.
