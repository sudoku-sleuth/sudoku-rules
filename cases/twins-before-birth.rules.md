---
format: open-rules
title: Twins, Before Birth
setter: Will Power
source: https://sudokupad.app/nkc2jbo82j
case: https://sudoku-sleuth.com/cases/twins-before-birth
library: https://rules.sudoku-sleuth.com/
status: read
exported: 9d36bea4c18049caa03e9e325c937d43
---

```rules
sudoku 9x9
cage-1: cage r9c4-r9c5-r9c6 total 21 connected true
cage-2: cage r2c4-r2c5-r2c6 total 20 connected true
cage-3: cage r5c1-r6c1 total 12 connected true
cage-4: cage r5c7-r6c7 total 8 connected true
cage-5: cage r3c1-r3c2-r3c3 total 21 connected true
cage-6: cage r3c7-r3c8-r3c9 total 17 connected true
thermo-1: thermo r5c2-r6c3-r7c4-r7c5-r7c6-r6c6-r6c5-r5c5
thermo-2: thermo r5c2-r6c3
thermo-3: thermo r5c2-r6c3-r5c4-r4c4-r3c3
kropki-1: kropki r4c4-r5c4 white
kropki-2: kropki r5c5-r5c6 white
kropki-3: kropki r2c6-r2c7 white
arrow-1: arrow r4c7-r3c6-r3c5-r3c4-r4c4-r4c5-r5c5 bulb ["r5c8","r6c8"]
arrow-2: arrow r4c7-r5c6-r6c6-r7c7 bulb ["r5c8","r6c8"]
renban-1: renban r2c3-r2c4-r2c5-r2c6-r2c7
renban-2: renban r9c3-r9c4-r9c5-r9c6-r9c7
renban-3: renban r4c2-r5c1-r6c1-r7c2-r8c2
renban-4: renban r3c8-r4c8-r5c9-r6c9-r7c8
anti-king
```

Normal Sudoku rules apply. ANTI-KING- Cells a chess king's move apart cannot be the same number.

THERMOMETERS- Numbers on thermometers increase from the bulb end.

ARROWS- Numbers on arrows sum to the number in the arrow's pill. The pill is read from top to bottom.

RENBAN- Numbers on purple lines are each a set of non-repeating, consecutive numbers, in any order.

KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage. KROPKI PAIRS- Numbers with a white dot betweeen them are consecutive. Not all possible dots are shown.
