---
format: open-rules
title: Atomium, Brussels
setter: Will Power
source: https://sudokupad.app/typdos3xpa
case: https://sudoku-sleuth.com/cases/atomium-brussels
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 78051152882d7bb4b821760afa167096
---

```rules
sudoku 9x9
cage-1: cage r6c4-r6c5-r6c6 total 10 connected true
cage-2: cage r2c4-r2c5-r2c6 total 11 connected true
cage-3: cage r8c4-r8c5-r8c6 total 15 connected true
thermo-1: thermo r4c7-r3c6-r2c5
thermo-2: thermo r4c3-r5c4-r6c5
thermo-3: thermo r8c5-r7c5-r6c5
thermo-4: thermo r4c5-r5c5-r6c5
thermo-5: thermo r4c5-r3c5-r2c5
thermo-6: thermo r4c7-r5c6-r6c5
thermo-7: thermo r4c7-r5c7-r6c7
thermo-8: thermo r8c5-r7c6-r6c7
thermo-9: thermo r8c5-r7c4-r6c3
thermo-10: thermo r4c3-r5c3-r6c3
thermo-11: thermo r4c3-r3c4-r2c5
thermo-12: thermo r9c3-r9c2-r9c1
thermo-13: thermo r8c2-r8c3-r7c3
thermo-14: thermo r7c2-r7c1-r8c1
thermo-15: thermo r1c9-r2c9-r2c8
thermo-16: thermo r1c1-r2c1-r2c2
kropki-1: kropki r5c9-r6c9 white
kropki-2: kropki r1c4-r2c4 white
arrow-1: arrow r9c7-r9c8-r9c9 bulb ["r9c5","r9c6"]
arrow-2: arrow r8c9-r7c9 bulb ["r8c8"]
arrow-3: arrow r7c7-r8c7 bulb ["r7c8"]
arrow-4: arrow r5c3-r4c3 bulb ["r6c3"]
arrow-5: arrow r7c4-r8c5 bulb ["r6c3"]
arrow-6: arrow r7c6-r8c5 bulb ["r6c7"]
arrow-7: arrow r5c7-r4c7 bulb ["r6c7"]
arrow-8: arrow r3c6-r4c7 bulb ["r2c5"]
arrow-9: arrow r3c5-r4c5 bulb ["r2c5"]
arrow-10: arrow r3c4-r4c3 bulb ["r2c5"]
arrow-11: arrow r5c4-r4c3 bulb ["r6c5"]
arrow-12: arrow r5c5-r4c5 bulb ["r6c5"]
arrow-13: arrow r5c6-r4c7 bulb ["r6c5"]
arrow-14: arrow r7c5-r8c5 bulb ["r6c5"]
```

```drawing
- {"id":"drawing-36","rules":[],"visual":{"kind":"line","points":[[5.5,4.5],[6.5,4.5],[7.5,4.5]],"color":"#FF7383","thickness":8,"rounded":true}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"line","points":[[5.5,4.5],[4.5,5.5],[3.5,6.5]],"color":"#FF7383","thickness":8,"rounded":true}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"line","points":[[5.5,4.5],[4.5,4.5],[3.5,4.5]],"color":"#FF7383","thickness":8,"rounded":true}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"line","points":[[5.5,4.5],[4.5,3.5],[3.5,2.5]],"color":"#FF7383","thickness":8,"rounded":true}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"line","points":[[1.5,4.5],[2.5,3.5],[3.5,2.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"line","points":[[1.5,4.5],[2.5,4.5],[3.5,4.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"line","points":[[1.5,4.5],[2.5,5.5],[3.5,6.5]],"color":"#78C9FF","thickness":8,"rounded":true}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"line","points":[[5.5,2.5],[4.5,2.5],[3.5,2.5]],"color":"#C77EFA","thickness":8,"rounded":true}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"line","points":[[5.5,2.5],[6.5,3.5],[7.5,4.5]],"color":"#C77EFA","thickness":8,"rounded":true}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"line","points":[[5.5,6.5],[6.5,5.5],[7.5,4.5]],"color":"#FFA666","thickness":8,"rounded":true}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"line","points":[[5.5,6.5],[4.5,6.5],[3.5,6.5]],"color":"#FFA666","thickness":8,"rounded":true}}
```

Normal Sudoku rules apply.

ARROWS- Numbers on arrows sum to the numbers in the arrow's circle or pill. The pill is read from left to right. Numbers do not repeat on arrows.

THERMOMETERS- Numbers on thermometers increase from the bulb end. There is an arrow and a thermo on all cube edges shown. SudokuPad does not show this very well.

KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage.

KROPKI PAIRS- Numbers with a white dot between them are consecutive. Not all possible dots are given.
