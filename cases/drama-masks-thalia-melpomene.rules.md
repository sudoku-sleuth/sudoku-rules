---
format: open-rules
title: Drama Masks Thalia & Melpomene
setter: Will Power
source: https://sudokupad.app/gw5pnvngce
case: https://sudoku-sleuth.com/cases/drama-masks-thalia-melpomene
library: https://rules.sudoku-sleuth.com/
status: read
exported: 72a61304fdb3e4dc68a0cc2f9e1babf8
---

```rules
sudoku 9x9
cage-1: cage r8c4-r9c4 total 10 connected true
cage-2: cage r1c3-r2c1-r2c2-r2c3 total 11 connected true
thermo-1: thermo r5c6-r6c6-r7c6-r8c7-r9c7
thermo-2: thermo r3c6-r4c5-r5c5-r6c5
thermo-3: thermo r3c7-r4c8-r5c9-r6c9
thermo-4: thermo r9c5-r8c6-r7c5
thermo-5: thermo r1c7-r2c7-r2c8-r2c9
thermo-6: thermo r6c8-r7c8-r8c8-r8c7-r9c7
kropki-1: kropki r3c3-r4c3 white
kropki-2: kropki r6c2-r6c3 white
kropki-3: kropki r3c7-r4c7 black
kropki-4: kropki r6c8-r7c8 black
arrow-1: arrow r6c4-r7c4-r8c3-r9c3 bulb ["r5c4"]
arrow-2: arrow r4c5-r5c5-r6c5 bulb ["r3c4"]
arrow-3: arrow r8c4-r9c5 bulb ["r7c5"]
arrow-4: arrow r2c1-r3c2 bulb ["r1c2"]
arrow-5: arrow r4c2-r5c1-r6c1 bulb ["r3c3"]
arrow-6: arrow r7c2-r8c2-r8c3 bulb ["r6c2"]
```

Normal Sudoku rules apply. ARROWS (Thalia: Comedy- faces left)- Numbers on arrows sum to the number in the arrow's circle. Numbers may repeat on arrows, if other rules allow. THERMOMETERS (Melpomene: Tragedy- faces right)- Numbers on thermometers strictly increase from the bulb end. KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage. KROPKI PAIRS- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given.
